import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI, APISale } from '../../../api/velora';
import SalesTable from './SalesTable';

interface Item {
  id: string;
  itemCode: string;
  itemName: string;
  tax: number;
  purchaseRate: number;
  sellingRate: number;
  mrp: number;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

interface SaleItem {
  id: string;
  itemCode: string;
  itemName: string;
  quantity: number;
  sellingPrice: number;
  tax: number;
  discount: number;
  total: number;
}

interface Sale {
  id: string;
  invoiceNo: string;
  date: string;
  customerPhone: string;
  customerName: string;
  items: SaleItem[];
  subtotal: number;
  totalTax: number;
  grandTotal: number;
}



const SalesEntry: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [apiSales, setApiSales] = useState<APISale[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [itemsData, customersData, salesData] = await Promise.all([
        veloraAPI.getItems(),
        veloraAPI.getCustomers(),
        veloraAPI.getSales()
      ]);
      setItems(itemsData);
      setCustomers(customersData);
      setApiSales(salesData);
    } catch (error) {
      toast.error('Failed to fetch data');
    }
  };

  const [sales, setSales] = useState<Sale[]>([]);
  const [open, setOpen] = useState(false);
  const [currentSale, setCurrentSale] = useState<Partial<Sale>>({
    invoiceNo: `INV${String(sales.length + 1).padStart(4, '0')}`,
    date: new Date().toISOString().split('T')[0],
    customerPhone: '',
    customerName: '',
    items: [],
    subtotal: 0,
    totalTax: 0,
    grandTotal: 0,
  });
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);

  const handleOpen = () => {
    setCurrentSale({
      invoiceNo: `INV${String(sales.length + 1).padStart(4, '0')}`,
      date: new Date().toISOString().split('T')[0],
      customerPhone: '',
      customerName: '',
      items: [],
      subtotal: 0,
      totalTax: 0,
      grandTotal: 0,
    });
    setSaleItems([]);
    setSelectedCustomer(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCustomerSelect = (customer: Customer | null) => {
    setSelectedCustomer(customer);
    if (customer) {
      setCurrentSale(prev => ({
        ...prev,
        customerPhone: customer.phone,
        customerName: customer.name,
      }));
    }
  };

  const addSaleItem = () => {
    const newItem: SaleItem = {
      id: Date.now().toString(),
      itemCode: '',
      itemName: '',
      quantity: 1,
      sellingPrice: 0,
      tax: 0,
      discount: 0,
      total: 0,
    };
    setSaleItems([...saleItems, newItem]);
  };

  const updateSaleItem = (id: string, field: keyof SaleItem, value: any) => {
    setSaleItems(prev => prev.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Auto-fetch item details when item code is selected
        if (field === 'itemCode') {
          const selectedItem = items.find(i => i.itemCode === value);
          if (selectedItem) {
            updatedItem.itemName = selectedItem.itemName;
            updatedItem.sellingPrice = selectedItem.sellingRate;
            updatedItem.tax = selectedItem.tax;
          }
        }
        
        // Calculate total
        const subtotal = updatedItem.quantity * updatedItem.sellingPrice;
        const discountAmount = (subtotal * updatedItem.discount) / 100;
        const taxableAmount = subtotal - discountAmount;
        const taxAmount = (taxableAmount * updatedItem.tax) / 100;
        updatedItem.total = taxableAmount + taxAmount;
        
        return updatedItem;
      }
      return item;
    }));
  };

  const removeSaleItem = (id: string) => {
    setSaleItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    if (!saleItems.length) {
      return { subtotal: 0, totalTax: 0, grandTotal: 0 };
    }
    
    const subtotal = saleItems.reduce((sum, item) => sum + ((item.quantity || 0) * (item.sellingPrice || 0)), 0);
    const totalDiscount = saleItems.reduce((sum, item) => sum + (((item.quantity || 0) * (item.sellingPrice || 0) * (item.discount || 0)) / 100), 0);
    const taxableAmount = subtotal - totalDiscount;
    const totalTax = saleItems.reduce((sum, item) => {
      const itemSubtotal = (item.quantity || 0) * (item.sellingPrice || 0);
      const itemDiscount = (itemSubtotal * (item.discount || 0)) / 100;
      const itemTaxable = itemSubtotal - itemDiscount;
      return sum + ((itemTaxable * (item.tax || 0)) / 100);
    }, 0);
    const grandTotal = taxableAmount + totalTax;

    return { subtotal, totalTax, grandTotal };
  };

  const handleSave = async () => {
    if (!selectedCustomer || saleItems.length === 0) {
      toast.error('Please select customer and add items');
      return;
    }

    setLoading(true);
    try {
      const totals = calculateTotals();
      const saleData = {
        customerId: selectedCustomer.id,
        items: saleItems.map(item => {
          const foundItem = items.find(i => i.itemCode === item.itemCode);
          if (!foundItem?.id) {
            throw new Error(`Item not found: ${item.itemCode}`);
          }
          return {
            itemId: foundItem.id,
            quantity: Number(item.quantity),
            discount: Number(item.discount)
          };
        }),
        totalAmount: Number((totals.grandTotal || 0).toFixed(2))
      };

      console.log('Sale Data:', JSON.stringify(saleData, null, 2));
      await veloraAPI.createSale(saleData);
      toast.success('Sale created successfully');
      
      const newSale: Sale = {
        id: Date.now().toString(),
        invoiceNo: currentSale.invoiceNo!,
        date: currentSale.date!,
        customerPhone: currentSale.customerPhone!,
        customerName: currentSale.customerName!,
        items: saleItems,
        subtotal: totals.subtotal,
        totalTax: totals.totalTax,
        grandTotal: totals.grandTotal,
      };

      setSales([...sales, newSale]);
      fetchData(); // Refresh sales data
      handleClose();
    } catch (error: any) {
      console.error('Sale creation error:', error);
      console.error('Error response:', error.response?.data);
      toast.error(`Failed to create sale: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadInvoice = (saleId: string) => {
    // TODO: Implement invoice download functionality
    toast.info('Invoice download feature coming soon!');
  };

  const totals = calculateTotals();

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Sales Entry</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Button variant="primary" onClick={handleOpen}>
            <i className="fe fe-plus me-2"></i>New Sale
          </Button>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <SalesTable 
            sales={apiSales} 
            onDownloadInvoice={handleDownloadInvoice}
          />
        </Card.Body>
      </Card>

      <Modal show={open} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fe fe-file-text me-2"></i>New Sales Entry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg={6} md={12} className="mb-3">
                <Form.Label>Invoice No</Form.Label>
                <Form.Control
                  type="text"
                  value={currentSale.invoiceNo}
                  disabled
                />
              </Col>
              <Col lg={6} md={12} className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={currentSale.date}
                  onChange={(e) => setCurrentSale(prev => ({ ...prev, date: e.target.value }))}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Customer</Form.Label>
                <Form.Select
                  value={selectedCustomer?.id || ''}
                  onChange={(e) => {
                    const customer = customers.find(c => c.id === e.target.value);
                    handleCustomerSelect(customer || null);
                  }}
                >
                  <option value="">Select Customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.phone} - {customer.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form>

          <hr />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6>Items</h6>
            <Button variant="primary" size="sm" onClick={addSaleItem}>
              <i className="fe fe-plus me-1"></i>Add Item
            </Button>
          </div>

          <div className="table-responsive mb-3">
            <Table className="table table-sm">
              <thead>
                <tr>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Discount %</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {saleItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Form.Select
                        size="sm"
                        value={item.itemCode}
                        onChange={(e) => updateSaleItem(item.id, 'itemCode', e.target.value)}
                      >
                        <option value="">Select Item</option>
                        {items.map((item) => (
                          <option key={item.itemCode} value={item.itemCode}>
                            {item.itemCode} - {item.itemName}
                          </option>
                        ))}
                      </Form.Select>
                    </td>
                    <td>{item.itemName}</td>
                    <td>
                      <Form.Control
                        size="sm"
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateSaleItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                        style={{ width: '80px' }}
                      />
                    </td>
                    <td>₹{item.sellingPrice}</td>
                    <td>
                      <Form.Control
                        size="sm"
                        type="number"
                        value={item.discount}
                        onChange={(e) => updateSaleItem(item.id, 'discount', parseFloat(e.target.value) || 0)}
                        style={{ width: '80px' }}
                      />
                    </td>
                    <td>₹{item.total.toFixed(2)}</td>
                    <td>
                      <Button size="sm" variant="danger" onClick={() => removeSaleItem(item.id)}>
                        <i className="fe fe-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <Row className="justify-content-end">
            <Col lg={4} md={6} sm={12}>
              <Card className="custom-card">
                <Card.Body>
                  <p className="mb-1">Subtotal: ₹{totals.subtotal.toFixed(2)}</p>
                  <p className="mb-1">Tax: ₹{totals.totalTax.toFixed(2)}</p>
                  <hr />
                  <h6>Grand Total: ₹{totals.grandTotal.toFixed(2)}</h6>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave} disabled={saleItems.length === 0 || loading}>
            {loading ? 'Saving...' : 'Save Invoice'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SalesEntry;
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table, Badge } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI, APISale } from '../../../api/velora';
import './EcommerceSalesEntry.scss';

interface Item {
  id: string;
  itemCode: string;
  itemName: string;
  tax: number;
  purchaseRate: number;
  sellingRate: number;
  mrp: number;
  imageUrl?: string;
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

const EcommerceSalesEntry: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [itemsData, customersData] = await Promise.all([
        veloraAPI.getItems(),
        veloraAPI.getCustomers()
      ]);
      setItems(Array.isArray(itemsData) ? itemsData : []);
      setCustomers(Array.isArray(customersData) ? customersData : []);
    } catch (error) {
      toast.error('Failed to fetch data');
    }
  };

  const addToCart = (item: Item) => {
    const existingItem = saleItems.find(si => si.itemCode === item.itemCode);
    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      const newSaleItem: SaleItem = {
        id: Date.now().toString(),
        itemCode: item.itemCode,
        itemName: item.itemName,
        quantity: 1,
        sellingPrice: item.sellingRate,
        tax: item.tax,
        discount: 0,
        total: item.sellingRate + (item.sellingRate * item.tax / 100),
      };
      setSaleItems(prev => [...prev, newSaleItem]);
      // toast.success(`${item.itemName} added to cart`);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setSaleItems(prev => prev.map(item => {
      if (item.id === id) {
        const subtotal = quantity * item.sellingPrice;
        const discountAmount = (subtotal * item.discount) / 100;
        const taxableAmount = subtotal - discountAmount;
        const taxAmount = (taxableAmount * item.tax) / 100;
        return { ...item, quantity, total: taxableAmount + taxAmount };
      }
      return item;
    }));
  };

  const updateDiscount = (id: string, discount: number) => {
    setSaleItems(prev => prev.map(item => {
      if (item.id === id) {
        const subtotal = item.quantity * item.sellingPrice;
        const discountAmount = (subtotal * discount) / 100;
        const taxableAmount = subtotal - discountAmount;
        const taxAmount = (taxableAmount * item.tax) / 100;
        return { ...item, discount, total: taxableAmount + taxAmount };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setSaleItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = saleItems.reduce((sum, item) => sum + (item.quantity * item.sellingPrice), 0);
    const totalDiscount = saleItems.reduce((sum, item) => sum + ((item.quantity * item.sellingPrice * item.discount) / 100), 0);
    const taxableAmount = subtotal - totalDiscount;
    const totalTax = saleItems.reduce((sum, item) => {
      const itemSubtotal = item.quantity * item.sellingPrice;
      const itemDiscount = (itemSubtotal * item.discount) / 100;
      const itemTaxable = itemSubtotal - itemDiscount;
      return sum + ((itemTaxable * item.tax) / 100);
    }, 0);
    const grandTotal = taxableAmount + totalTax;
    return { subtotal, totalDiscount, totalTax, grandTotal };
  };

  const handleCheckout = async () => {
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
          return {
            itemId: foundItem!.id,
            quantity: Number(item.quantity),
            discount: Number(item.discount)
          };
        }),
        totalAmount: Number(totals.grandTotal.toFixed(2))
      };

      await veloraAPI.createSale(saleData);
      toast.success('Sale completed successfully');
      setSaleItems([]);
      setSelectedCustomer(null);
      setShowCart(false);
    } catch (error: any) {
      toast.error(`Failed to complete sale: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const totals = calculateTotals();
  const cartItemCount = saleItems.reduce((sum, item) => sum + item.quantity, 0);

  const generateInvoiceText = () => {
    const invoiceDate = new Date().toLocaleDateString();
    let invoice = `INVOICE\n`;
    invoice += `Date: ${invoiceDate}\n`;
    invoice += `Customer: ${selectedCustomer?.name || 'N/A'} (${selectedCustomer?.phone || 'N/A'})\n\n`;
    invoice += `ITEMS:\n`;
    invoice += `${'Item'.padEnd(20)} ${'Qty'.padEnd(5)} ${'Price'.padEnd(10)} ${'Total'.padEnd(10)}\n`;
    invoice += `${'-'.repeat(50)}\n`;
    
    saleItems.forEach(item => {
      invoice += `${item.itemName.padEnd(20)} ${item.quantity.toString().padEnd(5)} ${('₹' + item.sellingPrice).padEnd(10)} ${('₹' + item.total.toFixed(2)).padEnd(10)}\n`;
    });
    
    invoice += `${'-'.repeat(50)}\n`;
    invoice += `Subtotal: ₹${totals.subtotal.toFixed(2)}\n`;
    invoice += `Discount: -₹${totals.totalDiscount.toFixed(2)}\n`;
    invoice += `Tax: ₹${totals.totalTax.toFixed(2)}\n`;
    invoice += `TOTAL: ₹${totals.grandTotal.toFixed(2)}\n`;
    
    return invoice;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.customer-dropdown-container')) {
        setShowCustomerDropdown(false);
      }
    };

    if (showCustomerDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCustomerDropdown]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body * { visibility: hidden; }
        .invoice-summary-card, .invoice-summary-card * { visibility: visible; }
        .invoice-summary-card { position: absolute; left: 0; top: 0; width: 100%; }
        .btn { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="container-fluid">
      <Row>
        <Col lg={8}>
          <div className="page-header d-flex justify-content-between align-items-center mb-3">
            <h4 className="page-title mb-0">E-commerce Sales</h4>
          </div>

          <Card className="mb-3">
            <Card.Body>
              <Form.Label>Select Customer</Form.Label>
          <div className="position-relative customer-dropdown-container">
            <div className="input-group">
              <Form.Control
                type="text"
                placeholder="Search customer by name or phone"
                value={customerSearch}
                onChange={(e) => {
                  const value = e.target.value;
                  setCustomerSearch(value);
                  setShowCustomerDropdown(value.length > 0);
                  if (value === '') {
                    setSelectedCustomer(null);
                  }
                }}
                onFocus={() => {
                  if (selectedCustomer) {
                    setCustomerSearch('');
                    setSelectedCustomer(null);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const filteredCustomers = customers.filter(customer => 
                      customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
                      customer.phone.includes(customerSearch)
                    );
                    if (filteredCustomers.length > 0) {
                      setSelectedCustomer(filteredCustomers[0]);
                      setCustomerSearch(`${filteredCustomers[0].phone} - ${filteredCustomers[0].name}`);
                      setShowCustomerDropdown(false);
                    }
                  }
                }}
              />
              <Button 
                variant="outline-secondary" 
                onClick={() => setShowCustomerDropdown(!showCustomerDropdown)}
              >
                <i className={`fe fe-chevron-${showCustomerDropdown ? 'up' : 'down'}`}></i>
              </Button>
            </div>
            {showCustomerDropdown && (
              <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto', top: '100%' }}>
                {customers.filter(customer => 
                  customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
                  customer.phone.includes(customerSearch)
                ).length > 0 ? (
                  customers.filter(customer => 
                    customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
                    customer.phone.includes(customerSearch)
                  ).slice(0, 10).map((customer) => (
                    <div
                      key={customer.id}
                      className="p-2 border-bottom cursor-pointer"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setCustomerSearch(`${customer.phone} - ${customer.name}`);
                        setShowCustomerDropdown(false);
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                      <strong>{customer.phone}</strong> - {customer.name}
                      {customer.email && <small className="d-block text-muted">{customer.email}</small>}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-muted text-center">
                    No customers found
                  </div>
                )}
              </div>
            )}
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h6 className="mb-3">Products</h6>
              <Row>
            {items.map((item) => {
              const cartItem = saleItems.find(si => si.itemCode === item.itemCode);
              return (
                <Col lg={3} md={4} sm={6} key={item.id} className="mb-3">
                  <Card className="h-100 product-card">
                    <Card.Body className="text-center p-3">
                      <div className="product-image mb-2">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.itemName} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                        ) : (
                          <div style={{ width: '100%', height: '80px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fe fe-package" style={{ fontSize: '2rem', color: '#6c757d' }}></i>
                          </div>
                        )}
                      </div>
                      <h6 className="product-name">{item.itemName}</h6>
                      <p className="product-code text-muted">Code: {item.itemCode}</p>
                      <div className="product-price mb-2">
                        <span className="selling-price fw-bold">₹{item.sellingRate}</span>
                      </div>
                      {cartItem ? (
                        <div className="d-flex align-items-center justify-content-center">
                          <Button 
                            size="sm" 
                            variant="outline-secondary" 
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-3 fw-bold">{cartItem.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline-secondary" 
                            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="w-100"
                          onClick={() => addToCart(item)}
                        >
                          <i className="fe fe-plus me-1"></i>Add to Cart
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <div className="sticky-top" style={{ top: '20px' }}>
            <Card className="shadow invoice-summary-card">
              <Card.Header className="bg-primary text-white">
                <h6 className="mb-0">Invoice Summary</h6>
              </Card.Header>
              <Card.Body>
                {saleItems.length === 0 ? (
                  <div className="text-center py-4">
                    <i className="fe fe-file-text" style={{ fontSize: '2rem', color: '#ccc' }}></i>
                    <p className="mt-2 text-muted">No items added</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-3">
                      {saleItems.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                          <div>
                            <small className="fw-bold">{item.itemName}</small>
                            <br />
                            <small className="text-muted">{item.quantity} × ₹{item.sellingPrice}</small>
                          </div>
                          <div className="text-end">
                            <small className="fw-bold">₹{item.total.toFixed(2)}</small>
                            <br />
                            <Button size="sm" variant="outline-danger" onClick={() => removeFromCart(item.id)}>
                              <i className="fe fe-x"></i>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹{totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Discount:</span>
                      <span>-₹{totals.totalDiscount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Tax:</span>
                      <span>₹{totals.totalTax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                      <h6>Total:</h6>
                      <h6>₹{totals.grandTotal.toFixed(2)}</h6>
                    </div>
                    <div className="d-grid gap-2">
                      <Button 
                        variant="success" 
                        onClick={handleCheckout}
                        disabled={!selectedCustomer || loading}
                      >
                        {loading ? 'Saving...' : 'Save Invoice'}
                      </Button>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          className="flex-fill"
                          onClick={() => window.print()}
                        >
                          <i className="fe fe-printer me-1"></i>Print
                        </Button>
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          className="flex-fill"
                          onClick={() => {
                            const element = document.createElement('a');
                            const file = new Blob([generateInvoiceText()], {type: 'text/plain'});
                            element.href = URL.createObjectURL(file);
                            element.download = `invoice-${Date.now()}.txt`;
                            document.body.appendChild(element);
                            element.click();
                            document.body.removeChild(element);
                          }}
                        >
                          <i className="fe fe-download me-1"></i>Download
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Modal show={showCart} onHide={() => setShowCart(false)} size="lg" className="invoice-modal">
        <Modal.Header closeButton>
          <Modal.Title>Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {saleItems.length === 0 ? (
            <div className="text-center py-4">
              <i className="fe fe-file-text" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              <p className="mt-2">No items added to invoice</p>
            </div>
          ) : (
            <>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
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
                        <div>
                          <strong>{item.itemName}</strong>
                          <br />
                          <small className="text-muted">{item.itemCode}</small>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button size="sm" variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button size="sm" variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                        </div>
                      </td>
                      <td>₹{item.sellingPrice}</td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="number"
                          value={item.discount}
                          onChange={(e) => updateDiscount(item.id, parseFloat(e.target.value) || 0)}
                          style={{ width: '80px' }}
                        />
                      </td>
                      <td>₹{item.total.toFixed(2)}</td>
                      <td>
                        <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>
                          <i className="fe fe-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              
              <div className="cart-summary mt-3">
                <Row className="justify-content-end">
                  <Col md={4}>
                    <div className="summary-card">
                      <p>Subtotal: ₹{totals.subtotal.toFixed(2)}</p>
                      <p>Discount: -₹{totals.totalDiscount.toFixed(2)}</p>
                      <p>Tax: ₹{totals.totalTax.toFixed(2)}</p>
                      <hr />
                      <h6>Total: ₹{totals.grandTotal.toFixed(2)}</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCart(false)}>Continue Adding Items</Button>
          <Button 
            variant="success" 
            onClick={handleCheckout} 
            disabled={saleItems.length === 0 || !selectedCustomer || loading}
          >
            {loading ? 'Saving...' : 'Save Invoice'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EcommerceSalesEntry;
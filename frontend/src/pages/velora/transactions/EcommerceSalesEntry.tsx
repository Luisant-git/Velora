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
      toast.success(`${item.itemName} added to cart`);
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

  return (
    <div className="container-fluid">
      <div className="page-header d-flex justify-content-between align-items-center">
        <h4 className="page-title">E-commerce Sales</h4>
        <Button variant="primary" onClick={() => setShowCart(true)} className="position-relative">
          <i className="fe fe-shopping-cart me-2"></i>Cart
          {cartItemCount > 0 && (
            <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </div>

      <Card className="custom-card mb-3">
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

      <Card className="custom-card">
        <Card.Body>
          <h6 className="mb-3">Products</h6>
          <Row>
            {items.map((item) => (
              <Col lg={3} md={4} sm={6} key={item.id} className="mb-3">
                <Card className="h-100 product-card">
                  <Card.Body className="text-center p-3">
                    <div className="product-image mb-2">
                      {(item as any).image ? (
                        <img src={(item as any).image} alt={item.itemName} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                      ) : (
                        <i className="fe fe-package"></i>
                      )}
                    </div>
                    <h6 className="product-name">{item.itemName}</h6>
                    <p className="product-code">Code: {item.itemCode}</p>
                    <div className="product-price">
                      <span className="selling-price">₹{item.sellingRate}</span>
                      <small className="mrp">MRP: ₹{item.mrp}</small>
                    </div>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="mt-2 w-100"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fe fe-plus me-1"></i>Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showCart} onHide={() => setShowCart(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {saleItems.length === 0 ? (
            <div className="text-center py-4">
              <i className="fe fe-shopping-cart" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              <p className="mt-2">Your cart is empty</p>
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
          <Button variant="secondary" onClick={() => setShowCart(false)}>Continue Shopping</Button>
          <Button 
            variant="success" 
            onClick={handleCheckout} 
            disabled={saleItems.length === 0 || !selectedCustomer || loading}
          >
            {loading ? 'Processing...' : 'Checkout'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EcommerceSalesEntry;
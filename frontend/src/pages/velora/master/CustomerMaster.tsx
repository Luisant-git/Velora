import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table, Alert } from 'react-bootstrap';

interface Customer {
  id: string;
  customerId: string;
  customerName: string;
  phoneNumber: string;
  email: string;
}

const CustomerMaster: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: '1', customerId: 'CUST001', customerName: 'John Doe', phoneNumber: '9876543210', email: 'john@example.com' },
    { id: '2', customerId: 'CUST002', customerName: 'Jane Smith', phoneNumber: '9876543211', email: 'jane@example.com' },
  ]);
  const [open, setOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    phoneNumber: '',
    email: '',
  });

  const handleOpen = (customer?: Customer) => {
    if (customer) {
      setEditingCustomer(customer);
      setFormData({
        customerId: customer.customerId,
        customerName: customer.customerName,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
      });
    } else {
      setEditingCustomer(null);
      setFormData({
        customerId: `CUST${String(customers.length + 1).padStart(3, '0')}`,
        customerName: '',
        phoneNumber: '',
        email: '',
      });
    }
    setError('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCustomer(null);
    setError('');
  };

  const validateForm = () => {
    // Check for duplicate phone number
    const phoneExists = customers.some(customer => 
      customer.phoneNumber === formData.phoneNumber && 
      customer.id !== editingCustomer?.id
    );
    
    // Check for duplicate email
    const emailExists = customers.some(customer => 
      customer.email === formData.email && 
      customer.id !== editingCustomer?.id
    );

    if (phoneExists) {
      setError('Phone number already exists');
      return false;
    }

    if (emailExists) {
      setError('Email already exists');
      return false;
    }

    if (!formData.customerName || !formData.phoneNumber || !formData.email) {
      setError('All fields are required');
      return false;
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError('Phone number must be 10 digits');
      return false;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }

    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const newCustomer: Customer = {
      id: editingCustomer?.id || Date.now().toString(),
      customerId: formData.customerId,
      customerName: formData.customerName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    };

    if (editingCustomer) {
      setCustomers(customers.map(customer => customer.id === editingCustomer.id ? newCustomer : customer));
    } else {
      setCustomers([...customers, newCustomer]);
    }
    handleClose();
  };

  const handleDelete = (id: string) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const filteredCustomers = customers.filter(customer =>
    customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phoneNumber.includes(searchTerm)
  );

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Customer Master</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <Form.Control
                type="text"
                placeholder="Search by name or phone"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col lg={6} md={12} className="text-lg-end text-center">
              <Button variant="primary" onClick={() => handleOpen()}>
                <i className="fe fe-plus me-2"></i>Add Customer
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.customerId}</td>
                    <td>{customer.customerName}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.email}</td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleOpen(customer)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(customer.id)}>
                        <i className="fe fe-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingCustomer ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.customerId}
                  onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editingCustomer ? 'Update' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerMaster;
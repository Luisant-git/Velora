import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Item {
  id: string;
  itemCode: string;
  itemName: string;
  tax: number;
  sellingRate: number;
  mrp: number;
  createdAt: string;
  updatedAt: string;
}

const ItemMaster: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [show, setShow] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    itemCode: '',
    itemName: '',
    tax: '',
    sellingRate: '',
    mrp: '',
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const data = await veloraAPI.getItems();
      setItems(data);
    } catch (error) {
      toast.error('Failed to fetch items');
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (item?: Item) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        itemCode: item.itemCode,
        itemName: item.itemName,
        tax: item.tax.toString(),
        sellingRate: item.sellingRate.toString(),
        mrp: item.mrp.toString(),
      });
    } else {
      setEditingItem(null);
      setFormData({
        itemCode: '',
        itemName: '',
        tax: '',
        sellingRate: '',
        mrp: '',
      });
    }
    setError('');
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setEditingItem(null);
    setError('');
  };

  const validateForm = () => {
    if (!formData.itemCode || !formData.itemName || !formData.tax || !formData.sellingRate || !formData.mrp) {
      setError('All fields are required');
      return false;
    }

    if (parseFloat(formData.tax) < 0 || parseFloat(formData.sellingRate) <= 0 || parseFloat(formData.mrp) <= 0) {
      setError('Tax must be non-negative and prices must be positive');
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const itemData = {
        itemCode: formData.itemCode,
        itemName: formData.itemName,
        tax: parseFloat(formData.tax),
        sellingRate: parseFloat(formData.sellingRate),
        mrp: parseFloat(formData.mrp),
      };

      if (editingItem) {
        await veloraAPI.updateItem(editingItem.id, itemData);
        toast.success('Item updated successfully');
      } else {
        await veloraAPI.createItem(itemData);
        toast.success('Item created successfully');
      }
      
      handleClose();
      fetchItems();
    } catch (error) {
      toast.error('Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await veloraAPI.deleteItem(id);
        toast.success('Item deleted successfully');
        fetchItems();
      } catch (error) {
        toast.error('Failed to delete item');
      }
    }
  };

  const filteredItems = items.filter(item =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.itemCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Item Master</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <Form.Control
                type="text"
                placeholder="Search by item name or code"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col lg={6} md={12} className="text-lg-end text-center">
              <Button variant="primary" onClick={() => handleShow()}>
                <i className="fe fe-plus me-2"></i>Add Item
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
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Tax (%)</th>
                  <th>Selling Rate</th>
                  <th>MRP</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} className="text-center">Loading...</td></tr>
                ) : filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.itemCode}</td>
                    <td>{item.itemName}</td>
                    <td>{item.tax}%</td>
                    <td>₹{item.sellingRate}</td>
                    <td>₹{item.mrp}</td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleShow(item)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(item.id)}>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingItem ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Item Code</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={formData.itemCode}
                  onChange={(e) => setFormData({ ...formData, itemCode: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={formData.itemName}
                  onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Tax (%)</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  required
                  value={formData.tax}
                  onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Selling Rate</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  required
                  value={formData.sellingRate}
                  onChange={(e) => setFormData({ ...formData, sellingRate: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>MRP</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  required
                  value={formData.mrp}
                  onChange={(e) => setFormData({ ...formData, mrp: e.target.value })}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : editingItem ? 'Update' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemMaster;
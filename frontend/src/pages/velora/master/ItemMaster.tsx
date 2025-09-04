import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table } from 'react-bootstrap';

interface Item {
  id: string;
  itemCode: string;
  itemName: string;
  tax: number;
  sellingPrice: number;
  mrp: number;
}

const ItemMaster: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', itemCode: 'ITM001', itemName: 'Sample Item 1', tax: 18, sellingPrice: 100, mrp: 120 },
    { id: '2', itemCode: 'ITM002', itemName: 'Sample Item 2', tax: 12, sellingPrice: 200, mrp: 250 },
  ]);
  const [show, setShow] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    itemCode: '',
    itemName: '',
    tax: '',
    sellingPrice: '',
    mrp: '',
  });

  const handleShow = (item?: Item) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        itemCode: item.itemCode,
        itemName: item.itemName,
        tax: item.tax.toString(),
        sellingPrice: item.sellingPrice.toString(),
        mrp: item.mrp.toString(),
      });
    } else {
      setEditingItem(null);
      setFormData({
        itemCode: `ITM${String(items.length + 1).padStart(3, '0')}`,
        itemName: '',
        tax: '',
        sellingPrice: '',
        mrp: '',
      });
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setEditingItem(null);
  };

  const handleSave = () => {
    const newItem: Item = {
      id: editingItem?.id || Date.now().toString(),
      itemCode: formData.itemCode,
      itemName: formData.itemName,
      tax: parseFloat(formData.tax),
      sellingPrice: parseFloat(formData.sellingPrice),
      mrp: parseFloat(formData.mrp),
    };

    if (editingItem) {
      setItems(items.map(item => item.id === editingItem.id ? newItem : item));
    } else {
      setItems([...items, newItem]);
    }
    handleClose();
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
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
                  <th>Selling Price</th>
                  <th>MRP</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.itemCode}</td>
                    <td>{item.itemName}</td>
                    <td>{item.tax}%</td>
                    <td>₹{item.sellingPrice}</td>
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
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Item Code</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.itemCode}
                  onChange={(e) => setFormData({ ...formData, itemCode: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.itemName}
                  onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Tax (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.tax}
                  onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.sellingPrice}
                  onChange={(e) => setFormData({ ...formData, sellingPrice: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>MRP</Form.Label>
                <Form.Control
                  type="number"
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
          <Button variant="primary" onClick={handleSave}>
            {editingItem ? 'Update' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemMaster;
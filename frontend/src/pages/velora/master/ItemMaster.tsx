import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Item {
  id: string;
  itemCode: string;
  itemName: string;
  tax: number;
  purchaseRate: number;
  sellingRate: number;
  mrp: number;
  categoryId?: string;
  taxId?: string;
  unitId?: string;
  category?: { id: string; name: string };
  taxMaster?: { id: string; rate: number };
  unit?: { id: string; symbol: string };
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: string;
  name: string;
}

interface Tax {
  id: string;
  rate: number;
}

interface Unit {
  id: string;
  symbol: string;
}

const ItemMaster: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [show, setShow] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    itemCode: '',
    itemName: '',
    purchaseRate: '',
    sellingRate: '',
    mrp: '',
    categoryId: '',
    taxId: '',
    unitId: '',
  });

  useEffect(() => {
    fetchItems();
    fetchMasterData();
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

  const fetchMasterData = async () => {
    try {
      const [categoriesData, taxesData, unitsData] = await Promise.all([
        veloraAPI.getCategories(),
        veloraAPI.getTaxes(),
        veloraAPI.getUnits()
      ]);
      setCategories(categoriesData);
      setTaxes(taxesData);
      setUnits(unitsData);
    } catch (error) {
      toast.error('Failed to fetch master data');
    }
  };

  const handleShow = (item?: Item) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        itemCode: item.itemCode,
        itemName: item.itemName,
        purchaseRate: item.purchaseRate.toString(),
        sellingRate: item.sellingRate.toString(),
        mrp: item.mrp.toString(),
        categoryId: item.categoryId || '',
        taxId: item.taxId || '',
        unitId: item.unitId || '',
      });
    } else {
      setEditingItem(null);
      setFormData({
        itemCode: '',
        itemName: '',
        purchaseRate: '',
        sellingRate: '',
        mrp: '',
        categoryId: '',
        taxId: '',
        unitId: '',
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
    if (!formData.itemCode || !formData.itemName || !formData.purchaseRate || !formData.sellingRate || !formData.mrp || !formData.taxId) {
      setError('All fields including tax selection are required');
      return false;
    }

    if (parseFloat(formData.purchaseRate) <= 0 || parseFloat(formData.sellingRate) <= 0 || parseFloat(formData.mrp) <= 0) {
      setError('Prices must be positive');
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const selectedTax = taxes.find(t => t.id === formData.taxId);
      const itemData = {
        itemCode: formData.itemCode,
        itemName: formData.itemName,
        tax: selectedTax?.rate || 0,
        purchaseRate: parseFloat(formData.purchaseRate),
        sellingRate: parseFloat(formData.sellingRate),
        mrp: parseFloat(formData.mrp),
        categoryId: formData.categoryId || undefined,
        taxId: formData.taxId,
        unitId: formData.unitId || undefined,
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
                  <th>Category</th>
                  <th>Tax</th>
                  <th>Unit</th>
                  <th>Purchase Rate</th>
                  <th>Selling Rate</th>
                  <th>MRP</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={9} className="text-center">Loading...</td></tr>
                ) : filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.itemCode}</td>
                    <td>{item.itemName}</td>
                    <td>{item.category?.name || '-'}</td>
                    <td>{item.taxMaster?.rate ? `${item.taxMaster.rate}%` : `${item.tax}%`}</td>
                    <td>{item.unit?.symbol || '-'}</td>
                    <td>₹{item.purchaseRate || 0}</td>
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
              <Col md={6} className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Unit</Form.Label>
                <Form.Select
                  value={formData.unitId}
                  onChange={(e) => setFormData({ ...formData, unitId: e.target.value })}
                >
                  <option value="">Select Unit</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.symbol}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Tax Master *</Form.Label>
                <Form.Select
                  value={formData.taxId}
                  onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                  required
                >
                  <option value="">Select Tax</option>
                  {taxes.map((tax) => (
                    <option key={tax.id} value={tax.id}>
                      {tax.rate}%
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Purchase Rate</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  required
                  value={formData.purchaseRate}
                  onChange={(e) => setFormData({ ...formData, purchaseRate: e.target.value })}
                />
              </Col>
              <Col md={6} className="mb-3">
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
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
    image: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [categorySearch, setCategorySearch] = useState('');
  const [taxSearch, setTaxSearch] = useState('');
  const [unitSearch, setUnitSearch] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTaxDropdown, setShowTaxDropdown] = useState(false);
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);

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
        image: (item as any).image || '',
      });
      setImagePreview((item as any).image || '');
      
      // Set search fields for editing
      const category = categories.find(c => c.id === item.categoryId);
      const tax = taxes.find(t => t.id === item.taxId);
      const unit = units.find(u => u.id === item.unitId);
      
      setCategorySearch(category?.name || '');
      setTaxSearch(tax ? `${tax.rate}%` : '');
      setUnitSearch(unit?.symbol || '');
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
        image: '',
      });
      setImagePreview('');
    }
    setError('');
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setEditingItem(null);
    setError('');
    setImagePreview('');
    setCategorySearch('');
    setTaxSearch('');
    setUnitSearch('');
    setShowCategoryDropdown(false);
    setShowTaxDropdown(false);
    setShowUnitDropdown(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, image: base64String });
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: '' });
    setImagePreview('');
  };

  const handleCategorySelect = (categoryId: string, categoryName: string) => {
    setFormData({ ...formData, categoryId });
    setCategorySearch(categoryName);
    setShowCategoryDropdown(false);
  };

  const handleTaxSelect = (taxId: string, taxRate: number) => {
    setFormData({ ...formData, taxId });
    setTaxSearch(`${taxRate}%`);
    setShowTaxDropdown(false);
  };

  const handleUnitSelect = (unitId: string, unitSymbol: string) => {
    setFormData({ ...formData, unitId });
    setUnitSearch(unitSymbol);
    setShowUnitDropdown(false);
  };

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const filteredTaxes = taxes.filter(tax => 
    tax.rate.toString().includes(taxSearch.replace('%', ''))
  );

  const filteredUnits = units.filter(unit => 
    unit.symbol.toLowerCase().includes(unitSearch.toLowerCase())
  );

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
                  <th>Image</th>
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
                  <tr><td colSpan={10} className="text-center">Loading...</td></tr>
                ) : filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {(item as any).image ? (
                        <img src={(item as any).image} alt={item.itemName} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                      ) : (
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#f8f9fa', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="fe fe-image" style={{ color: '#6c757d' }}></i>
                        </div>
                      )}
                    </td>
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
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Search and select category"
                    value={categorySearch}
                    onChange={(e) => {
                      setCategorySearch(e.target.value);
                      setShowCategoryDropdown(true);
                    }}
                    onFocus={() => setShowCategoryDropdown(true)}
                  />
                  {showCategoryDropdown && (
                    <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                      {filteredCategories.map((category) => (
                        <div
                          key={category.id}
                          className="p-2 border-bottom cursor-pointer"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleCategorySelect(category.id, category.name)}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                        >
                          {category.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Unit</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Search and select unit"
                    value={unitSearch}
                    onChange={(e) => {
                      setUnitSearch(e.target.value);
                      setShowUnitDropdown(true);
                    }}
                    onFocus={() => setShowUnitDropdown(true)}
                  />
                  {showUnitDropdown && (
                    <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                      {filteredUnits.map((unit) => (
                        <div
                          key={unit.id}
                          className="p-2 border-bottom cursor-pointer"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleUnitSelect(unit.id, unit.symbol)}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                        >
                          {unit.symbol}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Tax Master *</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Search and select tax rate"
                    value={taxSearch}
                    onChange={(e) => {
                      setTaxSearch(e.target.value);
                      setShowTaxDropdown(true);
                    }}
                    onFocus={() => setShowTaxDropdown(true)}
                    required
                  />
                  {showTaxDropdown && (
                    <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                      {filteredTaxes.map((tax) => (
                        <div
                          key={tax.id}
                          className="p-2 border-bottom cursor-pointer"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleTaxSelect(tax.id, tax.rate)}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                        >
                          {tax.rate}%
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
              <Col md={12} className="mb-3">
                <Form.Label>Product Image (Optional)</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Form.Text className="text-muted">Maximum file size: 5MB</Form.Text>
                {imagePreview && (
                  <div className="mt-2">
                    <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                    <Button variant="outline-danger" size="sm" className="ms-2" onClick={removeImage}>
                      <i className="fe fe-x"></i> Remove
                    </Button>
                  </div>
                )}
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
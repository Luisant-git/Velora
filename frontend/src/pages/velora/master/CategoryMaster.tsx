import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Category {
  id: string;
  name: string;
  createdAt: string;
}

const CategoryMaster: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Partial<Category>>({
    name: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await veloraAPI.getCategories();
      setCategories(data);
    } catch (error) {
      toast.error('Failed to fetch categories');
    }
  };

  const handleOpen = () => {
    setCurrentCategory({ name: '' });
    setEditMode(false);
    setOpen(true);
  };

  const handleEdit = (category: Category) => {
    setCurrentCategory(category);
    setEditMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentCategory({ name: '' });
  };

  const handleSave = async () => {
    if (!currentCategory.name?.trim()) {
      toast.error('Category name is required');
      return;
    }

    setLoading(true);
    try {
      if (editMode && currentCategory.id) {
        await veloraAPI.updateCategory(currentCategory.id, {
          name: currentCategory.name,
        });
        toast.success('Category updated successfully');
      } else {
        await veloraAPI.createCategory({
          name: currentCategory.name,
        });
        toast.success('Category created successfully');
      }
      fetchCategories();
      handleClose();
    } catch (error) {
      toast.error(`Failed to ${editMode ? 'update' : 'create'} category`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await veloraAPI.deleteCategory(id);
        toast.success('Category deleted successfully');
        fetchCategories();
      } catch (error) {
        toast.error('Failed to delete category');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Category Master</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Button variant="primary" onClick={handleOpen}>
            <i className="fe fe-plus me-2"></i>Add Category
          </Button>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>{new Date(category.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleEdit(category)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(category.id)}>
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
          <Modal.Title>{editMode ? 'Edit Category' : 'Add Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Category Name *</Form.Label>
                <Form.Control
                  type="text"
                  value={currentCategory.name || ''}
                  onChange={(e) => setCurrentCategory(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter category name"
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryMaster;
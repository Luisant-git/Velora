import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Tax {
  id: string;
  rate: number;
  createdAt: string;
}

const TaxMaster: React.FC = () => {
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTax, setCurrentTax] = useState<Partial<Tax>>({
    rate: 0,
  });

  useEffect(() => {
    fetchTaxes();
  }, []);

  const fetchTaxes = async () => {
    try {
      const data = await veloraAPI.getTaxes();
      setTaxes(data);
    } catch (error) {
      toast.error('Failed to fetch taxes');
    }
  };

  const handleOpen = () => {
    setCurrentTax({ rate: 0 });
    setEditMode(false);
    setOpen(true);
  };

  const handleEdit = (tax: Tax) => {
    setCurrentTax(tax);
    setEditMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTax({ rate: 0 });
  };

  const handleSave = async () => {
    if (currentTax.rate === undefined || currentTax.rate < 0) {
      toast.error('Valid tax rate is required');
      return;
    }

    setLoading(true);
    try {
      if (editMode && currentTax.id) {
        await veloraAPI.updateTax(currentTax.id, {
          rate: currentTax.rate,
        });
        toast.success('Tax updated successfully');
      } else {
        await veloraAPI.createTax({
          rate: currentTax.rate,
        });
        toast.success('Tax created successfully');
      }
      fetchTaxes();
      handleClose();
    } catch (error) {
      toast.error(`Failed to ${editMode ? 'update' : 'create'} tax`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this tax?')) {
      try {
        await veloraAPI.deleteTax(id);
        toast.success('Tax deleted successfully');
        fetchTaxes();
      } catch (error) {
        toast.error('Failed to delete tax');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Tax Master</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Button variant="primary" onClick={handleOpen}>
            <i className="fe fe-plus me-2"></i>Add Tax
          </Button>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Rate (%)</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {taxes.map((tax) => (
                  <tr key={tax.id}>
                    <td>{tax.rate}%</td>
                    <td>{new Date(tax.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleEdit(tax)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(tax.id)}>
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
          <Modal.Title>{editMode ? 'Edit Tax' : 'Add Tax'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Tax Rate (%) *</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  value={currentTax.rate || ''}
                  onChange={(e) => setCurrentTax(prev => ({ ...prev, rate: parseFloat(e.target.value) || 0 }))}
                  placeholder="Enter tax rate"
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

export default TaxMaster;
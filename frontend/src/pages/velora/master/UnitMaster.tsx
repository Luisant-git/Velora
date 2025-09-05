import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Unit {
  id: string;
  symbol: string;
  createdAt: string;
}

const UnitMaster: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUnit, setCurrentUnit] = useState<Partial<Unit>>({
    symbol: '',
  });

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = async () => {
    try {
      const data = await veloraAPI.getUnits();
      setUnits(data);
    } catch (error) {
      toast.error('Failed to fetch units');
    }
  };

  const handleOpen = () => {
    setCurrentUnit({ symbol: '' });
    setEditMode(false);
    setOpen(true);
  };

  const handleEdit = (unit: Unit) => {
    setCurrentUnit(unit);
    setEditMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUnit({ symbol: '' });
  };

  const handleSave = async () => {
    if (!currentUnit.symbol?.trim()) {
      toast.error('Unit symbol is required');
      return;
    }

    setLoading(true);
    try {
      if (editMode && currentUnit.id) {
        await veloraAPI.updateUnit(currentUnit.id, {
          symbol: currentUnit.symbol,
        });
        toast.success('Unit updated successfully');
      } else {
        await veloraAPI.createUnit({
          symbol: currentUnit.symbol,
        });
        toast.success('Unit created successfully');
      }
      fetchUnits();
      handleClose();
    } catch (error) {
      toast.error(`Failed to ${editMode ? 'update' : 'create'} unit`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this unit?')) {
      try {
        await veloraAPI.deleteUnit(id);
        toast.success('Unit deleted successfully');
        fetchUnits();
      } catch (error) {
        toast.error('Failed to delete unit');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Unit Master</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Button variant="primary" onClick={handleOpen}>
            <i className="fe fe-plus me-2"></i>Add Unit
          </Button>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit) => (
                  <tr key={unit.id}>
                    <td>{unit.symbol}</td>
                    <td>{new Date(unit.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleEdit(unit)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(unit.id)}>
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
          <Modal.Title>{editMode ? 'Edit Unit' : 'Add Unit'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Unit Symbol *</Form.Label>
                <Form.Control
                  type="text"
                  value={currentUnit.symbol || ''}
                  onChange={(e) => setCurrentUnit(prev => ({ ...prev, symbol: e.target.value }))}
                  placeholder="Enter unit symbol (e.g., Pcs, Kg)"
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

export default UnitMaster;
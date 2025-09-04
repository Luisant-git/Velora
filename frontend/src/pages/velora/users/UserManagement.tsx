import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, Modal, Table, Badge, Alert } from 'react-bootstrap';

interface User {
  id: string;
  email: string;
  password: string;
  isActive: boolean;
  createdDate: string;
  lastLogin?: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      email: 'admin@velora.com',
      password: '********',
      isActive: true,
      createdDate: '2024-01-01',
      lastLogin: '2024-01-15',
    },
    {
      id: '2',
      email: 'user@velora.com',
      password: '********',
      isActive: false,
      createdDate: '2024-01-10',
    },
  ]);
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isActive: true,
  });

  const handleOpen = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        email: user.email,
        password: '',
        confirmPassword: '',
        isActive: user.isActive,
      });
    } else {
      setEditingUser(null);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        isActive: true,
      });
    }
    setError('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingUser(null);
    setError('');
  };

  const validateForm = () => {
    // Check for duplicate email
    const emailExists = users.some(user => 
      user.email === formData.email && 
      user.id !== editingUser?.id
    );

    if (emailExists) {
      setError('Email already exists');
      return false;
    }

    if (!formData.email) {
      setError('Email is required');
      return false;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }

    // For new users or when changing password
    if (!editingUser || formData.password) {
      if (!formData.password) {
        setError('Password is required');
        return false;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
    }

    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const newUser: User = {
      id: editingUser?.id || Date.now().toString(),
      email: formData.email,
      password: formData.password ? '********' : editingUser?.password || '********',
      isActive: formData.isActive,
      createdDate: editingUser?.createdDate || new Date().toISOString().split('T')[0],
      lastLogin: editingUser?.lastLogin,
    };

    if (editingUser) {
      setUsers(users.map(user => user.id === editingUser.id ? newUser : user));
    } else {
      setUsers([...users, newUser]);
    }
    handleClose();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ));
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">User Management</h4>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <Button variant="primary" onClick={() => handleOpen()}>
            <i className="fe fe-plus me-2"></i>Add User
          </Button>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Created Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="fe fe-user me-2 text-muted"></i>
                        {user.email}
                      </div>
                    </td>
                    <td>
                      <Badge bg={user.isActive ? 'success' : 'secondary'}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                    <td>{user.createdDate}</td>
                    <td>{user.lastLogin || 'Never'}</td>
                    <td>
                      <Form.Check
                        type="switch"
                        checked={user.isActive}
                        onChange={() => handleToggleActive(user.id)}
                        className="d-inline me-2"
                      />
                      <Button size="sm" variant="primary" className="me-2" onClick={() => handleOpen(user)}>
                        <i className="fe fe-edit"></i>
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(user.id)}>
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
          <Modal.Title>
            <i className="fe fe-user me-2"></i>
            {editingUser ? 'Edit User' : 'Add New User'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>{editingUser ? 'New Password (leave blank to keep current)' : 'Password'}</Form.Label>
                <Form.Control
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Check
                  type="switch"
                  label="Active User"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
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
            {editingUser ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
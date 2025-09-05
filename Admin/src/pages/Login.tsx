import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { adminService } from '../api/admin';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await adminService.login({
        email: formData.email,
        password: formData.password
      });
      
      localStorage.setItem('adminToken', response.access_token);
      localStorage.setItem('adminData', JSON.stringify(response.admin));
      localStorage.setItem('userRole', 'admin');
      
      window.location.href = '/dashboard';

    } catch (error: any) {
      setError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Card style={{ width: '400px', maxWidth: '90%' }}>
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <h3 className="text-primary">Velora Admin</h3>
            <p className="text-muted">Sign in to admin panel</p>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                placeholder="Enter admin email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                placeholder="Enter password"
              />
            </Form.Group>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Form>


        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
import React, { useState } from 'react'
import { Card, Button, Form, Modal, Table, Badge, Alert, Row, Col } from 'react-bootstrap'

interface Company {
  id: string
  email: string
  name: string
  password: string
  isActive: boolean
  dbName: string
  createdDate: string
}

const CompanyMaster: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: '1',
      email: 'admin@abccorp.com',
      name: 'ABC Corporation',
      password: '********',
      isActive: true,
      dbName: 'velora_abc_corp',
      createdDate: '2024-01-01',
    },
    {
      id: '2',
      email: 'admin@xyzltd.com',
      name: 'XYZ Limited',
      password: '********',
      isActive: false,
      dbName: 'velora_xyz_ltd',
      createdDate: '2024-01-10',
    },
  ])
  const [show, setShow] = useState(false)
  const [editingCompany, setEditingCompany] = useState<Company | null>(null)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    isActive: true,
    dbName: '',
  })

  const handleShow = (company?: Company) => {
    if (company) {
      setEditingCompany(company)
      setFormData({
        email: company.email,
        name: company.name,
        password: '',
        confirmPassword: '',
        isActive: company.isActive,
        dbName: company.dbName,
      })
    } else {
      setEditingCompany(null)
      setFormData({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        isActive: true,
        dbName: '',
      })
    }
    setError('')
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
    setEditingCompany(null)
    setError('')
  }

  const handleSave = () => {
    if (!formData.email || !formData.name || !formData.dbName) {
      setError('Email, Name, and DB Name are required')
      return
    }

    const newCompany: Company = {
      id: editingCompany?.id || Date.now().toString(),
      email: formData.email,
      name: formData.name,
      password: '********',
      isActive: formData.isActive,
      dbName: formData.dbName,
      createdDate: editingCompany?.createdDate || new Date().toISOString().split('T')[0],
    }

    if (editingCompany) {
      setCompanies(companies.map(company => company.id === editingCompany.id ? newCompany : company))
    } else {
      setCompanies([...companies, newCompany])
    }
    handleClose()
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      setCompanies(companies.filter(company => company.id !== id))
    }
  }

  const handleToggleActive = (id: string) => {
    setCompanies(companies.map(company => 
      company.id === id ? { ...company, isActive: !company.isActive } : company
    ))
  }

  return (
    <div className="container-fluid">
      <div className="page-header">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="page-title">Company Master</h4>
          <Button variant="primary" onClick={() => handleShow()}>
            Add New Company
          </Button>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Company List</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Database Name</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.id}>
                      <td>{company.name}</td>
                      <td>{company.email}</td>
                      <td><code>{company.dbName}</code></td>
                      <td>
                        <Badge bg={company.isActive ? 'success' : 'secondary'}>
                          {company.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td>{company.createdDate}</td>
                      <td>
                        <Form.Check
                          type="switch"
                          checked={company.isActive}
                          onChange={() => handleToggleActive(company.id)}
                          className="d-inline me-2"
                        />
                        <Button size="sm" variant="primary" className="me-2" onClick={() => handleShow(company)}>
                          Edit
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(company.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingCompany ? 'Edit Company' : 'Add New Company'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              <Col md={12} className="mb-3">
                <Form.Label>Database Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.dbName}
                  onChange={(e) => setFormData({ ...formData, dbName: e.target.value })}
                  placeholder="velora_company_name"
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </Col>
              <Col md={12} className="mb-3">
                <Form.Check
                  type="switch"
                  label="Active Company"
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
            {editingCompany ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CompanyMaster
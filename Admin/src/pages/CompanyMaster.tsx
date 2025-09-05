import React, { useState, useEffect } from 'react'
import { Card, Button, Form, Modal, Table, Badge, Alert, Row, Col } from 'react-bootstrap'
import { adminService, Company, CompanyData } from '../api/admin'
import { toast } from 'react-toastify'

const CompanyMaster: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(false)
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

  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = async () => {
    setLoading(true)
    try {
      const data = await adminService.getCompanies()
      setCompanies(data)
    } catch (error) {
      toast.error('Failed to fetch companies')
    } finally {
      setLoading(false)
    }
  }

  const handleShow = (company?: Company) => {
    if (company) {
      setEditingCompany(company)
      setFormData({
        email: company.email,
        name: company.name,
        password: '',
        confirmPassword: '',
        isActive: company.isActive,
        dbName: '',
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

  const handleSave = async () => {
    if (!formData.email || !formData.name || (!editingCompany && !formData.password)) {
      setError('Email, Name, and Password are required')
      return
    }

    setLoading(true)
    try {
      const companyData: CompanyData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        isActive: formData.isActive,
      }

      if (editingCompany) {
        await adminService.updateCompany(editingCompany.id, companyData)
        toast.success('Company updated successfully')
      } else {
        await adminService.createCompany(companyData)
        toast.success('Company created successfully')
      }
      
      fetchCompanies()
      handleClose()
    } catch (error: any) {
      setError(error.response?.data?.message || 'Operation failed')
      toast.error('Operation failed')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        await adminService.deleteCompany(id)
        toast.success('Company deleted successfully')
        fetchCompanies()
      } catch (error) {
        toast.error('Failed to delete company')
      }
    }
  }

  const handleToggleActive = async (id: string) => {
    try {
      await adminService.toggleCompanyStatus(id)
      toast.success('Company status updated')
      fetchCompanies()
    } catch (error) {
      toast.error('Failed to update company status')
    }
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
                      <td>{new Date(company.createdAt).toLocaleDateString()}</td>
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
                <Form.Label>Password {editingCompany ? '(leave blank to keep current)' : '*'}</Form.Label>
                <Form.Control
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingCompany}
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
          <Button variant="primary" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : editingCompany ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CompanyMaster
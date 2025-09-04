import React, { useState } from 'react'
import { Card, Button, Form, Tab, Tabs, Row, Col } from 'react-bootstrap'

const Settings: React.FC = () => {
  const [companyProfile, setCompanyProfile] = useState({
    name: 'Velora Systems',
    address: '123 Business Street, City, State 12345',
    phone: '+91 9876543210',
    email: 'info@velora.com',
    taxNumber: 'GST123456789',
    logo: '',
  })

  const [invoiceSettings, setInvoiceSettings] = useState({
    headerText: 'INVOICE',
    footerText: 'Thank you for your business!',
    showLogo: true,
    showCompanyAddress: true,
  })

  const handleCompanyProfileSave = () => {
    alert('Company profile saved successfully!')
  }

  const handleInvoiceSettingsSave = () => {
    alert('Invoice settings saved successfully!')
  }

  const handleBackup = () => {
    alert('Backup initiated successfully!')
  }

  const handleRestore = () => {
    alert('Restore functionality would be implemented here')
  }

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Settings</h4>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>System Settings</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tabs defaultActiveKey="company" className="mb-3">
                <Tab eventKey="company" title="Company Profile">
                  <Form>
                    <Row>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={companyProfile.name}
                          onChange={(e) => setCompanyProfile({ ...companyProfile, name: e.target.value })}
                        />
                      </Col>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={companyProfile.email}
                          onChange={(e) => setCompanyProfile({ ...companyProfile, email: e.target.value })}
                        />
                      </Col>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          value={companyProfile.phone}
                          onChange={(e) => setCompanyProfile({ ...companyProfile, phone: e.target.value })}
                        />
                      </Col>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Tax Number (GST)</Form.Label>
                        <Form.Control
                          type="text"
                          value={companyProfile.taxNumber}
                          onChange={(e) => setCompanyProfile({ ...companyProfile, taxNumber: e.target.value })}
                        />
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={companyProfile.address}
                          onChange={(e) => setCompanyProfile({ ...companyProfile, address: e.target.value })}
                        />
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control type="file" accept="image/*" />
                        <Form.Text className="text-muted">
                          Upload company logo (PNG, JPG, SVG)
                        </Form.Text>
                      </Col>
                      <Col md={12}>
                        <Button variant="primary" onClick={handleCompanyProfileSave}>
                          Save Company Profile
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab>

                <Tab eventKey="invoice" title="Invoice Template">
                  <Form>
                    <Row>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Invoice Header Text</Form.Label>
                        <Form.Control
                          type="text"
                          value={invoiceSettings.headerText}
                          onChange={(e) => setInvoiceSettings({ ...invoiceSettings, headerText: e.target.value })}
                        />
                      </Col>
                      <Col lg={6} md={12} className="mb-3">
                        <Form.Label>Invoice Footer Text</Form.Label>
                        <Form.Control
                          type="text"
                          value={invoiceSettings.footerText}
                          onChange={(e) => setInvoiceSettings({ ...invoiceSettings, footerText: e.target.value })}
                        />
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Check
                          type="switch"
                          label="Show Company Logo on Invoice"
                          checked={invoiceSettings.showLogo}
                          onChange={(e) => setInvoiceSettings({ ...invoiceSettings, showLogo: e.target.checked })}
                        />
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Check
                          type="switch"
                          label="Show Company Address on Invoice"
                          checked={invoiceSettings.showCompanyAddress}
                          onChange={(e) => setInvoiceSettings({ ...invoiceSettings, showCompanyAddress: e.target.checked })}
                        />
                      </Col>
                      <Col md={12}>
                        <Button variant="primary" onClick={handleInvoiceSettingsSave}>
                          Save Invoice Settings
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab>

                <Tab eventKey="backup" title="Backup & Restore">
                  <Row>
                    <Col md={12} className="mb-4">
                      <Card className="border-primary">
                        <Card.Header className="bg-primary text-white">
                          <h6 className="mb-0">Database Backup</h6>
                        </Card.Header>
                        <Card.Body>
                          <p className="text-muted">
                            Create a backup of your database including all companies, users, and transaction data.
                          </p>
                          <Button variant="primary" onClick={handleBackup}>
                            Create Backup
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={12} className="mb-4">
                      <Card className="border-warning">
                        <Card.Header className="bg-warning text-dark">
                          <h6 className="mb-0">Database Restore</h6>
                        </Card.Header>
                        <Card.Body>
                          <p className="text-muted">
                            Restore your database from a previously created backup file.
                          </p>
                          <Form.Control type="file" accept=".sql,.zip" className="mb-3" />
                          <Button variant="warning" onClick={handleRestore}>
                            Restore Database
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Settings
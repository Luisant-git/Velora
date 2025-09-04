import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  const recentTransactions = [
    { id: 'TXN001', company: 'ABC Corp', amount: '₹25,000', date: '2024-01-15', status: 'Completed' },
    { id: 'TXN002', company: 'XYZ Ltd', amount: '₹18,500', date: '2024-01-14', status: 'Pending' },
    { id: 'TXN003', company: 'DEF Inc', amount: '₹32,000', date: '2024-01-13', status: 'Completed' },
  ]

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Admin Dashboard</h4>
      </div>
      
      <Row>
        <Col xl={3} lg={6} md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="avatar avatar-md bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Total Companies</h6>
                  <h4 className="mb-0 text-primary">25</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="avatar avatar-md bg-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Active Users</h6>
                  <h4 className="mb-0 text-secondary">150</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="avatar avatar-md bg-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Total Sales</h6>
                  <h4 className="mb-0 text-warning">₹5,25,000</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="avatar avatar-md bg-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Monthly Growth</h6>
                  <h4 className="mb-0 text-success">15%</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={8} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Sales Overview</Card.Title>
            </Card.Header>
            <Card.Body>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="text-muted">Sales chart will be displayed here</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Recent Transactions</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between">
                  <span>Company A - Sale</span>
                  <span className="text-success">+₹15,000</span>
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <span>Company B - Sale</span>
                  <span className="text-success">+₹8,500</span>
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <span>Company C - Sale</span>
                  <span className="text-success">+₹12,300</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Welcome to Velora Admin Panel</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Manage companies, monitor system performance, and configure settings from this admin dashboard.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
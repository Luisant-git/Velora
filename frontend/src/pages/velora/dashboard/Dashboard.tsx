import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Velora Dashboard</h4>
      </div>
      
      <Row>
        <Col xl={3} lg={6} md={6} sm={6} xs={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <span className="avatar avatar-md bg-primary">
                    <i className="fe fe-dollar-sign fs-16"></i>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Total Sales</h6>
                  <h4 className="mb-0 text-primary">₹1,25,000</h4>
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
                    <i className="fe fe-users fs-16"></i>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Total Customers</h6>
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
                    <i className="fe fe-shopping-cart fs-16"></i>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Total Items</h6>
                  <h4 className="mb-0 text-warning">85</h4>
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
                    <i className="fe fe-trending-up fs-16"></i>
                  </span>
                </div>
                <div className="flex-fill">
                  <h6 className="mb-1">Monthly Growth</h6>
                  <h4 className="mb-0 text-success">12%</h4>
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
              <Card.Title>Welcome to Velora</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Your business management system is ready. Use the navigation menu to access different modules.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
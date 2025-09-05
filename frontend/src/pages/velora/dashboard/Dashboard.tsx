import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { veloraAPI, DashboardStats } from '../../../api/velora';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalSales: 0,
    totalCustomers: 0,
    totalItems: 0,
    monthlyGrowth: 0,
  });
  const [loading, setLoading] = useState(true);
  console.log('Dashboard Stats:', stats);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await veloraAPI.getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

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
                  <h4 className="mb-0 text-primary">
                    {loading ? '...' : formatCurrency(stats.totalSales)}
                  </h4>
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
                  <h4 className="mb-0 text-secondary">
                    {loading ? '...' : stats.totalCustomers}
                  </h4>
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
                  <h4 className="mb-0 text-warning">
                    {loading ? '...' : stats.totalItems}
                  </h4>
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
                  <h4 className={`mb-0 ${stats.monthlyGrowth >= 0 ? 'text-success' : 'text-danger'}`}>
                    {loading ? '...' : `${stats.monthlyGrowth >= 0 ? '+' : ''}${stats.monthlyGrowth}%`}
                  </h4>
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
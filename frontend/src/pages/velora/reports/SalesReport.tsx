import React, { useState } from 'react';
import { Card, Col, Row, Button, Form, Table, Badge } from 'react-bootstrap';

interface SalesReportData {
  invoiceNo: string;
  date: string;
  customerName: string;
  customerPhone: string;
  itemCode: string;
  itemName: string;
  quantity: number;
  amount: number;
  tax: number;
  total: number;
}

const SalesReport: React.FC = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [customerFilter, setCustomerFilter] = useState('');
  const [itemFilter, setItemFilter] = useState('');

  // Mock data
  const mockSalesData: SalesReportData[] = [
    {
      invoiceNo: 'INV0001',
      date: '2024-01-15',
      customerName: 'John Doe',
      customerPhone: '9876543210',
      itemCode: 'ITM001',
      itemName: 'Sample Item 1',
      quantity: 2,
      amount: 200,
      tax: 36,
      total: 236,
    },
    {
      invoiceNo: 'INV0002',
      date: '2024-01-16',
      customerName: 'Jane Smith',
      customerPhone: '9876543211',
      itemCode: 'ITM002',
      itemName: 'Sample Item 2',
      quantity: 1,
      amount: 200,
      tax: 24,
      total: 224,
    },
  ];

  const [filteredData, setFilteredData] = useState<SalesReportData[]>(mockSalesData);

  const handleFilter = () => {
    let filtered = mockSalesData;

    if (dateFrom) {
      filtered = filtered.filter(item => item.date >= dateFrom);
    }

    if (dateTo) {
      filtered = filtered.filter(item => item.date <= dateTo);
    }

    if (customerFilter) {
      filtered = filtered.filter(item => 
        item.customerName.toLowerCase().includes(customerFilter.toLowerCase()) ||
        item.customerPhone.includes(customerFilter)
      );
    }

    if (itemFilter) {
      filtered = filtered.filter(item => 
        item.itemCode.toLowerCase().includes(itemFilter.toLowerCase()) ||
        item.itemName.toLowerCase().includes(itemFilter.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  const handleReset = () => {
    setDateFrom('');
    setDateTo('');
    setCustomerFilter('');
    setItemFilter('');
    setFilteredData(mockSalesData);
  };

  const calculateSummary = () => {
    const totalSales = filteredData.reduce((sum, item) => sum + item.total, 0);
    const totalTax = filteredData.reduce((sum, item) => sum + item.tax, 0);
    const totalCustomers = new Set(filteredData.map(item => item.customerPhone)).size;
    const totalItems = filteredData.reduce((sum, item) => sum + item.quantity, 0);

    return { totalSales, totalTax, totalCustomers, totalItems };
  };

  const summary = calculateSummary();

  const handleExportPDF = () => {
    // Mock PDF export
    alert('PDF export functionality would be implemented here');
  };

  const handleExportExcel = () => {
    // Mock Excel export
    alert('Excel export functionality would be implemented here');
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h4 className="page-title">Sales Report</h4>
      </div>

      {/* Filters */}
      <Card className="custom-card">
        <Card.Header>
          <Card.Title>Filters</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={3} md={6} sm={12} className="mb-3">
              <Form.Label>Date From</Form.Label>
              <Form.Control
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-3">
              <Form.Label>Date To</Form.Label>
              <Form.Control
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-3">
              <Form.Label>Customer Name / Phone</Form.Label>
              <Form.Control
                type="text"
                value={customerFilter}
                onChange={(e) => setCustomerFilter(e.target.value)}
              />
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-3">
              <Form.Label>Item Code / Name</Form.Label>
              <Form.Control
                type="text"
                value={itemFilter}
                onChange={(e) => setItemFilter(e.target.value)}
              />
            </Col>
          </Row>
          <div>
            <Button variant="primary" onClick={handleFilter} className="me-2">
              Apply Filters
            </Button>
            <Button variant="outline-secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Summary */}
      <Card className="custom-card">
        <Card.Header>
          <Card.Title>Summary</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={3} md={6} sm={6} xs={12} className="text-center mb-3">
              <h4 className="text-primary">₹{summary.totalSales.toFixed(2)}</h4>
              <p className="mb-0">Total Sales</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className="text-center mb-3">
              <h4 className="text-secondary">₹{summary.totalTax.toFixed(2)}</h4>
              <p className="mb-0">Total Tax</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className="text-center mb-3">
              <h4 className="text-success">{summary.totalCustomers}</h4>
              <p className="mb-0">Total Customers</p>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12} className="text-center mb-3">
              <h4 className="text-warning">{summary.totalItems}</h4>
              <p className="mb-0">Items Sold</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Export Buttons */}
      <Card className="custom-card">
        <Card.Header>
          <Card.Title>Export Options</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button variant="danger" onClick={handleExportPDF} className="me-2">
            <i className="fe fe-file-text me-2"></i>Export PDF
          </Button>
          <Button variant="success" onClick={handleExportExcel}>
            <i className="fe fe-download me-2"></i>Export Excel
          </Button>
        </Card.Body>
      </Card>

      {/* Sales Data Table */}
      <Card className="custom-card">
        <Card.Body>
          <div className="table-responsive">
            <Table className="table text-nowrap">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Item Code</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Tax</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <Badge bg="primary">{row.invoiceNo}</Badge>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.customerName}</td>
                    <td>{row.customerPhone}</td>
                    <td>{row.itemCode}</td>
                    <td>{row.itemName}</td>
                    <td>{row.quantity}</td>
                    <td>₹{row.amount.toFixed(2)}</td>
                    <td>₹{row.tax.toFixed(2)}</td>
                    <td>
                      <strong>₹{row.total.toFixed(2)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {filteredData.length === 0 && (
            <div className="text-center py-4">
              <h6 className="text-muted">
                No sales data found for the selected filters
              </h6>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SalesReport;
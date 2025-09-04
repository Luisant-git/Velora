import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, Table, Badge } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { veloraAPI } from '../../../api/velora';

interface Sale {
  id: string;
  totalAmount: number;
  discount: number;
  createdAt: string;
  customer: {
    id: string;
    name: string;
    phone: string;
    email?: string;
  };
  saleItems: {
    id: string;
    quantity: number;
    item: {
      id: string;
      itemCode: string;
      itemName: string;
      sellingRate: number;
    };
  }[];
}

const SalesReport: React.FC = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [customerFilter, setCustomerFilter] = useState('');
  const [itemFilter, setItemFilter] = useState('');
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    setLoading(true);
    try {
      const data = await veloraAPI.getSales();
      setSales(data);
    } catch (error) {
      toast.error('Failed to fetch sales report');
    } finally {
      setLoading(false);
    }
  };

  // Convert sales data to flat structure for display
  const getFlattenedData = () => {
    const flattened: any[] = [];
    sales.forEach(sale => {
      sale.saleItems.forEach(saleItem => {
        flattened.push({
          saleId: sale.id,
          date: new Date(sale.createdAt).toLocaleDateString(),
          customerName: sale.customer.name,
          customerPhone: sale.customer.phone,
          itemCode: saleItem.item.itemCode,
          itemName: saleItem.item.itemName,
          quantity: saleItem.quantity,
          amount: saleItem.item.sellingRate * saleItem.quantity,
          total: sale.totalAmount,
          discount: sale.discount
        });
      });
    });
    return flattened;
  };

  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    setFilteredData(getFlattenedData());
  }, [sales]);

  const handleFilter = () => {
    let filtered = getFlattenedData();

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
    setFilteredData(getFlattenedData());
  };

  const calculateSummary = () => {
    const totalSales = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
    const totalDiscount = sales.reduce((sum, sale) => sum + sale.discount, 0);
    const totalCustomers = new Set(sales.map(sale => sale.customer.id)).size;
    const totalItems = sales.reduce((sum, sale) => sum + sale.saleItems.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);

    return { totalSales, totalDiscount, totalCustomers, totalItems };
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
              <h4 className="text-secondary">₹{summary.totalDiscount.toFixed(2)}</h4>
              <p className="mb-0">Total Discount</p>
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
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={10} className="text-center">Loading...</td></tr>
                ) : filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <Badge bg="primary">{row.saleId.slice(-6)}</Badge>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.customerName}</td>
                    <td>{row.customerPhone}</td>
                    <td>{row.itemCode}</td>
                    <td>{row.itemName}</td>
                    <td>{row.quantity}</td>
                    <td>₹{row.amount.toFixed(2)}</td>
                    <td>₹{row.discount.toFixed(2)}</td>
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
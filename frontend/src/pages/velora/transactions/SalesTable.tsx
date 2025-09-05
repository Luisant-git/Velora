import React, { useState } from 'react';
import { Table, Button, Collapse } from 'react-bootstrap';
import { APISale } from '../../../api/velora';

interface SalesTableProps {
  sales: APISale[];
  onDownloadInvoice: (saleId: string) => void;
}

const SalesTable: React.FC<SalesTableProps> = ({ sales, onDownloadInvoice }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (saleId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(saleId)) {
      newExpanded.delete(saleId);
    } else {
      newExpanded.add(saleId);
    }
    setExpandedRows(newExpanded);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const generateInvoiceNo = (saleId: string, createdAt: string) => {
    const date = new Date(createdAt);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const id = saleId.slice(-4).toUpperCase();
    return `INV${year}${month}${id}`;
  };

  return (
    <div className="table-responsive">
      <Table className="table text-nowrap">
        <thead>
          <tr>
            <th></th>
            <th>Invoice No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <React.Fragment key={sale.id}>
              <tr>
                <td>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => toggleRow(sale.id)}
                    className="p-0"
                  >
                    <i className={`fe ${expandedRows.has(sale.id) ? 'fe-minus' : 'fe-plus'}`}></i>
                  </Button>
                </td>
                <td>{generateInvoiceNo(sale.id, sale.createdAt)}</td>
                <td>{formatDate(sale.createdAt)}</td>
                <td>
                  <div>
                    <strong>{sale.customer.name}</strong>
                    <br />
                    <small className="text-muted">{sale.customer.phone}</small>
                  </div>
                </td>
                <td>
                  <span className="badge bg-primary">{sale.saleItems.length}</span>
                </td>
                <td>₹{(sale.totalAmount || 0).toFixed(2)}</td>
                <td>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => onDownloadInvoice(sale.id)}
                    title="Download Invoice"
                  >
                    <i className="fe fe-download"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="p-0">
                  <Collapse in={expandedRows.has(sale.id)}>
                    <div>
                      <div className="p-3 bg-light">
                        <h6 className="mb-3">Items Details</h6>
                        <Table size="sm" className="mb-0">
                          <thead>
                            <tr>
                              <th>Item Code</th>
                              <th>Item Name</th>
                              <th>Quantity</th>
                              <th>Rate</th>
                              <th>Discount %</th>
                              <th>Tax %</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sale.saleItems.map((item) => {
                              const subtotal = item.quantity * item.item.sellingRate;
                              const discountAmount = (subtotal * (item.discount || 0)) / 100;
                              const taxableAmount = subtotal - discountAmount;
                              const taxAmount = (taxableAmount * item.item.tax) / 100;
                              const total = taxableAmount + taxAmount;
                              
                              return (
                                <tr key={item.id}>
                                  <td>{item.item.itemCode}</td>
                                  <td>{item.item.itemName}</td>
                                  <td>{item.quantity}</td>
                                  <td>₹{(item.item.sellingRate || 0).toFixed(2)}</td>
                                  <td>{(item.discount || 0)}%</td>
                                  <td>{item.item.tax}%</td>
                                  <td>₹{(total || 0).toFixed(2)}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                        <div className="text-end mt-2">
                          <small className="text-muted">
                            Total: ₹{(sale.totalAmount || 0).toFixed(2)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SalesTable;
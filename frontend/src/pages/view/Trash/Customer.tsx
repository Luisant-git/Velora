import { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { 
  getDeletedCustomer, 
  restoreCustomer 
} from "../../../api/customer";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

interface CustomersData {
  customercode?: number;
  customername: string;
  Address?: string;
  Mobile?: string;
  deletedAt?: string;
}

function CustomerTrash() {
  const [filteredData, setFilteredData] = useState<CustomersData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [loading, setLoading] = useState(false);
  const [restoreLoading, setRestoreLoading] = useState<number | null>(null);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleRestore = (customerCode: number) => {
    setRestoreLoading(customerCode);
    restoreCustomer(customerCode)
      .then((response) => {
        if (response?.success) {
          toast.success("Customer restored successfully", { autoClose: 1000 });
          getDeletedCustomers();
        } else {
          toast.error("Error While Restoring", { autoClose: 1000 });
        }
      })
      .catch((error) => {
        console.error("Error restoring Customer:", error);
        toast.error("Error While Restoring", { autoClose: 1000 });
      })
      .finally(() => {
        setRestoreLoading(null);
      });
  };

  const getDeletedCustomers = () => {
    setLoading(true);
    getDeletedCustomer()
      .then((response) => {
        if (response && response.status === 200) {
          setFilteredData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching deleted customers:", error);
        toast.error("Failed to fetch deleted customers.", { autoClose: 3000 });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDeletedCustomers();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      {/* <Col xl={12} className="mb-3 mt-2">
        <h4>Deleted Customers</h4>
      </Col> */}
      {loading ? (
        <div className="d-flex justify-content-center mt-3">
          <CircularProgress />
        </div>
      ) : (
        <Col xl={12}>
          <div className="table-responsive">
            <SpkTablescomponent
              tableClass="text-nowrap table-bordered bg-primary"
              headerBgColor="#f8f9fa"
              header={[
                { title: "ID" },
                { title: "Customer" },
                { title: "Mobile" },
                { title: "Address" },
                { title: "Deleted At" },
                { title: "Actions" },
              ]}
              totalItems={filteredData?.length}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
            >
              {currentCustomers.map((Customer: CustomersData) => (
                <tr key={Customer.customercode}>
                  <th scope="row">{Customer.customercode}</th>
                  <td>{Customer.customername}</td>
                  <td>{Customer.Mobile}</td>
                  <td>{Customer.Address}</td>
                  <td>{Customer.deletedAt ? new Date(Customer.deletedAt).toLocaleString() : ''}</td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <button
                        onClick={() => Customer.customercode && handleRestore(Customer.customercode)}
                        className="btn btn-icon btn-sm btn-success-light rounded-pill"
                        disabled={restoreLoading === Customer.customercode}
                      >
                        {restoreLoading === Customer.customercode ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <i className="ri-refresh-line"></i>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </SpkTablescomponent>
          </div>
        </Col>
      )}
    </Fragment>
  );
}

export default CustomerTrash;
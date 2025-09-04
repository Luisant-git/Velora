import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import CustomerModel from "./CustomerModel";
import {
  deleteCustomer,
  getCustomers,
  postCustomer,
  updateCustomer,
} from "../../../../api/customer";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

interface CustomersData {
  customercode?: number;
  customername: string;
  Address?: string;
  Mobile?: string;
  deletedAt?: string;
}

function Customer() {
  const [filteredData, setFilteredData] = useState<CustomersData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCustomerCode, setSelectedCustomerCode] = useState<number | null>(null);
  const [modalData, setModalData] = useState<CustomersData | null>(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleClickOpenDelete = (customerCode: number) => {
    setSelectedCustomerCode(customerCode);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (Customer?: CustomersData) => {
    setModalData(Customer || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedCustomerCode === null) return;
    setDeleteLoading(true);

    deleteCustomer(selectedCustomerCode)
    .then((response) => {
      if (response.data?.success) {  // Access response.data.success
        toast.success("Customer moved to trash successfully", { autoClose: 1000 });
        getCustomerData();
      } else {
        toast.error("Error While Moving to Trash", { autoClose: 1000 });
      }
    })
    .catch((error) => {
      console.error("Error deleting Customer:", error);
      toast.error("Error While Moving to Trash", { autoClose: 1000 });
    })
    .finally(() => {
      setDeleteLoading(false);
      handleCloseDelete();
    });
  };

  const handleSubmitModal = (data: CustomersData) => {
    setLoading(true);
    const updateData = {
      customername: data.customername,
      Address: data.Address,
      Mobile: data.Mobile,
    };
    if (modalData) {
      updateCustomer(data.customercode, updateData)
        .then((response) => {
          if (response?.success) {
            toast.success("Customer Update Successfully", { autoClose: 1000 });
            getCustomerData();
          }
        })
        .catch((error) => {
          console.error("Error updating Customer:", error);
          toast.error("Error updating Customer", { autoClose: 1000 });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      postCustomer(updateData)
        .then((response) => {
          if (response) {
            toast.success("Customer created successfully.", {
              autoClose: 1000,
            });
            getCustomerData();
          }
        })
        .catch((error) => {
          console.error("Error creating Customer:", error);
          toast.error("Error creating Customer", { autoClose: 1000 });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    handleCloseModal();
  };

  const getCustomerData = () => {
    setLoading(true);
    getCustomers()
      .then((response) => {
        if (response && response.status === 200) {
          // Filter out deleted customers (those without deletedAt field)
          const activeCustomers = response.data.filter(
            (customer: CustomersData) => !customer.deletedAt
          );
          setFilteredData(activeCustomers);
        }
      })
      .catch((error) => {
        console.error("Error fetching customers data:", error);
        toast.error("Failed to fetch customers data.", { autoClose: 3000 });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Fragment>
      <Col xl={12} className="mb-3 mt-2 text-end">
        <SpkButton
          onClick={() => handleOpenModal()}
          Buttonvariant="primary"
          Customclass="me-0"
        >
          <i className="ri-add-line me-1"></i> Create
        </SpkButton>
      </Col>
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
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link
                        to=""
                        onClick={() => handleOpenModal(Customer)}
                        className="btn btn-icon btn-sm btn-info-light rounded-pill"
                      >
                        <i className="ri-edit-line"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() =>
                          Customer.customercode !== undefined &&
                          handleClickOpenDelete(Customer.customercode)
                        }
                        className="btn btn-icon btn-sm btn-danger-light rounded-pill"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </SpkTablescomponent>
          </div>
        </Col>
      )}

      <div
        className={`modal fade ${openDelete ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Move to Trash</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to move this Customer to trash?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseDelete}
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Move to Trash"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomerModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default Customer;
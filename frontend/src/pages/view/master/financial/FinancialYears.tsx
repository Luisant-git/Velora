import React, { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import FinancialYearModel from "./FinancialYearModel";
import {
  deleteFinancialYear,
  getFinancialYears,
  postFinancialYear,
  updateFinancialYear,
} from "../../../../api/financial"; 
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import ItemSkeleton from "../../../../components/skeleton/Skeleton";



interface FinancialYearData {
  HeaderId?: number;
  YearId: string;
  Date_From: Date;
  Date_To: Date;
  IsRunning: number;
  Delete_flg: number;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

function FinancialYear() {
  const [filteredData, setFilteredData] = useState<FinancialYearData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedHeaderId, setSelectedHeaderId] = useState<number | null>(null);
  const [modalData, setModalData] = useState<FinancialYearData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClickOpenDelete = (headerId: number) => {
    setSelectedHeaderId(headerId);
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

  const handleOpenModal = (financialYear?: FinancialYearData) => {
    setModalData(financialYear || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    setLoading(true);
    if (selectedHeaderId === null) return;

    deleteFinancialYear(selectedHeaderId)
      .then((response) => {
        if (response?.success) {
          toast.success("Financial Year Deleted Successfully", { autoClose: 1000 });
          getFinancialYearData();
        } else {
          toast.error("Error While Deleting", { autoClose: 1000 });
            setLoading(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error deleting Financial Year:", error);
        toast.error("Error While Deleting", { autoClose: 1000 });
        setLoading(false);
      });
    handleCloseDelete();
  };

  const handleSubmitModal = (data: FinancialYearData) => {
    setLoading(true);
    if (modalData) {
      const headerId = modalData.HeaderId; 
      updateFinancialYear(headerId, data)
        .then((response) => {
          if (response?.success) {
            toast.success("Financial Year Updated Successfully!", { autoClose: 1000 });
            getFinancialYearData();
            setLoading(false);
          } else {
           toast.error("Error updating Financial Year", { autoClose: 1000 });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error updating Financial Year:", error);
          toast.error("Error updating Financial Year", { autoClose: 1000 });
          setLoading(false);
        });
    } else {
      postFinancialYear(data)
        .then((response) => {
          if (response) {
            toast.success("Financial Year created successfully.", {
              autoClose: 1000,
            });
            setLoading(false);
            getFinancialYearData();
          } else {
            toast.error("Failed to create Financial Year.", { autoClose: 1000 });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error creating Financial Year:", error);
          toast.error("Error creating Financial Year", { autoClose: 1000 });
          setLoading(false);
        });
    }
    handleCloseModal();
  };

  const getFinancialYearData = () => {
    setLoading(true);
    getFinancialYears()
      .then((response) => {
        if (response && response.status === 200) {
          setFilteredData(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching financial years data:", error);
        toast.error("Failed to fetch financial years data. Please try again.", { autoClose: 3000 });
        setLoading(false);
      });
  };

  useEffect(() => {
    getFinancialYearData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFinancialYears = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          <ItemSkeleton
          columns={[
            "ITEM CODE",
            "ITEM NAME",
            "CATEGORY",
            "HSN CODE",
            "SIZE",
          
           
          ]}
          actionsCount={1}
        />
      ) : (
        <Col xl={12}>
          <div className="table-responsive">
            <SpkTablescomponent
              tableClass="text-nowrap table-bordered bg-primary"
              headerBgColor="#f8f9fa"
              header={[
                { title: "ID" },
                { title: "Year ID" },
                { title: "Date From" },
                { title: "Date To" },
                { title: "Is Running" },
                { title: "Actions" },
              ]}
              totalItems={filteredData?.length}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
            >
              {currentFinancialYears.map((financialYear: FinancialYearData) => (
                <tr key={financialYear.HeaderId}>
                  <th scope="row">{financialYear.HeaderId}</th>
                  <td>{financialYear.YearId}</td>
                  <td>{new Date(financialYear.Date_From).toLocaleDateString()}</td>
                  <td>{new Date(financialYear.Date_To).toLocaleDateString()}</td>
                  <td>{financialYear.IsRunning ? "Yes" : "No"}</td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <button
                        onClick={() => handleOpenModal(financialYear)}
                        className="btn btn-icon btn-sm btn-info-light rounded-pill"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      {/* <button
                        onClick={() =>
                          financialYear.HeaderId !== undefined &&
                          handleClickOpenDelete(financialYear.HeaderId)
                        }
                        className="btn btn-icon btn-sm btn-danger-light rounded-pill"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button> */}
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
              <h5 className="modal-title">Delete Financial Year</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this Financial Year?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <FinancialYearModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default FinancialYear;
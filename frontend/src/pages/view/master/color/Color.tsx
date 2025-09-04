import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import ColorModel from "./Colormodel";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import {
  deleteColor,
  getColors,
  postColor,
  updateColor,
} from "../../../../api/color";
import { CircularProgress } from "@mui/material";

interface ColorData {
  DetailId?: number;
  Color: string;
  description?: string;
}

function Color() {
  const [filteredData, setFilteredData] = useState<ColorData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedColorCode, setSelectedColorCode] = useState<number | null>(
    null
  );
  const [modalData, setModalData] = useState<ColorData | null>(null);
  const [loading, setLoading] = useState(false);
  const handleClickOpenDelete = (ptycode: number) => {
    setSelectedColorCode(ptycode);
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
  const handleOpenModal = (Color?: ColorData) => {
    setModalData(Color || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    setLoading(true);
    if (selectedColorCode === null) return;

    deleteColor(selectedColorCode)
      .then((response) => {
        if (response?.success) {
          alert("Color deleted successfully.");
          getpartiesData();
          setLoading(false);
        } else {
          alert("Failed to delete the Color.");
        }
      })
      .catch((error) => {
        console.error("Error deleting Color:", error);
        alert("An error occurred while deleting the Color.");
      });
    handleCloseDelete();
  };

  const handleSubmitModal = (data: ColorData) => {
    setLoading(true);
    if (modalData) {
      updateColor(data.DetailId, data)
        .then((response) => {
          if (response?.success) {
            alert("Color updated successfully.");
            getpartiesData();
            setLoading(false);
          } else {
            alert("Failed to update the Color.");
          }
        })
        .catch((error) => {
          console.error("Error updating Color:", error);
          alert("An error occurred while updating the Color.");
        });
    } else {
      postColor(data)
        .then((response) => {
          if (response) {
            alert("Color created successfully.");
            getpartiesData();
            setLoading(false);
          } else {
            alert("Failed to create the Color.");
          }
        })
        .catch((error) => {
          console.error("Error creating Color:", error);
          alert("An error occurred while creating the Color.");
        });
    }
    handleCloseModal();
  };

  const getpartiesData = () => {
    setLoading(true);
    getColors()
      .then((response) => {
        if (response && response.status === 200) {
          setFilteredData(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching parties data:", error);
      });
  };

  useEffect(() => {
    getpartiesData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentParties = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
                { title: "Color" },
                { title: "Description" },
                { title: "Actions" },
              ]}
              totalItems={filteredData?.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              {currentParties.map((Color: ColorData) => (
                <tr key={Color.DetailId}>
                  <th scope="row">{Color.DetailId}</th>
                  <td>{Color.Color}</td>
                  <td>{Color.description}</td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link
                        to=""
                        onClick={() => handleOpenModal(Color)}
                        className="btn btn-icon btn-sm btn-info-light rounded-pill"
                      >
                        <i className="ri-edit-line"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() =>
                          Color.DetailId !== undefined &&
                          handleClickOpenDelete(Color.DetailId)
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
              <h5 className="modal-title">Delete Color</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this Color?</p>
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
      <ColorModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default Color;

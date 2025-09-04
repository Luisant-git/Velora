import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import DiaModel from "./DiaModel";
import { deleteDia, getDias, postDia, updateDia } from "../../../../api/dia";

interface DiaData {
  DetailId?: number;
  Dia: string;
  description?: string;
}

function Dia() {
  const [filteredData, setFilteredData] = useState<DiaData[]>([]);
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDiaCode, setSelectedDiaCode] = useState<number | null>(null);
  const [modalData, setModalData] = useState<DiaData | null>(null);

  const handleClickOpenDelete = (ptycode: number) => {
    setSelectedDiaCode(ptycode);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (Dia?: DiaData) => {
    setModalData(Dia || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedDiaCode === null) return;

    deleteDia(selectedDiaCode)
      .then((response) => {
        if (response?.success) {
          alert("Dia deleted successfully.");
          getpartiesData();
        } else {
          alert("Failed to delete the Dia.");
        }
      })
      .catch((error) => {
        console.error("Error deleting Dia:", error);
        alert("An error occurred while deleting the Dia.");
      });
    handleCloseDelete();
  };

  const handleSubmitModal = (data: DiaData) => {
    if (modalData) {
      updateDia(data.DetailId, data)
        .then((response) => {
          if (response?.success) {
            alert("Dia updated successfully.");
            getpartiesData();
          } else {
            alert("Failed to update the Dia.");
          }
        })
        .catch((error) => {
          console.error("Error updating Dia:", error);
          alert("An error occurred while updating the Dia.");
        });
    } else {
      postDia(data)
        .then((response) => {
          if (response) {
            alert("Dia created successfully.");
            getpartiesData();
          } else {
            alert("Failed to create the Dia.");
          }
        })
        .catch((error) => {
          console.error("Error creating Dia:", error);
          alert("An error occurred while creating the Dia.");
        });
    }
    handleCloseModal();
  };

  const getpartiesData = () => {
    getDias()
      .then((response) => {
        if (response && response.status === 200) {
          setFilteredData(response.data);
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

      <Col xl={12}>
        <div className="table-responsive">
          <SpkTablescomponent
            tableClass="text-nowrap table-bordered bg-primary"
            headerBgColor="#f8f9fa"
            header={[
              { title: "ID" },
              { title: "Dia" },
              { title: "Description" },
              { title: "Actions" },
            ]}
            totalItems={filteredData?.length}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          >
            {currentParties.map((Dia: DiaData) => (
              <tr key={Dia.DetailId}>
                <th scope="row">{Dia.DetailId}</th>
                <td>{Dia.Dia}</td>
                <td>{Dia.description}</td>
                <td>
                  <div className="hstack gap-2 fs-15">
                    <Link
                      to=""
                      onClick={() => handleOpenModal(Dia)}
                      className="btn btn-icon btn-sm btn-info-light rounded-pill"
                    >
                      <i className="ri-edit-line"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        Dia.DetailId !== undefined &&
                        handleClickOpenDelete(Dia.DetailId)
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
      <div
        className={`modal fade ${openDelete ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Dia</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this Dia?</p>
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
      <DiaModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default Dia;

import  { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";

import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import UomModel from "./UomModel";
import { deleteUom, getUom, postUom, updateUom } from "../../../../api/uom";


interface UomData {

  DetailId?: number;
  Uom:string;
  description?:string;
}

function Uom() {

  const [filteredData, setFilteredData] = useState<UomData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUomCode, setSelectedUomCode] = useState<number | null>(
    null
  );
  const [modalData, setModalData] = useState<UomData | null>(null);

  const handleClickOpenDelete = (ptycode: number) => {
    setSelectedUomCode(ptycode);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (Uom?: UomData) => {
    setModalData(Uom || null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalData(null);
  };

  const handleDelete = () => {
    if (selectedUomCode === null) return;

    deleteUom(selectedUomCode)
      .then((response) => {
        if (response?.success) {
          alert("Uom deleted successfully.");
          getpartiesData();
        } else {
          alert("Failed to delete the Uom.");
        }
      })
      .catch((error) => {
        console.error("Error deleting Uom:", error);
        alert("An error occurred while deleting the Uom.");
      });
    handleCloseDelete();
  };

  const handleSubmitModal = (data: UomData) => {
    if (modalData) {
      updateUom(data.DetailId, data)
        .then((response) => {
          if (response?.success) {
            alert("Uom updated successfully.");
            getpartiesData();
          } else {
            alert("Failed to update the Uom.");
          }
        })
        .catch((error) => {
          console.error("Error updating Uom:", error);
          alert("An error occurred while updating the Uom.");
        });
    } else {
      postUom(data)
        .then((response) => {
          if (response) {
            alert("Uom created successfully.");
            getpartiesData();
          } else {
            alert("Failed to create the Uom.");
          }
        })
        .catch((error) => {
          console.error("Error creating Uom:", error);
          alert("An error occurred while creating the Uom.");
        });
    }
    handleCloseModal();
  };

  const getpartiesData = () => {
    getUom()
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
   
        <SpkButton      onClick={() => handleOpenModal()} Buttonvariant="primary" Customclass="me-0">
              <i className="ri-add-line me-1"></i> Create
            </SpkButton>
      </Col>

      <Col xl={12}>
        <div className="table-responsive">
          <SpkTablescomponent
            tableClass="text-nowrap table-bordered "
            headerBgColor="#f8f9fa"
            header={[
              { title: "ID" },
              { title: "Uom" },
              { title: "Description" },
              { title: "Actions" },
            ]}
            totalItems={filteredData?.length}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          >
            {currentParties.map((Uom: UomData) => (
              <tr key={Uom.DetailId}>
                <th scope="row">{Uom.DetailId}</th>
                <td>{Uom.Uom}</td>
                <td>{Uom.description}</td>
                <td>
                  <div className="hstack gap-2 fs-15">
                    <Link
                      to=""
                      onClick={() => handleOpenModal(Uom)}
                      className="btn btn-icon btn-sm btn-info-light rounded-pill"
                    >
                      <i className="ri-edit-line"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>   Uom.DetailId !== undefined && handleClickOpenDelete(Uom.DetailId)}
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
            <h5 className="modal-title">Delete Uom</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseDelete}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this Uom?</p>
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
      <UomModel
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        initialData={modalData}
      />
    </Fragment>
  );
}

export default Uom;

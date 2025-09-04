import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, Row } from "react-bootstrap";
import { Data, Data1, Data2, Leadsdata } from "../../../../components/common/data/apps/crm/leadsdata";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Link } from "react-router-dom";
 import face9 from "../../../../assets/images/faces/9.jpg"

const Leads = () => {

    const [leadsloopData, setLeadsloopData] = useState(Leadsdata); // Initialize with your data

    const handleDelete = (id: number) => {
        const updatedData = leadsloopData.filter((idx) => idx.id !== id);
        setLeadsloopData(updatedData);

    };
    const [areAllChecked, setAreAllChecked] = useState(false);
    const handleHeaderCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setAreAllChecked(e.target.checked);

    };

    const [_checkboxes, setCheckboxes] = useState(false);
    const handleRowCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setCheckboxes(e.target.checked)
    };

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //image upload
    const [images1, setImages1] = useState<any>([]);
    const [selectedImage1, setSelectedImage1] = useState(null);

    const handleFileChange1 = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="CRM" currentpage="Leads" activepage="Leads" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div className="card-title">
                                Leads<SpkBadge variant="primary" Customclass="rounded ms-2 fs-12 align-middle">28</SpkBadge>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Size="sm" onClickfunc={handleShow} Buttontoggle="modal" Buttontarget="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Lead</SpkButton>
                                <SpkButton Buttonvariant="success-light" Size="sm">Export As CSV</SpkButton>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Date Added</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">A - Z</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent showCheckbox={true} checked={areAllChecked} onChange={handleHeaderCheckboxChange} tableClass="text-nowrap" header={[{ title: 'Contact Name' }, { title: 'Company' }, { title: 'Email' }, { title: 'Lead Status' }, { title: 'Phone' }, { title: 'Lead Source' }, { title: 'Owner' }, { title: 'Last Contracted' }, { title: 'Actions' }]}>
                                    {leadsloopData.map((idx) => (
                                        <tr className="crm-contact" key={Math.random()}>
                                            <td>
                                                <Form.Check type="checkbox" id={`checkbox-${idx.id}`} checked={areAllChecked} onChange={handleRowCheckboxChange} />
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>{idx.text1}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.mail}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color2}-transparent`}>{idx.badge}</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                </div>
                                            </td>


                                            <td>
                                                {idx.text2}
                                            </td>
                                            <td> <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1"> <span className="avatar avatar-rounded avatar-sm">
                                                    <img src={idx.src3} alt="Avatar" /> </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-medium">{idx.owner}</span> </div>
                                            </div>
                                            </td>
                                            <td>{idx.contracted}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link to="#!" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-eye-line"></i></Link>
                                                    <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon contact-delete" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 9 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Create Contact --> */}
            <Modal className="fade" centered id="create-contact" tabIndex={-1} show={show} onHide={handleClose}>
                    <Modal.Header>
                        <h6 className="modal-title">Create Lead</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src={selectedImage1 || face9} alt="" id="profile-img" />
                                        <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge">
                                            <Form.Control onChange={(e: any) => {
                                                handleFileChange1(e);
                                                setImages1([...images1, e.target.files[0]]);
                                            }} type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-name" className="">Contact Name</Form.Label>
                                <Form.Control type="text" className="" id="contact-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-mail" className="">Email</Form.Label>
                                <Form.Control type="email" className="" id="contact-mail" placeholder="Enter Email" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-phone" className="">Phone No</Form.Label>
                                <Form.Control type="tel" className="" id="contact-phone" placeholder="Enter Phone Number" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                                <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Lead Status</Form.Label>
                                <SpkSelect name="colors" option={Data2} placeholder="Select Status"
                                    menuplacement='auto' classNameprefix="Select2"
                                />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Lead Source</Form.Label>
                                <SpkSelect name="colors" option={Data1}
                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Tags</Form.Label>
                                <SpkSelect multi name="colors" option={Data}
                                    menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag"
                                />
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="primary1-light" Buttontype="button" Customclass="m-0 me-2" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="m-0 ">Create Contact</SpkButton>
                    </Modal.Footer>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    )
};

export default Leads;
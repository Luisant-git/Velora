import  { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";
import { Companydata, Selectdata1, Selectdata2 } from "../../../../components/common/data/apps/crm/companiesdata";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import logo1 from "../../../../assets/images/company-logos/1.png"
import logo11 from "../../../../assets/images/company-logos/11.png"
import face2 from "../../../../assets/images/faces/2.jpg"
const Companies = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //Delete Function
    const [Data, setData] = useState(Companydata);
    function handleDelete(id: string) {
        const updatedInvoiceData = Data.filter((idx) => idx.id !== id);
        setData(updatedInvoiceData);
    }
    const [selectedImage, setSelectedImage] = useState(logo11);
    const fileInputRef: any = useRef(null);
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const [areAllChecked, setAreAllChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});
    
    // Handle "Select All" checkbox
    const handleHeaderCheckboxChange = (e: any) => {
        const isChecked = e.target.checked;
        setAreAllChecked(isChecked);
    
        // Update all checkboxes based on "Select All"
        const updatedCheckboxes: { [key: string]: boolean } = {};
        Data.forEach((item) => {
            updatedCheckboxes[item.id] = isChecked;
        });
        setCheckboxes(updatedCheckboxes);
    };
    
    // Handle individual row checkbox
    const handleRowCheckboxChange = (e: any, id: string) => {
        const isChecked = e.target.checked;
    
        // Update the specific checkbox
        setCheckboxes((prev) => ({
            ...prev,
            [id]: isChecked,
        }));
    
        // Update "Select All" state
        const allChecked = Data.every((item) => checkboxes[item.id] || (item.id === id && isChecked));
        setAreAllChecked(allChecked);
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="CRM" currentpage="Companies" activepage="Companies" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Companies <SpkBadge variant="primary" Customclass="text-default rounded ms-2 fs-12 align-middle text-fixed-white">23</SpkBadge>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" onClickfunc={handleShow1} Size="sm" Buttontoggle="modal" Buttontarget="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add Company</SpkButton>
                                <SpkButton Buttonvariant="success-light" Size="sm" >Export As CSV</SpkButton>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm btn-wave no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item href="#!">Date Added</Dropdown.Item>
                                    <Dropdown.Item href="#!">A - Z</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent showCheckbox={true} checked={areAllChecked}
                            onChange={handleHeaderCheckboxChange} tableClass="text-nowrap"
                                    header={[{ title: 'Company Name' }, { title: 'Email' }, { title: 'Phone' }, { title: 'Company Size' }, { title: 'Industry' }, { title: 'Key Contacts' }, { title: 'Total Deals' }, { title: 'Actions' }]}>
                                    {Data.map((idx) => (
                                        <tr className="crm-contact" key={Math.random()}>
                                            <td>
                                                <Form.Check type="checkbox" id={`checkbox-${idx.id}`}  checked={checkboxes[idx.id] || false}
                                onChange={(e) => handleRowCheckboxChange(e, idx.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link onClick={handleShow} data-bs-toggle="offcanvas" to="#offcanvasExample"
                                                            role="button" aria-controls="offcanvasExample">{idx.text1}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                                                        {idx.mail}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center flex-wrap gap-1">
                                                    <span className={`badge bg-${idx.color} ${idx.class}`}>{idx.badge}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.text2}
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div >
                                                        <span className="d-block fw-semibold"  >{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.score}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" Navigate="#offcanvasExample" onClickfunc={handleShow} Role="button" Size="sm" Customclass="btn-icon ">
                                                        <i className="ri-eye-line"></i></SpkButton>
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

            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className="p-0">
                    <div className="d-flex align-items-top p-3 border-bottom border-block-end-dashed main-profile-cover">
                        <span className="avatar avatar-xxl avatar-rounded me-3 p-2 bg-primary-transparent flex-shrink-0">
                            <img src={logo1} alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-start justify-content-between">
                                <h6 className="fw-medium mb-1">Ethan Thompson
                                    <SpkBadge variant="success-transparent" Customclass="fs-10 ms-1"><i className="ri-circle-fill fs-8 text-success me-1 "></i> New Lead</SpkBadge>
                                </h6>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close crm-contact-close-btn p-1" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
                            </div>
                            <p className="mb-2 text-muted fs-12">Chief Financial Officer (CFO)</p>
                            <div className="d-flex gap-2 fs-15 mt-1">
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ri-phone-line"></i></Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary2-light"><i className="ri-mail-line"></i></Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary3-light"><i className="ri-message-line"></i></Link>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-icon btn-sm rounded-pill btn-secondary-light no-caret" Menuclass="dropdown-menu-end" Align="end" Icon={true} IconClass="ri-more-fill">
                                    <li><Dropdown.Item>Size </Dropdown.Item></li>
                                    <li><Dropdown.Item>Deals</Dropdown.Item></li>
                                    <li><Dropdown.Item>Status</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">253</p>
                            <p className="mb-0 text-muted">Deals</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$12k</p>
                            <p className="mb-0 text-muted">Contributions</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$17k</p>
                            <p className="mb-0 text-muted">Comitted</p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                            <p className="text-muted mb-0">
                                I am <b className="text-default">Ethan Thompson,</b> hereby declaring that I am the founder and managing director of the prestigious company named Thompson Enterprises, and I serve as the Chief Financial Officer (CFO) of the company.
                            </p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 fw-medium">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-primary1-transparent">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>

                                    ethanthompson@example.com  <SpkTooltips placement="top" title="Copy">
                                        <span className="bg-light p-1 text-muted lh-1 rounded-circle ms-1"><i className="ri-file-copy-line"></i></span>
                                    </SpkTooltips>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-primary2-transparent">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    +(333) 555-1234
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-primary3-transparent">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    1234 Elm Street, Apt 101, Springfield, IL, 62701, USA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Priority:</p>
                        <SpkBadge variant="success-transparent"><i className="ri-circle-fill lh-1 align-middle fs-9 me-1"></i> Low Priority</SpkBadge>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">Company Size:</div>
                        <div>
                            <SpkBadge variant="primary-transparent">Corporate</SpkBadge> - 250+ Employees
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Created Date:</p>
                        <div>25-May-2024</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Lead Source:</p>
                        <div><i className="ri-instagram-line bg-danger-transparent p-1 lh-1 align-middle fs-15 me-1 rounded"></i> Instagram</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-0">
                                <i className="ri-twitter-x-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="success-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-medium"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Tags :</p>
                        <div>
                            <SpkBadge variant="primary-transparent" Customclass="me-1">New Lead</SpkBadge>
                            <SpkBadge variant="primary-transparent" >Others</SpkBadge>
                        </div>
                    </div>
                    <div className="p-3 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">
                            Key Contact :
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-rounded avatar-sm">
                                    <img src={face2} alt="img" />
                                </span>
                            </div>
                            <div className="fw-medium">Linda Klusty</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal show={show1} onHide={handleClose1} className="modal fade" id="create-contact" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header closeButton className="modal-header">
                            <h6 className="modal-title">Add Company</h6>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
                                            <img src={selectedImage || ''} alt="" id="profile-img" />
                                            <SpkBadge Pill={true} variant="primary" Customclass="avatar-badge" Onclickfun={openFileInput}>
                                                <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                                <i className="fe fe-camera"></i>
                                            </SpkBadge>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                    <Form.Control type="text" id="company-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="company-lead-score">Total Deals</Form.Label>
                                    <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-mail">Email</Form.Label>
                                    <Form.Control type="email" id="company-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-phone">Phone No</Form.Label>
                                    <Form.Control type="tel" id="company-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="key-contact">Key Contact</Form.Label>
                                    <Form.Control type="text" id="key-contact" placeholder="Contact Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Industry</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata2} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Company Size</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata1} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectdata1[0]]} />
                                </Col>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose1}
                                Buttondismiss="modal">Cancel</SpkButton>
                            <SpkButton Buttonvariant="primary" Buttontype="button">Create Contact</SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
};

export default Companies;
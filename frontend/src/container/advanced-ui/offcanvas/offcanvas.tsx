import  { Fragment, useState } from "react";
import { Col, ListGroup, Offcanvas, Row } from "react-bootstrap";
import ShowCode from "../../../components/showcode/showcode";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import {  offcanvas1, offcanvas2, offcanvas3, offcanvas4, offcanvas5  } from "../../../components/common/data/prism/advanced-ui-prism";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Pageheader from "../../../components/page-header/pageheader";
import face12 from "../../../assets/images/faces/12.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face14 from "../../../assets/images/faces/14.jpg";

const Offcanvass = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // OffCanvas Enable
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //static
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //Placement
    const [showt, setShowt] = useState(false);

    const handleCloset = () => setShowt(false);
    const handleShowt = () => setShowt(true);

    //right

    const [showr, setShowr] = useState(false);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    //bottom

    const [showb, setShowb] = useState(false);

    const handleCloseb = () => setShowb(false);
    const handleShowb = () => setShowb(true);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Advanced Ui" currentpage="Offcanvas" activepage="Offcanvas" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Static backdrop" customCardClass="custom-card" customCardBodyClass="" reactCode={offcanvas1}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShow2}
                            Buttontarget="#staticBackdrop" Buttoncontrols="staticBackdrop">Toggle static offcanvas</SpkButton>

                        <Offcanvas show={show2} onHide={handleClose2} backdrop="static" className="offcanvas offcanvas-start" tabIndex="-1" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose2}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <SpkListgroup Variant="flush" CustomClass="mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Live demo" customCardClass="custom-card" customCardBodyClass="" reactCode={offcanvas2}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2  my-1" Buttontoggle="offcanvas" Navigate="#offcanvasExample" onClickfunc={handleShow}
                            Buttoncontrols="offcanvasExample">Link with href</SpkButton>
                        <SpkButton Buttonvariant='primary' Customclass=" my-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShow}
                            Buttontarget="#offcanvasExample" Buttoncontrols="offcanvasExample">Button with data-bs-target</SpkButton>
                        <Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body p-0">
                                <div>
                                    <SpkListgroup Variant="flush" CustomClass="mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Body scrolling" customCardClass="custom-card" customCardBodyClass="" reactCode={offcanvas3}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShow1}
                            Buttontarget="#offcanvasScrolling" Buttoncontrols="offcanvasScrolling">Enable
                            body scrolling
                        </SpkButton>
                        <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose1}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <ul className="list-group list-group-flush mb-0">
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ul>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Body scrolling and backdrop" customCardClass="custom-card" customCardBodyClass="" reactCode={offcanvas4}>
                        <SpkButton Customclass="btn btn-primary" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShow3}
                            Buttontarget="#offcanvasWithBothOptions" Buttoncontrols="offcanvasWithBothOptions">Enable both scrolling &amp;
                            backdrop</SpkButton>
                        <Offcanvas show={show3} onHide={handleClose3} backdrop={true} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose3}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <ul className="list-group list-group-flush mb-0">
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ul>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <div className="col-xl-12">
                    <ShowCode title="Placement" customCardClass="custom-card" customCardBodyClass="" reactCode={offcanvas5}>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShowt}
                            Buttontarget="#offcanvasTop" Buttoncontrols="offcanvasTop">Toggle top
                            offcanvas</SpkButton>
                        <Offcanvas placement='top' show={showt} onHide={handleCloset} className="offcanvas-top" tabIndex="-1" id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                            </Offcanvas.Header>
                            <div className="px-4">
                                ...
                            </div>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShowr}
                            Buttontarget="#offcanvasRight" Buttoncontrols="offcanvasRight">Toggle right
                            offcanvas</SpkButton>
                        <Offcanvas placement='end' show={showr} onHide={handleCloser} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleCloser}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body p-0">
                                <div>
                                    <SpkListgroup Variant="flush" CustomClass="mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={handleShowb}
                            Buttontarget="#offcanvasBottom" Buttoncontrols="offcanvasBottom">Toggle
                            bottom
                            offcanvas</SpkButton>
                        <Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" small">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </div>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default Offcanvass;
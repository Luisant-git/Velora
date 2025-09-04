import  { Fragment, useState } from "react";
import { Card, Col, Form, ListGroup, Modal, Nav, Row, Tab } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkListgroup from "../../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import Pageheader from "../../../../components/page-header/pageheader";
import png21 from "../../../../assets/images/ecommerce/png/21.png"
import png22 from "../../../../assets/images/ecommerce/png/22.png"
import png24 from "../../../../assets/images/ecommerce/png/24.png"
import png26 from "../../../../assets/images/ecommerce/png/26.png"
import png27 from "../../../../assets/images/ecommerce/png/27.png"
import png9 from "../../../../assets/images/ecommerce/png/9.png"
import png7 from "../../../../assets/images/ecommerce/png/7.png"

const Checkout = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [key, setKey] = useState('first');

    const handleTabSelect = (selectedKey: any) => {
        setKey(selectedKey);
    };
    const handleNext = () => {
        switch (key) {
            case 'first':
                setKey('second');
                break;
            case 'second':
                setKey('third');
                break;
            case 'third':
                setKey('fourth');
                break;
            default:
                break;
        }
    };

    const handlePrevious = () => {
        switch (key) {
            case 'second':
                setKey('first');
                break;
            case 'third':
                setKey('second');
                break;
            case 'fourth':
                setKey('third');
                break;
            default:
                break;
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Checkout" activepage="Checkout " />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: Row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Body className=" product-checkout">
                            <Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleTabSelect}>
                                <Nav className="nav-tabs tab-style-8 scaleX d-sm-flex d-block justify-content-around border border-dashed border-bottom-0 bg-light rounded-top" id="myTab1" role="tablist">
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="first" className="p-3" id="order-tab" data-bs-toggle="tab"
                                            data-bs-target="#order-tab-pane" type="button" role="tab"
                                            aria-controls="order-tab" aria-selected="true"><i
                                                className="ri-truck-line me-2 align-middle"></i>Shipping</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="second" className="p-3" id="confirmed-tab" data-bs-toggle="tab"
                                            data-bs-target="#confirm-tab-pane" type="button" role="tab"
                                            aria-controls="confirmed-tab" aria-selected="false"><i
                                                className="ri-user-3-line me-2 align-middle"></i>Personal Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="third" className="p-3" id="shipped-tab" data-bs-toggle="tab"
                                            data-bs-target="#shipped-tab-pane" type="button" role="tab"
                                            aria-controls="shipped-tab" aria-selected="false"><i
                                                className="ri-bank-card-line me-2 align-middle"></i>Payment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="fourth" className="p-3" id="delivered-tab" data-bs-toggle="tab"
                                            data-bs-target="#delivery-tab-pane" type="button" role="tab"
                                            aria-controls="delivered-tab" aria-selected="false"><i
                                                className="ri-checkbox-circle-line me-2 align-middle"></i>Complete Order</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="border border-dashed" id="myTabContent">
                                    <Tab.Pane eventKey="first" className="fade border-0 p-0" id="order-tab-pane" role="tabpanel"
                                        aria-labelledby="order-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                                            <div className="row gy-3 mb-4">
                                                <p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
                                                <Col xl={6}>
                                                    <div className="form-check shipping-method-container mb-0">
                                                        <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input" defaultChecked />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md">
                                                                        <img src={png21} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                                    <p className="mb-0 fw-semibold">UPS</p>
                                                                    <p className="text-muted fs-11 mb-0">Delivered By 11,May 2024</p>
                                                                </div>
                                                                <div className="fw-semibold me-sm-5 me-0">
                                                                    $9.99
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="form-check shipping-method-container mb-0">
                                                        <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input" />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md">
                                                                        <img src={png22} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                                    <p className="mb-0 fw-semibold">USPS</p>
                                                                    <p className="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
                                                                </div>
                                                                <div className="fw-semibold me-sm-5 me-0">
                                                                    $10.49
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                <div>Shipping Address :</div>
                                                <div className="mt-sm-0 mt-2">
                                                    <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Size="sm" Buttontoggle="modal" Buttontarget="#modal-new-address"><i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address</SpkButton>
                                                    <Modal show={show} size="lg" centered onHide={handleClose} className="modal fade" id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address">
                                                            <Modal.Header>
                                                                <h6 className="modal-title" id="staticBackdropLabel">New Address
                                                                </h6>
                                                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <div className="row gy-3">
                                                                    <Col xl={6}>
                                                                        <Form.Label htmlFor="fullname-new" className="">Full Name</Form.Label>
                                                                        <Form.Control type="text" className="" id="fullname-new" placeholder="Full Name" />
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <Form.Label htmlFor="email-new" className="">Email</Form.Label>
                                                                        <Form.Control type="email" className="" id="email-new" placeholder="email" />
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <Form.Label htmlFor="phonenumber-new" className="">Phone Number</Form.Label>
                                                                        <Form.Control type="number" className="" id="phonenumber-new" placeholder="Phone" />
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <Form.Label htmlFor="address-new" className="">Address</Form.Label>
                                                                        <Form.Control type="text" className="" id="address-new" placeholder="Address" />
                                                                    </Col>
                                                                    <Col xl={12}>
                                                                        <Row>
                                                                            <Col xl={3}>
                                                                                <Form.Label htmlFor="pincode-new" className="">Pincode</Form.Label>
                                                                                <Form.Control type="number" className="" id="pincode-new" placeholder="Pincode" />
                                                                            </Col>
                                                                            <Col xl={3}>
                                                                                <Form.Label htmlFor="city-new" className="">City</Form.Label>
                                                                                <Form.Control type="text" className="" id="city-new" placeholder="City" />
                                                                            </Col>
                                                                            <Col xl={3}>
                                                                                <Form.Label htmlFor="state-new" className="">State</Form.Label>
                                                                                <Form.Control type="text" className="" id="state-new" placeholder="State" />
                                                                            </Col>
                                                                            <Col xl={3}>
                                                                                <Form.Label htmlFor="country-new" className="">Country</Form.Label>
                                                                                <Form.Control type="text" className="" id="country-new" placeholder="Country" />
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </div>
                                                            </Modal.Body>
                                                            <div className="modal-footer">
                                                                <SpkButton Buttonvariant="light" Buttontype="button" Buttondismiss="modal" onClickfunc={handleClose}>Close</SpkButton>
                                                                <SpkButton Buttonvariant="success" Buttontype="button">Save Address</SpkButton>
                                                            </div>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col xl={6}>
                                                    <div className="card custom-card card-style-6 border shadow-none mb-xl-0">
                                                        <Card.Body className=" p-3">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked />
                                                                <label className="form-check-label cursor-pointer" htmlFor="address1">Set as Default</label>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="flex-grow-1">
                                                                    <h6 className="fs-16 mb-0 fw-semibold">My Home Address</h6>
                                                                </div>
                                                                <a className="btn btn-primary btn-sm"><i className="ri-edit-2-line"></i> Change</a>
                                                            </div>
                                                            <h6 className="mb-1">Victoria Gracie</h6>
                                                            <p className="mb-1 fw-500 fs-13">victoriagracie@jinno.mail</p>
                                                            <p className="mb-2 fw-500 fs-13">+05-554-874113</p>
                                                            <p className="mb-0">
                                                                H.No: 48A-1B/C451, Smart Avenue,Coolin Street,
                                                                Opp. NG Super Mart, 57016, Canada
                                                            </p>
                                                        </Card.Body>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="card custom-card card-style-6 border shadow-none mb-0">
                                                        <Card.Body className=" p-3">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address2" name="default-address" />
                                                                <label className="form-check-label cursor-pointer" htmlFor="address2">Set as Default</label>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                                        <h6 className="fs-16 mb-0 fw-semibold">Work Place Address</h6>
                                                                    </div>
                                                                </div>
                                                                <Link to="#!" className="btn btn-primary btn-sm"><i className="ri-edit-2-line"></i> Change</Link>
                                                            </div>
                                                            <h6 className="mb-1">Victoria Gracie</h6>
                                                            <p className="mb-1 fw-500 fs-13">victoriagracie@jinno.mail</p>
                                                            <p className="mb-2 fw-500 fs-13">+05-554-874113</p>
                                                            <p className="mb-0">
                                                                Sunset Plaza, 5th Floor, Suite No: 502, Ocean Avenue,, Seaview Heights, Sunnydale, CA 90210, United States
                                                            </p>
                                                        </Card.Body>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-end" onClick={handleNext}>
                                            <SpkButton Buttonvariant="primary1-light" Id="personal-details-trigger">Personal Details<i className="ri-user-3-line ms-2 align-middle d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="fade border-0 p-0" id="confirm-tab-pane"
                                        role="tabpanel" aria-labelledby="confirm-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                <div>Personal Details :</div>
                                            </div>
                                            <div className="row gy-3">
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="firstname-personal" className="">First Name</Form.Label>
                                                    <Form.Control type="text" className="" id="firstname-personal" placeholder="First Name" defaultValue="Victoria " />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="lastname-personal" className="">Last Name</Form.Label>
                                                    <Form.Control type="text" className="" id="lastname-personal" placeholder="Last Name" defaultValue="Gracie" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="email-personal" className="">Email</Form.Label>
                                                    <Form.Control type="email" className="" id="email-personal" placeholder="victoriagracie@jinno.mail" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="phoneno-personal" className="">Phone no</Form.Label>
                                                    <Form.Control type="text" className="" id="phoneno-personal" placeholder="554-874113" defaultValue="" />
                                                </Col>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                            <SpkButton Buttonvariant="primary-light" Id="back-shipping-trigger" onClickfunc={handlePrevious}><i className="ri-truck-line me-2 align-middle d-inline-block"></i>Back To Shipping</SpkButton>
                                            <SpkButton Buttonvariant="primary1-light" Customclass="mt-sm-0 mt-2" Id="payment-trigger" onClickfunc={handleNext}>Continue To Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="fade border-0 p-0" id="shipped-tab-pane" role="tabpanel"
                                        aria-labelledby="shipped-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                                            <Row>
                                                <Col xl={12}>
                                                    <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                        <div>Payment Details :</div>
                                                    </div>
                                                    <div className="mb-3 d-sm-flex d-block gap-3" role="group" aria-label="Basic radio toggle button group">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions3" defaultValue="Paymentoptions3" defaultChecked />
                                                            <label className="form-check-label" htmlFor="Paymentoptions3">Credit/Debit Card</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions1" defaultValue="Paymentoptions1" />
                                                            <label className="form-check-label" htmlFor="Paymentoptions1">C.O.D (Cash on delivery)</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions2" defaultValue="Paymentoptions2" />
                                                            <label className="form-check-label" htmlFor="Paymentoptions2">UPI Payment</label>
                                                        </div>
                                                    </div>
                                                    <div className="row gy-3 mb-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="payment-card-number" className="">Card Number</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="payment-card-name" className="">Name On Card</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-cardexpiry-date" className="">Expiration Date</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-cvv" className="">CVV</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-security" className="">O.T.P</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                            <label htmlFor="payment-security" className="form-label mt-1 mb-0 text-danger fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                                <label className="form-check-label" htmlFor="payment-card-save">
                                                                    Save this card
                                                                </label>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                    <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                        <div>Saved Cards :</div>
                                                    </div>
                                                    <div className="row gy-3">
                                                        <Col xl={6}>
                                                            <div className="form-check payment-card-container mb-0">
                                                                <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked />
                                                                <div className="form-check-label">
                                                                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div className="me-2 lh-1">
                                                                            <span className="avatar avatar-md">
                                                                                <img src={png26} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <div className="form-check payment-card-container mb-0">
                                                                <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input" />
                                                                <div className="form-check-label">
                                                                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div className="me-2 lh-1">
                                                                            <span className="avatar avatar-md">
                                                                                <img src={png27} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                            <SpkButton Buttonvariant="primary-light" Id="back-personal-trigger" onClickfunc={handlePrevious}><i className="ri-user-3-line me-2 align-middle d-inline-block"></i>Back To Personal Info</SpkButton>
                                            <SpkButton Buttonvariant="primary1-light" Customclass="mt-sm-0 mt-2" Id="continue-payment-trigger" onClickfunc={handleNext}>Continue Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="fade border-0 p-0" id="delivery-tab-pane" role="tabpanel"
                                        aria-labelledby="delivery-tab-pane" tabIndex={0}>
                                        <div className="p-3 checkout-payment-success my-3">
                                            <div className="mb-4">
                                                <h5 className="text-success fw-semibold">Payment Successful...</h5>
                                            </div>
                                            <div className="mb-4">
                                                <img src={png24} alt="" />
                                            </div>
                                            <div className="mb-4">
                                                <p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <a className="link-primary1" href="#!"><u>Track Order</u></a></p>
                                                <p className="text-muted">Thankyou for shopping with us.</p>
                                            </div>
                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title me-1">Order Summary</div><SpkBadge variant="primary-transparent" Customclass="rounded-pill">02</SpkBadge>
                        </div>
                        <Card.Body className=" p-0">
                            <SpkListgroup as="ul" CustomClass="mb-0 border-0 rounded-0">
                                <ListGroup.Item as="li" className="p-3 border-top-0">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <span className="avatar avatar-lg bg-light me-2">
                                            <img src={png9} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <p className="mb-0 fw-semibold">Versatile Hoodie</p>
                                            <p className="mb-0 text-muted fs-12">Quantity : 2  <SpkBadge variant="success-transparent" Customclass="ms-3">30% Off</SpkBadge></p>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-end">
                                                <Link to="#!">
                                                    <i className="ri-close-line fs-16 text-muted"></i>
                                                </Link>
                                            </p>
                                            <p className="mb-0 fs-14 fw-semibold">$189<span className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>$329</s></span></p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="p-3  border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <span className="avatar avatar-lg bg-light me-2">
                                            <img src={png7} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <p className="mb-0 fw-semibold">Leather Hand Bag</p>
                                            <p className="mb-0 text-muted fs-12">Quantity : 1  <SpkBadge variant="success-transparent" Customclass="ms-3">10% Off</SpkBadge></p>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-end">
                                                <Link to="#!">
                                                    <i className="ri-close-line fs-16 text-muted"></i>
                                                </Link>
                                            </p>
                                            <p className="mb-0 fs-14 fw-semibold">$187<span className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>$139</s></span></p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </SpkListgroup>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="fs-12 fw-semibold bg-primary-transparent badge badge-md rounded">SPRUKO25</div>
                                    <div className="text-success">COUPON APPLIED</div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Sub Total</div>
                                    <div className="fw-semibold fs-14">$318</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Discount</div>
                                    <div className="fw-semibold fs-14 text-success">10% - $31.8</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted">Delivery Charges</div>
                                    <div className="fw-semibold fs-14 text-danger">- $29</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted">Service Tax (18%)</div>
                                    <div className="fw-semibold fs-14">- $45.29</div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-15">Total :</div>
                                    <div className="fw-semibold fs-16 text-dark"> $1,387</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}
        </Fragment>
    )
};

export default Checkout;
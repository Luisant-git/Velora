import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"
const Screencover = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

    return (
        <Fragment>
            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={6} xl={7} className="">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-auto border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-3 text-center">Lock Screen</p>
                                    <div className="row gy-3">
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="create-confirmpassword" className="text-default">Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                            <div className="position-relative">
                                                <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-confirmpassword" placeholder="password" />
                                                <Link to="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
                                                ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check mb-0">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1" />
                                                    <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="d-grid mt-2">
                                            <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="btn btn-primary">Unlock</Link>
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Back to home ? <Link className="text-primary" to={`${import.meta.env.BASE_URL}dashboard/sales`}>Click Here</Link></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={5} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                <img src={desktopwhite} alt="" className="authentication-brand desktop-white" />
                            </Link>
                        </div>
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className="text-fixed-white mb-1 fw-medium">Welcome Henry!</h3>
                                <h6 className="text-fixed-white mb-3 fw-medium">Login to Your Account</h6>
                                <p className="text-fixed-white mb-1 op-6">Welcome to the Admin Dashboard. Please log in to securely manage your administrative tools and oversee platform activities. Your credentials ensure system integrity and functionality.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Screencover;
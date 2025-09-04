import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png"
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"
import { Helmet, HelmetProvider } from "react-helmet-async";

const Screenbasic = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

    return (
        <Fragment>
          <HelmetProvider>
          <Helmet>
                <body className="authentication-background"></body>
            </Helmet>
          </HelmetProvider>
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                        <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                        <img src={desktopwhite} alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-3 text-center">Lock Screen</p>
                                <div className="row gy-3">
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="create-confirmpassword" className="text-default">Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-confirmpassword" placeholder="password" />
                                            <Link  to="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
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
            </div>
        </Fragment>
    )
};

export default Screenbasic;
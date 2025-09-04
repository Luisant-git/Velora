import  { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png"
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"

const CreateBasic = () => {

    useEffect(() => {
        document.querySelector("body")?.classList.add("authentication-background");

        return () => {
            document.querySelector("body")?.classList.remove("authentication-background");

        }
    }, [])

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                        <img alt="logo" className="desktop-logo" src={desktoplogo} />
                                        <img alt="logo" className="desktop-white" src={desktopwhite} />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Create Password</p>
                                <p className="mb-4 text-muted fw-normal text-center fs-14">Hi Henry!</p>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Password <sup className="fs-12 text-danger">*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-password" placeholder="password" />
                                            <Link  to="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password <sup className="fs-12 text-danger">*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow2) ? 'text' : "password"} className="form-control" id="create-confirmpassword" placeholder="password" />
                                            <Link  to="#!" onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
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
                                </div>
                                <div className="d-grid mt-4">
                                    <SpkButton Buttonvariant="primary" Buttontype="button">Save Password</SpkButton>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Back to home ? <Link  className="text-primary" to={`${import.meta.env.BASE_URL}dashboard/sales`}>Click Here</Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
};

export default CreateBasic;
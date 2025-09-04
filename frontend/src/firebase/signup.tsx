import  { Fragment, useEffect, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from "../assets/images/media/apps/google.png"
import desktopwhite from "../assets/images/brand-logos/desktop-white.png"
import desktoplogo from "../assets/images/brand-logos/desktop-logo.png"
import SpkButton from '../@spk-reusable-components/reusable-uielements/spk-button';
const Signup = () => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("authentication-background");
    return () => {
        document.querySelector("body")?.classList.remove("authentication-background");
    }
}, [])

const [passwordshow, setpasswordshow] = useState(false);
const [passwordshow1, setpasswordshow1] = useState(false);
  return (
    <Fragment>
              <div className="container-lg">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-4 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                        <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                        <img src={desktopwhite}alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Sign Up</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome! Begin by creating your account.</p>
                                <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                    <SpkButton Buttontype="button" Buttonvariant="" Size="lg" Customclass="border d-flex align-items-center justify-content-center flex-fill btn-light">
                                        <span className="avatar avatar-xs">
                                            <img src={google} alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default">Signup with Google</span>
                                    </SpkButton>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <Form.Label htmlFor="signup-firstname" className="text-default">Full Name<sup className="fs-12 text-danger">*</sup></Form.Label>
                                        <Form.Control type="text" className="" id="signup-firstname" placeholder="full name" />
                                    </div>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Password</Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control" id="create-password" placeholder="password" />
                                            <Link to="#!" onClick={() => setpasswordshow(!passwordshow)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="signup-confirmpassword" className="text-default">Confirm Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-password" placeholder="confirm password" />
                                            <Link to="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label text-muted fw-normal fs-14" htmlFor="defaultCheck1">
                                            </label>
                                            By creating a account you agree to our
                                            <Link to={`${import.meta.env.BASE_URL}pages/terms-conditions`} className="text-success"><u>Terms & Conditions</u></Link> and <a className="text-success"><u>Privacy Policy</u></a>
                                        </div>
                                    </Col>
                                </div>
                                <div className="d-grid mt-4">
                                    <Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}dashboard/sales`}>Create Account</Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-in/sign-in-basic`} className="text-primary">Sign In</Link></p>
                                </div>
                                <div className="btn-list text-center mt-3">
                                    <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-icon">
                                        <i className="ri-facebook-line lh-1 align-center fs-17"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="primary1-light" Customclass="btn-icon">
                                        <i className="ri-twitter-x-line lh-1 align-center fs-17"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="primary2-light" Customclass="btn-icon">
                                        <i className="ri-instagram-line lh-1 align-center fs-17"></i>
                                    </SpkButton>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    </Fragment>
  )
}

export default Signup
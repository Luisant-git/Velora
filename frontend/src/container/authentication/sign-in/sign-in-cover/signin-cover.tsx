import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import google from "../../../../assets/images/media/apps/google.png"
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"
const Signincover = () => {

    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <Row className="row authentication authentication-cover-main mx-0">
                <Col xxl={6} xl={7} className="">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={7} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-auto border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Henry !</p>
                                    <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                        <SpkButton Buttontype="button" Buttonvariant="" Size="lg" Customclass="btn-light-ghost border d-flex align-items-center justify-content-center flex-fill bg-light">
                                            <span className="avatar avatar-xs flex-shrink-0">
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
                                            <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                            <Form.Control type="text" className="" id="signin-username" placeholder="user name" />
                                        </div>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="create-confirmpassword" className="text-default">Password</Form.Label>
                                            <sup className="fs-12 text-danger">*</sup>
                                            <Link to={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`} className="float-end fw-normal text-muted">Forget password ?</Link>
                                            <div className="position-relative">
                                                <Form.Control type={(passwordshow2) ? 'text' : "password"} className="" id="create-confirmpassword" placeholder="confirm password" />
                                                <Link to="#!" onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-muted"
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
                                        <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="btn btn-primary">Sign In</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Dont have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="text-primary">Sign Up</Link></p>
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

export default Signincover;
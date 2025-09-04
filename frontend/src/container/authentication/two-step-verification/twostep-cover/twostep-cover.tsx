import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"
const Twocover = () => {

    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });

    const handleChange = (currentId: string, nextId: any, value: string) => {
        setInputValues((prevValues: { one: string; two: string; three: string; four: string; }) => ({
            ...prevValues,
            [currentId]: value,
        }));
        const nextInput = document.getElementById(nextId);

        if (nextInput) {
            nextInput.focus();
        }
    };

    return (
        <Fragment>
            <Row className="row authentication two-step-verification authentication-cover-main mx-0">
                <Col xxl={6} xl={7} className="">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-auto border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-2 text-center">Verification Code</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center fs-12">Enter the 4 digit code sent to the moble number ******850.</p>
                                    <Row className="gy-3">
                                        <Col xl={12} className="mb-2">
                                            <div className="row">
                                                <div className="col-3 px-2">
                                                    <Form.Control type="text" className="text-center" id="one" value={inputValues.one}
                                                        onChange={(e) => handleChange("one", "two", e.target.value)} maxLength={1} />
                                                </div>
                                                <div className="col-3 px-2">
                                                    <Form.Control type="text" className="text-center" id="two" value={inputValues.two}
                                                        onChange={(e) => handleChange("two", "three", e.target.value)} maxLength={1} />
                                                </div>
                                                <div className="col-3 px-2">
                                                    <Form.Control type="text" className="text-center" id="three" value={inputValues.three}
                                                        onChange={(e) => handleChange("three", "four", e.target.value)} maxLength={1} />
                                                </div>
                                                <div className="col-3 px-2">
                                                    <Form.Control type="text" className="text-center" id="four" value={inputValues.four}
                                                        onChange={(e) => handleChange("four", null, e.target.value)} maxLength={1} />
                                                </div>
                                            </div>
                                            <div className="form-check mt-2">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fs-14" htmlFor="defaultCheck1">
                                                    Didn't recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mail-app`} className="text-primary ms-2 d-inline-block">Resend</Link>
                                                </label>
                                            </div>
                                        </Col>
                                        <div className="col-xl-12 d-grid mt-2">
                                            <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="btn btn-primary">Verify</Link>
                                        </div>
                                    </Row>
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

export default Twocover;
import  { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import desktopwhite from "../../../../assets/images/brand-logos/desktop-white.png"
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png"
const Twobasic = () => {

    useEffect(() => {
        document.querySelector("body")?.classList.add("authentication-background");

        return () => {
            document.querySelector("body")?.classList.remove("authentication-background");

        }
    }, [])

    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });

    const handleChange = (currentId: string, nextId: string | any, value: string) => {
        setInputValues((prevValues) => ({
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
            <div className="container-lg">
                <Row className="justify-content-center align-items-center authentication two-step-verification authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                        <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                        <img src={desktopwhite} alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Verification Code</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center fs-12">Enter the 4 digit code sent to the moble number ******850.</p>
                                <div className="row gy-3">
                                    <div className="col-xl-12 mb-2">
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
                                    </div>
                                    <div className="col-xl-12 d-grid mt-2">
                                        <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="btn btn-primary">Verify</Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
};

export default Twobasic;
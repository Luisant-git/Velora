import  { Fragment, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { DayCounter } from "../../../components/common/data/authentication/comingsoondata";
import { Link } from "react-router-dom";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png"

const ComingSoon = () => {

    useEffect(() => {
        document.querySelector("body")?.classList.add("coming-soon-main");

        return () => {
            document.querySelector("body")?.classList.remove("coming-soon-main");
        }
    }, [])

    return (
        <Fragment>
            <Row className="authentication coming-soon justify-content-center g-0 my-auto">
                <Col xxl={5} xl={5} lg={5} md={6} sm={7} className="col-11 my-auto">
                    <div className="authentication-cover rounded-3 overflow-hidden card custom-card border my-3">
                        <div className="aunthentication-cover-content text-center">
                            <div className="row justify-content-center align-items-center mx-0 g-0">
                                <Col xxl={10} xl={10} lg={10} md={12} sm={12} className="col-12">
                                    <div>
                                        <div className="mb-4"> <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                                            <img src={togglelogo} alt="" className="authentication-brand" /> </Link>
                                        </div>
                                        <h4 className="mb-2">Coming Soon</h4>
                                        <p className="mb-5 text-muted">Something incredible is on the horizon – stay tuned for the unveiling of a new experience!</p>
                                        <div className="input-group mb-5">
                                            <Form.Control type="email" className="form-control-lg bg-light" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttonvariant="primary" Size="lg" Buttontype="button" Id="button-addon2">Subscribe</SpkButton>
                                        </div>
                                        <DayCounter />
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
};

export default ComingSoon;
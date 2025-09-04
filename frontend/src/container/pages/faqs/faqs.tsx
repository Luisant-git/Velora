import  { Fragment } from "react";
import {  Card, Col, Form, Nav, Tab } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkAccordions from "../../../@spk-reusable-components/reusable-advancedui/spk-accordions";
import {  Generaldata, Securitydata, Themedata, Troubledata, Userdata  } from "../../../components/common/data/pages/faqsdata";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import media65 from "../../../assets/images/media/media-65.png"

const Faqs = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Faq's" activepage="Faq's" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-2 --> */}
            <div className="row justify-content-center">
                <Col xl={10}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <div className="row justify-content-center border-bottom border-block-end-dashed mb-4">
                                <Col xl={7}>
                                    <div className="py-2">
                                        <div className="text-center">
                                            <h3 className="text-primary1 mb-3">FAQs</h3>
                                            <h5 className="d-block">Require assistance? Here are some of our commonly asked questions!</h5>
                                            <p className="text-muted mb-2 px-4">Discover answers to common queries and find solutions to your concerns with our comprehensive list of frequently asked questions.</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <Tab.Container defaultActiveKey="generel">
                                <Nav className="nav-tabs nav-tabs-header mb-4 d-flex justify-content-center faq-nav gap-2" role="tablist">
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="generel" href="#general-settings" aria-selected="false" tabIndex={-1}><i className="ti ti-settings me-1 d-inline-block"></i>General Settings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="theme" href="#theme-customization" aria-selected="true"><i className="ti ti-palette me-1 d-inline-block"></i>Theme Customization</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="user" href="#user-management" aria-selected="false" tabIndex={-1}><i className="ti ti-user-cog me-1 d-inline-block"></i>User Management</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="security" href="#security-authentication" aria-selected="false" tabIndex={-1}><i className="ti ti-shield-lock me-1 d-inline-block"></i>Security and Authentication</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="trouble" href="#troubleshooting" aria-selected="false" tabIndex={-1}><i className="ti ti-headset me-1 d-inline-block"></i>Troubleshooting and Support</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="mb-4">
                                    <Tab.Pane eventKey="generel" className="border-0 p-0" id="general-settings"
                                        role="tabpanel">
                                        <SpkAccordions items={Generaldata} defaultActiveKey="1" accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="theme" className="border-0 p-0" id="theme-customization"
                                        role="tabpanel">
                                        <SpkAccordions items={Themedata} defaultActiveKey="1" accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="user" className="border-0 p-0" id="user-management"
                                        role="tabpanel">
                                        <SpkAccordions items={Userdata} defaultActiveKey="1" accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="security" className="border-0 p-0" id="security-authentication"
                                        role="tabpanel">
                                        <SpkAccordions items={Securitydata} defaultActiveKey="1" accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="trouble" className="border-0 p-0" id="troubleshooting"
                                        role="tabpanel">
                                        <SpkAccordions items={Troubledata} defaultActiveKey="1" accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                            <div className="row bg-light mx-0 justify-content-between align-items-center rounded">
                                <div className="col-sm-3 d-md-block d-none px-0">
                                    <img src={media65} alt="" className="img-fluid ps-3" />
                                </div>
                                <div className="col-md-8 px-0">
                                    <div className="p-3">
                                        <div>
                                            <h5 className="fw-semibold mb-2">Still Have Questions? We're Here to Help!</h5>
                                            <span className="d-block fs-12 text-muted">
                                                Contact our support team for personalized assistance. Your satisfaction is our priority!
                                                Write your question below and we'll get back to you shortly.
                                            </span>
                                            <div className="row gy-3 mt-3">
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="user-name" className="">Your Name</Form.Label>
                                                    <Form.Control type="text" className="" id="user-name" placeholder="Enter Your Name" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="user-email" className="">Email Id</Form.Label>
                                                    <Form.Control type="text" className="" id="user-email" placeholder="Enter Email" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="text-area" className="">Textarea</Form.Label>
                                                    <Form.Control as="textarea" defaultValue="" className="" placeholder="Enter your query here" id="text-area" rows={6} />
                                                </Col>
                                                <Col xl={12}>
                                                    <SpkButton Buttonvariant="primary" Customclass="waves-effect waves-light" Buttontype="button" Id="send">Send your question</SpkButton>
                                                </Col>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default Faqs;
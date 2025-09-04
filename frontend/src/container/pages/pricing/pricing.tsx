import  { Fragment, useState } from "react";
import { Card, Col, Nav, Tab } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { pricingsdata } from "../../../components/common/data/pages/pricingdata";
import SpkPricingcards from "../../../@spk-reusable-components/reusable-pages/spk-pricingcards";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

const Pricing = () => {

    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Pricing" activepage="Pricing" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <div className="row justify-content-center">
                <Col xl={9} id="convertable-pricing">
                    <div className="p-3 pt-0">
                        <div className="text-center">
                            <h3 className="text-primary1">Pricing</h3>
                            <h5 className="d-block">Plans that flex with your needs.</h5>
                            <p className="text-muted mb-4">Stay agile with plans that seamlessly adjust to your changing requirements, ensuring you always have the flexibility you need.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <div className="switcher-box">
                            <span className="pricing-time-span">Monthly</span>
                            <div className="switcher-pricing text-center">
                                <input type="checkbox" className="pricing-toggle" checked={!isMonthly}
                                    onChange={handleToggle} />
                            </div>
                            <span className="pricing-time-span">Annually <SpkBadge variant="primary2" Customclass="ms-1 rounded-pill">20% off</SpkBadge></span>
                        </div>
                    </div>
                    <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                        <div className="row d-flex align-items-center justify-content-center mb-5">
                            {pricingsdata.map((idx) => (
                                <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={Math.random()}>
                                    <SpkPricingcards card={idx} planType="monthly" />
                                </Col>
                            ))}
                        </div>
                    </div>
                    <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                        <div className="row d-flex align-items-center justify-content-center mb-5">
                            {pricingsdata.map((idx) => (
                                <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={Math.random()}>
                                    <SpkPricingcards card={idx} />
                                </Col>
                            ))}
                        </div>
                    </div>
                </Col>
            </div>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <div className="row justify-content-center">
                <Col xl={9}>
                    <Tab.Container defaultActiveKey="month">
                        <div className="text-center mb-5 mt-4">
                            <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                <Nav className="nav-pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="month" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly">Monthly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="year" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly">Annually <SpkBadge variant="primary2" Customclass="ms-1 rounded-pill">Save 10%</SpkBadge></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="month" className="p-0 border-0" id="pills-monthly">
                                <div className="card shadow-none overflow-hidden border-0">
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table table-bordered pricing-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="row" className="">
                                                            <div className="flex-grow-1 text-start">
                                                                <div className="mb-0 fw-medium fs-16">Plans with tailored features.</div>
                                                                <span className="op-8 fs-11">Unlock personalized features within your plans, designed specifically to suit your needs.</span>
                                                            </div>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Basic</div>
                                                            <div className="mb-4 fs-28 fw-medium">$3<span className="fs-13 op-5 ms-1">/ month</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Growth</div>
                                                            <div className="mb-4 fs-28 fw-medium">$19<span className="fs-13 op-5 ms-1">/ month</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="position-relative bg-primary-transparent">
                                                            <SpkBadge variant="primary1" Customclass="badge-lg rounded fw-semibold position-absolute end-0 me-2 mb-0">Popular</SpkBadge>
                                                            <div className="mb-0 fw-medium fs-16">Pro</div>
                                                            <div className="mb-4 fs-28 fw-medium">$25<span className="fs-13 op-5 ms-1">/ month</span></div>
                                                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Professional</div>
                                                            <div className="mb-4 fs-28 fw-medium">$39<span className="fs-13 op-5 ms-1">/ month</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border">
                                                        <td colSpan={5} className="pricing-feature fw-semibold text-primary2">Offered Features :</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Storage Space</td>
                                                        <td>5 GB</td>
                                                        <td>20 GB</td>
                                                        <td className="bg-primary-transparent">Unlimited</td>
                                                        <td>30GB</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Number of Users</td>
                                                        <td>Up to 5</td>
                                                        <td>Up to 5</td>
                                                        <td className="bg-primary-transparent">Unlimited</td>
                                                        <td>Customizable</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Customer Support</td>
                                                        <td>Email Support</td>
                                                        <td>Email and Phone Support</td>
                                                        <td className="bg-primary-transparent">Priority Email, Phone, and On-site Support</td>
                                                        <td>Email and Phone Support</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Advanced Analytics</td>
                                                        <td>Basic Analytics</td>
                                                        <td>Enhanced Analytics</td>
                                                        <td className="bg-primary-transparent">Custom Analytics Solutions</td>
                                                        <td>Enhanced Analytics</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Integrations</td>
                                                        <td>Limited Integrations</td>
                                                        <td>Custom Integrations</td>
                                                        <td className="bg-primary-transparent">More Integrations</td>
                                                        <td>None</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Security Features</td>
                                                        <td>Basic Security Measures	</td>
                                                        <td>Enterprise-level Security Measures</td>
                                                        <td className="bg-primary-transparent">Advanced Security Features</td>
                                                        <td>Enterprise-level Security Measures</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Customization</td>
                                                        <td>Limited Customization Options</td>
                                                        <td>Limited Customization Options</td>
                                                        <td className="bg-primary-transparent">More Customization Options</td>
                                                        <td>Tailored Solutions</td>
                                                    </tr>
                                                    <tr className="border">
                                                        <td colSpan={5} className="pricing-feature fw-semibold text-primary2">Functionality :</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">User Management</td>
                                                        <td>Basic User Management</td>
                                                        <td>Comprehensive User Management</td>
                                                        <td className="bg-primary-transparent">Advanced User Management</td>
                                                        <td>Comprehensive User Management</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Reporting Tools</td>
                                                        <td>Standard Reporting Tools</td>
                                                        <td>-</td>
                                                        <td className="bg-primary-transparent">Advanced Reporting Tools</td>
                                                        <td>Customized Reporting Solutions</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">API Access</td>
                                                        <td>Limited API Access</td>
                                                        <td>Limited API Access</td>
                                                        <td className="bg-primary-transparent">Full API Access</td>
                                                        <td>Extended API Access</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="year" className="p-0 border-0" id="pills-yearly">
                                <div className="card shadow-none border-0 reveal">
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table table-bordered pricing-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="row" className="">
                                                            <div className="flex-grow-1 text-start">
                                                                <div className="mb-0 fw-medium fs-16">Plans with tailored features.</div>
                                                                <span className="op-8 fs-11">Unlock personalized features within your plans, designed specifically to suit your needs.</span>
                                                            </div>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Basic</div>
                                                            <div className="mb-4 fs-28 fw-medium">$50<span className="fs-13 op-5 ms-1">/ Annum</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Growth</div>
                                                            <div className="mb-4 fs-28 fw-medium">$239<span className="fs-13 op-5 ms-1">/ Annum</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="position-relative bg-primary-transparent">
                                                            <SpkBadge variant="primary1" Customclass="badge-lg rounded fw-semibold position-absolute end-0 me-2 mb-0">Popular</SpkBadge>
                                                            <div className="mb-0 fw-medium fs-16">Pro</div>
                                                            <div className="mb-4 fs-28 fw-medium">$899<span className="fs-13 op-5 ms-1">/ Annum</span></div>
                                                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                        <th scope="row" className="">
                                                            <div className="mb-0 fw-medium fs-16">Professional</div>
                                                            <div className="mb-4 fs-28 fw-medium">$799<span className="fs-13 op-5 ms-1">/ Annum</span></div>
                                                            <SpkButton Buttonvariant="primary3-light" Buttontype="button" Customclass="d-grid w-100 btn-wave waves-effect waves-light">
                                                                <span className="ms-4 me-4">Sign Up</span>
                                                            </SpkButton>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border">
                                                        <td colSpan={5} className="pricing-feature fw-semibold text-primary2">Offered Features :</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Storage Space</td>
                                                        <td>15 GB</td>
                                                        <td>30 GB</td>
                                                        <td className="bg-primary-transparent">Unlimited</td>
                                                        <td>50GB</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Number of Users</td>
                                                        <td>Up to 10</td>
                                                        <td>Up to 10</td>
                                                        <td className="bg-primary-transparent">Unlimited</td>
                                                        <td>Unlimited</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Customer Support</td>
                                                        <td>Email Support</td>
                                                        <td>Email and Phone Support</td>
                                                        <td className="bg-primary-transparent">Priority Email, Phone, and On-site Support</td>
                                                        <td>Email and Phone Support</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Advanced Analytics</td>
                                                        <td>Basic Analytics</td>
                                                        <td>Enhanced Analytics</td>
                                                        <td className="bg-primary-transparent">Custom Analytics Solutions</td>
                                                        <td>Enhanced Analytics</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Integrations</td>
                                                        <td>Limited Integrations</td>
                                                        <td>-</td>
                                                        <td className="bg-primary-transparent">More Integrations</td>
                                                        <td>More Integrations</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Security Features</td>
                                                        <td>Basic Security Measures	</td>
                                                        <td>Enterprise-level Security Measures</td>
                                                        <td className="bg-primary-transparent">Advanced Security Features</td>
                                                        <td>Enterprise-level Security Measures</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Customization</td>
                                                        <td>Unlimited Customization Options</td>
                                                        <td>Unlimited Customization Options</td>
                                                        <td className="bg-primary-transparent">More Customization Options</td>
                                                        <td>Tailored Solutions</td>
                                                    </tr>
                                                    <tr className="border">
                                                        <td colSpan={5} className="pricing-feature fw-semibold text-primary2">Functionality :</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">User Management</td>
                                                        <td>Basic User Management</td>
                                                        <td>Comprehensive User Management</td>
                                                        <td className="bg-primary-transparent">Advanced User Management</td>
                                                        <td>Comprehensive User Management</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">Reporting Tools</td>
                                                        <td>Standard Reporting Tools</td>
                                                        <td>-</td>
                                                        <td className="bg-primary-transparent">Advanced Reporting Tools</td>
                                                        <td>Customized Reporting Solutions</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pricing-feature fw-semibold">API Access</td>
                                                        <td>Limited API Access</td>
                                                        <td>Limited API Access</td>
                                                        <td className="bg-primary-transparent">Full API Access</td>
                                                        <td>Extended API Access</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </div>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default Pricing;
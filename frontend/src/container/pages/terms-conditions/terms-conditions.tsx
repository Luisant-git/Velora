import  { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";

const TermsConditions = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Terms & Conditions" activepage="Terms & Conditions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row justify-content-center">
                <Col xl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-4">
                            <div className="mb-3 text-center">
                                <h3 className="mb-1 text-primary">Terms and Conditions</h3>
                                <div><span className="fw-semibold">Last Updated: </span>5 days ago</div>
                                <div><span className="fw-semibold">Effective Date:</span> 5 weeks from the present date</div>
                            </div>
                            <h6 className="fw-medium mb-3 text-primary">Agreement</h6>
                            <ul className="terms-list list-unstyled">
                                <li>
                                    <div className="fs-14 fw-medium">1. Agreement :</div>
                                    <p className="mb-0">
                                        By accessing and using this admin template, you agree to be bound by these Terms and Conditions ("Terms"). These Terms govern your use of the Template provided by our company, including any updates, enhancements, or modifications thereof.

                                        If you do not agree with any part of these Terms, you may not access or use the Template.
                                    </p>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">2. License :</div>
                                    <p className="mb-0">
                                        Our company grants you a limited, non-exclusive, non-transferable license to use the Template solely for your internal business purposes. This license is revocable at any time without notice and is subject to the restrictions set forth in these Terms.
                                    </p>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">3. Ownership :</div>
                                    <p className="mb-0">
                                        All rights, title, and interest in and to the Template, including any intellectual property rights, are owned by our company and its licensors. You acknowledge that you are obtaining only a limited license to use the Template and that our company retains all other rights.
                                    </p>
                                </li>
                            </ul>
                            <h6 className="fw-medium mb-3 text-primary">Privacy Policy</h6>
                            <ul className="terms-list list-unstyled mb-3">
                                <li>
                                    <div className="fs-14 fw-medium">1. Information Collection :</div>
                                    <ul className="mb-1">
                                        <li> We collect personal information such as name, email address, mailing address, phone number, and IP address when users voluntarily submit this information through our website or platform. We may also collect non-personal information such as browser type, operating system, and pages visited for analytical purposes.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">2.Information Usage :</div>
                                    <ul className="mb-1">
                                        <li> Personal information is used to provide and improve our services, respond to inquiries, and communicate with users.We do not sell, rent, or lease personal information to third parties unless required by law or with explicit consent from the user.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">3. Data Security :</div>
                                    <ul className="mb-1">
                                        <li> We take reasonable measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.These measures include encryption, firewalls, and regular security assessments.</li>
                                        <li> However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">4. Third-party Links:</div>
                                    <ul className="mb-1">
                                        <li> Our website may contain links to third-party sites, plugins, or services for additional functionality or resources.These third-party sites have their own privacy policies, and we are not responsible for the privacy practices or content of these sites.</li>
                                        <li> Users should review the privacy policies of these third-party sites before providing any personal information.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">5. Policy Updates:</div>
                                    <ul className="mb-1">
                                        <li> We reserve the right to update or change our Privacy Policy at any time. Users will be notified of any material changes to the Privacy Policy via email or by posting the updated policy on our website.Continued use of our website or services after such changes constitutes acceptance of the revised Privacy Policy.</li>
                                    </ul>
                                </li>
                            </ul>
                            <h6 className="fw-medium mb-3 text-primary">Termination</h6>
                            <ul className="terms-list list-unstyled mb-3">
                                <li>
                                    <div className="fs-14 fw-medium">1. Termination by User :</div>
                                    <ul className="mb-1">
                                        <li> Users may terminate their use of the admin template at any time by discontinuing access to the template and deleting any downloaded materials.
                                            Termination of use does not relieve users of any obligations or liabilities incurred prior to termination.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="fs-14 fw-medium">2.Termination by Provider :</div>
                                    <ul className="mb-1">
                                        <li> The template provider reserves the right to terminate or suspend access to the admin template at any time, with or without cause, and without prior notice.
                                            In the event of termination by the provider, users agree to cease all use of the template and delete any downloaded materials.</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="acceptance1" />
                                <label className="form-check-label text-muted fw-normal" htmlFor="acceptance1">
                                    I agree with the <span className="text-default fw-medium">Terms and Conditions</span>
                                </label>
                            </div>
                            <div className="form-check mb-0">
                                <input className="form-check-input" type="checkbox" value="" id="acceptance2" />
                                <label className="form-check-label text-muted fw-normal" htmlFor="acceptance2">
                                    I agree with the<span className="text-default fw-medium"> Privacy Policy</span>
                                </label>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-end">
                                <div className="btn btn-lg btn-primary1-light me-2">
                                    Decline
                                </div>
                                <div className="btn btn-lg btn-primary">
                                    Accept
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default TermsConditions;
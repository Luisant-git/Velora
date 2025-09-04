
import  { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkSwiperJs from "../../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { JobsSwiper } from "../../../../components/common/data/apps/jobs/jobdetailsdata";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import job2 from "../../../../assets/images/media/jobs/2.png"
const JobDetails = () => {

    const breakpoints = {
        350: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Details" activepage="Job Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="bg-primary-transparent">
                        <Card.Body className="">
                            <Card className=" custom-card overflow-hidden job-info-banner">
                            </Card>
                            <Card className=" custom-card job-info-data mb-2">
                                <Card.Body className="">
                                    <div className="d-flex flex-wrap align-items-top justify-content-between gap-2">
                                        <div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-lg border p-1">
                                                        <img src={job2} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h5 className="fw-medium mb-0 d-flex align-items-center"><Link to="#!" className="">Frontend Developer</Link></h5>
                                                    <Link to="#!" className="fs-12 text-muted"><i className="bi bi-building"></i> Spruko Technologies PRIVATE LIMITED</Link>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <p className="mb-1"><i className="bi bi-geo-alt me-1"></i>Bangalore, Karnataka</p>
                                                            <p><i className="bi bi-briefcase me-1"></i>2 - 4 Yrs Exp.</p>
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="mb-1"><i className="bi bi-coin me-1"></i><span className="fw-medium">25,000 - 35,000</span> / per month (+incentives)</p>
                                                            <p><i className="bi bi-mortarboard  me-1"></i>Graduate and Above</p>
                                                        </div>
                                                    </div>
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="info-transparent" Pill={true} Customclass="me-1"><i className="bi bi-clock me-1"></i>Full Time</SpkBadge>
                                                        <SpkBadge variant="primary2-transparent" Pill={true} Customclass="me-1"><i className="bi bi-briefcase me-1"></i>8 Openings</SpkBadge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <Link to="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Save" className="rounded-pill btn btn-icon btn-primary-light btn-wave btn-sm">
                                                <i className="ri-bookmark-line"></i>
                                            </Link>
                                            <p className="mb-0 mt-4 pt-3"><i className="bi bi-info-circle text-info" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="20 days left"></i> <span className="fw-medium">20 days left </span> to apply for this job</p>
                                            <div className="d-flex gap-2 flex-wrap mt-3 justify-content-end">
                                                <Link to="#!" className="btn mb-0 btn-primary"> Apply Now</Link>
                                                <Link to="#!" className="btn mb-0 btn-icon btn-primary1-light btn-wave">
                                                    <i className="ri-heart-line"></i>
                                                </Link>
                                                <Link to="#!" className="btn mb-0 btn-icon btn-primary2-light btn-wave me-0">
                                                    <i className="ri-share-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <h6 className="fw-medium">Job Description</h6>
                            <p className="op-9">We are seeking a skilled Frontend Developer to join our dynamic team. In this role, you will be responsible for implementing visual elements that users see and interact with in web applications. You will work closely with designers and backend developers to bridge the gap between graphical design and technical implementation, ensuring an optimized and responsive user experience.</p>
                            <p className="mb-4 op-9">As a Frontend Developer, you will use your expertise in HTML, CSS, and JavaScript frameworks to translate UI/UX design wireframes into high-quality code. You will collaborate with cross-functional teams to deliver scalable and maintainable frontend solutions that meet business objectives and user needs.</p>

                            <h6 className="fw-medium">Key Responsibilities</h6>
                            <ol className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                <li className="list-group-item border-0 py-1">Develop responsive web pages and web applications based on provided designs and specifications.</li>
                                <li className="list-group-item border-0 py-1">Collaborate with UX/UI designers and backend developers to deliver seamless user interfaces.</li>
                                <li className="list-group-item border-0 py-1">Optimize application performance and ensure cross-browser compatibility.</li>
                                <li className="list-group-item border-0 py-1">Implement front-end components and libraries using modern frameworks such as React, Angular, or Vue.js.</li>
                                <li className="list-group-item border-0 py-1">Conduct thorough testing of user interfaces to identify and fix UI issues and bugs.</li>
                            </ol>
                            <h6 className="fw-medium">Requirements</h6>
                            <ul className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                <li className="list-group-item border-0 py-1">Bachelor's degree in Computer Science, Engineering, or a related field, or equivalent practical experience.</li>
                                <li className="list-group-item border-0 py-1">Proven experience as a Frontend Developer or similar role, with a strong portfolio demonstrating frontend development skills.</li>
                                <li className="list-group-item border-0 py-1">Proficiency in HTML5, CSS3, JavaScript, and frontend frameworks/libraries (e.g., React, Angular, Vue.js).</li>
                                <li className="list-group-item border-0 py-1">Experience with version control systems (e.g., Git) and modern development workflows.</li>
                                <li className="list-group-item border-0 py-1">Understanding of responsive design principles and mobile-first approach.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card border shadow-none bg-primary-transparent border border-primary border-opacity-10">
                        <Card.Body className="">
                            <div className="row align-items-center">
                                <Col lg={6}>
                                    <h5 className="fw-medium mb-3"><i className="ri-briefcase-line me-2 p-2 bg-primary text-fixed-white fs-15 lh-1 align-middle rounded-circle"></i>Explore Job Opportunities</h5>
                                    <span className="text-muted mb-0 fs-14">Find exciting job opportunities that match your skills and interests. Join us to make a difference!</span>
                                </Col>
                                <Col lg={6} className="text-end">
                                    <Link to="#!" className="btn btn-primary btn-lg" role="button">
                                        <i className="ri-share-line me-2 align-middle d-inline-block"></i>Sign up Now
                                    </Link>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <div className="card-header">
                            <div className="card-title">Job Highlights</div>
                        </div>
                        <Card.Body className="">
                            <div className="mb-3 fs-14 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-info-transparent">
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                <span className="text-muted">Work Location</span>
                                <span className="ms-auto fw-medium">
                                    Bangalore
                                </span>
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-danger-transparent">
                                    <i className="ri-time-line"></i>
                                </span>
                                <span className="text-muted">Flexible Hours</span>
                                <span className="ms-auto fw-medium">
                                    9:00AM -6:00PM
                                </span>

                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-success-transparent">
                                    <i className="ri-cash-line"></i>
                                </span>
                                <span className="text-muted">Competitive Salary</span>
                                <span className="ms-auto fw-medium">
                                    35,000 +
                                </span>

                            </div>
                            <div className="mb-0 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-primary2-transparent">
                                    <i className="ri-award-line"></i>
                                </span>
                                <span className="text-muted">Employee Benefits</span>
                                <span className="ms-auto fw-medium">
                                    Award
                                </span>

                            </div>
                        </Card.Body>
                    </Card>
                    <div className="mb-1">
                        <h6 className="fw-medium mb-3">Related Jobs</h6>
                        <SpkSwiperJs slides={JobsSwiper} direction={'vertical'} slidesPerView={2} spaceBetween={5} breakpoint={breakpoints} autoplay={true} className="mySwiper swiper-related-jobs" />
                    </div>
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <h6 className="fw-medium mb-3">Subscribe to Job Alerts</h6>
                            <div className="input-group mb-3">
                                <Form.Control type="email" className="" placeholder="Your Email Address" aria-label="job-email" aria-describedby="job-subscribe" />
                                <SpkButton Buttonvariant="primary" Buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                            </div>
                            <label className="form-check-label">
                                By subscribing, you accept our <Link to="#!" className="text-success"><u>privacy policy</u></Link>.
                            </label>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    )
};

export default JobDetails;
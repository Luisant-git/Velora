import  { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkSwiperJs from "../../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SwiperComponent from "../../../../components/common/data/apps/jobs/candidatedata";
import face1 from "../../../../assets/images/faces/1.jpg"
import logo1 from "../../../../assets/images/company-logos/1.png"
import logo2 from "../../../../assets/images/company-logos/2.png"
import logo3 from "../../../../assets/images/company-logos/3.png"
import logo4 from "../../../../assets/images/company-logos/4.png"
import logo5 from "../../../../assets/images/company-logos/5.png"
import logo6 from "../../../../assets/images/company-logos/6.png"

const CandidateDetails = () => {

    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        398: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        399: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1434: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Candidate Details" activepage="Candidate Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card job-candidate-details">
                        <div className="candidate-bg-shape primary"></div>
                        <Card.Body className=" pt-5">
                            <div className="mb-3 lh-1 mt-4">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={face1} className="rounded-circle img-fluid shadow" alt="" />
                                </span>
                            </div>
                            <div className="d-flex gap-2 flex-wrap mb-3">
                                <div className="flex-fill">
                                    <h6 className="mb-1 fw-semibold"><Link to="#!"> Samantha  <SpkTooltips placement="top" title="Verified candidate">
                                        <i className="ri-check-line text-success fs-16"></i>
                                    </SpkTooltips>
                                    </Link></h6>
                                    <p className="mb-0 text-muted">UI/UX Designer</p>
                                    <div className="d-flex flex-wrap gap-2 align-items-center fs-12 text-muted">
                                        <p className="mb-0">Ratings : </p>
                                        <div className="min-w-fit-content ms-2">
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-half-fill"></i></span>
                                        </div>
                                        <Link to="#!" className="ms-1 min-w-fit-content text-muted">
                                            <span>(245)</span>
                                            <span>Ratings</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex fs-14 mt-3 gap-2 flex-wrap">
                                        <div>
                                            <p className="mb-1"><i className="ri-map-pin-line me-2 text-muted"></i>Silicon Valley, CA</p>
                                            <p className="mb-0"><i className="ri-briefcase-line me-2 text-muted"></i>3 Years Experience</p>
                                        </div>
                                        <div className="sm:ms-3">
                                            <p className="mb-1"><i className="ri-currency-line me-2 text-muted"></i>Annual Pay : <span className="fw-medium">$55,000</span> - <span className="fw-medium">$80,000</span></p>
                                            <p className="mb-0"><i className="ri-graduation-cap-line me-2 text-muted"></i>Graduate</p>
                                        </div>
                                        <div className="sm:ms-3">
                                            <p className="mb-1"><i className="ri-mail-line me-2 text-muted"></i>Mail : <span className="fw-medium">samantha@mail.com</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-list ms-auto">
                                    <Link to="#" className="btn btn-primary rounded-pill btn-wave waves-effect"><i className="ri-download-cloud-line me-1"></i> Download CV</Link>
                                    <Link to="#" className="btn btn-primary1-light rounded-pill btn-wave waves-effect waves-light align-middle">
                                        <i className="ri-heart-line lh-1 my-auto align-middle"></i> Add to wishlist
                                    </Link>
                                    <Link to="#" className="btn btn-icon btn-secondary-light rounded-pill btn-wave waves-effect waves-light align-middle me-0">
                                        <i className="ri-share-line fs-18 mb-1 lh-1 my-auto align-middle"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                <h6 className="mb-0">Availability:</h6>
                                <div className="popular-tags d-flex gap-2 flex-wrap">
                                    <SpkBadge Pill={true} variant="info-transparent" Customclass="fs-11"><i className="ri-remote-control-line me-1"></i>Full Time</SpkBadge>
                                    <SpkBadge Pill={true} variant="danger-transparent" Customclass="fs-11"><i className="ri-time-line me-1"></i>Immediate Joinee</SpkBadge>
                                    <SpkBadge Pill={true} variant="primary-transparent" Customclass="fs-11"><i className="ri-calendar-line me-1"></i>Flexible Schedule</SpkBadge>
                                </div>
                                <Link to="#" className="ms-auto text-secondary px-2 py-1 rounded-pill fs-12 bg-secondary-transparent"><i className="ri-chat-1-line me-1"></i> Message Now</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header className="">
                                    <div className="card-title">
                                        Skills
                                    </div>
                                </Card.Header>
                                <Card.Body className="">
                                    <div className="popular-tags d-flex gap-2 flex-wrap">
                                        <SpkBadge Pill={true} variant="primary2-transparent">HTML</SpkBadge>
                                        <SpkBadge Pill={true} variant="primary-transparent">CSS</SpkBadge>
                                        <SpkBadge Pill={true} variant="info-transparent">Javascript</SpkBadge>
                                        <SpkBadge Pill={true} variant="secondary-transparent">Angular</SpkBadge>
                                        <SpkBadge Pill={true} variant="success-transparent">React</SpkBadge>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header className="">
                                    <div className="card-title">
                                        Languages
                                    </div>
                                </Card.Header>
                                <Card.Body className="">
                                    <p className="mb-0 fs-14"><span className="fw-medium me-2">Known : </span>Hindi(Fluent), English, Spanish(Intermediate), Telugu</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Candidate Profile Information
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0 candidate-edu-timeline">
                            <div className="p-3 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Career Objective :</h5>
                                <div className="ms-4 ps-3">
                                    <p className="op-9">Passionate and creative UI/UX designer with a strong portfolio and proven track record in designing intuitive user interfaces. Committed to delivering high-quality user experiences through user-centric design principles.</p>
                                    <p className="mb-0 op-9">Seeking a challenging role in a dynamic company where I can contribute my skills in UI/UX design to create innovative and user-friendly digital products.</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <Row>
                                    <Col xl={7}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span> Education :</h5>
                                        <div className="ms-4 ps-3">
                                            <p className="fw-medium fs-14 mb-0">Bachelor of Science in Computer Science</p>
                                            <div className="d-flex gap-2 mb-1">
                                                <p className="mb-0">Dwayne University</p>
                                                <p className="mb-0 text-muted"><i className="ri-map-pin-line fs-12"></i> Nellore</p>
                                            </div>
                                            <p className="mb-3 text-muted"> (2020 Mar - 2024 Apr)</p>
                                            <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
                                            <div className="d-flex gap-2 mb-1">
                                                <p className="mb-0">Sprect College</p>
                                                <p className="mb-0 text-muted"><i className="ri-map-pin-line fs-12"></i> Warangal</p>
                                            </div>
                                            <p className="mb-0 text-muted"> (2017 Mar - 2020 Apr)</p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span> Certifications :</h5>
                                        <div className="ms-4 ps-3">
                                            <p className="fw-medium fs-14 mb-0">Web Development (3 Months)</p>
                                            <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                            <p className="fw-medium fs-14 mb-0">Python Development (6 Months)</p>
                                            <p className="mb-0">Dabre Services Pvt Ltd</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="p-3 border-bottom">
                                <Row>
                                    <Col xl={7}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-article-line fs-13"></i></span> Publications :</h5>
                                        <div className="ms-3">
                                            <ol className="list-group border-0 list-bullets">
                                                <li className="border-0 py-1"><span className="fw-medium">“The Evolution of User Experience Design,”</span> UX Design Journal, March 2023</li>
                                                <li className="border-0 py-1"><span className="fw-medium">“Designing for Accessibility in Web Applications,”</span> A11y Matters, June 2023</li>
                                                <li className="border-0 py-1"><span className="fw-medium">“Innovations in Mobile UI Design,”</span> Mobile Design Magazine, December 2023</li>
                                            </ol>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-movie-2-line fs-13"></i></span> Activities and Interests :</h5>
                                        <div className="ms-3">
                                            <ol className="list-group border-0 list-bullets">
                                                <li className="border-0 py-1">Active participant in local UI/UX design meetups</li>
                                                <li className="border-0 py-1">Volunteer at community-driven design workshops</li>
                                                <li className="border-0 py-1">Passionate about exploring new design trends</li>
                                            </ol>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="p-3">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-user-location-line fs-13"></i></span> References :</h5>
                                <div className="row ms-4">
                                    <Col xl={7}>
                                        <p><span className="fw-medium">Name : </span> Nicole Chiu</p>
                                        <p><span className="fw-medium">Designation : </span> Software Developer</p>
                                        <p className="mb-0"><span className="fw-medium mb-0">Company Name : </span> InnovateZ Solutions</p>
                                    </Col>
                                    <Col xl={5}>
                                        <p><span className="fw-medium">Mobile : </span> +91 7865443679</p>
                                        <p><span className="fw-medium">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="fw-medium">Location : </span> Hyderabad</p>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <div className="card-title">
                                Experience Overview
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0 candidate-edu-timeline">
                            <div className="p-3">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2 mb-3"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Experience :</h5>
                                <div className="ms-4 ps-3">
                                    <p className="fw-medium fs-14 mb-0">UI/UX Designer (2019 Mar - Present)</p>
                                    <div className="d-flex gap-2">
                                        <p>InnovateZ Solutions</p>
                                        <p className="mb-0 fs-12 text-muted"><i className="ri-map-pin-line fs-12"></i> Kondapur, Hyderabad</p>
                                    </div>
                                    <p className="fw-medium mb-2">Responsibilities :</p>
                                    <ol className="list-group border-0 list-bullets">
                                        <li className="border-0 py-1">Lead the design efforts for innovative and user-friendly interfaces across multiple projects.</li>
                                        <li className="border-0 py-1">Collaborate with cross-functional teams to translate business requirements into intuitive designs.</li>
                                        <li className="border-0 py-1">Conduct user research, usability testing, and gather feedback to iterate designs.</li>
                                    </ol>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-4">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <div className="card-title">
                                Tools Used
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            <span className="avatar me-2 avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo1} alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo2} alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo3} alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo4} alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo5} alt="" />
                            </span>
                            <span className="avatar avatar-rounded bg-primary-transparent shadow-sm border border-primary border-opacity-25 shadow-sm border p-2">
                                <img src={logo6} alt="" />
                            </span>
                        </Card.Body>
                    </Card>
                    <div className="mb-3">
                        <h6 className="fw-medium mb-3">Related Profiles</h6>
                        <SpkSwiperJs direction={'vertical'} slidesPerView={2} spaceBetween={5} breakpoint={breakpoints1} slides={SwiperComponent}
                         autoplay={true} 
                         className="mySwiper swiper-vertical overflow-hidden swiper-related-profiles" />
                    </div>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <div className="card-title">
                                Personal Information
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table table-responsive">
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Full Name</span>
                                        </td>
                                        <td>: Iliana Lilly</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Email</span>
                                        </td>
                                        <td>: brendra@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">D.O.B</span>
                                        </td>
                                        <td>: 13 Jan 2008</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Gender</span>
                                        </td>
                                        <td>: Female</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Age</span>
                                        </td>
                                        <td>: 35</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Mobile </span>
                                        </td>
                                        <td>: +91 7865343874</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Marital Status </span>
                                        </td>
                                        <td>: Unmarried</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Address </span>
                                        </td>
                                        <td>: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                                    </tr>
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <p className="fs-15 mb-0 me-4 fw-medium">Social :</p>
                                <div className="btn-list mb-0 d-flex gap-1 flex-wrap">
                                    <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-xxl-0">
                                        <i className="ri-facebook-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-xxl-0">
                                        <i className="ri-twitter-x-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="warning-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-xxl-0">
                                        <i className="ri-instagram-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="success-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-xxl-0">
                                        <i className="ri-github-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon waves-effect waves-light mb-xxl-0">
                                        <i className="ri-youtube-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <h6 className="fw-medium mb-3">Subscribe to Job Alerts</h6>
                            <div className="input-group mb-3">
                                <Form.Control type="email" className="" placeholder="Your Email Address" aria-label="job-email" aria-describedby="job-subscribe" />
                                <SpkButton Buttonvariant="primary" Buttontype="button" Id="job-subscribe">
                                    Subscribe
                                </SpkButton>
                            </div>
                            <label className="form-check-label">
                                By subscribing, you accept our <Link to="#!" className="text-success"><u>privacy policy</u></Link>.
                            </label>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    )
};

export default CandidateDetails;
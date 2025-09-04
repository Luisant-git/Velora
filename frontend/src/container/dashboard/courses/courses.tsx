import  { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import {Coursedata, CourseSwiper, Courselist, Coursetop, Earningsoptions, Earningsseries, Professordata, UpcomingTasks } from "../../../components/common/data/dashboard/coursesdata";
import SpkCoursecardcomponent from "../../../@spk-reusable-components/reusable-dashboards/spk-cousecard";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import { Link } from "react-router-dom";
import SpkSwiperJs from "../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import media81 from "../../../assets/images/media/media-81.png"
import media13 from "../../../assets/images/media/media-13.jpg"
import media14 from "../../../assets/images/media/media-14.jpg"
import media12 from "../../../assets/images/media/media-12.jpg"
import face1 from "../../../assets/images/faces/1.jpg"
import face11 from "../../../assets/images/faces/11.jpg"
import face6 from "../../../assets/images/faces/6.jpg"

const Courses = () => {

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Courses" activepage="Courses" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::Row-1 --> */}
            <Row>
                <Col xxl={7}>
                    <Row>
                        {Coursedata.map((idx) => (
                            <Col sm={6} xl={3} key={Math.random()}>
                                <SpkCoursecardcomponent cardClass="overflow-hidden" total={idx.total} svgIcon={idx.svgicon} icon={idx.icon} color={idx.color} color1={idx.color1} percent={idx.percent} price={idx.price} inc={idx.inc} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card course-main overflow-hidden cover-image bg-cover bg-primary">
                        <Card.Body className="p-4">
                            <div className="row justify-content-between">
                                <Col xl={7} md={8}>
                                    <h5 className="fw-medium mb-2 text-fixed-white">Welcome Back, Henry &#128075; </h5>
                                    <span className="text-fixed-white d-block mb-2 op-7 me-1">You've reached 90% of your goal this month! Keep going and boost your skills with courses.</span>
                                    <SpkButton Buttonvariant="primary1" Buttontype="button" Customclass="btn-w-md mt-2">View Courses</SpkButton>
                                </Col>
                                <Col xl={3} md={4} className="text-end">
                                    <img src={media81} alt="" className="img-fluid banner10-img" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Upcoming Tasks
                            </div>
                            <div>
                                <SpkButton Buttonvariant="light" Size="sm" Buttontype="button">View All</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled mb-0 Upcoming-courses-schedule">
                                {UpcomingTasks.map((course) => (
                                    <li className="list-item" key={course.id}>
                                        <div className="d-sm-flex align-items-center justify-content-between gap-1 flex-wrap">
                                            <div className="ms-3 mb-1 mb-sm-0 ps-1 course-schedule">
                                                <p className="fw-medium mb-sm-1 mb-0">{course.title}</p>
                                                <span className="text-muted">{course.date}</span>
                                            </div>
                                            <div className="min-w-fit-content d-flex align-items-center text-muted fs-12">
                                                <span><i className="fe fe-clock me-1 fs-12"></i></span>
                                                <span>{course.start}</span>
                                                <span className="mx-2 text-muted">-</span>
                                                <span>{course.end}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Revenue Statistics</div>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div id="earning"><Spkapexcharts chartOptions={Earningsoptions} chartSeries={Earningsseries} type="line" width={"100%"} height={344} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Categories
                            </div>
                            <div>
                                <SpkButton Buttonvariant="light" Size="sm" Buttontype="button">View All</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="">
                            <SpkListgroup as="ul" CustomClass="d-flex flex-column">
                                {Coursetop.map((idx) => (
                                    <ListGroup.Item as="li" key={Math.random()} className={`p-0 ${idx.class} border-0 text-default`}>
                                        <Link to="#!" className="w-100">
                                            <div className="d-flex align-items-center">
                                                <span className={`avatar rounded-sm avatar-md bg-${idx.color}-transparent p-3`}><i className={`ri-${idx.icon} fs-20 leading-none`}></i></span>
                                                <div className="flex-auto ms-3">
                                                    <p className="fs-14 fw-medium mb-0">{idx.data}</p>
                                                    <p className="fs-12 text-muted mb-0">{idx.data1}</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fs-14 text-default fw-medium">{idx.data2}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-2 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Courses
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-icons btn-sm text-muted no-caret" Menuclass="dropdown-menu-end" Align="end" IconClass="fe fe-more-vertical" Icon={true}>
                                <Dropdown.Item as="li" className="border-bottom" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item as="li" className="border-bottom" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                        <Card.Body className="">
                            <ul className="d-flex flex-column list-unstyled mb-0 popular-course">
                                <li className="text-muted mb-3">
                                    <div className="d-sm-flex align-items-start w-100">
                                        <Link to="#!" className="pe-4 inline-block">
                                            <img src={media13} alt="img" className="avatar avatar-xl rounded-2" />
                                        </Link>
                                        <div className="flex-grow-1 fw-medium">
                                            <div className="d-flex align-items-center" title="Instructor">
                                                <Link to="#!" className="pe-2">
                                                    <img src={face1} alt="img" className="avatar avatar-xs rounded-pill" />
                                                </Link>
                                                <Link to="#!" className="flex-grow-1 text-default op-8">Natasha
                                                    Sil</Link>
                                                <Link to="#!" className=" d-block mb-1 fw-normal badge bg-primary3-transparent" title="Category"><i className="ri-price-tag-3-line "></i> UI/UX</Link>
                                            </div>
                                            <Link to="#!" className=" d-block mb-2 fw-medium">
                                                Mastering CSS Pseudo-classes: From Basics to Advanced Techniques.</Link>
                                            <div className="d-md-flex justify-content-between align-items-center">
                                                <div className="min-w-fit fs-12 text-muted op-8 d-inline-flex">
                                                    <span className="me-2 my-auto">
                                                        <i className="ri-eye-line"></i>  2,189 Views
                                                    </span>
                                                </div>
                                                <div className="min-w-fit fs-11 text-default d-inline-flex">
                                                    <span>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-half-fill text-warning"></i>(4.2)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className=" text-muted mb-3">
                                    <div className="d-sm-flex align-items-start w-100">
                                        <Link to="#!" className="pe-4 inline-block">
                                            <img src={media14} alt="img" className="avatar avatar-xl rounded-2" />
                                        </Link>
                                        <div className="flex-grow-1 fw-medium">
                                            <div className="d-flex align-items-center" title="Instructor">
                                                <Link to="#!" className="pe-2">
                                                    <img src={face6} alt="img" className="avatar avatar-xs rounded-pill" />
                                                </Link>
                                                <Link to="#!" className="flex-grow-1 text-default op-8">Catalina Keira
                                                </Link>
                                                <Link to="#!" className=" d-block mb-1 fw-normal badge bg-primary2-transparent" title="Category"><i className="ri-price-tag-3-line "></i> Marketing</Link>
                                            </div>
                                            <Link to="#!" className=" d-block mb-2 fw-medium">
                                                Marketing Essentials: Understanding its Role in Business Success.</Link>
                                            <div className="d-md-flex justify-content-between align-items-center">
                                                <div className="min-w-fit fs-12 text-muted op-8 d-inline-flex">
                                                    <span className="me-2 my-auto">
                                                        <i className="ri-eye-line"></i>   1,116 Views
                                                    </span>
                                                </div>
                                                <div className="min-w-fit fs-11 text-default d-inline-flex">
                                                    <span>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-half-fill text-warning"></i>(4.3)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className=" text-muted mb-1">
                                    <div className="d-sm-flex align-items-start w-100">
                                        <Link to="#!" className="pe-4 inline-block">
                                            <img src={media12} alt="img" className="avatar avatar-xl rounded-2" />
                                        </Link>
                                        <div className="flex-grow-1 fw-medium">
                                            <div className="d-flex align-items-center" title="Instructor">
                                                <Link to="#!" className="pe-2">
                                                    <img src={face11} alt="img" className="avatar avatar-xs rounded-pill" />
                                                </Link>
                                                <Link to="#!" className="flex-grow-1 text-default op-8">Telsko
                                                    William</Link>
                                                <Link to="#!" className=" d-block mb-1 fw-normal badge bg-primary1-transparent" title="Category"><i className="ri-price-tag-3-line "></i> Python</Link>
                                            </div>
                                            <Link to="#!" className=" d-block mb-2 fw-medium">
                                                Python Mastery: Shallow Copy vs. Deep Copy and Practical Techniques.</Link>
                                            <div className="d-md-flex justify-content-between align-items-center">
                                                <div className="min-w-fit fs-12 text-muted op-8 d-inline-flex">
                                                    <span className="me-2 my-auto">
                                                        <i className="ri-eye-line"></i>   2,245 Views
                                                    </span>
                                                </div>
                                                <div className="min-w-fit fs-11 text-default d-inline-flex">
                                                    <span>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-fill text-warning me-1"></i>
                                                        <i className="ri-star-half-fill text-warning"></i>(4.2)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="btn btn-primary-light mt-3 d-grid"> View All Courses</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={7}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Latest Courses
                            </div>
                            <div>
                                <SpkButton Buttonvariant="light" Size="sm" Buttontype="button" >View All</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="pt-1">
                            <SpkSwiperJs className="crypto-swiper swiper-basic mySwiper" slidesPerView={3} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} slides={CourseSwiper} />
                        </Card.Body>
                    </Card  >
                </Col>
            </Row>
            {/* <!-- End::Row-3 --> */}

            {/* <!-- Start::Row-4 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Course List
                            </div>
                            <div className="d-flex flex-wrap">
                                <SpkDropdown Customclass="my-1" toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="View All" Arrowicon={true}>
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'S.No' }, { title: 'Course' }, { title: 'Classes' }, { title: 'Last Updated' }, { title: 'Instructor' }, { title: 'Students' }, { title: 'Actions' }]}>
                                    {Courselist.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                {idx.id}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fs-14 fw-medium mb-1">{idx.data}</p>
                                                        <p className="fs-12 text-muted mb-0">{idx.data1}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.classes}
                                            </td>
                                            <td>
                                                {idx.update}
                                            </td>
                                            <td>
                                                {idx.instructor}
                                            </td>
                                            <td>
                                                {idx.student}
                                            </td>
                                            <td>
                                                <div className="btn-list mb-0">
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link to="#!" className="btn  btn-sm rounded-pill btn-primary-light mb-0"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link to="#!" className="btn  btn-sm rounded-pill btn-secondary-light mb-0"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link to="#!" className="btn  btn-sm rounded-pill  btn-danger-light mb-0"><i className="ti ti-trash"></i></Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                            <div className="d-flex flex-wrap align-items-center mt-3">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#!">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link text-primary" href="#!">
                                                    next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Professors
                            </div>
                            <div>
                                <SpkButton Buttonvariant="light" Size="sm" Buttontype="button">View All</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="">
                            <ul className="list-unstyled courses-instructors mb-0">
                                {Professordata.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-medium">{idx.data}</span>
                                                    <span className="text-muted">{idx.data1}</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">{idx.data2}</span>
                                                <span className="text-muted">{idx.data3}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-4 --> */}
        </Fragment>
    )
};

export default Courses;
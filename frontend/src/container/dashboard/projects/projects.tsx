import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { Projectdata, Runningavatar, Staticoptions, Staticseries, Targetoptions, Targetseries, Tasksoptions, Tasksseries, Teamdata, projects, statusColors } from "../../../components/common/data/dashboard/projectsdata";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkProjectscardcomponent from "../../../@spk-reusable-components/reusable-dashboards/spk-projectscard";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkProgress from "../../../@spk-reusable-components/reusable-uielements/spk-progress";
import media85 from "../../../assets/images/media/media-85.png";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face15 from "../../../assets/images/faces/15.jpg";

const Projects = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Projects" activepage="Projects" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card main-dashboard-banner project-dashboard-banner overflow-hidden">
                        <Card.Body className="p-4">
                            <div className="row justify-content-between">
                                <Col xxl={8} xl={5} lg={5} md={5} sm={5} className="">
                                    <h4 className="mb-1 fw-medium text-fixed-white">Manage Projects</h4>
                                    <p className="mb-3 text-fixed-white op-7">Manage projects effortlessly with our one-click solution, streamlining your workflow.</p>
                                    <Link to="#!" className="btn btn-sm btn-primary1">Manage Now<i className="ti ti-arrow-narrow-right"></i></Link>
                                </Col>
                                <Col xxl={4} xl={7} lg={7} md={7} sm={7} className="d-sm-block d-none text-end my-auto">
                                    <img src={media85} alt="" className="img-fluid" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Team
                            </div>
                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tBodyClass="top-selling" tableClass="text-nowrap mb-0" header={[{ title: 'Name' }, { title: 'Works' }, { title: 'Status' }, { title: 'Tasks' }, { title: 'Actions' }]} >
                                    {Teamdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <span className="d-block fw-semibold">{idx.name}</span>
                                                        <Link to="#!" className="text-muted fs-12">{idx.data}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.work}</span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.task} <span className="text-muted">{idx.task1}</span></span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="Assign">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill mb-0 btn-primary-light"><i className="ti ti-user-plus align-middle"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Mail">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill mb-0 btn-info-light"><i className="ti ti-at align-middle"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill mb-0 btn-primary2-light"><i className="ti ti-eye align-middle"></i></Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={7} className="">
                    <Row>
                        {Projectdata.map((idx) => (
                            <Col xxl={3} md={6} key={Math.random()}>
                                <SpkProjectscardcomponent project={idx} cardClass="overflow-hidden" width={70} height={40} />
                            </Col>
                        ))}
                    </Row>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Project Statistics</div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light no-caret" Arrowicon={true} Toggletext="Last Week">
                                <Dropdown.Item href="#!">Today</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Month</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Year</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex gap-5 align-items-center p-3 justify-content-around bg-light mx-2 flex-wrap flex-xl-nowrap">
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="avatar avatar-lg flex-shrink-0 bg-primary-transparent avatar-rounded svg-primary shadow-sm border border-primary border-opacity-25">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path></svg>
                                    </div>
                                    <div>
                                        <span className="mb-1 d-block">Total Revenue</span>
                                        <div className="d-flex align-items-end gap-2">
                                            <h4 className="mb-0">$475,896</h4>
                                            <div className="fs-13">
                                                <span className="op-7"> Increased By </span>
                                                <SpkBadge variant="success" Customclass="align-middle op-9">5.6%<i className="ti ti-trending-up"></i></SpkBadge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="avatar avatar-lg flex-shrink-0 bg-primary1-transparent avatar-rounded svg-primary1 shadow-sm border border-primary1 border-opacity-25">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>
                                    </div>
                                    <div>
                                        <span className="mb-1 d-block">Total Projects</span>
                                        <div className="d-flex align-items-end gap-2">
                                            <h4 className="mb-0">75,896</h4>
                                            <div className="fs-13">
                                                <span className="op-7"> Decreased By </span>
                                                <SpkBadge variant="danger" Customclass="align-middle op-9">1.6%<i className="ti ti-trending-down"></i></SpkBadge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="project-statistics">
                                <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="area" width={"100%"} height={353} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Running Projects List
                            </div>
                            <SpkButton Buttontype="button" Size="sm" Buttonvariant="primary-light">View All</SpkButton>
                        </Card.Header>
                        <div className="p-3 pb-2">
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="flex-grow-1">
                                    <p className="fw-medium mb-1 fs-14">Web application design   <SpkTooltips placement="top" tooltipClass="" title="Get Info">
                                        <Link to="#!" className="text-info">
                                            <i className="ri-information-2-line fs-13 op-7 lh-1 align-middle"></i>
                                        </Link>
                                    </SpkTooltips>
                                    </p>
                                    <p className="text-muted mb-1 fw-normal fs-12">At vero eos et accusamus et iusto odio.</p>
                                    <div>Status: <span className="text-success fw-normal fs-12">75% completed</span></div>
                                </div>
                                <div className="flex-shrink-0 text-end">
                                    <p className="mb-3 fs-11 text-muted"><i className="ri-time-line  text-muted fs-11 align-middle lh-1 me-1 d-inline-block"></i>2mins ago</p>
                                    <div className="avatar-list-stacked">
                                        {Runningavatar.map((idx) => (
                                            <span key={Math.random()} className="avatar avatar-sm avatar-rounded">
                                                <img src={idx.src} alt="img" />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="progress progress-lg rounded-pill p-1 ms-auto bg-primary-transparent" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated rounded-pill" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 pb-2">
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="flex-grow-1">
                                    <p className="fw-medium mb-1 fs-14">Designing New Template <SpkTooltips placement="top" tooltipClass="" title="Get Info">
                                        <Link to="#!" className="text-info">
                                            <i className="ri-information-2-line fs-13 op-7 lh-1 align-middle"></i>
                                        </Link>
                                    </SpkTooltips></p>
                                    <p className="text-muted mb-1 fw-normal fs-12">At vero eos et accusamus et iusto odio.</p>
                                    <div>Status: <span className="text-warning fw-medium fs-12">45% completed</span></div>
                                </div>
                                <div className="flex-shrink-0 text-end">
                                    <p className="mb-3 fs-11 text-muted"><i className="ri-time-line  text-muted fs-11 align-middle lh-1 me-1 d-inline-block"></i>15mins ago</p>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face11} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face8} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face2} alt="img" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="progress progress-lg rounded-pill p-1 ms-auto flex-fill bg-primary1-transparent" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary1 progress-bar-striped progress-bar-animated rounded-pill" style={{ width: "45%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="d-flex align-items-start gap-3 mb-3">
                                <div className="flex-grow-1">
                                    <p className="fw-medium mb-1 fs-14">Web application design <SpkTooltips placement="top" tooltipClass="" title="Get Info">
                                        <Link to="#!" className="text-info">
                                            <i className="ri-information-2-line fs-13 op-7 lh-1 align-middle"></i>
                                        </Link>
                                    </SpkTooltips></p>
                                    <p className="text-muted mb-1 fs-12">At vero eos et accusamus et iusto odio.</p>
                                    <div>Status: <span className="text-success fw-medium fs-12">65% completed</span></div>
                                </div>
                                <div className="flex-shrink-0 text-end">
                                    <p className="mb-3 fs-11 text-muted"><i className="ri-time-line  text-muted fs-11 align-middle lh-1 me-1 d-inline-block"></i>20mins ago</p>
                                    <div className="avatar-list-stacked">
                                        <div className="avatar-list-stacked">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face15} alt="img" />
                                            </span>
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face3} alt="img" />
                                            </span>
                                            <a className="avatar avatar-sm bg-primary border border-2  avatar-rounded text-fixed-white" href="#!"> 2+ </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="progress progress-lg rounded-pill p-1 ms-auto flex-fill bg-primary2-transparent" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary2 progress-bar-striped progress-bar-animated rounded-pill" style={{ width: "65%" }}></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} lg={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Monthly Targets</div>
                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="monthly-target">
                                <Spkapexcharts chartOptions={Targetoptions} chartSeries={Targetseries} type="radialBar" width={"100%"} height={265} />
                            </div>
                            <div className="d-flex gap-3 align-items-center justify-content-between text-center p-3 bg-light flex-wrap">
                                <div>
                                    <span className="mb-1 d-block"><i className="ri-circle-fill fs-8 align-middle lh-1 text-primary"></i> New Projects</span>
                                    <h6 className="mb-1">4,896</h6>
                                    <span className="text-success fw-medium"><i className="ri-arrow-up-s-fill"></i> 3.5%</span>
                                </div>
                                <div>
                                    <span className="mb-1 d-block"><i className="ri-circle-fill fs-8 align-middle lh-1 text-primary1"></i> Completed</span>
                                    <h6 className="mb-1">2,475</h6>
                                    <span className="text-danger fw-medium"><i className="ri-arrow-down-s-fill"></i> 1.5%</span>
                                </div>
                                <div>
                                    <span className="mb-1 d-block"><i className="ri-circle-fill fs-8 align-middle lh-1 text-primary2"></i> Pending</span>
                                    <h6 className="mb-1">456</h6>
                                    <span className="text-success fw-medium"><i className="ri-arrow-up-s-fill"></i> 0.1%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} lg={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Daily Tasks
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light no-caret" Arrowicon={true} Toggletext="View All">
                                <Dropdown.Item><Link to="#!">Download</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="#!">Import</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="#!">Export</Link></Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-group list-group-flush list-unstyled">
                                <li className="list-group-item border-bottom-0 d-flex gap-3 p-0 align-items-start mb-1">
                                    <div className="flex-shrink-0 daily-tasks-time">
                                        <span className="text-muted ms-auto fs-11 flex-shrink-0 flex-fill">09:15 AM</span>
                                    </div>
                                    <div className="card border border-primary border-opacity-25 shadow-none custom-card mb-0 bg-primary-transparent">
                                        <Card.Body className="">
                                            <p className="fw-medium mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">Home Page Design
                                                <SpkTooltips placement="top" title="View Details">
                                                    <Link aria-label="anchor" to="#!" className="float-end fs-16 text-primary "><i className="ri-add-circle-fill"></i></Link>
                                                </SpkTooltips>
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                <SpkBadge variant="primary-transparent">Framework</SpkBadge>
                                                <SpkBadge variant="secondary-transparent">Angular</SpkBadge>
                                                <SpkBadge variant="info-transparent">Php</SpkBadge>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </li>
                                <li className="list-group-item border-bottom-0 d-flex gap-3 p-0 align-items-start pt-1 mb-1">
                                    <div className="flex-shrink-0 daily-tasks-time">
                                        <span className="text-muted ms-auto fs-11 flex-shrink-0 flex-fill">10:15 AM</span>
                                    </div>
                                    <div className="card border border-primary1 border-opacity-25 shadow-none custom-card mb-0 bg-primary1-transparent">
                                        <Card.Body className="">
                                            <p className="fw-medium mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">Meeting Hour
                                                <SpkTooltips placement="top" title="View Details">
                                                    <Link aria-label="anchor" to="#!" className="float-end fs-16 text-primary1 "><i className="ri-add-circle-fill"></i></Link>
                                                </SpkTooltips>
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                <SpkBadge variant="primary-transparent">Framework</SpkBadge>
                                                <SpkBadge variant="secondary-transparent">Angular</SpkBadge>
                                                <SpkBadge variant="info-transparent">Php</SpkBadge>
                                                <SpkBadge variant="danger-transparent">Html</SpkBadge>
                                                <SpkBadge variant="success-transparent">Laravel</SpkBadge>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </li>
                                <li className="list-group-item border-bottom-0 d-flex gap-3 p-0 align-items-start pt-1 mb-1">
                                    <div className="flex-shrink-0 daily-tasks-time">
                                        <span className="text-muted ms-auto fs-11 flex-shrink-0 flex-fill">04:30 AM</span>
                                    </div>
                                    <div className="card border border-primary2 border-opacity-25 shadow-none custom-card mb-0 bg-primary2-transparent">
                                        <Card.Body className="">
                                            <p className="fw-medium mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">Projects Work Progress
                                                <SpkTooltips placement="top" title="View Details">
                                                    <Link aria-label="anchor" to="#!" className="float-end fs-16 text-primary2 "><i className="ri-add-circle-fill"></i></Link>
                                                </SpkTooltips>
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                <SpkBadge variant="info-transparent">Php</SpkBadge>
                                                <SpkBadge variant="danger-transparent">Html</SpkBadge>
                                                <SpkBadge variant="primary-transparent">Framework</SpkBadge>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </li>
                                <li className="list-group-item border-bottom-0 d-flex gap-3 p-0 align-items-start pt-1 mb-0">
                                    <div className="flex-shrink-0 daily-tasks-time">
                                        <span className="text-muted ms-auto fs-11 flex-shrink-0 flex-fill">05:45 PM</span>
                                    </div>
                                    <div className="card border border-primary3 border-opacity-25 shadow-none custom-card mb-0 bg-primary3-transparent">
                                        <Card.Body className="">
                                            <p className="fw-medium mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">Status Updation by Team Leads
                                                <SpkTooltips placement="top" title="View Details">
                                                    <Link aria-label="anchor" to="#!" className="float-end fs-16 text-primary3 "><i className="ri-add-circle-fill"></i></Link>
                                                </SpkTooltips>
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                <SpkBadge variant="primary-transparent">Framework</SpkBadge>
                                                <SpkBadge variant="secondary-transparent">Angular</SpkBadge>
                                                <SpkBadge variant="info-transparent">Php</SpkBadge>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Projects Summary
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customclass="my-1" toggleas="a" Customtoggleclass="btn btn-primary btn-sm no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap table-bordered" header={[{ title: 'S.No' }, { title: 'Poject Title' }, { title: 'Tasks' }, { title: 'Progress' }, { title: 'Assigned Team' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Actions' }]}>
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td>{project.id}</td>
                                            <td><span className="fw-medium">{project.title}</span></td>
                                            <td>{project.progress} <span className="op-7">/{project.total}</span></td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <SpkProgress variant='primary' mainClass="progress progress-sm w-100" striped={true} animated={true} now={project.progress} />
                                                    <div className="ms-2">{project.progress}%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {project.avatars.map((avatar, index) => (
                                                        <span key={index} className="avatar avatar-xs avatar-rounded">
                                                            <img src={avatar} alt="img" />
                                                        </span>
                                                    ))}
                                                    {project.extraAvatars && (
                                                        <a className="avatar avatar-xs bg-light text-default border border-2 avatar-rounded" href="#!">
                                                            +{project.extraAvatars}
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge ${statusColors[project.status]}`}>{project.status}</span>
                                            </td>
                                            <td>{project.date}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-pill btn-sm btn-primary-light"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-pill btn-sm btn-secondary-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-pill btn-sm btn-danger-light"><i className="ti ti-trash"></i></Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Task Summary
                            </div>
                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex gap-3 align-items-center justify-content-between p-3 bg-light mb-4">
                                <div>
                                    <h6 className="mb-1">Tasks Completed Rate</h6>
                                    <p className="mb-0 text-muted">Within the Deadline</p>
                                </div>
                                <div>
                                    <h5 className="mb-0">85%<SpkBadge variant="success" Customclass="text-fixed-white fw-medium fs-8 ms-2"><i className="ri-arrow-up-s-fill"></i> 1.5%</SpkBadge></h5>
                                </div>
                            </div>
                            <div id="tasks-report">
                                <Spkapexcharts chartOptions={Tasksoptions} chartSeries={Tasksseries} type="line" width={"100%"} height={335} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default Projects;
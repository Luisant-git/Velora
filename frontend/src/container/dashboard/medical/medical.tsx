import  { Fragment } from "react";
import { Card, Col, Dropdown, Nav, Pagination, Row, Tab } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Doctorlist, Marketcapcard, Patientoptions, Patientseries, Patientslist, ScheduleData, ScheduleData1, ScheduleData2, ScheduleData3, ScheduleData4, ScheduleData5, ScheduleData6, Staffoptions, Staffseries, Statoptions, Statseries, Statsoptions, Statsseries} from "../../../components/common/data/dashboard/medicaldata";
import SpkMedicalcard from "../../../@spk-reusable-components/reusable-dashboards/spk-medicalcard";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import media71 from "../../../assets/images/media/media-71.png"

const Medical = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Medical" activepage="Medical" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::Row-1 --> */}
            <Row>
                <Col xxl={7}>
                    <Card className="med-banner-card d-flex align-items-center justify-content-between flex-row">
                        <Card.Body className=" p-4">
                            <div className="row mx-0">
                                <Col md={8}>
                                    <h4 className="fw-semibold text-fixed-white">Welcome to your Medical Dashboard!</h4>
                                    <span className="d-block text-fixed-white op-7 mt-2 pt-1">Simplify medical practice management with streamlined patient profiles, appointment scheduling, and comprehensive record-keeping—all in one platform.</span>
                                    <div className="mt-3">
                                        <SpkButton Buttonvariant="primary1" Size="lg" Customclass="waves-effect waves-light">Get Started <i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <img src={media71} alt="" className="img-fluid med-banner-img" />
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Row>
                        {Marketcapcard.map((idx) => (
                            <Col sm={6} key={Math.random()}>
                                <SpkMedicalcard cardClass="position-relative rounded-md overflow-hidden" title={idx.title} price={idx.value} percent={idx.percent} svgIcon={idx.icon} icon={idx.icon1} color={idx.changeType} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-2 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Patients Survey</div>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="statistics"><Spkapexcharts chartOptions={Statoptions} chartSeries={Statseries} type="bar" width={"100%"} height={361} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Doctors List
                            </div>
                            <SpkButton Buttonvariant="light" Size="sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Doctor' }, { title: 'Qualification' }, { title: 'Experience' }, { title: 'Action' }]}>
                                    {Doctorlist.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <img src={idx.src} alt="" className="avatar avatar-sm avatar-rounded" />
                                                    <div className="">
                                                        <span className="d-block fw-medium lh-1">
                                                            {idx.dname}
                                                        </span>
                                                        <span className="text-muted fs-12">{idx.designation}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.qualification}</td>
                                            <td>{idx.exp} yrs Exp</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary-light"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-secondary-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-danger-light"><i className="ti ti-trash"></i></Link>
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
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title"> Revenue Statistics</div>
                            <SpkButton Buttonvariant="light" Size="sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className="px-0 my-1">
                            <div id="revenue-stats" className="mx-auto text-center"><Spkapexcharts chartOptions={Statsoptions} chartSeries={Statsseries} type="polarArea" width={"100%"} height={245} /></div>
                        </Card.Body>
                        <Card.Body className="">
                            <div className="p-3 bg-light d-flex gap-2 rounded align-items-center flex-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="flex-shrink-0 text-primary bg-primary-transparent rounded-circle" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>
                                <div>
                                    <h5 className="mb-0ld">$87,847.00</h5>
                                    <div className="fw-medium text-muted">Total Revenue
                                    </div>
                                </div>
                                <span className="fw-normal ms-1 badge bg-success ms-auto"> + 5.03%
                                    <i className="ri-arrow-up-s-fill"></i>
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End::Row-2 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xxl={3} xl={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Patients Overview
                            </div>
                            <SpkDropdown toggleas="a" Customtoggleclass="tn btn-light btn-sm text-muted no-caret" Navigate="#!" Arrowicon={true} Toggletext="This Week"  >
                                <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" border-bottom border-top py-0">
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={6} className="col-6 border-end p-3">
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-primary-transparent">
                                                <i className="ri-men-line fs-17"></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-1 fw-medium">Male</h6>
                                            <p className="mb-0 text-muted mb-0">567 <span className="fw-normal badge bg-success-transparent"> + 2.15%
                                                <i className="ri-arrow-up-s-fill"></i>
                                            </span>
                                            </p>

                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} className="col-6 p-3">
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-secondary-transparent">
                                                <i className="ri-women-line fs-17"></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-1 fw-medium">Female</h6>
                                            <p className="mb-0 text-muted mb-0">208  <span className="fw-normal badge bg-danger-transparent"> - 2.15%
                                                <i className="ri-arrow-down-s-fill"></i>
                                            </span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="">
                            <div id="patients-chart">
                                <Spkapexcharts chartOptions={Patientoptions} chartSeries={Patientseries} type="donut" width={"100%"} height={235} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={12} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Upcoming Appointments</div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light border btn-full btn-sm no-caret" Navigate="#!" Icon={true} Toggletext="View All" IconClass="ti ti-chevron-down ms-1">
                                <li><Dropdown.Item >Download</Dropdown.Item> </li>
                                <li><Dropdown.Item >Import</Dropdown.Item></li>
                                <li><Dropdown.Item >Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="upcoming-shedule">
                                <Tab.Container defaultActiveKey="fri">
                                    <Nav className="nav nav-pills mb-2 justify-content-between" role="tablist">
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="sun" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">24</p>
                                                <span className="sh-day">Sun</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="mon" href="#mon_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">25</p>
                                                <span className="sh-day">Mon</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="tue" href="#tue_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">26</p>
                                                <span className="sh-day">Tue</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="wed" href="#wed_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">27</p>
                                                <span className="sh-day">Wed</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="thu" href="#thu_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">28</p>
                                                <span className="sh-day">Thu</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium mb-3" role="presentation">
                                            <Nav.Link eventKey="fri" href="#fri_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="true" role="tab">
                                                <p className="sh-dt mb-0">29</p>
                                                <span className="sh-day">Fri</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="fw-medium" role="presentation">
                                            <Nav.Link eventKey="sat" href="#sat_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">30</p>
                                                <span className="sh-day">Sat</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="sun" className="p-0 border-0" id="sun_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mon" className="p-0 border-0" id="mon_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData1.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tue" className="p-0 border-0" id="tue_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData2.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wed" className="p-0 border-0" id="wed_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData3.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thu" className="p-0 border-0" id="thu_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData4.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fri" className="p-0 border-0" id="fri_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData5.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sat" className="p-0 border-0" id="sat_tab" role="tabpanel">
                                            <ul className="list-unstyled mb-0 sh-shedule-container">
                                                {ScheduleData6.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule d-sm-flex align-items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primary1-transparent">
                                                                <i className={`${item.iconClass} fs-16`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                                                <span className="text-muted">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-muted">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} lg={12} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Staff Attendance</div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-light text-muted no-caret" Navigate="#!" Arrowicon={true} Toggletext="This week">
                                <Dropdown.Item as="li" href="#!">Today </Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">This week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" py-0">
                            <div id="staff-work">
                                <Spkapexcharts chartOptions={Staffoptions} chartSeries={Staffseries} type="line" width={"100%"} height={335} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-3 --> */}

            {/* <!-- Start::Row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Patients List
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-primary no-caret" Navigate="#!" Arrowicon={true} Toggletext="Sort By">
                                    <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Patient ID' }, { title: 'Name' }, { title: 'Gender' }, { title: 'Age' }, { title: 'Assgined Doctor' }, { title: 'Disease' }, { title: 'Contact Number' }, { title: 'Appointmented Date' }, { title: 'Room No' }, { title: 'Action' }]}>
                                    {Patientslist.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>0{idx.id}</td>
                                            <td>{idx.patientid}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded"><img src={idx.src} className="" alt="..." /></span>
                                                    <div>
                                                        <span className="fw-medium mb-0 d-flex align-items-center">{idx.pname}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.gender}
                                            </td>
                                            <td>{idx.age}</td>
                                            <td>{idx.doctor}</td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.disease}</span>
                                            </td>
                                            <td>{idx.num}</td>
                                            <td>
                                                {idx.apt}
                                            </td>
                                            <td>{idx.roomno}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm" Customclass="btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="primary1-light" Buttontype="button" Size="sm" Customclass="btn-icon">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2ld"></i> </div>
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
            </Row>
            {/* <!-- End::Row-4 --> */}
        </Fragment>
    )
};

export default Medical;
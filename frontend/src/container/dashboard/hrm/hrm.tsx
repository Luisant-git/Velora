import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import {Analysisoptions, Analysisseries, Directorydata, Employeedata, Eventsdata, Genderoptions, Genderseries, Hrmcard, Interviewsdata } from "../../../components/common/data/dashboard/hrmdata";
import Pageheader from "../../../components/page-header/pageheader";
import SpkHrmcard from "../../../@spk-reusable-components/reusable-dashboards/spk-hrmcard";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

const Hrm = () => {

    const [allData, setAllData] = useState(Directorydata)
    const handleRemove = (id: number) => {
        const List = allData.filter((idx) => idx.id !== id);
        setAllData(List)
    }
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="HRM" activepage="HRM" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                {Hrmcard.map((idx) => (
                    <Col xxl={3} xl={6} key={Math.random()}>
                        <SpkHrmcard cardClass="overflow-hidden" chartOptions={idx.chartOptions} color={idx.color} chartSeries={idx.chartSeries} icon={idx.direction} price={idx.value} title={idx.title} percent={idx.percentage} data={idx.description} type="area" height={70} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Project Analysis</Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-sm btn-outline-light">Today</div>
                                <div className="btn btn-sm btn-outline-light">Weakly</div>
                                <div className="btn btn-sm btn-light">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="pb-1">
                            <ul className="d-flex flex-wrap mb-0 list-unstyled gap-5 justify-content-sm-around p-3 border rounded border-dashed">
                                <li>
                                    <div className="d-flex align-items-start justify-content-between gap-2">
                                        <div className="lh-1 me-1">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className="ri-stack-line fs-5"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1 fw-medium text-muted">New</span>
                                            <h4 className="fw-medium mb-0">64,241</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex align-items-start justify-content-between gap-2">
                                        <div className="lh-1 me-1">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary1-transparent">
                                                <i className="ri-rocket-line fs-5"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1 fw-medium text-muted">Inprogress</span>
                                            <h4 className="fw-medium mb-0">1,543</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex align-items-start justify-content-between gap-2">
                                        <div className="lh-1 me-1">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary2-transparent">
                                                <i className="ri-check-line fs-5"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1 fw-medium text-muted">Completed</span>
                                            <h4 className="fw-medium mb-0">3,848</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex align-items-start justify-content-between gap-2">
                                        <div className="lh-1 me-1">
                                            <span className="avatar avatar-lg avatar-rounded bg-primary3-transparent">
                                                <i className="ri-time-line fs-5"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1 fw-medium text-muted">Onhold</span>
                                            <h4 className="fw-medium mb-0">938</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div id="project-analysis"><Spkapexcharts chartOptions={Analysisoptions} chartSeries={Analysisseries} type="bar" width={"100%"} height={336} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Upcoming Events</div>
                            <Link aria-label="anchor" to="#!" className="btn btn-sm btn-primary-light">
                                View All
                            </Link>
                        </div>
                        <Card.Body className="">
                            <ul className="list-unstyled timeline-widget1 mb-0">
                                {Eventsdata.map((event) => (
                                    <li className="timeline-widget-list" key={event.id}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className={`avatar avatar-xl bg-${event.badge1}-transparent me-2 flex-shrink-0`}>
                                                <div className="text-center">
                                                    <div className="fw-medium lh-1 mb-1">{event.date}</div>
                                                    <div className="fs-12 text-default fw-medium lh-1">{event.day}</div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between flex-xl-nowrap gap-2">
                                                <div className="events-width">
                                                    <p className="mb-1 timeline-widget-content">{event.content}</p>
                                                    <p className="mb-0 fs-12 lh-1 text-muted">
                                                        {event.time}
                                                        {event.category && <SpkBadge Customclass={`${event.badge} `}>{event.category}</SpkBadge>}
                                                    </p>
                                                </div>
                                                <SpkDropdown toggleas="a" Icon={true} IconClass="fe fe-more-vertical" Customtoggleclass="btn btn-light btn-icon no-caret">
                                                    <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Employee's Leave</div>
                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap mb-0" header={[{ title: 'Employee' }, { title: 'Type' }, { title: 'Days' }, { title: 'Status' }, { title: 'Start Date' }, { title: 'Actions' }]}>
                                    {Employeedata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <p className="mb-0 fs-12 fw-medium">{idx.data}</p>
                                                        <Link  to="#!" className="fs-11 text-muted">{idx.data1}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.type}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.days}</span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span className="fs-12">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link  aria-label="anchor" to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link  aria-label="anchor" to="#!" className="btn btn-icon btn-sm rounded-pill  btn-primary2-light"><i className="ti ti-trash"></i></Link>
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
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Today's Interviews
                            </div>
                            <div>
                                <Link to="#!" className="btn btn-light btn-sm">View All</Link>
                            </div>
                        </div>
                        <Card.Body className="py-3">
                            <ul className="list-unstyled mb-0 schedule-list">
                                {Interviewsdata.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex align-items-center flex-wrap flex-xl-nowrap gap-1">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-1 bg-danger-transparent">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill ms-2">
                                                <p className="fw-medium mb-0">{idx.data}</p>
                                                <p className="fs-11 text-muted mb-0 text-nowrap text-truncate w-75"><i className="ri-time-line me-1"></i>{idx.data1}(9.00am-10.00am)</p>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton Buttontype="button" Buttonvariant="primary" Size="sm" Customclass="text-nowrap">Call Now</SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Gender Distribution
                            </div>
                            <div>
                                <Link  to="#!" className="btn btn-light btn-sm">View All</Link>
                            </div>
                        </div>
                        <Card.Body className="text-center mx-auto">
                            <div id="gender-chart"><Spkapexcharts chartOptions={Genderoptions} chartSeries={Genderseries} type="polarArea" width={"100%"} height={255} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <ul className="d-flex flex-wrap mb-0 list-unstyled justify-content-around text-center gap-2">
                                <li>
                                    <div>
                                        <div className="lh-1 me-1 mb-2">
                                            <span className="avatar avatar-md bg-primary-transparent border border-primary border-3 border-opacity-25 avatar-rounded">
                                                <i className="ri-stack-line fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-0 text-muted fs-12">Attendance</span>
                                            <h5 className="fw-medium mb-0">4,241</h5>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="lh-1 me-1 mb-2">
                                            <span className="avatar avatar-md bg-primary1-transparent border border-primary1 border-3 border-opacity-25 avatar-rounded">
                                                <i className="ri-calendar-todo-line fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-0 text-muted fs-12">Absent</span>
                                            <h5 className="fw-medium mb-0">485</h5>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div className="lh-1 me-1 mb-2">
                                            <span className="avatar avatar-md bg-primary2-transparent border border-primary2 border-3 border-opacity-25 avatar-rounded">
                                                <i className="ri-time-line fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-0 text-muted fs-12">Late</span>
                                            <h5 className="fw-medium mb-0">08</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Employee Directory
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
                                </div>
                                <SpkDropdown Customclass="my-1" toggleas="a" Customtoggleclass="btn btn-sm btn-primary no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item>New</Dropdown.Item></li>
                                    <li><Dropdown.Item>Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item>Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap table-bordered text-center" header={[{ title: 'S.NO' }, { title: 'Employee Id' }, { title: 'Employee Name' }, { title: 'Position' }, { title: 'Department' }, { title: 'Email ' }, { title: 'Status' }, { title: 'Contact' }, { title: 'Salary' }, { title: 'Action' }]}>
                                    {allData.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td className="text-center">
                                                0{idx.id}
                                            </td>
                                            <td>
                                                <span className="text-primary fs-14">{idx.emplyid}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={idx.src} className="avatar avatar-sm" alt="" />
                                                    <div className="flex-1 flex-between pos-relative ms-2">
                                                        <div className="">
                                                            <Link to="#!" className="fs-13 fw-medium">{idx.emplyname}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.position}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.depart}</span>
                                            </td>
                                            <td>
                                                <Link to="#!">{idx.mail}</Link>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.contacts}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.salary}</span>
                                            </td>
                                            <td>
                                                <div className="g-2">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link to="#!" aria-label="anchor" className="btn  btn-primary-light btn-sm">
                                                            <span className="ri-pencil-line fs-14"></span>
                                                        </Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link to="#!" onClick={() => handleRemove(idx.id)} aria-label="anchor" className="btn btn-danger-light btn-sm ms-2">
                                                            <span className="ri-delete-bin-7-line fs-14"></span>
                                                        </Link>
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
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    )
};

export default Hrm;
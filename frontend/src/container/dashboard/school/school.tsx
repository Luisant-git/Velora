import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import { Attoptions, Attseries, EventData, Examresult, SchoolCrad, Schoolactivity, Startdata, Stuoptions, Stuseries, Teacherdata } from "../../../components/common/data/dashboard/schoolsdata";
import SpkSchoolcard from "../../../@spk-reusable-components/reusable-dashboards/spk-schoolcard";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkActivityCard from "../../../@spk-reusable-components/reusable-dashboards/spk-recentacticvecard";

const School = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="School" activepage="School" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::Row-1 --> */}
            <Row>
                {SchoolCrad.map((idx) => (
                    <Col sm={6} className="col-xxl" key={Math.random()}>
                        <SpkSchoolcard cardClass="school-card" bodyClass=" d-flex gap-2 justify-content-between" svgIcon={idx.icon} color={idx.colorClass} item={idx.title} price={idx.value} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-2 --> */}
            <Row>
                <Col xl={7}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Attendance Report
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                <Dropdown.Item href="#!">This Month</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex gap-5 mb-3 align-items-center justify-content-sm-center flex-wrap flex-xl-nowrap">
                                <div className="d-flex align-items-center gap-2 me-5">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md avatar-rounded bg-secondary">
                                            <i className="ri-id-card-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="fw-medium fs-14">3,875</div>
                                        <div className="text-muted">Staff</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 me-5">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md avatar-rounded bg-primary2">
                                            <i className="ri-graduation-cap-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="fw-medium fs-14">25,875</div>
                                        <div className="text-muted">Students</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 me-4">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md avatar-rounded bg-primary">
                                            <i className="ri-presentation-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="fw-medium fs-14">1,687</div>
                                        <div className="text-muted">Teachers</div>
                                    </div>
                                </div>

                            </div>
                            <div id="attendance"><Spkapexcharts type="line"
                                chartOptions={Attoptions}
                                chartSeries={Attseries}
                                width={'100%'}
                                height={336}
                            /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Teachers List
                            </div>
                            <Link to="#!" className="btn btn-sm bg-light text-default"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap teachers-list" header={[{ title: 'Teacher' }, { title: 'Qualification' }, { title: 'Subject' }, { title: 'Action' }]}>
                                    {Teacherdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={idx.src} alt="" className="avatar avatar-sm" />
                                                    <Link to="#!" className="fw-medium">{idx.name}</Link>
                                                </div>
                                            </td>
                                            <td><span className="fs-12 text-muted d-block">{idx.qualification}</span></td>
                                            <td><div className={`text-${idx.color} fw-medium`}>{idx.subject}</div></td>
                                            <td>
                                                <SpkButton Buttonvariant="light" Buttonlabel="button" Size="sm" Buttontype="button" Customclass="btn-icon table-icon"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-2 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Notice Board
                            </div>
                            <Link to="#!" className="fs-12 text-muted btn btn-sm btn-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent>
                                    {EventData.map((event, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className={event.iconClass}>
                                                        {event.svgIcon}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div>
                                                            <div className="fw-medium d-block my-1 fs-14">{event.title}<span className="text-primary2 ms-1">{event.text}</span></div>
                                                            <p className="text-muted fs-12 mb-0">{event.description} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="light" Customclass={event.badgeClass}>
                                                    {event.badgeText}
                                                </SpkBadge>
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
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Students Overview
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light text-muted no-caret" Toggletext="Sort By" Arrowicon={true}>
                                <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                <Dropdown.Item href="#!">This Month</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" pb-1">
                            <div id="students-applicants"><Spkapexcharts chartOptions={Stuoptions} chartSeries={Stuseries} type="line" width={"100%"} height={282} /></div>
                        </Card.Body>
                        <div className="card-footer p-0">
                            <div className="row mt-0">
                                <div className="col-6 border-end border-inline-end-dashed text-center p-3">
                                    <p className="mb-1 fw-medium">Boys</p>
                                    <h5 className="text-primary fw-medium">12.34K</h5>
                                </div>
                                <div className="col-6 text-center p-3">
                                    <p className="mb-1 fw-medium">Girls</p>
                                    <h5 className="text-primary1 fw-medium">10.19K</h5>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Activity
                            </div>
                            <Link to="#!" className="btn btn-sm bg-light text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled school-activity-list activity-school">
                                {Schoolactivity.map((activity, index) => (
                                    <SpkActivityCard key={index} showTime={true} activityCard={activity} />
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-3 --> */}

            {/* <!-- Start::Row-4 --> */}
            <Row>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Star Students
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <div className="d-flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                    </div>
                                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn-sm no-caret btn btn-primary" Toggletext="Sort By" Arrowicon={true}>
                                        <Dropdown.Item href="#!">New</Dropdown.Item>
                                        <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                        <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0 pt-2">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'ID' }, { title: 'Student' }, { title: 'Class' }, { title: 'Section' }, { title: 'Marks In %' }, { title: 'Marks In GPA' }, { title: 'Status' }, { title: 'Actions' }]}>
                                    {Startdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td className="">{idx.id}</td>
                                            <td className="">{idx.iddata}</td>
                                            <td className="">
                                                <div className="d-flex align-items-center">
                                                    <Link to="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                        <img src={idx.src} alt="img" />
                                                    </Link>
                                                    <Link to="#!">{idx.student}</Link>
                                                </div>
                                            </td>
                                            <td className="">{idx.class}</td>
                                            <td className="">{idx.section}</td>
                                            <td className="">{idx.marks}%</td>
                                            <td className="">{idx.marks1}</td>
                                            <td className="">
                                                <span className={`text-${idx.color} fw-medium`}>{idx.status}</span>
                                            </td>
                                            <td className="">
                                                <SpkDropdown Customclass="d-inline-block" toggleas="a" Navigate="#!" Menuclass="dropdown-menu-end" Customtoggleclass="tx-inverse no-caret custom-btn-dropdown lh-1" Icon={true} IconClass="bi bi-three-dots">
                                                    <li><Dropdown.Item className="dropdown-item">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="dropdown-item">Another Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="dropdown-item">Something Else Here</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center bg-light p-3 py-2 rounded my-1 flex-wrap">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto gap-1">
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
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Exam Results
                            </div>
                            <Link to="#!" className="btn btn-sm bg-light text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'ID' }, { title: 'Student' }, { title: 'Subject' }, { title: 'Score' }]}>
                                    {Examresult.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>{idx.iddata}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div>
                                                        <span className="avatar avatar-sm">
                                                            <img src={idx.src} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold lh-1 mb-1">{idx.student}</span>
                                                        <span className="fs-13 text-muted">{idx.sname}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.sname}</td>
                                            <td className={`text-${idx.color}`}>{idx.score}%</td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* // <!-- End::Row-4 --> */}
        </Fragment>
    )
};

export default School;
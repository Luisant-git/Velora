import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row,  } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import Spkcardscomponent from "../../../@spk-reusable-components/reusable-dashboards/spk-cards";
import { Acceptoptions, Acceptseries, Activedata, Hiredata, Jobscard, Jobsoptions, Jobsseries, ReJobs, Recentdata } from "../../../components/common/data/dashboard/jobsdata";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkActivityCard from "../../../@spk-reusable-components/reusable-dashboards/spk-ecommerceactivity";
import face1 from "../../../assets/images/faces/1.jpg"
import face5 from "../../../assets/images/faces/5.jpg"
import face11 from "../../../assets/images/faces/11.jpg"
import face13 from "../../../assets/images/faces/13.jpg"

const Jobs = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Jobs" activepage="Jobs" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="row-cols row-cols-xl-5">
                {Jobscard.map((idx) => (
                    <Col xl={6} className="col-xxl" key={Math.random()}>
                        <Spkcardscomponent parentClass="flex-fill" dataClass="mb-1" mainClass="d-flex gap-3 align-items-center" headingClass="d-block mb-2" textbefore={true} textafter={false} card={idx} badgeClass={`lg svg-${idx.badgeColor} avatar-rounded border-3 border border-opacity-50 flex-shrink-0 border-${idx.badgeColor}`} svgIcon={idx.svgIcon} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Job Statistics</div>
                            <div className="d-flex gap-2">
                                <div className="btn btn-sm btn-outline-light">Today</div>
                                <div className="btn btn-sm btn-outline-light">Weakly</div>
                                <div className="btn btn-sm btn-light">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="jobs-statistics"><Spkapexcharts chartOptions={Jobsoptions} chartSeries={Jobsseries} type="bar" width={"100%"} height={325} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h6 className="mb-0">Need To Hire:</h6>
                        <div>
                            <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm">View All</SpkButton>
                        </div>
                    </div>
                    <Card className="custom-card">
                        <Card.Body>
                            <ul className="mb-0 list-unstyled">
                                {Hiredata.map((idx) => (
                                    <li key={Math.random()} className={idx.class}>
                                        <div className="d-flex align-items-center">
                                            <Link aria-label="anchor" to="#!" className="me-2">
                                                <span className={`avatar avatar-lg bg-${idx.color}-transparent text-${idx.color}`}>{idx.data}</span>
                                            </Link>
                                            <div className="flex-fill text-truncate">
                                                <Link to="#!" className="fw-medium fs-14 w-75 text-truncate d-block"> {idx.data1}</Link>
                                                <p className="text-muted mb-0 fs-12 w-75 text-truncate">Status: <span className={`text-${idx.color1}`}>{idx.data2}</span></p>
                                            </div>
                                            <div className=" text-end ms-auto">
                                                <div className="text-muted op-7 fs-12">Candidates</div>
                                                <div className="fw-medium">{idx.candidate}</div>
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
                        <Card.Header>
                            <div className="card-title w-95 text-truncate">
                                Candidates By Gender
                            </div>
                        </Card.Header>
                        <Card.Body className="m-3 pb-4 px-0 bg-light">
                            <div id="job-acceptance"><Spkapexcharts chartOptions={Acceptoptions} chartSeries={Acceptseries} type="donut" width={"100%"} height={180} />
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="row gy-4">
                                <Col xl={12}>
                                    <div className="d-flex align-items-end gap-3 flex-wrap justify-content-between">
                                        <div>
                                            <h5 className="mb-0">15,754</h5>
                                            <span className="text-muted fs-12 op-8">Male Candidates</span>
                                        </div>
                                        <div className="text-muted fs-13">
                                            <span className="text-success"><i className="ri-arrow-up-s-fill"></i>1.6%<i className="ri-bar-chart-fill ms-2 text-muted"></i></span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="d-flex align-items-end gap-3 flex-wrap justify-content-between">
                                        <div>
                                            <h5 className="mb-0">4,872</h5>
                                            <span className="text-muted fs-12 op-8">Female Candidates</span>
                                        </div>
                                        <div className="text-muted fs-13">
                                            <span className="text-danger"><i className="ri-arrow-down-s-fill"></i>1.3%<i className="ri-bar-chart-fill ms-2 text-muted"></i></span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="d-flex align-items-end gap-3 flex-wrap justify-content-between">
                                        <div>
                                            <h5 className="mb-0">2.5k</h5>
                                            <span className="text-muted fs-11 op-7">Total Candidates</span>
                                        </div>
                                        <div className="text-muted fs-13">
                                            <span className="text-success"><i className="ri-arrow-up-s-fill"></i>0.6%<i className="ri-bar-chart-fill ms-2 text-muted"></i></span>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={3} md={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                New Applicants
                            </div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-outline-light border btn-full btn-sm no-caret" Navigate="#!" Icon={true} Toggletext="View All" IconClass="ti ti-chevron-down ms-1">
                                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                        <Card.Body>
                            <ul className="mb-0 list-unstyled">
                                <li className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                <img src={face1} alt="" />
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> Mona Cruzis</Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">React Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                <img src={face11} alt="" />
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> Soyab Khan</Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">Java Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary2 text-fixed-white">
                                                KM
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> Katherine Myn </Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">UI Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                <img src={face13} alt="" />
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> James Roy</Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">React Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                <img src={face5} alt="" />
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> Cayathe Dore </Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">Vue.js Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <div className="d-flex align-items-center">
                                        <Link aria-label="anchor" to="#!" className="me-2">
                                            <span className="avatar avatar-md bg-primary3 text-fixed-white">
                                                SP
                                            </span>
                                        </Link>
                                        <div className="flex-grow-1">
                                            <Link to="#!" className="fs-13 fw-medium"> Surjith Pandey</Link>
                                            <p className="text-muted mb-0 fw-normal fs-12"><span className="fw-medium">UX Developer</span></p>
                                        </div>
                                        <div className="btn-list">
                                            <SpkTooltips placement="top" title="Call">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ti ti-phone align-middle"></i></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Mail">
                                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i className="ti ti-at align-middle"></i></Link>
                                            </SpkTooltips>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} md={12} className="">
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <h6 className="mb-0">Recent Jobs:</h6>
                        <div>
                            <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button">View All</SpkButton>
                        </div>
                    </div>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap recent-job" header={[{ title: 'Job Title' }, { title: 'Applicants' }, { title: 'Openings End' }, { title: 'Location' }, { title: 'Action' }]}>
                                    {ReJobs.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-3">
                                                        <span className={`avatar avatar-sm bg-${idx.color}-transparent`}>
                                                            <i className={`ri-${idx.icon}  fs-20`}></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{idx.title}</p>
                                                        <p className=" mb-0 text-muted fs-11">posted: {idx.post}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0">{idx.applicant} Applicants</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 fw-medium">{idx.open}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 fs-12 text-muted"><i className="ri-map-pin-fill text-xs me-1"></i>{idx.location}</p>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link to="#!" className="btn btn-icon btn-sm btn-primary-light"><i className="ti ti-edit"></i></Link>
                                                    <Link to="#!" className="btn btn-icon btn-sm btn-primary1-light"><i className="ti ti-trash"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Activity Feed
                            </div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-outline-light border btn-full btn-sm no-caret" Navigate="#!" Icon={true} Toggletext="View All" IconClass="ti ti-chevron-down ms-1">
                                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0 mb-2 pb-1">
                            <ul className="list-group list-group-flush list-unstyled">
                                {Activedata.map((activity) => (
                                    <li className="list-group-item border-bottom-0 d-flex gap-2 align-items-start pb-2 rounded" key={activity.Id}>
                                        <SpkActivityCard productactivity={activity} />
                                    </li>
                                ))}
                            </ul>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Recent Applicants
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-primary btn-sm no-caret" Navigate="#!" Arrowicon={true} Toggletext="Sort By" >
                                    <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table text-nowrap table-hover border table-bordered" header={[{ title: 'S.No' }, { title: 'Candidate' }, { title: 'Category' }, { title: 'Designation' }, { title: 'Mail' }, { title: 'Location' }, { title: 'Date' }, { title: 'Type' }, { title: 'Action' }]}>
                                    {Recentdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <th scope="row">0{idx.id}</th>
                                            <td>
                                                <div className="d-flex align-items-center fw-medium">
                                                    <span className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.candidate}
                                                </div>
                                            </td>
                                            <td>{idx.category}</td>
                                            <td><span className={`text-${idx.color1}`}>{idx.designation}</span></td>
                                            <td>{idx.mail}</td>
                                            <td>
                                                <div className="d-inline-flex align-items-center">
                                                    <i className="ri-map-pin-line text-muted"></i>
                                                    <span className="ms-1">{idx.location}</span>
                                                </div>
                                            </td>
                                            <td>{idx.date}</td>
                                            <td><span className={`badge bg-${idx.color}-transparent`}>{idx.type}</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-sm btn-success-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
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
            {/* <!-- End::row-4 --> */}
        </Fragment>
    )
};

export default Jobs;
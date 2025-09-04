import  { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import Spksocialmediacardscomponent from "../../../@spk-reusable-components/reusable-dashboards/spk-socialmediacard";
import { Audoptions, Audseries, Deviceoptions, Deviceseries, Performancedata, Socialcards, Suggestiondata } from "../../../components/common/data/dashboard/socialmedia";
import { Link } from "react-router-dom";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";

const SocialMedia = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Social Media" activepage="Social Media" path={""} />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::Row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Row>
                        {Socialcards.map((idx) => (
                            <Col xl={4} key={Math.random()}>
                                <Spksocialmediacardscomponent cardClass={idx.class} color1={idx.color1} app={idx.apps} data={idx.data} followers={idx.followers} percent={idx.percent} icon={idx.icon} color={idx.color} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Follow On Device
                            </div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="row p-3 gx-3 align-items-center">
                                <div className="col-xl-6 px-0">
                                    <div id="follow-on-device">
                                        <Spkapexcharts chartOptions={Deviceoptions} chartSeries={Deviceseries} type="donut" width={"100%"} height={155} />
                                    </div>
                                </div>
                                <Col xl={6}>
                                    <SpkListgroup Variant="flush" CustomClass="border border-top mt-3">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="session-type lh-1 mobile">
                                                    <div className="fw-medium mb-1">Mobile</div>
                                                    <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">1.67%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">1,754</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="session-type lh-1 tablet">
                                                    <div className="fw-medium mb-1">Tablet</div>
                                                    <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">0.46%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">1,234</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="session-type desktop lh-1">
                                                    <div className="fw-medium mb-1">Desktop</div>
                                                    <span className="fs-12 text-muted">Decresed By<span className="text-danger fs-12 ms-1 fw-medium d-inline-block">3.43%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">878</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
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
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Suggestions
                            </div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled personal-favourite mb-0">
                                {Suggestiondata.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium d-block mb-0">{idx.data}</span>
                                                <span className="text-muted d-block fs-12">{idx.data1}</span>
                                            </div>
                                            <div>
                                                <SpkButton Buttonvariant="primary" Buttonlabel="buton" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-user-add-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-6">
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between flex-wrap">
                            <div className="card-title">
                                Audience Statistics
                            </div>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="audience" className=""><Spkapexcharts chartOptions={Audoptions} chartSeries={Audseries} type="line" width={"100%"} height={330} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Requests
                            </div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled personal-favourite mb-0">
                                {Suggestiondata.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill text-truncate">
                                                <span className="fw-medium d-block mb-0">{idx.data}</span>
                                                <span className="text-muted d-block fs-12 w-75 text-truncate">want's to add you as a friend </span>
                                            </div>
                                            <div className="btn-list text-nowrap">
                                                <SpkButton Buttonvariant="success-light" Buttonlabel="buton" Buttontype="button" Size="sm" Customclass="btn-icon">
                                                    <i className="ri-check-line"></i>
                                                </SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Buttonlabel="buton" Buttontype="button" Size="sm" Customclass="btn-icon me-0">
                                                    <i className="ri-close-line"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-2 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Social Media Performance
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" />
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Arrowicon={true} Toggletext="Sort By">
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'Date' }, { title: 'Platform' }, { title: 'Likes' }, { title: 'Comments' }, { title: 'Shares' }, { title: 'Impressions' }, { title: 'Engaged (%)' }, { title: 'Followers' }, { title: 'Following' }]}>
                                    {Performancedata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                {idx.date}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className={`avatar avatar-sm bg-${idx.color}-transparent`}>
                                                        <i className={`ri-${idx.icon} fs-16`}></i>
                                                    </span>
                                                    <span className="fw-medium">{idx.platform}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.likes}
                                            </td>
                                            <td>
                                                {idx.comments}
                                            </td>
                                            <td>
                                                {idx.shares}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color1}-transparent`}>{idx.impressions}</span>
                                            </td>
                                            <td>
                                                {idx.engaged}%
                                            </td>
                                            <td>
                                                {idx.followers}
                                            </td>
                                            <td>
                                                {idx.following}
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
            {/* <!-- End::Row-3 --> */}
        </Fragment>
    )
};

export default SocialMedia;
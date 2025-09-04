import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../components/page-header/pageheader";
import { Activitydata, AnalayticsCards, Analyticsoptions, Analyticsseries, Countriesdata, Growthoptions, Growthseries, Siteoptions, Siteseries, Toplandingdata, Visitordata } from "../../../components/common/data/dashboard/analyticsdata";
import SpkCard1Component from "../../../@spk-reusable-components/reusable-dashboards/spk-card1";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkAnalyticsActive from "../../../@spk-reusable-components/reusable-dashboards/spk-analyticsactive";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkCountrycard from "../../../@spk-reusable-components/reusable-dashboards/spk-countrycard";
import media91 from "../../../assets/images/media/media-91.png"

const Analytics = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Analytics" activepage="Analytics" path={""} />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card main-dashboard-banner main-dashboard-banner2 overflow-hidden">
                        <Card.Body className="p-4">
                            <div className="row justify-content-between">
                                <Col xxl={8} xl={4} lg={5} md={5} sm={5} className="">
                                    <h4 className="mb-3 fw-medium text-fixed-white">Upgrade to get more</h4>
                                    <p className="mb-3 text-fixed-white fs-11">Upgrade Now for Premium Access and Unlock Exclusive Features!</p>
                                    <Link to="#!" className="fw-medium text-fixed-white text-decoration-underline">Upgrade Now<i className="ti ti-arrow-narrow-right"></i></Link>
                                </Col>
                                <Col xxl={4} xl={7} lg={7} md={7} sm={7} className="d-sm-block d-none text-end my-auto">
                                    <img src={media91} alt="" className="img-fluid" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8}>
                    <Row>
                        {AnalayticsCards.map((analyticsCard) => (
                            <Col xxl={3} lg={6} md={6} sm={12} key={Math.random()}>
                                <SpkCard1Component key={analyticsCard.id} height="85px" width="100px" card={analyticsCard} />
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between flex-wrap pb-1">
                            <div className="card-title">
                                Activity
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-icons btn-sm text-muted no-caret" IconClass="fe fe-more-vertical" Icon={true}>
                                <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <Card.Body>
                            <div className="analytics-timeline">
                                <ul className="list-unstyled analytics-activity mb-0">
                                    {Activitydata.map((idx) => (
                                        <SpkAnalyticsActive key={Math.random()} color={idx.color} icon={idx.icon} header={idx.header} inc={idx.inc} color1={idx.color1} percent={idx.percent} data={idx.data} tiIcon={idx.icon1} />
                                    ))}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Visitor Analytics
                            </div>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="pb-0">
                            <div id="audienceMetric">
                                <Spkapexcharts chartSeries={Analyticsseries} chartOptions={Analyticsoptions} type="area" width="100%" height={398} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Users By Countries
                            </div>
                            <div className="">
                                <Link to="#!" className="btn btn-light btn-sm text-muted">
                                    View All
                                </Link>
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled mb-0 analytics-visitors-countries">
                                {Countriesdata.map((idx) => (
                                    <li className={idx.class} key={Math.random()}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-xs avatar-rounded text-default">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-1 flex-fill lh-1">
                                                <span className="fs-14">{idx.header}</span>
                                            </div>
                                            <div className={`text-${idx.color} ms-1`}>{idx.percent}%<i className={`ti ti-arrow-narrow-${idx.icon}`}></i></div>
                                            <div>
                                                <span className="text-default badge bg-light fw-medium">{idx.data}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Site Referrals
                            </div>
                            <Link to="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
                        </div>
                        <Card.Body className="d-sm-flex align-items-center">
                            <div id="referrals-chart" className="p-3 flex-shrink-0 px-0">
                                <Spkapexcharts chartOptions={Siteoptions} chartSeries={Siteseries} type="donut" width="100%" height={270} />
                            </div>
                            <div className="table-responsive flex-fill">
                                <SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'Source' }, { title: 'Total' }, { title: 'Growth' }]}>
                                    <tr>
                                        <td>Search Engines</td>
                                        <td className="text-center fw-medium">300</td>
                                        <td className="text-success">+5.2%</td>
                                    </tr>
                                    <tr>
                                        <td>Social Media</td>
                                        <td className="text-center fw-medium">450</td>
                                        <td className="text-success">+10.3%</td>
                                    </tr>
                                    <tr>
                                        <td>Direct</td>
                                        <td className="text-center fw-medium">200</td>
                                        <td className="text-success">+2.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Referral Sites</td>
                                        <td className="text-center fw-medium">150</td>
                                        <td className="text-danger">-1.2%</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td className="text-center fw-medium">100</td>
                                        <td className="text-success">+3.8%</td>
                                    </tr>
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <h5 className="card-title">Top Landing Pages</h5>
                            <Link to="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled top-landing-page ps-0">
                                {Toplandingdata.map((idx) => (
                                    <SpkCountrycard key={Math.random()} states={idx.data} count={idx.visit} now={idx.now} color={idx.color} />
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Sales Growth Rate
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-icons btn-sm text-muted no-caret" IconClass="fe fe-more-vertical" Icon={true}>
                                <Dropdown.Item className="border-bottom" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item className="border-bottom" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                        <Card.Body className="pb-1">
                            <div className="d-flex align-items-center p-3 bg-light rounded">
                                <div>
                                    <p className="mb-1 fs-13">Comparison: 2024 vs. 2023</p>
                                    <div className="text-muted fs-12 mb-2">Increased By <span className="text-success"> 2.62%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                    <h5 className="mb-0">20%</h5>
                                </div>
                                <div className="ms-auto">
                                    <div className="p-2 bg-primary-transparent rounded-circle">
                                        <div className="avatar-md avatar bg-primary svg-white avatar-rounded shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="sales-growth" className="mt-1">
                                <Spkapexcharts chartOptions={Growthoptions} chartSeries={Growthseries} type="line" width="100%" height={188} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-3 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Visitors Statistics
                            </div>
                            <div className="d-flex flex-wrap">
                                <SpkDropdown Customclass="my-1" toggleas="a" Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item>New</Dropdown.Item></li>
                                    <li><Dropdown.Item>Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item>Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap table-bordered" header={[{ title: 'Total Visitors' }, { title: 'Sessions Duration' }, { title: 'New Visitors' }, { title: 'Returning Visitors' }, { title: 'Bounce Rate' }, { title: 'Conversion Rate' }, { title: 'Average Session Duration' }, { title: 'Top Referral Sources' }]}>
                                    {Visitordata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td key={Math.random()} className={`table-${idx.color}`}>{idx.total}</td>
                                            <td className={`table-${idx.color4}`}>{idx.duration}</td>
                                            <td>{idx.new}</td>
                                            <td className={`table-${idx.color5}`}>{idx.return}</td>
                                            <td className={`table-${idx.color1}`}>{idx.bounce}%</td>
                                            <td className={`table-${idx.color3}`}>{idx.conversion}%</td>
                                            <td className={`table-${idx.color5}`}>{idx.avg}</td>
                                            <td className={`table-${idx.color6}`}>{idx.top}
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
            {/* <!--End::row-4 --> */}
        </Fragment>
    )
};

export default Analytics;
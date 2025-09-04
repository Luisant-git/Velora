import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row, } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import { Categoriesdata, Recentlydata } from "../../../components/common/data/dashboard/podcastdata";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkProgress from "../../../@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import podcast1 from "../../../assets/images/podcast/1.jpg"
import podcast2 from "../../../assets/images/podcast/2.jpg"
import podcast3 from "../../../assets/images/podcast/3.jpg"
import podcast4 from "../../../assets/images/podcast/4.jpg"
import podcast6 from "../../../assets/images/podcast/6.jpg"
import podcast7 from "../../../assets/images/podcast/7.jpg"
import podcast8 from "../../../assets/images/podcast/8.jpg"
import podcast9 from "../../../assets/images/podcast/9.jpg"

const Podcast = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Podcast" activepage="Podcast" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start Row-1 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card overflow-hidden podcast-banner">
                        <Card.Body className=" p-5">
                            <Row>
                                <Col xl={8} className="my-auto">
                                    <h5 className="fw-semibold text-fixed-white">
                                        Mastering Music Distribution for Your Podcast
                                    </h5>
                                    <span className="d-block text-fixed-white op-8 fw-meidum mb-4 pb-1">Unlock the potential of various music distribution channels to amplify your podcast’s sound. Embrace new possibilities.</span>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="primary" Buttontype="button"><i className="ri-headphone-line me-2"></i> Listen Now</SpkButton>
                                        <SpkButton Buttonvariant="primary1" Buttontype="button"><i className="ri-headphone-line me-2"></i> 18.5k Playlist</SpkButton>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Popular Artists
                            </div>
                            <SpkButton Buttonvariant="primary" Size="sm" Buttontype="button">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="list-unstyled podcast-recently-played-list row">
                                <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
                                    <div className="bg-light align-items-center gap-2 p-3 text-center rounded">
                                        <div className="lh-1 mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={podcast1} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <Link to="#!" className="fw-semibold">Technos Talk</Link>
                                            <span className="d-block fs-13 text-muted">John Samitrin</span>
                                        </div>
                                    </div>
                                </div>
                                <Col xl={3} sm={6}>
                                    <div className="bg-light align-items-center gap-2 p-3 text-center rounded">
                                        <div className="lh-1 mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={podcast2} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <Link to="#!" className="fw-semibold">Science Explorers</Link>
                                            <span className="d-block fs-13 text-muted">Emily Johnson</span>
                                        </div>
                                    </div>
                                </Col>
                                <div className="col-xl-3 col-sm-6 mb-3 mb-xl-0">
                                    <div className="bg-light align-items-center gap-2 p-3 text-center rounded">
                                        <div className="lh-1 mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={podcast3} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <Link to="#!" className="fw-semibold">Business Insights</Link>
                                            <span className="d-block fs-13 text-muted">David Williams</span>
                                        </div>
                                    </div>
                                </div>
                                <Col xl={3} sm={6}>
                                    <div className="bg-light align-items-center gap-2 p-3 text-center rounded">
                                        <div className="lh-1 mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={podcast4} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <Link to="#!" className="fw-semibold">Entertainment</Link>
                                            <span className="d-block fs-13 text-muted">Michael Brown</span>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::Row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Categories
                            </div>
                            <SpkButton Buttonvariant="primary" Size="sm" Buttontype="button">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="row personal-favourite-contacts mb-0 gap-2">
                                {Categoriesdata.map((idx) => (
                                    <div className="col" key={Math.random()}>
                                        <div className="d-flex align-items-center bg-light rounded-1 p-2">
                                            <div className="me-2">
                                                <span className={`avatar avatar-lg bg-${idx.color}-transparent p-2`}>
                                                    <i className={`ri-${idx.icon} fs-18 lh-1`}></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-semibold d-block mb-0">{idx.data}</span>
                                                <span className="text-muted d-block fs-12 mb-0">{idx.data1}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-2 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Most Popular
                            </div>
                            <SpkButton Buttonvariant="light" Size="sm" Buttontype="button">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="row mb-3">
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast6} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0">Foodie Adventures</h6></Link>
                                                    <span className="text-muted fs-12">By Chef Mia Johnson</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Size="sm">
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast7} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0"> Environmental Insights</h6></Link>
                                                    <span className="text-muted fs-12">By Dr. David Green</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Size="sm">
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast7} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0">Travel Tales</h6></Link>
                                                    <span className="text-muted fs-12">By Wanderlost Explorers</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Size="sm">
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row mb-0">
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast9} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0">True Crime Files</h6></Link>
                                                    <span className="text-muted fs-12">By Detective John Smith</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Size="sm" Buttontype="button" >
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast8} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0">Science Explained</h6></Link>
                                                    <span className="text-muted fs-12">Dr. Michael Lee</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Size="sm">
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex align-items-center p-3 bg-light flex-wrap gap-2 flex-sm-nowrap mb-3 mb-xl-0">
                                        <img src={podcast8} alt="img" className="avatar avatar-xxl me-2" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-start justify-content-between mb-4 flex-wrap">
                                                <div>
                                                    <Link to="#!"><h6 className="fw-semibold mb-0">Business Buzz</h6></Link>
                                                    <span className="text-muted fs-12">By  Emily Davis</span>
                                                </div>
                                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill text-muted">
                                                    <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap">
                                                <SpkButton Buttonvariant="primary" Buttonlabel="button" Buttontype="button" Size="sm">
                                                    <i className="ri-play-fill me-1"></i> Listen Now
                                                </SpkButton>
                                                <div className="d-flex align-items-center gap-3 lh-1">
                                                    <span className="d-block d-flex align-items-center gap-2 text-muted fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>75.3k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-3">
                    <Card className="custom-card overflow-hidden bg-playing-image">
                        <Card.Body className=" p-4">
                            <div className="text-center mb-4">
                                <span className="mb-3 podcast-playing-now">
                                    <img src={podcast1} alt="" className="w-100 rounded-circle shadow-sm" />
                                </span>
                                <Link to="#!"><h6 className="fw-semibold mb-1 text-fixed-white">Mindful Living</h6></Link>
                                <span className="text-fixed-white op-8 fs-12">By Wanderlost Explorers</span>
                            </div>
                            <div className="d-flex gap-3 align-items-center mb-4 pb-4">
                                <div className="fs-12 text-fixed-white">12.25</div>
                                <SpkProgress mainClass="progress progress-xs progress-custom podcast-playing-progress" animated={true} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                                 variant="primary" now={50} />
                                <div className="fs-12 text-fixed-white">23.45</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 lh-1 px-4 py-3 bg-black-transparent rounded-pill">
                                <a aria-label="anchor" href="#!">
                                    <i className="ri-repeat-2-line fs-5 text-fixed-white"></i>
                                </a>
                                <a aria-label="anchor" href="#!">
                                    <i className="ri-skip-back-line fs-5 text-fixed-white"></i>
                                </a>
                                <a aria-label="anchor" href="#!">
                                    <i className="ri-pause-line fs-5 text-fixed-white"></i>
                                </a>
                                <a aria-label="anchor" href="#!">
                                    <i className="ri-skip-forward-line fs-5 text-fixed-white"></i>
                                </a>
                                <a aria-label="anchor" href="#!">
                                    <i className="ri-shuffle-line fs-5 text-fixed-white"></i>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End::Row-3 --> */}

            {/* <!-- Start::Row-4 --> */}
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Recently Played
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item>New</Dropdown.Item></li>
                                    <li><Dropdown.Item>Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item>Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Podcast Name' }, { title: 'duration' }, { title: 'Category' }, { title: 'Latest Episode' }, { title: 'Average Duration' }, { title: 'Favourites' }, { title: 'Action' }]}>
                                    {Recentlydata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className="avatar avatar-md"><img src={idx.src} className="" alt="..." /></span>
                                                    <div>
                                                        <Link to="#!" className="fw-semibold mb-0 d-flex align-items-center">{idx.podcast}</Link>
                                                        <span className="fs-12 d-block text-muted">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.duration}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.category}</span>
                                            </td>
                                            <td>
                                                {idx.latest}
                                            </td>
                                            <td>
                                                {idx.avg}
                                            </td>
                                            <td>
                                                <a aria-label="anchor" href="#!">
                                                    <i className={`ri-heart-fill fs-16 lh-1 text-${idx.color1} me-2`}></i>{idx.favourite}
                                                </a>
                                            </td>
                                            <td>
                                                <SpkDropdown Customtoggleclass="btn btn-sm btn-light btn-icon no-caret" toggleas="a" Icon={true} IconClass="fe fe-more-vertical">
                                                    <li><Dropdown.Item>Download</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Import</Dropdown.Item></li>
                                                    <li><Dropdown.Item>Export</Dropdown.Item></li>
                                                </SpkDropdown>
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
                </div>
            </Row>
            {/* <!-- End::Row-4 --> */}
        </Fragment>
    )
};

export default Podcast;


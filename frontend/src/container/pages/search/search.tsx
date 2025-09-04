import  { Fragment } from "react";
import { Card, Col, Dropdown, Nav, Pagination, Row, Tab } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import { LightboxGallery } from "../../../components/common/data/pages/searchdata";
import media15 from "../../../assets/images/media/media-15.jpg"
import media16 from "../../../assets/images/media/media-16.jpg"
import mediabook1 from "../../../assets/images/media/books/1.jpg"
import mediabook2 from "../../../assets/images/media/books/2.jpg"
import mediabook3 from "../../../assets/images/media/books/3.jpg"
import mediabook4 from "../../../assets/images/media/books/4.jpg"
import mediabook5 from "../../../assets/images/media/books/5.jpg"
import mediabook6 from "../../../assets/images/media/books/6.jpg"

const Search = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Search" activepage="Search" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Tab.Container defaultActiveKey="all">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className=" p-0">
                                <div className="p-3 border-bottom">
                                    <div className="input-group mb-3 search-result-input gap-2">
                                        <input type="text" className="form-control form-control-lg bg-light rounded-pill" placeholder="Search Here ..." aria-label="Search Here ..." aria-describedby="button-addon1" />
                                        <span className="position-absolute start-0 text-muted mt-3 ms-3 lh-1 search-result-icon"><i className="ri-search-line"></i></span>
                                        <SpkButton Buttonvariant="primary" Customclass="btn-w-sm rounded-pill" Buttontype="button" Id="button-addon1"> Search</SpkButton>
                                    </div>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Designs <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Template <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Dashboard <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Admin Templates <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill"> Templates <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Admin <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Hosting Templates <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Hosting <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Bootstrap <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Sales  <Link to="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <div className="ms-auto">
                                            <Link to="#!" className="text-primary text-decoration-underline fw-medium mx-2"> Clear All </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 d-flex gap-2 justify-content-between flex-wrap align-items-center">
                                    <div className="text-muted">Total of 55,142 results were found.</div>
                                    <div className="ms-auto d-flex gap-2 flex-wrap">
                                        <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-w-md btn-light text-muted no-caret" Arrowicon={true} Toggletext="Sort By">
                                            <li><Link className="dropdown-item" to="#!">Alphabets</Link></li>
                                            <li><Link className="dropdown-item" to="#!">First Word</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Numeric</Link></li>
                                        </SpkDropdown>
                                        <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-w-md btn-primary no-caret" Arrowicon={true} Toggletext="Filter By">
                                            <li><Link to="#!" className="dropdown-item">Alphabets</Link></li>
                                            <li><Link to="#!" className="dropdown-item">First Word</Link></li>
                                            <li><Link to="#!" className="dropdown-item">Numeric</Link></li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3 pt-1 pb-3">
                                    <Nav className="nav-tabs tab-style-6 p-0 search-tab gap-2" role="tablist">
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="all" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-all" aria-selected="true"><i className="ri-search-line me-2"></i>All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="image" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-images" aria-selected="false" tabIndex={-1}><i className="ri-image-line me-2"></i>Images</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="books" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-books" aria-selected="false" tabIndex={-1}><i className="ri-book-line me-2"></i>Books</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="news" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-news" aria-selected="false" tabIndex={-1}><i className="ri-newspaper-line me-2"></i>News</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="videos" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-videos" aria-selected="false" tabIndex={-1}><i className="ri-live-line me-2"></i>Videos</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="all" className="p-0 border-0" id="search-all" role="tabpanel">
                                <Row>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!">Beginner</Link></span>
                                                            <Link to="#!" className="link-primary1"> http://www.beginnerpackage.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Icon={true} Toggletext="View" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">Introduction to Web Development</Link></h6>
                                                    <span className="d-block text-muted">Learn the basics of web development, including HTML, CSS, and JavaScript.</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Shop Now</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Top 10 Picks</SpkBadge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!">Responsive Design</Link></span>
                                                            <Link to="#!" className="link-primary1">http://www.responsivedesigns.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="View" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">Best Practices for Responsive Web Design</Link></h6>
                                                    <span className="d-block text-muted"> Explore the latest techniques and tools for creating responsive websites..</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Browse Recipes</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Nutrition Tips</SpkBadge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!">JavaScript, Frameworks</Link></span>
                                                            <Link to="#!" className="link-primary1">http://www.javaScriptDevlops.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="View" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">Advanced JavaScript Frameworks</Link></h6>
                                                    <span className="d-block text-muted">Dive deep into popular JavaScript frameworks like React, Angular, and Vue.js..</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Explore Destinations</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Travel Guides</SpkBadge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!">CSS, Layouts</Link></span>
                                                            <Link to="#!" className="link-primary1">http://www.layoutscss.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="View" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">CSS Flexbox Tutorial:</Link><span className="text-muted fw-normal fs-13"> Master the CSS Flexbox layout model, get Videos from the link.</span></h6>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Explore Destinations</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Travel Guides</SpkBadge>
                                                    <div className="ms-auto">
                                                        <span className="avatar avatar-lg flex-shrink-0 ms-au me-1"> <img src={media15} alt="" /></span>
                                                        <span className="avatar avatar-lg flex-shrink-0 ms-au me-1"> <img src={media16} alt="" /></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!">Frontend Development, Debugging</Link></span>
                                                            <Link to="#!" className="link-primary1">http://www.frontenddevelopment.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="View" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">Debugging Tips for Frontend Developers</Link></h6>
                                                    <span className="d-block text-muted">Discover effective strategies for debugging frontend code and troubleshooting common issues.</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Shop Now</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Trend Alerts</SpkBadge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="d-block fw-medium"><Link to="#!"> Backend Development</Link></span>
                                                            <Link to="#!" className="link-primary1">http://www.backenddevlops.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="View" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="fw-semibold mb-1"><Link to="#!"  className="searched-item-main-link">Introduction to Backend Development</Link></h6>
                                                    <span className="d-block text-muted">Get started with backend development using Node.js, Python, and other server-side technologies.</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Explore Books</SpkBadge>
                                                    <SpkBadge variant="primary-transparent" Customclass="fs-12">Author Interviews</SpkBadge>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="pagination overflow-auto justify-content-center gap-1">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="image" className="border-0 p-0" id="search-images" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className=" pb-0">
                                        <LightboxGallery/>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="books" className="border-0 p-0" id="search-books" role="tabpanel">
                                <Row>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook6} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">May 10, 1902</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> Whispers in the Wind</Link></h6>
                                                            <span className="d-block text-muted">Set in the Scottish Highlands, this tale follows the forbidden love between a Highland.</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Classic</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Historical</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Adventure</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i>Emma Harper</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook3} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">Jun 08, 1994</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> The Quantum Enigma</Link></h6>
                                                            <span className="d-block text-muted">A brilliant physicist stumbles upon a groundbreaking quantum discovery, but soon finds..</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1"> Science Fiction</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Mystery</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Thriller</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i>Dr. James Holloway</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">Apr 15, 2010</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> Echoes of Eternity</Link></h6>
                                                            <span className="d-block text-muted">In a world where magic is fading, a young mage must embark on a perilous..</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1"> Epic</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Fantasy</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Adventure</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i>Sophia Turner</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">Oct 22, 1889</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> Culinary Alchemy</Link></h6>
                                                            <span className="d-block text-muted">Discover the secrets of transforming simple ingredients into..</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1"> Cooking</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Non-fiction</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Self-help</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i>Gordon Meyers</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook4} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">Jan 06, 1999</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> Shadows of the Mind</Link></h6>
                                                            <span className="d-block text-muted">A forensic psychologist with a dark past is drawn into a series..</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1"> Psychological Thriller</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Crime</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Suspense</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i> Dr. Lisa Bennett</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                <img src={mediabook5} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">Feb 16, 2003</span></div>
                                                            <h6 className="fw-medium my-1 d-flex align-items-center"><Link to="#!"> The Last Garden</Link></h6>
                                                            <span className="d-block text-muted">In a future where Earth’s ecosystems are collapsing, a group..</span>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkTooltips placement="top" title="Add to favourite">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary1-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Share Link">
                                                            <Link to="#!" className="btn btn-sm btn-icon btn-primary2-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 justify-content-between mt-3">
                                                    <div className="popular-tags">
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Dystopian</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Environmental</SpkBadge>
                                                        <SpkBadge variant="primary-transparent" Pill={true} Customclass="me-1">Drama</SpkBadge>
                                                    </div>
                                                    <Link to="#!"><span className="fw-semibold">Author:</span> <i> Marcus Reed</i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <div className="col-xl-12 mb-4">
                                        <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                                            <span className="me-2">Loading</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                        </SpkButton>
                                    </div>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="news" className="border-0 p-0" id="search-news" role="tabpanel">
                                <Row>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Quantum Physicists Break New Ground</h6>
                                                    <div className="mb-1"><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i> 10,Mar 2024 - 3:15PM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> Quantum Research Facility, Geneva</div>
                                                </div>
                                                <span className="text-muted">
                                                    In a groundbreaking experiment, quantum physicists have detected a previously unknown subatomic particle, challenging.
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Stunning Images from NASA's Perseverance Rover</h6>
                                                    <div><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i> 8,Apr 2024 - 9:00AM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> Jezero Crater, Mars</div>
                                                </div>
                                                <span className="text-muted">
                                                    NASA's Perseverance rover has captured breathtaking images of the Martian landscape, revealing tantalizing clues about the planet's geology.
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Breakthrough in Cancer Research</h6>
                                                    <div className="mb-1"><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i>  5,May 2024 - 1:45PM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> Genetech Laboratories</div>
                                                </div>
                                                <span className="text-muted">
                                                    Researchers have made a significant breakthrough in cancer treatment with the development of a novel therapy that targets
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Chef Julia Rodriguez Launches Global Initiative</h6>
                                                    <div className="mb-1"><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i>  5,Jun 2024 - 11:30AM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> 20 countries</div>
                                                </div>
                                                <span className="text-muted">
                                                    Renowned chef and humanitarian, Chef Julia Rodriguez, has launched a global initiative to combat
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Historic Peace Agreement Signed</h6>
                                                    <div className="mb-1"><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i> 22,Jul 2024 - 4:20PM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> United Nations</div>
                                                </div>
                                                <span className="text-muted">
                                                    In a historic move, long-time rival nations have signed a landmark peace agreement.
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-xl-4">
                                        <Card className="custom-card">
                                            <Card.Body className="">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Breakthrough in Renewable Energy</h6>
                                                    <div className="mb-1"><i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i> 8,Aug 2024 - 10:00AM</div>
                                                    <div><i className="ri-map-pin-line text-primary1 p-1 bg-primary1-transparent rounded-circle lh-1"></i> SolarTech Innovations</div>
                                                </div>
                                                <span className="text-muted">
                                                    Scientists have achieved a major breakthrough in renewable energy with the development
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <ul className="pagination text-center justify-content-center gap-1">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#!">
                                                Prev
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!">
                                                <i className="bi bi-three-dots"></i>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#!">16</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">17</a></li>
                                        <li className="page-item">
                                            <a className="page-link text-primary" href="#!">
                                                next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="videos" className="border-0 p-0" id="search-videos" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className=" pb-1">
                                        <div className="row gy-4">
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Valex - Bootstrap 5 Admin & Dashboard HTML Template</div>
                                                    </div>
                                                    <Link to="https://www.spruko.com/demo/valex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://www.spruko.com/demo/valex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Azea - Admin & Dashboard Bootstrap 5 HTML5 Template</div>
                                                    </div>
                                                    <Link to="https://spruko.com/demo/azea/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/azea/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">YNEX - HTML Installation & Usage process</div>
                                                    </div>
                                                    <Link to="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Sash - Admin and Dashboard Multipurpose HTML Advanced Template</div>
                                                    </div>
                                                    <Link to="https://spruko.com/demo/sash/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/sash/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Ynex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <Link to="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <Link to="https://spruko.com/demo/zanex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/zanex/</Link>
                                                </div>
                                            </Col>
                                            <div className="col-xl-12 my-3">
                                                <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                {/* <!-- End:: row-2 --> */}
            </Tab.Container>
        </Fragment>
    )
};

export default Search;
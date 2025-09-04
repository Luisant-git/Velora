import  { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Searchjob } from "../../../../components/common/data/apps/jobs/searchjobdata";
import LabeledTwoThumbs1 from "../../../../components/common/data/apps/jobs/searchcandidatedate";

const SearchJobs = ({ local_varaiable }: any) => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Search" activepage="Job Search" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            R & D
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,712</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Accounting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">536</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Business Process
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">18,289</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Consulting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,453</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Administrative Support
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,165</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-6" />
                                                <Form.Label className="form-check-label" htmlFor="c-6">
                                                    Aerospace
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-7" />
                                                <Form.Label className="form-check-label" htmlFor="c-7">
                                                    Biotechnology
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,123</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" to="#!"  aria-controls="#category-more" onClick={() => setOpen(!open)}
                                        aria-expanded={open}>MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,186</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">734</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">16</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="j-5" />
                                        <label className="form-check-label" htmlFor="j-5">
                                            Remote Job
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,432</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="q-1" />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">22,457</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="q-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-2">
                                            10th Pass and Above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">12,562</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="q-3" />
                                        <label className="form-check-label" htmlFor="q-3">
                                            12th Pass and Above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,155</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="q-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Diploma and Graduate
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,767</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="q-5" />
                                        <label className="form-check-label" htmlFor="q-5">
                                            Post Graduate
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,651</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Experience</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-1">
                                            Fresher
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-2" />
                                        <label className="form-check-label" htmlFor="e-2">
                                            Less than 1 year
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,632</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-3">
                                            Less than 2 year
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,032</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="e-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-4">
                                            More than 3 years
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,154</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                </div>
                                <div className="d-flex mt-4">
                                    <div className="fw-medium h6 mb-0">$<span id="lower-value">8000.00</span></div>
                                    &nbsp; -- &nbsp;
                                    <div className="fw-medium h6 mb-0">$<span id="upper-value">40000.00</span></div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            HTML5
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="s-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-2">
                                            Javascript
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,632</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="s-3" />
                                        <label className="form-check-label" htmlFor="s-3">
                                            PHP
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,032</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="s-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-4">
                                            CSS3
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,154</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div>
                                            <div className="form-check mb-1">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Bootstrap
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Angular
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    React
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">578</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" to="#!" aria-controls="#category-more" onClick={() => setOpen1(!open1)}
                                        aria-expanded={open1}>MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8} className="">
                    <Card className=" custom-card p-3">
                        <div className="row align-items-center p-3 bg-primary-transparent rounded mx-0 mb-3">
                            <div className="col-sm-7">
                                <div className="d-flex">
                                    <h5 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 6678 Jobs</h5>
                                </div>
                            </div>
                            <div className="col-sm-5 text-sm-end mt-3 mt-sm-0">
                                <SpkDropdown as={ButtonGroup} Toggletext="Sort By" Togglevariant="btn btn-primary border dropdown-toggle no-caret" Arrowicon={true}>
                                    <Dropdown.Item as="li" href="#!">Featured</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Most Relevant</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Best Rated</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Row>
                            {Searchjob.map((idx, index) => (
                                <Col xl={6} key={index}>
                                    <Card className=" custom-card featured-jobs shadow-none border">
                                        <Card.Body className="">
                                            <SpkDropdown Customclass="float-end ms-auto" toggleas="a" Menualign="end" Menuclass="dropdown-menu-end" Navigate="#!" Icon={true}
                                                IconClass="fe fe-more-vertical align-middle" Customtoggleclass="btn btn-white btn-icon btn-sm text-muted rounded-pill no-caret" >
                                                <Dropdown.Item as="li" href="#!">Add To Favourite</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#!">Save</Dropdown.Item>
                                            </SpkDropdown>
                                            <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                                <span className="avatar avatar-md border p-1">
                                                    <img src={idx.imgSrc} alt="" />
                                                </span>
                                                <div>
                                                    <h5 className="fw-medium mb-0 d-flex align-items-center"><Link  to="#!">{idx.title}</Link></h5>
                                                    <Link to="#!" className="text-muted">{idx.company}</Link>
                                                </div>
                                            </div>
                                            <div className="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <SpkBadge variant="" Pill={true} Customclass="rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i className="ri-map-pin-line me-1"></i> San Francisco</SpkBadge>
                                                <SpkBadge variant="" Pill={true} Customclass="rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1"><i className="ri-briefcase-line me-1"></i> 5 Openings</SpkBadge>
                                                <SpkBadge variant="" Pill={true} Customclass="rounded-pill fs-11 border border-info border-opacity-10 text-info"><i className="ri-graduation-cap-line me-1"></i> Graduate</SpkBadge>
                                                <SpkBadge variant="" Pill={true} Customclass="rounded-pill fs-11 border border-primary3 border-opacity-10 text-primary3"><i className="ri-time-line me-1"></i> Min - 1 Year</SpkBadge>
                                                <SpkBadge variant="" Pill={true} Customclass="rounded-pill fs-11 border border-secondary border-opacity-10 text-secondary"><i className="ri-sun-line me-1"></i> Full-time</SpkBadge>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h6 className="fw-medium mb-0">{idx.salary}</h6>
                                                <Link  to="#!" className="btn btn-primary btn-sm d-inline-flex">
                                                    Apply Now <i className="fe fe-arrow-right transform-arrow ms-2 lh-base"></i>
                                                </Link>
                                            </div>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            ))}
                            <Col xl={12}>
                                <Card className=" custom-card shadow-none bg-primary-transparent mb-0">
                                    <Card.Body className="">
                                        <div className="">
                                            <h5 className="fw-medium mb-3">Subscribe to Latest Job Alerts</h5>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your email" aria-label="job-email" aria-describedby="job-subscribe" />

                                                <SpkButton Buttonvariant="primary" Buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                                            </div>
                                            <label className="form-check-label">
                                                By subscribing, you accept our <Link  to="#!" className="text-success"><u>privacy policy</u></Link>.
                                            </label>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    <Pagination className="pagination mb-4 overflow-auto justify-content-end">
                        <Pagination.Item disabled>Previous</Pagination.Item>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    )
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(SearchJobs);
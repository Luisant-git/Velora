import  { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { jobData, Data} from "../../../../components/common/data/apps/jobs/searchcompanydata";
import SpkJobcompany from "../../../../@spk-reusable-components/reusable-apps/spk-jobcompany";

const SearchCompany = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Company Search" activepage="Company Search" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3} lg={5} className="">
                    <Card className=" custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Industry Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            R & D
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,712</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Accounting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">536</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Business Process
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">18,289</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Consulting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">3,453</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Administrative Support
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">7,165</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="cc-6" />
                                                <Form.Label className="" htmlFor="cc-6">
                                                    Aerospace
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="cc-7" />
                                                <Form.Label className="" htmlFor="cc-7">
                                                    Marketing
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">2,123</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen(!open)} data-bs-toggle="collapse" to="#!"  role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Location</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Hyderabad
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            Banglore
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,186</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            Chennai
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">734</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="c-6" />
                                                <Form.Label className="" htmlFor="c-6">
                                                    Australia
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" value="" id="c-7" />
                                                <Form.Label className="" htmlFor="c-7">
                                                    USA
                                                </Form.Label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">2,123</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen1(!open1)} data-bs-toggle="collapse"  to="#!" role="button" aria-expanded={open1} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="Recruiter-1">
                                            Direct Company
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-2" />
                                        <label className="form-check-label" htmlFor="Recruiter-2">
                                            Agency
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">67</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="vacancies-1">
                                            0 -10
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-3" />
                                        <label className="form-check-label" htmlFor="vacancies-3">
                                            20 +above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">67</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Type of Employement</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,186</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} lg={7} className="">
                    <div className="row align-items-center mb-4">
                        <Col lg={12}>
                            <div className="input-group companies-search-input">
                                <Form.Control type="text" className="form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                <Form.Control type="text" className="form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                <SpkSelect classNameprefix="Select2" mainClass='rounded-0 custom-select' name="form-field-name" option={Data} placeholder="All categories" />
                                <SpkButton Buttonvariant="primary" Buttontype="button"><i className="ri-search-line"></i></SpkButton>
                            </div>
                        </Col>
                    </div>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <h5 className="fw-medium mb-0 flex-grow-1">5473 <span className="fw-normal fs-18">Companies match for your search</span> </h5>
                                        <SpkDropdown as={ButtonGroup} Togglevariant="outline-light" Customtoggleclass="border no-caret" Toggletext="Sort By" Menuclass="dropdown-position"  Icon={true}
                                            IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <Dropdown.Item>Premium</Dropdown.Item>
                                            <Dropdown.Item>Newest</Dropdown.Item>
                                            <Dropdown.Item>Most Relevant</Dropdown.Item>
                                            <Dropdown.Item>Fresher</Dropdown.Item>
                                            <Dropdown.Item>Experienced</Dropdown.Item>
                                            <Dropdown.Item>Bond Agreement</Dropdown.Item>
                                            <Dropdown.Item>Flexible Shift</Dropdown.Item>
                                            <Dropdown.Item>Day Shift</Dropdown.Item>
                                        </SpkDropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {jobData.map((job) => (
                            <Col xl={6} key={job.id}>
                                <SpkJobcompany obj={job} />
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="pagination mb-4 overflow-auto justify-content-end">
                        <Pagination.Item disabled>Previous</Pagination.Item>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default SearchCompany;
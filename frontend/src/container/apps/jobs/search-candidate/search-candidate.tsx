import  { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import LabeledTwoThumbs1, { Data, Data2, Searchcandidate } from "../../../../components/common/data/apps/jobs/searchcandidatedate";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkSearchcandidate from "../../../../@spk-reusable-components/reusable-apps/spk-searchcandidate";

const SearchCandidate = ({ local_varaiable }: any) => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Search Candidate" activepage="Search Candidate" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4} className="">
                    <Card className="custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Software Development
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,200</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">780</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Marketing
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,500</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Customer Service
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,950</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Operations
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">6,800</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Aerospace
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">8,466</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Biotechnology
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">6,100</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen(!open)} data-bs-toggle="collapse" to="#!"  role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Availability</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Available Now
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">620</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            30 Days Notice
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,850</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="bond-1">
                                            1 Year
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">760</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-2" />
                                        <label className="form-check-label" htmlFor="bond-2">
                                            2 yrs
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">480</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-3" />
                                        <label className="form-check-label" htmlFor="bond-3">
                                            3 yrs
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">240</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Languages</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="languages-1">
                                            English
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,250</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-2" />
                                        <label className="form-check-label" htmlFor="languages-2">
                                            Hindi
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">350</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,920</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,100</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">860</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">75</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear"></div>
                                    <div id="slider">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-1" />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">22,457</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-2">
                                            10th Pass and Above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">12,562</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Diploma and Graduate
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,767</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            HTML5
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-4" />
                                                <label className="form-check-label" htmlFor="s-4">
                                                    CSS3
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,154</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    Bootstrap
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,946</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Angular
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    React
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">578</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link  className="ecommerce-more-link" onClick={() => setOpen1(!open1)} data-bs-toggle="collapse" to="#sizes-more" role="button" aria-expanded={open1} aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8} className="">
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <Card className="custom-card">
                                <Card.Body className=" p-md-0">
                                    <div className="input-group companies-search-input companies-search-input1 flex-lg-nowrap">
                                        <Form.Control type="text" className="form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                        <SpkSelect name="state" option={Data} mainClass="basic-multi-select " searchable
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]}
                                        />
                                        <Form.Control type="text" className="form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                        <SpkSelect name="state" option={Data2} mainClass="basic-multi-select custom-select-searchcompany" searchable
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                        />
                                        <SpkButton Buttonvariant="primary" Buttontype="button" Size="lg"><i className="ri-search-line"></i></SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <h5 className="fw-medium mb-0 flex-grow-1">2468 <span className="fw-normal fs-18">Candidates match your job search</span> </h5>
                                        <SpkDropdown as={ButtonGroup} Customclass="ms-auto" Togglevariant="" Toggletext="Sort By" Customtoggleclass="btn btn-outline-light border"
                                            Menualign="end" Menuclass="dropdown-menu-end">
                                            <Dropdown.Item as="li" href="#!">Premium</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Most Relevant</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Fresher</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Experienced</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Bond Agreement</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Flexible Shift</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Day Shift</Dropdown.Item>
                                        </SpkDropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {Searchcandidate.map((candidateSearch) => (
                            <Col xl={6} key={Math.random()}>
                                <SpkSearchcandidate object={candidateSearch} badge2={candidateSearch.badge2} />
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
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(SearchCandidate);
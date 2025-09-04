import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Pagination, Row, } from "react-bootstrap";
import { Tabledata } from "../../../../components/common/data/apps/jobs/joblistdata";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Pageheader from "../../../../components/page-header/pageheader";

const JobsList = () => {

    const [allData, _setallData] = useState(Tabledata)
    const [data, setData] = useState(allData);
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                checked: !selectAll,
            }))
        );
    };

    const handleRemove = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleCheckboxToggle = (id: number) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Jobs List" activepage="Jobs List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>
                                All Jobs List
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <Link to={`${import.meta.env.BASE_URL}apps/jobs/job-post`} className="btn btn-primary btn-wave btn-sm">
                                    <i className="ri-add-line me-1 align-middle"></i>Post Job
                                </Link>
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item as='li' href="#!">Posted Date</Dropdown.Item>
                                    <Dropdown.Item href="#!">Status</Dropdown.Item>
                                    <Dropdown.Item href="#!">Department</Dropdown.Item>
                                    <Dropdown.Item href="#!">Job Type</Dropdown.Item>
                                    <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item href="#!">Oldest</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" px-0 pb-0">
                            <div className="table-responsive">
                                <SpkTablescomponent checked={selectAll} onChange={handleSelectAll} showCheckbox={true} tableClass="table-hover text-nowrap" Customcheckclass="ps-4" header={[{ title: 'Job Title' }, { title: 'Company' }, { title: 'Department' }, { title: 'Applications' }, { title: 'Posted Date' }, { title: 'Vacancies' }, { title: 'Job Type' }, { title: 'Status' }, { title: 'Expires on' }, { title: 'Action' }]}>
                                    {data.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td className="ps-4">
                                                <input className="form-check-input" type="checkbox" defaultValue="" aria-label="..." id={`checkbox-${idx.id}`}
                                                    checked={idx.checked} onChange={() => handleCheckboxToggle(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-md bg-light p-1 border">
                                                        <img src={idx.src1} alt="" />
                                                    </span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link to={`${import.meta.env.BASE_URL}apps/jobs/job-details`}>{idx.class}</Link></p>
                                                        <p className="fs-12 text-muted mb-0">{idx.class1}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <Link to="#!"  className="fw-semibold mb-0">{idx.text1}</Link>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.text3}
                                            </td>
                                            <td>{idx.number}</td>
                                            <td><SpkBadge variant="" Customclass={`bg-${idx.color1}-transparent`}><i className="bi bi-clock me-1"></i>{idx.text2}</SpkBadge></td>
                                            <td>{idx.number1}</td>
                                            <td>{idx.data}</td>
                                            <td><SpkBadge variant="" Pill={true} Customclass={`rounded-pill bg-${idx.color}-transparent`}>{idx.text}</SpkBadge></td>
                                            <td>
                                                {idx.data1}
                                            </td>
                                            <td>
                                                <Link to={`${import.meta.env.BASE_URL}apps/jobs/job-details`} className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link to="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link to="#!" onClick={() => handleRemove(idx.id)} className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="pagination justify-content-end">
                                        <Pagination.Item className=" disabled">
                                            Previous
                                        </Pagination.Item>
                                        <Pagination.Item className="active">1</Pagination.Item>
                                        <Pagination.Item className="">2</Pagination.Item>
                                        <Pagination.Item className="">3</Pagination.Item>
                                        <Pagination.Item className="">4</Pagination.Item>
                                        <Pagination.Item className="">5</Pagination.Item>
                                        <Pagination.Item className="">
                                            Next
                                        </Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default JobsList;
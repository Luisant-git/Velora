import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import * as Invoicedata from '../../../../components/common/data/pages/invoice/invoicelistdata';
import Pageheader from "../../../../components/page-header/pageheader";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Manageinvoices } from "../../../../components/common/data/pages/invoice/invoicelistdata";

const InvoiceList = () => {

    //Delete function
    const [manageCompanydata, setManageCompanydata] = useState([...Manageinvoices]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageCompanydata.filter((item) => item.id !== idToRemove);
        setManageCompanydata(updatedInvoiceData);
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Pages" subtitle="Invoice" currentpage="Invoice List" activepage="Invoice List" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xxl={7}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Invoice Statistics
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="px-0 pb-0">
                                    <div id="invoice-list-stats">
                                        <Spkapexcharts chartOptions={Invoicedata.Invoiceoptions} chartSeries={Invoicedata.Invoiceseries} type="bar" width={"100%"} height={250} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={5}>
                            <Row>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Total Amount</h6>
                                                    <div className="pb-0 mt-0">
                                                        <div>
                                                            <h4 className="fw-medium mb-1">$<span className="count-up" data-count="385">386</span>k </h4>
                                                            <SpkBadge variant="primary">12,895</SpkBadge>
                                                            <div className="text-muted fs-13 mt-2">Increased By <span className="text-success">2.13%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon primary border-3 border border-primary border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-primary border border-primary border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-color)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Total Paid</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1">$<span className="count-up" data-count="126">127</span>k</h4>
                                                        <SpkBadge variant="primary1">3,457</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Decreased By <span className="text-danger">1.05%<i className="ti ti-arrow-narrow-down fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon primary1 border-3 border border-primary1 border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-primary1 border border-primary1 border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-tint1-color)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                                                                <path d="M9 12l2 2l4 -4" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Pending Invoices</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1"><span className="count-up" data-count="56">57</span></h4>
                                                        <SpkBadge variant="success">5,447</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Decreased By <span className="text-danger">2.06%<i className="ti ti-arrow-narrow-down fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon primary2 border-3 border border-primary2 border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-primary2 border border-primary2 border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help-octagon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-tint2-color)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" />
                                                                <path d="M12 16v.01" />
                                                                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Overdue Invoices</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1"><span className="count-up" data-count="47">45</span>K</h4>
                                                        <SpkBadge variant="primary3" Customclass="border">2,145</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Increased By <span className="text-success">1.3%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon primary3 border-3 border border-primary3 border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-primary3 border border-primary3 border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-tint3-color)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M6.5 7h11" />
                                                                <path d="M6.5 17h11" />
                                                                <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                                                                <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Manage Invoices
                            </Card.Title>
                            <div className="d-flex">
                                <Link to={`${import.meta.env.BASE_URL}pages/invoice/create-invoice`} className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-medium align-middle me-1"></i> Create Invoice</Link>
                                <SpkDropdown Customclass="ms-2" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" Togglevariant="" Icon={true} IconClass="ti ti-dots-vertical">
                                    <li><Dropdown.Item href="#!">All Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Paid Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Pending Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Overdue Invoices</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Client' }, { title: 'Invoice ID' }, { title: 'Issued Date' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Action' }]}>
                                    {manageCompanydata.map((idx) => (
                                        <tr className="invoice-list" key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{idx.name}</p>
                                                        <p className="mb-0 fs-11 text-muted">{idx.mail}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#!" className="fw-medium text-primary">
                                                    {idx.invoiceid}
                                                </Link>
                                            </td>
                                            <td>
                                                {idx.issueddate}
                                            </td>
                                            <td>
                                                {idx.amount}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                {idx.duedate}
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="primary-light" Customclass="btn-icon btn-sm"><i className="ri-printer-line"></i></SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Customclass="btn-icon ms-1 btn-sm invoice-btn" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-5-line"></i></SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 float-end">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item >1</Pagination.Item>
                                    <Pagination.Item active aria-current="page">2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default InvoiceList;
import  { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import togglelogo from "../../../../assets/images/brand-logos/toggle-logo.png"

const OnvoiceDetails = () => {

    const print = () => {
        window.print();
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Pages" subtitle="Invoice" currentpage="Invoice Details" activepage="Invoice Details" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <div className="card-header d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
                                <div className="avatar avatar-sm">
                                    <img src={togglelogo} alt="" />
                                </div>
                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                    <div className="h6 fw-medium mb-0">SHOPPING INVOICE : <span className="text-primary">#7864-1542</span></div>
                                </div>
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                                <SpkButton Customclass="me-2" Buttonvariant="primary1" Size="sm" onClickfunc={print}>Print<i className="ri-printer-line ms-1 align-middle d-inline-block"></i></SpkButton>
                                <SpkButton Buttonvariant="primary" Size="sm">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></SpkButton>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={4} lg={4} md={6} sm={6} className="">
                                            <p className="text-muted mb-2">
                                                Billing From :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                SPRUKO TECHNOLOGIES
                                            </p>
                                            <p className="mb-1 text-muted">
                                                WNN-A1-1323,Robsons street
                                            </p>
                                            <p className="mb-1 text-muted">
                                                Ottawa,Canada,100072
                                            </p>
                                            <p className="mb-1 text-muted">
                                                sprukotrust.Xintra@gmail.com
                                            </p>
                                            <p className="mb-1 text-muted">
                                                (222) 142-1245
                                            </p>
                                            <p className="text-muted">For more information check for <Link to="#!" className="text-primary fw-medium"><u>GSTIN</u></Link> Details.</p>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} className="ms-auto mt-sm-0 mt-3">
                                            <p className="text-muted mb-2">
                                                Billing To :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                Henry Milo
                                            </p>
                                            <p className="text-muted mb-1">
                                                Kia-13230-B12, Hamper Town
                                            </p>
                                            <p className="text-muted mb-1">
                                                Hamburg, Germany 154210
                                            </p>
                                            <p className="text-muted mb-1">
                                                henrymilo24510@gmail.com
                                            </p>
                                            <p className="text-muted">
                                                +1 222-887-9654
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-medium text-muted mb-1">Invoice ID :</p>
                                    <p className="fs-15 mb-1">#SHG148756965</p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-medium text-muted mb-1">Date Issued :</p>
                                    <p className="fs-15 mb-1">15,May 2024 - <span className="text-muted fs-12">11:13AM</span></p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-medium text-muted mb-1">Due Date :</p>
                                    <p className="fs-15 mb-1">28,June 2024</p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-medium text-muted mb-1">Due Amount :</p>
                                    <p className="fs-16 mb-1 fw-medium">$4,877.11</p>
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <table className="table nowrap text-nowrap border mt-4">
                                            <thead>
                                                <tr>
                                                    <th>BRAND NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="fw-medium">
                                                            Cresta & Co (Headphones)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Noise-cancelling technology, Bluetooth connectivity
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        3
                                                    </td>
                                                    <td>
                                                        $84
                                                    </td>
                                                    <td>
                                                        $251
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-medium">
                                                            Zephyr & Sons (Sneakers)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Lightweight mesh upper, durable rubber outsole.
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        2
                                                    </td>
                                                    <td>
                                                        $503
                                                    </td>
                                                    <td>
                                                        $503
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-medium">
                                                            Nova & Nexus (Watch)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            scratch-resistant sapphire crystal
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $689
                                                    </td>
                                                    <td>
                                                        $689
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-medium">
                                                            Everglow & Essentials (Skincare Set)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Complete daily regimen
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        3
                                                    </td>
                                                    <td>
                                                        $486
                                                    </td>
                                                    <td>
                                                        $939
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-medium">
                                                            Azure & Attire (Dress)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Flowy chiffon fabric, adjustable
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        2
                                                    </td>
                                                    <td>
                                                        $648
                                                    </td>
                                                    <td>
                                                        $648
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Sub Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-15">$1,784</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Avail Discount :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-15">$15.58</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Coupon Discount <span className="text-success">(3.5%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-15">$987.56</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Vat <span className="text-danger">(7.5%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-15">$654.69</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Due Till Date :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-15">$1</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0 fs-14">Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-medium fs-16 text-success">$3,846.53</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <Form.Control as="textarea" className="form-control-light" id="invoice-note" defaultValue="If you're not satisfied with the product, you can return the unused item within 10 days of the delivery date. For refund options, please visit the official website and review the available refund policies." />
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-end">
                            <SpkButton Buttonvariant="primary">Download <i className="ri-download-2-line ms-1 align-middle"></i></SpkButton>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Mode Of Payment
                            </div>
                        </div>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <p className="fs-14 fw-medium">
                                        Credit/Debit Card
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Card Number :</span> 1323 3213 4546 XXXX
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Name On Card :</span> Henry Milo
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Total Amount :</span> <span className="text-success fw-medium fs-14">$3,846.53</span>
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Due Date :</span> 28,June 2024 - <span className="text-danger fs-12 fw-medium">18 days due</span>
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Invoice Status : <SpkBadge variant="primary3-transparent">Processing</SpkBadge></span>
                                    </p>
                                    <div className="alert alert-primary2" role="alert">
                                        Please Make sure to pay the invoice bill within 120 days.
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default OnvoiceDetails;
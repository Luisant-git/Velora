import  { Fragment } from "react";
import { Card, Col, Row} from "react-bootstrap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkAccordions from "../../../../@spk-reusable-components/reusable-advancedui/spk-accordions";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Pageheader from "../../../../components/page-header/pageheader";
import { Accordion1, Accordion2, Accordion3, Accordion4, Accordion5, Orderdetailsdata} from "../../../../components/common/data/apps/ecommerce/orderdetailsdata";

const OrderDetails = () => {

    const print = () => {
        window.print();
    };
    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Order Details" activepage="Order Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" d-flex justify-content-between">
                                    <div className="card-title">
                                        Order No - <span className="text-primary">#SPK-7832</span>
                                    </div>
                                    <div>
                                        <SpkBadge variant="primary-transparent">
                                            Estimated delivery : 30,Nov 2023
                                        </SpkBadge>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <SpkTablescomponent tableClass="table text-nowrap" header={[{ title: 'Item' }, { title: 'Tracking ID' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Total Price' }]} >
                                            {Orderdetailsdata.map((product, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xl bg-primary-transparent">
                                                                    <img src={product.image} alt={product.name} />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-medium">
                                                                    <a href="#!" >{product.name}</a>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1 d-inline-block">Size:</span><span className="text-muted">{product.size}</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1 d-inline-block">Color:</span><span className="text-muted">{product.color} {product.badge}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><a href="#!" className="text-primary">{product.sku}</a></td>
                                                    <td><span className="fs-15 fw-semibold">${product.price}</span></td>
                                                    <td>{product.quantity}</td>
                                                    <td>${product.total}</td>
                                                </tr>
                                            ))}
                                        </SpkTablescomponent>
                                    </div>
                                </Card.Body>
                                <div className="card-footer border-top-0 d-flex align-items-center justify-content-between gap-2">
                                    <SpkButton Buttonvariant="primary-light" onClickfunc={() => print()} ><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</SpkButton>
                                    <SpkButton Buttonvariant="primary"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details</SpkButton>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Order tracking
                            </div>
                            <div>
                                ID : <Link to="#!" className="text-primary fw-semibold">#245879</Link>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="custom-form-group mb-3">
                                <input type="text" className="form-control form-control-md" placeholder="Enter your order ID" aria-label="Order ID" />
                                <SpkButton Buttonvariant="primary" Size="sm" Customclass="border-0 custom-form-btn" Buttontype="button">Track Order</SpkButton>
                            </div>
                            <p className="mb-4">
                                <span className="fw-medium me-2 fs-14">Status :</span>
                                <span className="bg-success-transparent fs-11 badge">Shipping</span>
                            </p>
                            <div className="order-track mt-1">
                                <SpkAccordions accordionClass="accordionicon-none" items={Accordion1} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none" items={Accordion2} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none" items={Accordion3} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none" items={Accordion4} closeAll={true} />
                                <SpkAccordions accordionClass="accordionicon-none order-accordian" items={Accordion5} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Order Summary
                            </div>
                            <div>
                                ID : <Link to="#!" className="text-primary fw-semibold">#245879</Link>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0 table-responsive">
                            <SpkTablescomponent>
                                <tr>
                                    <td>
                                        <div className="fw-semibold">Total Items :</div>
                                    </td>
                                    <td>
                                        06
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="fw-semibold">Applied Coupon :</div>
                                    </td>
                                    <td>
                                        <SpkBadge variant="success-transparent">SP0578A</SpkBadge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="fw-semibold">Delivery Fees :</div>
                                    </td>
                                    <td>
                                        <span className="text-danger">+$29</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="fw-semibold">Sub Total :</div>
                                    </td>
                                    <td>
                                        <span className="fs-14 fw-medium">$3,799</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="fw-semibold">Total Price :</div>
                                    </td>
                                    <td>
                                        <span className="fs-20 fw-semibold">$3,129</span>
                                    </td>
                                </tr>
                            </SpkTablescomponent>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default OrderDetails;
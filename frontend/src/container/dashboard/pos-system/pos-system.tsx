import  { Fragment, SetStateAction, useState } from "react";
import { Card, Col, Nav, Offcanvas, Pagination, Row, Tab } from "react-bootstrap";
import { Orderlist, PosrSystemdata, TopSellingItems} from "../../../components/common/data/dashboard/possystemdata";
import Pageheader from "../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkPoscard from "../../../@spk-reusable-components/reusable-dashboards/spk-poscard";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import pos1 from "../../../assets/images/pos-system/1.png"
import pos2 from "../../../assets/images/pos-system/2.png"
import pos3 from "../../../assets/images/pos-system/3.png"
import pos4 from "../../../assets/images/pos-system/4.png"
import pos5 from "../../../assets/images/pos-system/5.png"
import pos6 from "../../../assets/images/pos-system/6.png"
import pos7 from "../../../assets/images/pos-system/7.png"
import pos20 from "../../../assets/images/pos-system/20.png"
import pos9 from "../../../assets/images/pos-system/9.jpg"
import pos10 from "../../../assets/images/pos-system/10.jpg"
import pos11 from "../../../assets/images/pos-system/11.jpg"
import pos16 from "../../../assets/images/pos-system/16.jpg"
import pos17 from "../../../assets/images/pos-system/17.jpg"

const PosSystem = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };

    //Offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;
        if (Number(unit) === 0) {
            return (false);
        }
        else {
             el.currentTarget.parentElement.querySelector("input").value--
        }
    }

    function inc(el: any) {
        // let unit =
         el.currentTarget.parentElement.querySelector("input").value++
    }

    const Cartdata = [
        { id: 1, src:pos17, heading: "Cappuccino", data: "Coffee" },
        { id: 2, src:pos11, heading: "Frosting", data: "Cupcakes" },
        { id: 3, src:pos9, heading: "Cheeseburger", data: "Burger" },
        { id: 4, src:pos16, heading: "Cheese Pizza", data: "Pizza" },
        { id: 5, src:pos10, heading: "Normal Pizza", data: "Pizza" },
    ]

    const filteredProducts = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 6 || PosrSystemdata.id === 10);
    const filteredProducts1 = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 1 || PosrSystemdata.id === 8);
    const filteredProducts2 = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 9);
    const filteredProducts3 = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 2 || PosrSystemdata.id === 11);
    const filteredProducts4 = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 3 || PosrSystemdata.id === 7 || PosrSystemdata.id === 12);
    const filteredProducts5 = PosrSystemdata.filter(PosrSystemdata => PosrSystemdata.id === 4 || PosrSystemdata.id === 5);

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="POS System" activepage="POS System" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start Row-1 --> */}
            <Tab.Container defaultActiveKey="frst">
                <Row>
                    <Col xxl={9}>
                        <div className="d-flex align-Items-center justify-content-between mb-3">
                            <h6 className="fw-medium mb-0">Categories</h6>
                            <div className="d-flex gap-2 align-items-center">
                                <a className="categories-arrow left">
                                    <i className="ri-arrow-left-s-line"></i>
                                </a>
                                <a className="categories-arrow right">
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </div>
                        </div>
                        <div className="row pos-category" id="filter">
                            <Col xl={4} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="frst" onClick={() => handleTabClick('tab1')}>
                                        <Card className={`custom-card ${activeTab === 'tab1' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter="*">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md">
                                                            <img src={pos1} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">All Menu</span>
                                                            <span className="d-block op-7 fs-12">43 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={4} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="sec" onClick={() => handleTabClick('tab2')}>
                                        <Card className={`custom-card ${activeTab === 'tab2' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".pizza">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos2} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">Pizza</span>
                                                            <span className="d-block op-7 fs-12">80 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={4} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="thrd" onClick={() => handleTabClick('tab3')}>
                                        <Card className={`custom-card ${activeTab === 'tab3' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".burger">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos3} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">Burger</span>
                                                            <span className="d-block op-7 fs-12">36 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={3} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="frth" onClick={() => handleTabClick('tab4')}>
                                        <Card className={`custom-card ${activeTab === 'tab4' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".waffle">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos4} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">Waffle</span>
                                                            <span className="d-block op-7 fs-12">25 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={3} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="fifth" onClick={() => handleTabClick('tab5')}>
                                        <Card className={`custom-card ${activeTab === 'tab5' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".icecream">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos5} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">Ice Cream</span>
                                                            <span className="d-block op-7 fs-12">58 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={3} md={6} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="sixth" onClick={() => handleTabClick('tab6')}>
                                        <Card className={`custom-card ${activeTab === 'tab6' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".coffee">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos6} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">Coffee</span>
                                                            <span className="d-block op-7 fs-12">38 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xl={3} className="col-xxl">
                                <Nav.Item>
                                    <Nav.Link as="div" eventKey="seventh" onClick={() => handleTabClick('tab7')}>
                                        <Card className={`custom-card ${activeTab === 'tab7' ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <Link to="#!" className="stretched-link categories" data-filter=".cupcakes">
                                                    <div className="d-flex gap-2 categories-content">
                                                        <span className="avatar avatar-md menu-icon">
                                                            <img src={pos7} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">CupCakes</span>
                                                            <span className="d-block op-7 fs-12">38 Items</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                        </div>
                        <Row>
                            <Col xl={12}>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="fw-medium mb-0">Items List</h6>
                                    <Link to="#viewcart" className="btn btn-primary" onClick={handleShow} data-bs-toggle="offcanvas" aria-controls="viewcart"> View Cart<i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i> </Link>
                                </div>
                                <Tab.Content className='pos_system'>
                                    <Tab.Pane eventKey="frst" className="p-0 border-0">
                                        <div className="row list-wrapper">
                                            {PosrSystemdata.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard cardClass={idx.inStock} title={idx.title} imgSrc={idx.imgSrc} item={idx.description} handleShow={handleShow} price={idx.price} />
                                                </Col>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sec" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thrd" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts1.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="frth" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts2.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts3.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts4.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh" className="p-0 border-0">
                                        <Row>
                                            {filteredProducts5.map((idx) => (
                                                <Col xxl={3} xl={4} md={6} className="card-item burger" data-category="burger" key={Math.random()}>
                                                    <SpkPoscard title={idx.title} imgSrc={idx.imgSrc} handleShow={handleShow} item={idx.description} price={idx.price} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                                <nav aria-label="Page navigation">
                                    <Pagination className="pagination overflow-auto justify-content-end">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3}>
                        <Card className="custom-card active">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    Orders List
                                </div>
                                <SpkBadge variant="primary2-transparent" Customclass="rounded-pill">
                                    27 Items
                                </SpkBadge>
                            </div>
                            <Card.Body className="p-0">
                                <ul className="list-group mb-0 border-0 rounded-0">
                                    {Orderlist.map((item) => (
                                        <li key={item.id} className="list-group-item border-top-0 border-start-0 border-end-0">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md bg-light">
                                                        <img src={item.imgSrc} alt={item.title} />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-medium">{item.title}</p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        Quantity: {item.quantity} <SpkBadge variant="success-transparent" Customclass="ms-3">{item.discount}</SpkBadge>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-end">
                                                        <a aria-label="remove" href="#!">
                                                            <i className="ri-close-line fs-16 text-danger"></i>
                                                        </a>
                                                    </p>
                                                    <h6 className="mb-0 fw-medium">{item.price}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                            <div className="card-footer border-top-0">
                                <Link to="#!" className="btn btn-primary-light d-grid">
                                    View All
                                </Link>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <div className="card-header justify-content-between align-items-center">
                                <div className="card-title">Top Selling Items </div>
                                <Link to="#!" className="btn btn-primary-light border d-flex align-items-center btn-sm">
                                    View All
                                </Link>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mb-0" id="product-list">
                                    {TopSellingItems.map((item) => (
                                        <li className="mt-4" key={item.id}>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="me-3 lh-1">
                                                    <span className="avatar avatar-lg bg-gray-200 avatar-rounded">
                                                        <img src={item.image} alt={item.name} />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block mb-0 fw-medium">
                                                        {item.name}
                                                        {item.discount && <span className={`badge bg-${item.color}-transparent ms-1 fs-9`}>{item.discount}</span>}
                                                    </span>
                                                    <span className="text-muted fs-12">{item.category}</span>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fs-14 fw-medium text-primary">{item.price}</p>
                                                    <p className="mb-0 text-muted">{item.orders}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                        <Card className="custom-card p-3">
                            <div className="text-center d-flex flex-row align-items-center flex-wrap bg-primary-transparent p-3 justify-content-between rounded gap-1 py-4">
                                <div className="pos-card-image ps-1">
                                    <img src={pos20} className="" alt="..." />
                                </div>
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="text-nowrap btn-w-md me-2 ms-auto">Go Premium</SpkButton>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start::offcanvas viewcart --> */}
            <Offcanvas placement="end" show={show} onHide={handleClose} className="offcanvas-end" tabIndex={-1} id="viewcart" aria-labelledby="viewcartLabel">
                <Offcanvas.Header className="border-bottom">
                    <h6 className="offcanvas-title" id="viewcartLabel">Cart <SpkBadge variant="primary2-transparent" Customclass="rounded-pill fs-10">06 items</SpkBadge></h6>
                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <ul className="list-group mb-0 border-0 rounded-0">
                        {Cartdata.map((idx) => (
                            <li className="list-group-item border-top-0 border-start-0 border-end-0" key={idx.id}>
                                <div className="d-flex align-items-start flex-wrap">
                                    <div className="me-2 lh-1">
                                        <span className="avatar avatar-xl bg-light">
                                            <img src={idx.src} alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="mb-1 fw-medium">{idx.heading}<span className="fs-11 text-muted"> {idx.data}</span></p>

                                        <div className="product-quantity-container order-summ">
                                            <div className="input-group flex-nowrap gap-1 border rounded-pill p-1">
                                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Buttonlabel="button" onClickfunc={dec} Size="sm" Customclass="btn-icon border rounded-pill border product-quantity-minus border-end-0"><i className="ri-subtract-line"></i></SpkButton>
                                                <input type="text" className="form-control form-control-sm border-0 text-center p-0" aria-label="quantity" defaultValue="2" />
                                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Buttonlabel="button" onClickfunc={inc} Size="sm" Customclass="btn-icon border rounded-pill border product-quantity-plus border-start-0"><i className="ri-add-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-end">
                                            <a aria-label="anchor" href="#!">
                                                <i className="ri-close-line fs-16 text-danger"></i>
                                            </a>
                                        </p>
                                        <h6 className="mb-0 fw-medium mt-auto"><SpkBadge variant="success-transparent" Customclass=" ms-3 fs-9">30% Off</SpkBadge> $3.99</h6>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="fs-12 fw-medium bg-primary-transparent p-1 px-2 rounded">SPRUKO1325</div>
                            <div className="text-success">COUPON APPLIED</div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="text-muted">Sub Total</div>
                            <div className="fw-medium fs-14">$318.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="text-muted">Discount</div>
                            <div className="fw-medium fs-14">10% - $31.08</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="text-muted">Delivery Charges</div>
                            <div className="fw-medium fs-14">- $29.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="text-muted">GST (10%)</div>
                            <div className="fw-medium fs-14">+ $2.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="text-muted">Service Tax (18%)</div>
                            <div className="fw-medium fs-14">- $45.29</div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="fs-15">Total :</div>
                            <div className="fw-semibold fs-16 text-dark"> $1,387.00</div>
                        </div>
                        <div className="d-flex gap-3 mt-4">
                            <Link to="#!" className="btn btn-primary1-light btn-wave flex-fill waves-effect waves-light" onClick={handleClose}>Save For Later</Link>
                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-primary btn-wave flex-fill waves-effect waves-light">Pay Now</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            {/* <!-- End::offcanvas viewcart --> */}
        </Fragment>
    )
};

export default PosSystem;
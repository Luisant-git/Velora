import  { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import {   RelatedSwiper, ReviewSwiper  } from "../../../../components/common/data/apps/ecommerce/productdetailsdata";
import SpkSwiperJs from "../../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Lightboxcomponent } from "../../../../@spk-reusable-components/reusable-plugins/spk-lightbox";
import Pageheader from "../../../../components/page-header/pageheader";
import  png1 from "../../../../assets/images/ecommerce/png/1.png"
import  png2 from "../../../../assets/images/ecommerce/png/2.png"
import  png3 from "../../../../assets/images/ecommerce/png/3.png"
import  png4 from "../../../../assets/images/ecommerce/png/4.png"
import  png5 from "../../../../assets/images/ecommerce/png/5.png"
import  png28 from "../../../../assets/images/ecommerce/png/28.png"
import  png29 from "../../../../assets/images/ecommerce/png/29.png"
import  png30 from "../../../../assets/images/ecommerce/png/30.png"
import  png31 from "../../../../assets/images/ecommerce/png/31.png"
import  png32 from "../../../../assets/images/ecommerce/png/32.png"

const ProductDetails = () => {


    function dec(el: any) {
        let inputField = el.currentTarget.parentElement.querySelector("input");
        let unit = Number(inputField.value);
        if (unit <= 1) {
            inputField.value = "0"; // Prevent going below zero
        } else {
            inputField.value = (unit - 1).toString();
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    const breakpoints = {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }

    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products Details" activepage="Products Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: Row-1 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <Link to="#!" onClick={() => setOpen(true)} className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Compact Laptop (1/5)" data-type="image" data-draggable="true">
                                <div className="ecommerce-gallery d-block text-center">
                                    <SpkBadge variant="primary2" Customclass="tag-badge">Featured</SpkBadge>
                                    <img src={png1} alt="image" className="" />
                                    <span className="p-3 py-2 rounded text-fixed-white view-lightbox ">View More Images</span>
                                </div>
                            </Link>
                            <div className="row ad-gallery">
                                <Lightboxcomponent
                                    close={() => setOpen(false)} // Close function
                                    zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                                    open={open}
                                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                    slides={[
                                        { src: png2 },
                                        { src: png3 },
                                        { src: png4 },
                                        { src: png5 },
                                    ]} index={0} />
                            </div>
                        </Card.Body>
                        <div className="card-footer text-center d-flex gap-2 flex-wrap justify-content-sm-center">
                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-primary btn-w-lg me-2"><i className="bx bx-credit-card fs-16 align-middle"></i> Buy Now</Link>
                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`} className="btn btn-primary1 btn-w-lg"><i className="bx bx-cart-add fs-16 align-middle"></i> Add to Cart</Link>
                        </div>
                    </Card>
                </Col>
                <Col xxl={7}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <div>
                                <p className="fs-20 fw-semibold mb-3">TechPro X15 Elite - 2024 Edition 15.6" 4K UHD Touchscreen Laptop with Intel i7, 16GB RAM, 1TB SSD, GTX 1650 Ti, Windows 10 Home</p>
                                <p className="fs-16 mb-3">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star-half text-warning"></i>
                                    <span className="fw-medium ms-1 fs-13">4.6<a className="text-muted ms-2" href="#!">(3.1k Reviews)</a></span>
                                </p>
                                <div className="d-flex gap-3 align-items-center mb-3">
                                    <p className="mb-1"><span className="h2 fw-semibold">$1,899</span></p>
                                    <div className="mb-0 text-muted fs-12">
                                        <p className="mb-0"> <s> $2,599</s></p>
                                        <p className="mb-0 text-info fw-medium fs-15">Don't Miss Out! Save Up to 42% OFF!</p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="fs-15 fw-semibold mb-1">Description :</p>
                                    <p className="text-muted mb-0 fs-13">
                                        Experience unrivaled performance with the TechPro X15 Elite - 2024 Edition laptop. Featuring a stunning 4K UHD touchscreen display, powerful Intel Core i7 processor, 16GB RAM, and 1TB SSD storage.
                                    </p>
                                </div>
                                <div className="d-flex gap-4 align-items-center mb-3 justify-content-between flex-wrap">
                                    <div className="d-flex gap-3 align-items-center">
                                        <p className="fs-15 fw-semibold mb-1">RAM :</p>
                                        <div className="btn btn-light">8GB</div>
                                        <div className="btn btn-light">16GB</div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <p className="fs-15 fw-semibold mb-1">SSD Storage :</p>
                                        <div className="btn btn-light">256GB</div>
                                        <div className="btn btn-light">1TB</div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center">
                                        <Link to="#!" className="mb-0 text-primary3 fw-medium text-decoration-underline"><i className="ri-coupon-2-line me-1 align-middle d-inline-block"></i>Get a Coupon</Link>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 align-items-center mb-3">
                                    <p className="mb-1 text-success py-1 px-2 bg-success-transparent rounded-pill fs-12"><i className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i> Instock</p>
                                    <p className="mb-1 text-success py-1 px-2 bg-success-transparent rounded-pill fs-12"><i className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i> Free Shipping</p>
                                    <p className="mb-1 text-success py-1 px-2 bg-success-transparent rounded-pill fs-12"><i className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i> Easy Return</p>
                                </div>
                                <div className="d-flex gap-5 align-items-center mb-4">
                                    <div className="d-flex gap-4 align-items-center flex-wrap">
                                        <p className="fs-15 fw-semibold mb-1">Quantity :</p>
                                        <div className="product-quantity-container ecommerce-page-quantity">
                                            <div className="input-group rounded flex-nowrap gap-1">
                                                <SpkButton Buttonvariant="primary-light" onClickfunc={dec} Size="sm" Customclass="btn-icon btn-wave border rounded-pill border product-quantity-minus border-end-0 waves-effect waves-light"><i className="ri-subtract-line m-0 fs-16 quantity-icon lh-1"></i></SpkButton>
                                                <Form.Control type="text" className="form-control-sm text-center w-100 rounded-pill" aria-label="quantity" id="product-quantity" defaultValue="1" />
                                                <SpkButton Buttonvariant="primary-light" onClickfunc={inc} Size="sm" Customclass="btn-icon btn-wave border rounded-pill  border product-quantity-plus border-end-0 waves-effect waves-light"><i className="ri-add-line m-0 fs-16 quantity-icon lh-1"></i></SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <div className="d-flex gap-3 align-items-center flex-shrink-0">
                                        <p className="fs-15 fw-semibold mb-0">Colors :</p>
                                        <p className="mb-0 d-flex align-items-center">
                                            <Link className="color-1 product-colors flex-shrink-0 selected" to="#!">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </Link>
                                            <Link className="color-2 product-colors flex-shrink-0" to="#!">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </Link>
                                            <Link className="color-3 product-colors flex-shrink-0" to="#!">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </Link>
                                            <Link className="color-4 product-colors flex-shrink-0" to="#!">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </Link>
                                            <Link className="color-5 product-colors flex-shrink-0" to="#!">
                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="ms-auto d-flex gap-2">
                                        <Link to="#!" className="btn-primary-light btn">
                                            <i className="bx bx-adjust fs-16 align-middle"></i> Compare
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/wishlist`} className="btn-primary btn">
                                            <i className="bx bx-credit-card fs-15 align-middle"></i> Add to Wishlist
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="2">
                            <Card.Header>
                                <Nav className="nav-tabs tab-style-8 scaleX profile-settings-tab gap-2" id="myTab4" role="tablist">
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="1" className="bg-primary-transparent px-4" id="product-details" data-bs-toggle="tab" data-bs-target="#product-details-pane" type="button" role="tab" aria-controls="product-details-pane" aria-selected="true">Product Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="2" className="bg-primary-transparent px-4" id="key-features-tab" data-bs-toggle="tab" data-bs-target="#key-features-tab-pane" type="button" role="tab" aria-controls="key-features-tab-pane" aria-selected="false" tabIndex={-1}>Key Features</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="3" className="bg-primary-transparent px-4" id="add-features-tab" data-bs-toggle="tab" data-bs-target="#add-features-tab-pane" type="button" role="tab" aria-controls="add-features-tab-pane" aria-selected="false" tabIndex={-1}>Additional Features</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Tab.Content className="card-body">
                                <Tab.Pane eventKey="1" className="overflow-hidden p-0 border-0" id="product-details-pane" role="tabpanel" aria-labelledby="product-details" tabIndex={0}>
                                    <div className="table-responsive">
                                            <SpkTablescomponent tableClass="text-nowrap table-bordered">
                                                <tr>
                                                    <th scope="row" className="fw-semibold">
                                                        Brand
                                                    </th>
                                                    <td>TechPro</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-semibold">
                                                        Model Name
                                                    </th>
                                                    <td>
                                                        X15 Elite - 2024 Edition
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-semibold">
                                                        Display
                                                    </th>
                                                    <td>
                                                        15.6" 4K UHD Touchscreen
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-semibold">
                                                        Processor
                                                    </th>
                                                    <td>
                                                        Intel Core i7
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-semibold">
                                                        Operating System
                                                    </th>
                                                    <td>
                                                        Windows 10 Home
                                                    </td>
                                                </tr>
                                        </SpkTablescomponent>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2" className="overflow-hidden p-0 border-0" id="key-features-tab-pane" role="tabpanel" aria-labelledby="key-features-tab" tabIndex={1}>
                                    <ul className="mb-0 ps-0">
                                        <li className="mb-3"><span className="fw-semibold">Display:</span> Stunning 4K UHD resolution with touchscreen capability for immersive visuals and easy navigation.</li>
                                        <li className="mb-3"><span className="fw-semibold">Processor:</span> High-performance Intel Core i7 processor for seamless multitasking and powerful computing.</li>
                                        <li className="mb-3"><span className="fw-semibold">Memory:</span> 16GB DDR4 RAM ensures smooth performance even with multiple applications running simultaneously.</li>
                                        <li className="mb-3"><span className="fw-semibold">Storage:</span> Ample 1TB SSD storage for fast boot-up times, quick file access, and plenty of space for your files and applications.</li>
                                        <li className="mb-3"><span className="fw-semibold">Graphics:</span> NVIDIA GeForce GTX 1650 Ti graphics card delivers smooth gaming performance and supports creative applications.</li>
                                        <li className="mb-0"><span className="fw-semibold">Operating System:</span> Pre-installed with Windows 10 Home for a familiar and user-friendly computing experience.</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3" className="overflow-hidden p-0 border-0" id="add-features-tab-pane" role="tabpanel" aria-labelledby="add-features-tab" tabIndex={2}>
                                    <ul className="mb-0 ps-0">
                                        <li className="mb-3"><span className="fw-semibold">Connectivity:</span> Wi-Fi, Bluetooth, USB ports, HDMI output, and more for easy connectivity to peripherals and accessories.</li>
                                        <li className="mb-3"><span className="fw-semibold">Design:</span> Sleek and stylish design with premium materials for durability and aesthetics.</li>
                                        <li className="mb-3"><span className="fw-semibold">Battery Life:</span> Long-lasting battery to keep you productive on the go.</li>
                                        <li className="mb-3"><span className="fw-semibold">Audio:</span> High-quality audio for immersive entertainment and clear communication.</li>
                                        <li className="mb-3"><span className="fw-semibold">Security:</span> Built-in security features to protect your data and privacy.</li>
                                        <li className=""><span className="fw-semibold">Warranty:</span> Backed by TechPro's warranty for peace of mind.</li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Reviews & Ratings
                            </div>
                            <Link to="#!" className="fs-14 text-center d-block text-primary fw-medium text-decoration-underline ms-auto">
                                View More Reviews
                            </Link>
                        </div>
                        <Card.Body className="">
                            <div className="row align-items-center mx-0">
                                <Col xxl={4} xl={12} lg={12} md={12} sm={12} className="text-center bg-light rounded p-3 pt-2">
                                    <div className="fs-2">
                                        4.2
                                    </div>
                                    <SpkBadge variant="secondary" Customclass="rounded-pill align-middle mb-3"> Very Good</SpkBadge>
                                    <p className="mb-1">
                                        <i className="bx bxs-star text-warning"></i>
                                        <i className="bx bxs-star text-warning"></i>
                                        <i className="bx bxs-star text-warning"></i>
                                        <i className="bx bxs-star text-warning"></i>
                                        <i className="bx bxs-star-half text-warning"></i>
                                    </p>
                                    <div className="fw-medium mb-3"><a className="text-muted" href="#!">Based on (23,435) ratings</a></div>
                                    <a className="btn btn-primary w-100" href="#!">Leave Us a Review</a>
                                </Col>
                                <Col xxl={8} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3 pe-0">
                                    <SpkSwiperJs slides={ReviewSwiper} slidesPerView={1} spaceBetween={30} className="swiper swiper-reviews" autoplay={true} />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Featured Products
                            </div>
                            <Link to="#!" className="btn btn-sm btn-primary-light">View All</Link>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" >
                                    <tr>
                                        <td>
                                            <Link to="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="similar-products-image me-2">
                                                        <img src={png29} alt="" />
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fs-14 fw-semibold similar-product-name text-truncate">Ladies' Slim Bag </p>
                                                        <p className="mb-2">
                                                            <span>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-half-s-fill me-1 text-warning"></i>
                                                                4.3
                                                            </span>
                                                            <span className="text-muted ms-1 fs-12">(16K)</span>
                                                        </p>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 fs-18 fw-semibold">
                                                                $1,099
                                                            </p>
                                                            <p className="mb-0 text-muted fw-normal">
                                                                <s>$1,759</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto align-self-center">
                                                        <div className="btn btn-primary">Add To Cart</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="similar-products-image me-2">
                                                        <img src={png30} alt="" />
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fs-14 fw-semibold similar-product-name text-truncate">Wireless Headphones</p>
                                                        <p className="mb-2">
                                                            <span>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill  text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-half-s-fill me-1 text-warning"></i>
                                                                4.3
                                                            </span>
                                                            <span className="text-muted ms-1 fs-12">(5k)</span>
                                                        </p>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 fs-18 fw-semibold">
                                                                $7,99
                                                            </p>
                                                            <p className="mb-0 text-muted fw-normal">
                                                                <s>$1,299</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto align-self-center">
                                                        <div className="btn btn-primary">Add To Cart</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="similar-products-image me-2">
                                                        <img src={png31} alt="" />
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Wireless Earbuds</p>
                                                        <p className="mb-2">
                                                            <span>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill  text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-half-s-fill me-1 text-warning"></i>
                                                                4.3
                                                            </span>
                                                            <span className="text-muted ms-1 fs-12">(2k)</span>
                                                        </p>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 fs-18 fw-semibold">
                                                                $1,499
                                                            </p>
                                                            <p className="mb-0 text-muted fw-normal">
                                                                <s>$2,599</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto align-self-center">
                                                        <div className="btn btn-primary">Add To Cart</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="similar-products-image me-2">
                                                        <img src={png32} alt="" />
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Voluptatem Alarm Clock </p>
                                                        <p className="mb-2">
                                                            <span>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill  text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-half-s-fill me-1 text-warning"></i>
                                                                4.3
                                                            </span>
                                                            <span className="text-muted ms-1 fs-12">(12k)</span>
                                                        </p>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 fs-18 fw-semibold">
                                                                $2,299
                                                            </p>
                                                            <p className="mb-0 text-muted fw-normal">
                                                                <s>$3,299</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto align-self-center">
                                                        <div className="btn btn-primary">Add To Cart</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">
                                            <Link to="#!">
                                                <div className="d-flex align-items-top">
                                                    <div className="similar-products-image me-2">
                                                        <img src={png28} alt="" />
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Lightweight Sneakers</p>
                                                        <p className="mb-2">
                                                            <span>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill  text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-s-fill lh-1 fs-14 text-warning"></i>
                                                                <i className="ri-star-half-s-fill me-1 text-warning"></i>
                                                                4.3
                                                            </span>
                                                            <span className="text-muted ms-1 fs-12">(12k)</span>
                                                        </p>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 fs-18 fw-semibold">
                                                                $8,99
                                                            </p>
                                                            <p className="mb-0 text-muted fw-normal">
                                                                <s>$1,299</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto align-self-center">
                                                        <div className="btn btn-primary">Add To Cart</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}

            {/* <!-- Start:: Row-2 --> */}
            <h5>Related Products</h5>
            <p className="">Explore more products similar to this one, dolore magna aliqua.</p>
            <SpkSwiperJs slides={RelatedSwiper} breakpoint={breakpoints} navigation={true} slidesPerView={1} spaceBetween={20} className="swiper swiper-related-products" autoplay={true} />
            {/* // <!-- End:: Row-2 --> */}
        </Fragment>
    )
};

export default ProductDetails;
import  { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Marketplacedata } from "../../../../components/common/data/apps/nft/marketplacedata";
import Pageheader from "../../../../components/page-header/pageheader";
import { NftItems, NftSwiper, Productsdata, Swiperdata } from "../../../../components/common/data/apps/nft/nftdetailsdata";
import SpkSwiperJs from "../../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkNftcards from "../../../../@spk-reusable-components/reusable-apps/spk-nftcards";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import Ethereum from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg"
import nftimg2 from "../../../../assets/images/nft-images/2.jpg"
import face9 from "../../../../assets/images/faces/9.jpg"

const NftDetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const threeNFTs = Marketplacedata.slice(0, 4);
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="NFT" currentpage="NFT Details" activepage="NFT Details" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Card className=" custom-card overflow-hidden">
                <Card.Body className="">
                    <Row className="">
                        <Col xxl={4} xl={12} className="">
                            <SpkSwiperJs slides={Swiperdata} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="mySwiper swiper-preview-details bg-light product-details-page" />
                            <SpkSwiperJs slides={Swiperdata} onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true}
                                className="swiper swiper-view-details mt-2" />
                        </Col>
                        <Col xxl={8} xl={12} className="">
                            <Card className=" custom-card shadow-none border mb-0">
                                <Card.Body className="">
                                    <Row className="">
                                        <div className="col-xl-12 mt-xxl-0 mt-3">
                                            <div className="d-flex gap-2 align-items-center justify-content-between mb-3">
                                                <div>
                                                    <p className="fs-18 fw-medium mb-0">Vibrant Symphony - NFT Digital Art</p>
                                                    <span className="mb-0 fw-medium fs-15">Digital Art NFT <SpkTooltips placement="top" title="Verified"><i className="ri-checkbox-circle-fill text-primary"></i></SpkTooltips></span>
                                                </div>
                                                <p className="fs-18 text-end ms-auto mb-0">
                                                    <i className="ri-heart-3-fill text-danger align-middle"></i>
                                                    <span className="fw-medium text-muted"><a className="text-info fs-14" href="#!">(2.4k Likes)</a></span>
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="fs-15 fw-medium mb-1">Description :</p>
                                                <p className="text-muted mb-0">
                                                    "Vibrant Symphony" is a mesmerizing NFT artwork created by a renowned digital artist. This unique piece takes viewers on a journey through a vivid and ethereal world, where vibrant colors blend seamlessly with abstract forms. The artwork is a digital representation of the artist's imagination, combining elements of surrealism and futuristic aesthetics.
                                                </p>
                                            </div>
                                            <div className="row justify-content-center">
                                                <Col xxl={12}>
                                                    <div className="ecommerce-assurance bg-light">
                                                        <div className="d-flex justify-content-between gap-2 align-items-center flex-wrap">
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Highest Bid :</p>
                                                                <div className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                    <img src={Ethereum} alt="" />
                                                                </div>
                                                                <h4 className="mb-2 d-inline-block text-success">  2.9ETH</h4>
                                                                <p className="text-muted mb-0 fs-12"> Highest Bid By <span className="text-primary fw-medium">@abstract65</span></p>
                                                            </div>
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Blockchain :</p>
                                                                <div className="d-flex gap-1 align-items-center">
                                                                    <div className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                        <img src={Ethereum} alt="" />
                                                                    </div>
                                                                    <h6 className="mb-0">  Ethereum</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Sales Ends in :</p>
                                                                <p className="nft-details-auction-time bg-primary2 px-3 py-1 text-fixed-white rounded-pill mb-0 shadow-sm"><i className="ri-time-line"></i> 07hrs : 33m : 45s</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="row mt-4">
                                                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Collection:</p>
                                                    <div className="d-flex align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded lh-1 me-1"><img src={nftimg2} alt="" /></span>
                                                        Digital Art NFT
                                                    </div>
                                                </Col>
                                                <Col xxl={2} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Owned By:</p>
                                                    <div className="d-flex align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded lh-1 me-1"><img src={face9} alt="" /></span>
                                                        Henry Milo
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Published :</p>
                                                    <span className="d-block fw-medium">24, Jul 2024 - 12:45PM</span>
                                                </Col>
                                                <Col xxl={4} xl={12} className="">
                                                    <p className="mb-2 fs-15 fw-medium">Price:
                                                        <span className="ms-3 badge bg-primary1-transparent">30% Off</span>
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className="h3">
                                                            <span className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                <img src={Ethereum} alt="" /></span>2.299<sup className="fs-14">.00</sup></span>
                                                        <span className="mb-0 text-muted fs-12 ms-1 d-inline-block"><s>ETH2,599.00</s>
                                                        </span>
                                                    </p>
                                                </Col>
                                            </div>
                                            <div className="row mt-4 align-items-end justify-content-between">
                                                <Col xl={6}>
                                                    <div className="d-flex gap-1 mb-2 mb-xl-0">
                                                        <SpkButton Buttonvariant="primary" Customclass="mb-0 btn-wave flex-fill btn-lg me-1">Place a bid</SpkButton>
                                                        <SpkButton Buttonvariant="secondary-light" Customclass="mb-0 btn-wave flex-fill btn-lg">Buy Now</SpkButton>
                                                    </div>
                                                </Col>
                                                <Col xl={3}>
                                                    <div className="d-flex gap-2 justify-content-end">
                                                        <p className="fs-12 bg-primary-transparent badge rounded-pill text-end mb-0">
                                                            <i className="ri-eye-line text-primary me-2 align-middle"></i>
                                                            <span className="fw-medium"><Link to="#!"></Link>3.5k Views</span>
                                                        </p>
                                                        <p className="fs-12 bg-primary-transparent badge rounded-pill text-end mb-0">
                                                            <i className="ri-share-line text-primary me-2 align-middle"></i>
                                                            <span className="fw-medium"><Link to="#!"></Link>Share</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-2 --> */}
            <Row className="">
                <Col xxl={4} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">Product Details :</div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View More
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-bordered text-nowrap nft-details-page">
                                    {Productsdata.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row" className="fw-medium">
                                                {item.label}
                                            </th>
                                            <td>
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Key Features :
                            </div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View More
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="mb-0 list-unstyled">
                                <li className="mb-3">
                                    <span className="fw-medium">NFT Title:</span> "Vibrant Symphony"
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Edition:</span> Limited edition of 25
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Tags:</span> #digitalart, #sunset, #mystical, #dreamscape
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Creation Date:</span> July 1, 2024
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Average Rating:</span> 4.8/5
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Dimensions:</span> 3000x2000 pixels
                                </li>
                                <li className="mb-1">
                                    <span className="fw-medium">Exhibition History:</span> Digital Art Expo 2024 - Gallery XYZ, New York City
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} className="">
                    <Card className=" custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Reviews & Ratings
                            </div>
                            <Link to="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <Row className="">
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <i className="ri-star-fill fs-26 text-warning"></i>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-0 fw-medium">4.5 out of 5<span className="mb-0 text-muted fs-11 fw-normal"> Based on (2.1k) ratings</span></p>
                                        </div>
                                    </div>
                                    <SpkSwiperJs slides={NftSwiper} className="crypto-swiper swiper-basic" spaceBetween={30} centeredSlides={true} autoplay={true} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}

            {/* <!--Start::row-3 --> */}
            <Row className="">
                <Col xxl={3} sm={12} className="">
                    <Card className=" custom-card">
                        <Card.Header className="card-header">
                            <div className="card-title">
                                Popular NFT's :
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-bordered text-nowrap" >
                                    {NftItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link to="#!">
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar me-2">
                                                            <img src={item.imageSrc} alt={item.name} />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-1 fs-14 fw-medium similar-product-name text-truncate">
                                                                {item.name}
                                                            </p>
                                                            <p className="mb-0">
                                                                <SpkBadge variant="success">{item.badgeCount}<i className="ri-heart-3-fill align-middle ms-1"></i></SpkBadge>
                                                                <span className="text-muted ms-1">({item.followers})</span>
                                                            </p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="mb-0 fs-16 fw-medium">
                                                                <span className="avatar avatar-xs avatar-rounded p-1">
                                                                    <img src={Ethereum} alt="Ethereum" />
                                                                </span>
                                                                {item.price}
                                                            </p>
                                                            <p className="mb-0 text-muted">
                                                                <s>
                                                                    <span className="avatar avatar-xs avatar-rounded p-1">
                                                                        <img src={Ethereum} alt="Ethereum" />
                                                                    </span>
                                                                    {item.originalPrice}
                                                                </s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="d-grid">
                                            <SpkButton Buttonvariant="secondary-light">View All NFT's</SpkButton>
                                        </td>
                                    </tr>
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <div className="d-flex gap-1 align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium mb-0">Explore More NFT's:</h6>
                        <Link to="#!" className="btn btn-primary-light btn-sm ms-auto">
                            View More
                        </Link>
                    </div>
                    <Row className="">
                        {threeNFTs.map((idx) => (
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-3 --> */}
        </Fragment>
    )
};

export default NftDetails;
import  { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import { Marketplacedata } from "../../../../components/common/data/apps/nft/marketplacedata";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkListgroup from "../../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import { Link } from "react-router-dom";
import SpkNftcards from "../../../../@spk-reusable-components/reusable-apps/spk-nftcards";
import nftimg2 from "../../../../assets/images/nft-images/2.jpg"
import nftimg18 from "../../../../assets/images/nft-images/18.jpg"
import nftimg8 from "../../../../assets/images/nft-images/8.jpg"
import nftimg11 from "../../../../assets/images/nft-images/11.jpg"
import nftimg17 from "../../../../assets/images/nft-images/17.jpg"
import nftimg31 from "../../../../assets/images/nft-images/31.png"
import nftimg25 from "../../../../assets/images/nft-images/25.png"
import nftimg26 from "../../../../assets/images/nft-images/26.png"
import nftimg21 from "../../../../assets/images/nft-images/21.png"

const LiveAcuation = () => {

    const Liveacuation = Marketplacedata.slice(0, 6);
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="NFT" currentpage="Live Acution" activepage="Live Acution" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={2} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Filter
                            </div>
                            <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button" Customclass="waves-effect waves-light">Clear All</SpkButton>
                        </div>
                        <Card.Body className="p-0">
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Creator Verification</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Verified-Creator" defaultChecked />
                                        <label className="form-check-label" htmlFor="Verified-Creator">
                                            Verified
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Non-Verified-Creator" />
                                        <label className="form-check-label" htmlFor="Non-Verified-Creator">
                                            Non-Verified
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">7</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">NFT Type</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Art" defaultChecked />
                                        <label className="form-check-label" htmlFor="NFT-Art">
                                            Art
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">45</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Graphic" />
                                        <label className="form-check-label" htmlFor="NFT-Graphic">
                                            Graphic
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">30</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Music" />
                                        <label className="form-check-label" htmlFor="NFT-Music">
                                            Music
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">15</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Fashion" />
                                        <label className="form-check-label" htmlFor="NFT-Fashion">
                                            Fashion
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">19</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Trending" />
                                        <label className="form-check-label" htmlFor="NFT-Trending">
                                            Trending
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">19</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Games" />
                                        <label className="form-check-label" htmlFor="NFT-Games">
                                            Games
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">45</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Price Range</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-Under-1ETH" defaultChecked />
                                        <label className="form-check-label" htmlFor="Price-Under-1ETH">
                                            Under 1 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">55</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-1-3ETH" />
                                        <label className="form-check-label" htmlFor="Price-1-3ETH">
                                            1 - 3 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">34</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-3-5ETH" />
                                        <label className="form-check-label" htmlFor="Price-3-5ETH">
                                            3 - 5 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">34</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-5-7ETH" />
                                        <label className="form-check-label" htmlFor="Price-5-7ETH">
                                            5 - 7 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-7-8ETH" />
                                        <label className="form-check-label" htmlFor="Price-7-8ETH">
                                            7 - 8 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-10-15ETH" />
                                        <label className="form-check-label" htmlFor="Price-10-15ETH">
                                            10 - 15 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-Above-15ETH" />
                                        <label className="form-check-label" htmlFor="Price-Above-15ETH">
                                            Above 15 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">7</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Token Standard</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="ERC-721" />
                                        <label className="form-check-label" htmlFor="ERC-721">
                                            ERC-721
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">50</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="ERC-1155" />
                                        <label className="form-check-label" htmlFor="ERC-1155">
                                            ERC-1155
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Auction Status</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Status-Active" defaultChecked />
                                        <label className="form-check-label" htmlFor="Status-Active">
                                            Active
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">89</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Status-OnHold" />
                                        <label className="form-check-label" htmlFor="Status-OnHold">
                                            On Hold
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">05</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Status-Ended" />
                                        <label className="form-check-label" htmlFor="Status-Ended">
                                            Ended
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Ownership Status</div>
                                <div className="px-0 py-3 pb-1">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Owned" />
                                        <label className="form-check-label" htmlFor="Owned">
                                            Owned
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">40</SpkBadge>
                                    </div>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Not-Owned" />
                                        <label className="form-check-label" htmlFor="Not-Owned">
                                            Not Owned
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">60</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={7} xl={8}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <div className="d-flex align-Items-center justify-content-between mb-3">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="d-flex gap-2 align-items-center">
                                    <a className="categories-arrow left bg-primary-transparent">
                                        <i className="ri-arrow-left-s-line text-primary"></i>
                                    </a>
                                    <a className="categories-arrow right bg-primary text-fixed-white">
                                        <i className="ri-arrow-right-s-line text-fixed-white"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div className="nft-tag nft-tag-primary active">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-earth-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">All Items</span>
                                </div>
                                <div className="nft-tag nft-tag-primary1">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-fire-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">New Trends</span>
                                </div>
                                <div className="nft-tag nft-tag-primary2">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-robot-2-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">Virtual</span>
                                </div>
                                <div className="nft-tag nft-tag-primary3">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-camera-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">Photography</span>
                                </div>
                                <div className="nft-tag nft-tag-secondary">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-palette-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">Art Work</span>
                                </div>
                                <div className="nft-tag nft-tag-success">
                                    <Link  to="#!" className="stretched-link"></Link>
                                    <span className="nft-tag-icon"><i className="ri-gift-line fs-18 align-middle"></i></span>
                                    <span className="nft-tag-text">Others</span>
                                </div>
                            </div>
                            <Row>
                                <h6 className="fw-medium mb-3">Live Auction:</h6>

                                {Liveacuation.map((idx) => (
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                        <SpkNftcards cardClass="border" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                                    </Col>
                                ))}
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="pagination mb-0 overflow-auto justify-content-end">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={12}>
                    <Row>
                        <Col xxl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Top NFT Creators
                                    </div>
                                    <div>
                                        <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button" Customclass="">View All</SpkButton>
                                    </div>
                                </div>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush">
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Emily Watson<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@emilywatson</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+21.10ETH</span>
                                                    <span className="d-block text-muted fs-11">25 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg18} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Daniel Green<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@danielgreen</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+18.75ETH</span>
                                                    <span className="d-block text-muted fs-11">20 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg8} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Sophia Cruz<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@sophiacruz</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+15.90ETH</span>
                                                    <span className="d-block text-muted fs-11">18 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg11} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Oliver Bennett<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@oliverbennett</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+14.25ETH</span>
                                                    <span className="d-block text-muted fs-11">16 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg17} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Isabella Par<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@isabella</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+12.80ETH</span>
                                                    <span className="d-block text-muted fs-11">14 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={nftimg31} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">Liam Cooper<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@liamcooper</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success">+10.55ETH</span>
                                                    <span className="d-block text-muted fs-11">12 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Latest NFT Transactions
                                    </div>
                                    <SpkDropdown Togglevariant="" Customtoggleclass="fs-12 text-muted no-caret custom-btn-dropdown" Toggletext="Today" Arrowicon={true}>
                                        <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush">
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg31} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><Link  to="#!" className="fw-medium">Galactic Treasures</Link><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">24 mins ago</span></div>
                                                    <div className="fs-12">Sold to <a className="text-decoration-underline" href="#!">Mitchell</a> for <span className="text-success fw-medium fs-12">0.57ETH</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg25} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><span className="fw-medium">Galactic Treasures</span><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">16 mins ago</span></div>
                                                    <div className="fs-12">Started following <span className="fw-medium">Mark Zuckerberg</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg21} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><span className="fw-medium">Digital Cosmos</span><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">5 mins ago</span></div>
                                                    <div className="fs-12">Showed interest in purchasing <Link  to="#!" className="fs-12 text-warning fw-medium">Digital Cosmos</Link>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg26} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><span className="fw-medium">Digital Cosmos</span><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">16 mins ago</span></div>
                                                    <div className="fs-12">Purchased from <Link  to="#!" className="text-decoration-underline">CyberCanvas</Link> for <span className="fw-medium fs-12 text-pink">1.345ETH</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg21} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><Link  to="#!" className="fw-medium">Cosmic Odyssey</Link><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">30 mins ago</span></div>
                                                    <div className="fs-12">Listed <span className="fw-medium">Cosmic Odyssey</span> for auction.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-xxl-nowrap">
                                                <span className="avatar avatar-lg lh-1">
                                                    <img src={nftimg31} alt="" />
                                                </span>
                                                <div className="flex-fill">
                                                    <div className="mb-1 d-flex align-Items-center gap-2 justify-content-between"><span className="fw-medium">Galactic Treasures</span><span className="fs-10 text-muted ms-2 d-inline-block ms-auto">1 hour ago</span></div>
                                                    <div className="fs-12">Gifted to <Link  to="#!" className="text-decoration-underline">Alice</Link> as a token of appreciation.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                    <div className="p-3 pt-2 text-center">
                                        <Link  to="#!" className="text-center text-primary text-decoration-underline">View All NFT Transactions</Link>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default LiveAcuation;
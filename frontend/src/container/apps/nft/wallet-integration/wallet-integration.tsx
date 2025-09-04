import  { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkListgroup from "../../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import nftimg34 from "../../../../assets/images/nft-images/34.png"
import nftimg33 from "../../../../assets/images/nft-images/33.png"
import nftimg32 from "../../../../assets/images/nft-images/32.png"
import nftimg28 from "../../../../assets/images/nft-images/28.png"
import nftimg30 from "../../../../assets/images/nft-images/30.png"
import nftimg29 from "../../../../assets/images/nft-images/29.png"
import nftimg36 from "../../../../assets/images/nft-images/36.png"
import nftimg22 from "../../../../assets/images/nft-images/22.png"
import nftimg23 from "../../../../assets/images/nft-images/23.png"
import nftimg20 from "../../../../assets/images/nft-images/20.png"
import nftimg24 from "../../../../assets/images/nft-images/24.png"
import nftimg19 from "../../../../assets/images/nft-images/19.png"
import nftimg27 from "../../../../assets/images/nft-images/27.png"

const WalletIntegration = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="NFT" currentpage="Wallet Integration" activepage="Wallet Integration" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start::row-1 --> */}
            <div className="row justify-content-center">
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden bg-primary-gradient nft-wallet-card">
                        <Card.Body className="text-center">
                            <div className="fw-medium mb-2 text-fixed-white op-7">
                                Wallet Balance
                            </div>
                            <h5 className="fw-bold text-fixed-white">$25,680</h5>
                            <p className="text-muted mb-0 text-fixed-white op-7">Available Balance</p>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Wallet Transactions
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#!" className="p-2 py-2 bg-light fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    Last 24 Hours <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu role="menu">
                                    <Dropdown.Item as="li"><Link to="#!">Last 24 Hours</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link to="#!">Last 7 Days</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link to="#!">Last 30 Days</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="p-0">
                            <SpkListgroup as="ul" Variant="flush" >
                                <ListGroup.Item as="li">
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-xl bg-primary1-transparent">
                                                <i className="ri-exchange-line fs-25"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="mb-1 d-flex justify-content-between gap-1"><span className="fw-medium">ETH Received</span><span className="fs-12 text-muted ms-auto d-inline-block">24 mins ago</span></div>
                                            <div className="fs-13">From: <span className="text-primary fw-medium">@user123</span></div>
                                            <div className="fs-13">Amount: <span className="text-success fw-medium">2.1 ETH</span></div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-xl bg-success-transparent">
                                                <i className="ri-arrow-right-line fs-25"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="mb-1 d-flex justify-content-between gap-1"><span className="fw-medium">ETH Sent</span><span className="fs-12 text-muted ms-auto d-inline-block">16 mins ago</span></div>
                                            <div className="fs-13">To: <span className="text-primary fw-medium">@recipient456</span></div>
                                            <div className="fs-13">Amount: <span className="text-danger fw-medium">1.5 ETH</span></div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-xl bg-info-transparent">
                                                <i className="ri-coin-line fs-25"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="mb-1 d-flex justify-content-between gap-1"><span className="fw-medium">NFT Purchase</span><span className="fs-12 text-muted ms-auto d-inline-block">5 mins ago</span></div>
                                            <div className="fs-13">From: <span className="text-primary fw-medium">@creator789</span></div>
                                            <div className="fs-13">Price: <span className="fw-medium">$350</span></div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-bottom">
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-xl bg-primary3-transparent">
                                                <i className="ri-arrow-left-line fs-25"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="mb-1 d-flex justify-content-between gap-1"><span className="fw-medium">ETH Withdrawal</span><span className="fs-12 text-muted ms-auto d-inline-block">2 hours ago</span></div>
                                            <div className="fs-13">To: <span className="text-primary fw-medium">0x34F7Bc...</span></div>
                                            <div className="fs-13">Amount: <span className="text-danger fw-medium">5.0 ETH</span></div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </SpkListgroup>
                            <div className="p-3 text-center">
                                <Link to="#!" className="text-center text-primary text-decoration-underline">View All Transactions</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Choose Network
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <ul className="list-group list-group-flush nft-list d-flex align-items-center gap-4 flex-row p-3 bg-light bg-opacity-50 flex-wrap">
                                <li className="list-group-item border active">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg34} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Etherium</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg33} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Binance</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg32} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Solana</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg28} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Tezos</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg30} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Avalanche</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg29} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Cardano</div>
                                    </div>
                                </li>
                                <li className="list-group-item border">
                                    <Link to="#!" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src={nftimg36} alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Monero</div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Connect Wallet
                            </div>
                            <div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="row justify-content-center">
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet active">
                                        <Card.Body className="p-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src={nftimg22} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">MetaMask</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link to="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src={nftimg23} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Enjin Wallet</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link to="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src={nftimg20} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Trust Wallet</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link to="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src={nftimg24} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Coinbase Wallet</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet mb-xxl-0">
                                        <Card.Body className="p-3">
                                            <Link to="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src={nftimg19} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Lido</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6}>
                                    <Card className="custom-card nft-wallet mb-xxl-0">
                                        <Card.Body className="p-3">
                                            <Link to="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src={nftimg27} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Huobi Wallet</h6>
                                                </div>
                                                <Link to="#!" className="text-primary text-decoration-underline ms-auto">Connect</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer d-flex justify-content-between gap-2">
                            <SpkButton Buttonvariant="primary-light" Size="lg">Import More</SpkButton>
                            <SpkButton Buttonvariant="primary" Size="lg">Add New Wallet</SpkButton>
                        </div>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};

export default WalletIntegration;
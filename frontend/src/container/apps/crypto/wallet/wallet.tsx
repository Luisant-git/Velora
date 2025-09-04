import  { Fragment } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { wallets } from "../../../../components/common/data/apps/crypto/walletdata";
import SpkWalletCard from "../../../../@spk-reusable-components/reusable-apps/spk-walletcard";
import media68 from "../../../../assets/images/media/media-68.png"

const Wallet = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Crypto" currentpage="Wallet" activepage="Wallet" path={""} />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                BTC Wallet Address
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <Form.Label htmlFor="btc-wallet-address1" className="">Wallet Address</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" className="" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                        <SpkButton Buttonvariant="primary">Copy</SpkButton>
                                    </InputGroup>
                                </div>
                                <div>
                                    <span className="avatar avatar-xxl border">
                                        <img src={media68} className="p-1 qr-image" alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="row p-2 py-3 bg-light mx-0 gy-2">
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-success-transparent">
                                                    <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Received</span>
                                                <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-danger-transparent">
                                                    <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Sent</span>
                                                <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-secondary-transparent">
                                                    <i className="ti ti-wallet fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Wallet</span>
                                                <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-center d-grid">
                            <SpkButton Buttonvariant="primary" Customclass="btn-w-lg waves-effect waves-light">Connect</SpkButton>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                ETH Wallet Address
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <Form.Label htmlFor="btc-wallet-address2" className="">Wallet Address</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" className="" id="btc-wallet-address2" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                        <SpkButton Buttonvariant="primary">Copy</SpkButton>
                                    </InputGroup>
                                </div>
                                <div>
                                    <span className="avatar avatar-xxl border">
                                        <img src={media68} className="p-1 qr-image" alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="row p-2 py-3 bg-light mx-0 gy-2">
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-success-transparent">
                                                    <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Received</span>
                                                <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-danger-transparent">
                                                    <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Sent</span>
                                                <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-secondary-transparent">
                                                    <i className="ti ti-wallet fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Wallet</span>
                                                <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-center d-grid">
                            <SpkButton Buttonvariant="primary" Customclass="btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                LTC Wallet Address
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <Form.Label htmlFor="btc-wallet-address3" className="">Wallet Address</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" className="" id="btc-wallet-address3" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                        <SpkButton Buttonvariant="primary" >Copy</SpkButton>
                                    </InputGroup>
                                </div>
                                <div>
                                    <span className="avatar avatar-xxl border">
                                        <img src={media68} className="p-1 qr-image" alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="row p-2 py-3 bg-light mx-0 gy-2">
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-success-transparent">
                                                    <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Received</span>
                                                <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-danger-transparent">
                                                    <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Sent</span>
                                                <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <div>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-secondary-transparent">
                                                    <i className="ti ti-wallet fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block text-muted">Wallet</span>
                                                <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-center d-grid">
                            <SpkButton Buttonvariant="primary" Customclass="btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-2 --> */}
            <Row>
                {wallets.map((idx) => (
                    <Col xxl={3} lg={6} key={Math.random()} className="">
                        <SpkWalletCard title={idx.title} img={idx.imgSrc} name={idx.currency} price1={idx.available} priceInUSD={idx.data} data={idx.data1} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    )
};

export default Wallet;
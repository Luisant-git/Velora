import  { Fragment } from "react";
import { Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import {  Data1, Data2, Staticoptions, Staticseries } from "../../../../components/common/data/apps/crypto/buydata";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkButtongroup from "../../../../@spk-reusable-components/reusable-uielements/spk-buttongroup";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import Bitcoin from "../../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
import Bitcoinsq from "../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg"
import Ethereumsq from "../../../../assets/images/crypto-currencies/square-color/Ethereum.svg"
import Litecoinsq from "../../../../assets/images/crypto-currencies/square-color/Litecoin.svg"

const BuySell = () => {
    
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Crypto" currentpage="Buy & Sell" activepage="Buy & Sell" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Buy Crypto
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col xl={6}>
                                        <InputGroup className="mb-3 flex-nowrap crypto-data">
                                            <FormControl type="text" aria-label="crypto buy select" placeholder="Select Currency" />
                                            <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select buysell" placeholder="BTC"
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col xl={6}>
                                        <InputGroup className="mb-3 flex-nowrap crypto-data">
                                            <FormControl type="text" aria-label="crypto buy select" />
                                            <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="USD"
                                                menuplacement='auto' classNameprefix="Select2"  defaultvalue={[Data2[0]]}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <div className="bg-light pt-2 p-3 rounded">
                                    <div className="fs-14 py-2"><span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-medium float-end">BTC</span></div>
                                    <div className="fs-14 py-2"><span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-medium float-end">LTC</span></div>
                                    <div className="fw-medium fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                    <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                </div>
                                <label className="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                                <div className="row g-2">
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                <label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
                                                    Credit / Debit Cards
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
                                                    Paypal
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                <label className="form-check-label fs-12" htmlFor="flexRadioDefault3">
                                                    Wallet
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="d-grid mt-4 pt-1">
                                    <SpkButton Buttonvariant="primary" Buttontype="button">BUY</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sell Crypto
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <InputGroup className="input-group mb-3 flex-nowrap crypto-data">
                                        <FormControl type="text" className="form-control" aria-label="crypto buy select" placeholder="Select Currency" />
                                        <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select buysell" placeholder="BTC"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xl={6}>
                                    <InputGroup className="input-group mb-3 flex-nowrap crypto-data">
                                        <FormControl type="text" aria-label="crypto buy select" />
                                        <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="USD"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <div className="mb-3">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap">
                                                <div className="gap-2 d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar bg-light p-2">
                                                            <img src={Bitcoin} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end ms-auto">
                                                    <span className="fw-medium d-block">0.374638535 BTC</span>
                                                    <span className="text-muted">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="mb-3">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-medium d-block">Banking</span>
                                                    <span className="text-muted">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-light pt-2 p-3 rounded">
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">BTC</span>
                                </div>
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">LTC</span>
                                </div>
                                <div className="fw-medium fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                            </div>
                            <div className="d-grid mt-4">
                                <SpkButton Buttonvariant="secondary" Buttontype="button">SELL</SpkButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Quick Secure Transfer
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel">
                                <div className="mb-3">
                                    <span className="form-label">Crypto Value :</span>
                                    <div className="position-relative">
                                        <Link to="#!" className="stretched-link"></Link>
                                        <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2 avatar-md">
                                                        <img src={Bitcoin} alt="" />
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Bitcoin - BTC</div>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <span className="fw-medium d-block">0.374638535 BTC</span>
                                                <span className="text-muted">$5,364.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <span className="form-label">Deposit To :</span>
                                    <div className="position-relative">
                                        <Link to="#!" className="stretched-link"></Link>
                                        <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                            <div className="lh-1">
                                                <span className="avatar bg-light avatar-md p-2">
                                                    <i className="ri-bank-line text-info fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fw-medium d-block">Banking</span>
                                                <span className="text-muted">Checking ...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <span className="form-label">Amount :</span>
                                </div>
                                <InputGroup className="input-group mb-3 flex-nowrap crypto-data">
                                    <FormControl type="text" className="form-control" aria-label="crypto buy select" />
                                    <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </InputGroup>
                                <div className="p-3 bg-light rounded">
                                    <div className="fs-14 pb-1">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fs-14 pt-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">LTC</span>
                                    </div>
                                </div>
                                <div className="d-grid mt-3">
                                    <SpkButton Buttonvariant="primary2" Buttontype="button" Customclass="waves-effect waves-light">Transfer</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Buy & Sell Statistics
                            </div>
                            <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Size="sm">1D</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button">1W</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button">1M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button">3M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
                            </SpkButtongroup>
                        </div>
                        <div className="card-body p-xl-0">
                            <div className="row align-items-center">
                                <div className="col-xl-8 pe-0 border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-3 gap-4 justify-content-between">
                                        <div>
                                            <span className="d-block mb-1">Total Buy</span>
                                            <span className="d-block fw-medium fs-16 text-success">$324.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Sell</span>
                                            <span className="d-block fw-medium fs-16 text-danger">$4,235.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Available Balance</span>
                                            <span className="d-block fw-medium fs-16 text-primary">$22,803.92 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Crypto Asset Value</span>
                                            <span className="d-block fw-medium fs-16 text-warning">$4,56,683.00 USD</span>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div id="buy_sell-statistics" className="px-3">
                                        <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="line" width={"100%"} height={316} />
                                    </div>
                                </div>
                                <Col xl={4} className="ps-xl-0">
                                    <div className="p-3">
                                        <Card className="custom-card bg-light shadow-none">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">BTC/USD</span>
                                                        <h5 className="fw-medium mb-1">27.53612</h5>
                                                        <span className="text-danger d-block fs-12 mt-1">-0.06%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <img src={Bitcoinsq} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card bg-light shadow-none">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">ETH/USD</span>
                                                        <h5 className="fw-medium mb-1">20.6782</h5>
                                                        <span className="text-success d-block fs-12 mt-1">+2.86%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <img src={Ethereumsq} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card bg-light shadow-none mb-0">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">LTC/USD</span>
                                                        <h5 className="fw-medium mb-1">54.2912</h5>
                                                        <span className="text-success d-block fs-12 mt-1">+15.93%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <img src={Litecoinsq} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default BuySell;
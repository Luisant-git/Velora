import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Cryptocurrencies, Options1, Options2 } from "../../../../components/common/data/apps/crypto/currencydata";
import SpkMarketcap from "../../../../@spk-reusable-components/reusable-apps/spk-marketcap";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";

const CurrencyExchange = () => {

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Crypto" currentpage="Currency Exchange" activepage="Currency Exchange" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card currency-exchange-card">
                        <Card.Body className=" p-5 d-flex align-items-center justify-content-center z-1">
                            <div className="container">
                                <h3 className="text-fixed-white text-center">Buy and Sell Coins without additional fees</h3>
                                <span className="d-block fs-16 text-fixed-white text-center op-8 mb-4">
                                    Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC crypto-currency..
                                </span>
                                <div className="p-3 mb-4 rounded currency-exchange-area">
                                    <div className="row gy-3">
                                        <Col xxl={3} className="col-12">
                                            <input type="text" className="form-control" defaultValue="0.0453" placeholder="Enter Amount" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <div>
                                                <SpkSelect name="colors" option={Options1}
                                                    placeholder="Bitcoin" classNameprefix='Select2' mainClass="multi-select"
                                                    defaultvalue={[Options1[0]]} menuplacement='auto' />
                                            </div>
                                        </Col>
                                        <Col xxl={2} className="col-12 text-center">
                                            <Link  aria-label="anchor" to="#!" className="btn btn-primary1 btn-icon btn-sm my-2 rounded-pill"><i className="ti ti-arrows-exchange fs-19 align-middle"></i></Link>
                                        </Col>
                                        <Col xxl={3} className="col-12">
                                            <input type="text" className="form-control" defaultValue="1350.93" placeholder="Exchange Amount" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <SpkSelect name="colors" option={Options2} mainClass="basic-multi-select "
                                                defaultvalue={[Options2[0]]} menuplacement='auto' classNameprefix="Select2" />
                                        </Col>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <SpkButton Buttonvariant="success" Buttontype="button">Exchange Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <div className="row justify-content-center">
                {Cryptocurrencies.map((idx) => (
                    <Col xxl={4} key={Math.random()}>
                        <SpkMarketcap cardClass="custom-card overflow-hidden" mainClass="d-flex align-items-end justify-content-between flex-wrap" classNames="d-flex align-items-center gap-2 mb-3" classData="lh-1" showChangeInfo={true} charts={idx.chartoption} series={idx.chartseries} displaySection="chart2" height={45} width={230} type="area" obj={idx} />
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="text-center my-4">
                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Disabled={true}>
                            <span className="spinner-border spinner-border-sm align-middle" role="status"
                                aria-hidden="true"></span>    Loading...</SpkButton>
                    </div>
                </Col>
            </div>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default CurrencyExchange;
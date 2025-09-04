import  { Fragment } from "react";
import { Card, Col, Dropdown, Row, Pagination, ButtonGroup } from "react-bootstrap";
import SpkSwiperJs from "../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Balanceoptions, Balanceseries, Coindata, CryptoSwiper, Cryptooptions, Cryptoseries, Currencydata, Marketdata, Profiledata, Transactiondata } from "../../../components/common/data/dashboard/cryptodata";
import SpkButtongroup from "../../../@spk-reusable-components/reusable-uielements/spk-buttongroup";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import SpkSelect from "../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import Pageheader from "../../../components/page-header/pageheader";
import btc from "../../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg"
import eth from "../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
import usdt from "../../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg"
import xrp from "../../../assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg"
import tron from "../../../assets/images/crypto-currencies/crypto-icons/tron-trx-logo.svg"


const Crypto = () => {

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
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

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Crypto" activepage="Crypto" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <SpkSwiperJs slides={CryptoSwiper} className="crypto-swiper swiper-basic mySwiper" slidesPerView={3} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} />
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title flex-fill">
                                Crypto Analysis
                            </div>
                            <SpkButtongroup Buttongrplabel="Basic example">
                                <SpkButton Buttonvariant="primary" Size="sm" Buttontype="button">1D</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button">1W</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button">1M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Size="sm" Buttontype="button">1Y</SpkButton>
                            </SpkButtongroup>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap p-3 bg-light rounded-2 mb-3 align-items-center">
                                <div className="me-3">
                                    <SpkDropdown as={ButtonGroup} Customclass="ms-2" iconPosition="before" Customtoggleclass="btn-primary border dropdown-toggle" Toggletext="Bitcoin" Imageclass=" avatar avatar-xs avatar-rounded me-2 align-middle" Imagetag={true} Imagesrc={btc}>
                                        <Dropdown.Item as="li" href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src={eth} alt="" /></span>Etherium</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src={usdt} alt="" /></span>Tether</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src={xrp} alt="" /></span>XRP</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src={tron} alt="" /></span>TRON</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                                <div className="d-flex flex-wrap justify-content-sm-evenly flex-fill">
                                    <div className="m-sm-0 m-2">
                                        <span>Symbol</span>
                                        <p className="mb-0">BTC</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price Benchmark</span>
                                        <p className="mb-0">136.00%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price (USD)</span>
                                        <p className="text-success mb-0">$54,564.60</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Change (24H)</span>
                                        <p className="text-danger mb-0">-0.14%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Market Cap</span>
                                        <p className="mb-0">$1.32T</p>
                                    </div>
                                </div>
                            </div>
                            <div id="crypto-analysis"><Spkapexcharts chartOptions={Cryptooptions} chartSeries={Cryptoseries} type="candlestick" width={"100%"} height={365} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-4">
                    <Card className="custom-card">
                        <div className="card-body p-0">
                            <div className="p-4 m-2 rounded-2 bg-primary text-fixed-white bg-crypto-balance">
                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                    <div>
                                        <div className="mb-1 op-9">Total Balance</div>
                                        <h4 className="text-fixed-white mb-1 fw-medium me-2">$262,933.05 USD</h4>
                                        <span className="op-7 fs-12">Increased by </span><SpkBadge variant="success" Customclass="mt-2 text-fixed-white p-1 text-end ms-1"><i className="ti ti-trending-up me-2"></i>12.2%</SpkBadge>
                                    </div>
                                    <div className="ms-auto text-end">
                                        <div className="avatar avatar-lg bg-primary1 shadow">
                                            <i className="ri-bank-line fs-4 lh-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row border-top border-block-start-dashed g-0">
                                <div className="col border-end border-inline-end-dashed">
                                    <div className="p-4">
                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                            <span className="avatar avatar-md bg-primary2">
                                                <i className="ri-arrow-left-down-fill fs-20"></i>
                                            </span>
                                            <div>
                                                <div className="fw-medium text-muted">Deposit</div>
                                                <h5 className="mb-0">$1,654 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-4">
                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                            <span className="avatar avatar-md bg-primary3">
                                                <i className="ri-arrow-right-up-fill fs-20"></i>
                                            </span>
                                            <div>
                                                <div className="fw-medium text-muted">Withdraw</div>
                                                <h5 className="mb-0">$654 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Currency Converter</div>
                            <SpkDropdown Togglevariant="" toggleas="a" Customtoggleclass="btn btn-sm btn-light border d-flex align-items-center text-muted show no-caret"
                                Toggletext="View All" IconClass="ti ti-chevron-down ms-1" Icon={true} Menulabel="dropdownMenuButton1" Id="dropdownMenuButton1">
                                <li><Dropdown.Item as="li" href="#!">Yearly</Dropdown.Item></li>
                                <li><Dropdown.Item as="li" href="#!">Monthly</Dropdown.Item></li>
                                <li><Dropdown.Item as="li" href="#!">Weakly</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <Card.Body>
                            <div className="d-flex gap-2 align-items-center buy-crypto">
                                <div className="input-group d-flex flex-nowrap align-items-center">
                                    <input type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Enter" />
                                    <SpkSelect name="state" option={Coindata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Coindata[0]]}
                                        menuplacement='auto' classNameprefix="Select2" searchable
                                    />
                                </div>
                                <div className="text-center">
                                    <a aria-label="anchor" href="#!" className="btn btn-secondary btn-icon btn-sm my-2 rounded-pill"><i className="ti ti-arrows-exchange fs-19 align-middle"></i></a>
                                </div>
                                <div className="input-group d-flex flex-nowrap align-items-center">
                                    <input type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select" placeholder="25,784.00" />
                                    <SpkSelect name="state" option={Currencydata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Currencydata[0]]}
                                        menuplacement='auto' classNameprefix="Select2" searchable
                                    />
                                </div>
                            </div>
                            <div className="bg-light p-3 rounded mt-2">
                                <div className="pb-1"><span className="text-default">Transaction Fee</span><span className="text-muted ms-2 fs-14 d-inline-block float-end">$3.04</span></div>
                                <div className="fs-14 py-1"><span className="text-default">Other Charges</span><span className="text-muted ms-2 fs-14 d-inline-block float-end">$6.55</span></div>
                                <div className="fw-semibold fs-14 pt-1">Total: <span className="fs-14 d-inline-block float-end">$25,784.00</span></div>
                            </div>
                            <div className=" mt-2 pt-1 d-flex gap-1">
                                <SpkButton Buttonvariant="primary1-light" Buttontype="button" Customclass="flex-fill">History<i className="ms-2 ti ti-arrow-narrow-right align-middle"></i></SpkButton>
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="flex-fill">Convert<i className="ms-2 ti ti-arrow-narrow-right align-middle"></i></SpkButton>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <div className="col-xxl-3 col-xl-6">
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Market Cap
                            </div>
                            <Link to="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled market-cap-list mb-1">
                                {Marketdata.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className={`avatar bg-${idx.color1}-transparent avatar-rounded svg-${idx.color1}`}>
                                                    {idx.src}
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-semibold d-block mb-1">{idx.data}</span>
                                                <div className="d-flex align-items-center text-muted gap-2 lh-1 fs-13">
                                                    <span className="d-block">{idx.data1}</span>
                                                    <div className="vr"></div>
                                                    <span>{idx.data2}</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block h6 mb-1 fw-semibold">{idx.price}</span>
                                                <div className={`d-flex align-items-center text-${idx.color} gap-2 lh-1 fs-13`}>
                                                    <span className="d-block">{idx.price1}</span>
                                                    <div className="vr"></div>
                                                    <span><i className={`ti ti-arrow-narrow-${idx.icon}`}></i>{idx.percent}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-4 col-xl-6">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Assets Overview</div>
                            <SpkDropdown Togglevariant="" toggleas="a" Customtoggleclass="btn btn-sm btn-light no-caret" Navigate="#!" IconClass="fe fe-more-vertical" Icon={true} Menulabel="dropdownMenuButton1" Id="dropdownMenuButton1">
                                <Dropdown.Item as="li" href="#!">Today </Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">This week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                        <Card.Body className="p-0">
                            <div id="balanceAnalysis" className="">
                                <Spkapexcharts chartOptions={Balanceoptions} chartSeries={Balanceseries} type="radialBar" width={"100%"} height={260} />
                            </div>
                            <div className="border-top border-block-start-dashed p-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <span className="avatar avatar-md bg-primary">
                                        <i className="ri-wallet-3-line fs-20"></i>
                                    </span>
                                    <div>
                                        <div className="fw-medium text-muted op-7">Funding</div>
                                        <h5 className="mb-0">$54,784 USD</h5>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="text-success fw-medium"><i className="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center gap-3 pt-1 mb-1">
                                    <span className="avatar avatar-md bg-primary1">
                                        <i className="ri-arrow-up-down-line fs-20"></i>
                                    </span>
                                    <div>
                                        <div className="fw-medium text-muted op-7">Trading</div>
                                        <h5 className="mb-0">$23,489 USD</h5>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="text-danger fw-medium"><i className="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%</div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </div>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Transaction History</div>
                            <Link to="#!" className="text-muted text-decoration-underline link-offset-2">View All</Link>
                        </div>
                        <Card.Body className="p-0 pt-1">
                            <div className="table-responsive">
                                <SpkTablescomponent header={[{ title: 'Cryptocurrency' }, { title: 'Action' }, { title: 'Date & Time' }, { title: 'Change' }]}>
                                    {Transactiondata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-rounded avatar-md p-2 bg-${idx.color1}`}>
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-medium">{idx.crypto}</span>
                                                        <span className="d-block text-muted">{idx.currency}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.action}</td>
                                            <td className="text-nowrap">{idx.date}</td>
                                            <td>
                                                <span className={`text-${idx.color}`}>{idx.change}<i className={`ri-arrow-${idx.icon}-line fs-12 lh-1 text-${idx.color} ms-1`}></i></span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">My Portfolio</div>
                            <SpkButtongroup Buttongrplabel="Basic example">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Size="sm">1D</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm">1W</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm">1M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm">1Y</SpkButton>
                            </SpkButtongroup>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap nft-table" header={[{ title: '#' }, { title: 'Coin' }, { title: 'Price' }, { title: 'Price Graph' }, { title: '24h Volume' }, { title: '24h Change' }, { title: 'Market Cap' }, { title: 'Actions' }]} >
                                    {Profiledata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                {idx.id}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14">{idx.coin}</div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.price}
                                            </td>
                                            <td>
                                                <div id="bitcoin-change"><Spkapexcharts chartOptions={idx.chart} chartSeries={[idx.series]} type="line" width={120} height={20} />
                                                </div>
                                            </td>
                                            <td>
                                                {idx.volume}
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color}`}><i className={`ri-arrow-${idx.icon}-s-fill me-1 fs-15 align-middle`}></i>{idx.chnage}%</span>
                                            </td>
                                            <td>
                                                {idx.cap}
                                            </td>
                                            <td>
                                                <div className="btn-grp">
                                                    <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm" Customclass="btn- me-2">Buy</SpkButton>
                                                    <SpkButton Buttonvariant="primary1-light" Buttontype="button" Size="sm" >Trade</SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    )
};

export default Crypto;
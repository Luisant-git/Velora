import  { Fragment } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Marketdata, Portoptions, Portseries, Srockdata, StockSlides, Stockareaoptions, Stockareaseries, Stockoptions, Stockseries, Transactiondata, Visioptions, Visiseries, Wishlistdata } from "../../../components/common/data/dashboard/stocksdata";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkSwiperJs from "../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";


const Stocks = () => {

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
            slidesPerView: 4,
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

            <Pageheader title="Dashboards" currentpage="Stocks" activepage="Stocks" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <SpkSwiperJs slides={StockSlides} className="swiper-basic swiper-initialized swiper-horizontal swiper-backface-hidden mySwiper" slidesPerView={3}
                        spaceBetween={20}
                        freemode={true}
                        autoplay={true}
                        breakpoint={breakpoints} />
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Stock Market Value</div>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-sm-flex align-items-end  p-3 bg-light gap-5 flex-wrap">
                                <div className="min-w-fit-content me-3">
                                    <p className="mb-1">Total Investment</p>
                                    <h4 className="fw-medium mb-0">$15,874.50<SpkBadge variant="success" Customclass=" ms-2 fs-9 d-inline-flex"><i className="ti ti-trending-up me-1"></i>0.32%</SpkBadge></h4>
                                </div>
                                <div className="min-w-fit-content">
                                    <p className="mb-1">Market Cap</p>
                                    <h4 className="fw-medium mb-0">$124,784.23<SpkBadge variant="danger" Customclass="ms-2 fs-9 d-inline-flex"><i className="ti ti-trending-down me-1"></i>0.12%</SpkBadge></h4>
                                </div>
                                <div className="min-w-fit-content">
                                    <p className="mb-1 fs-12 text-muted">
                                        <span className="text-success">+124.25</span>
                                        <i className="mdi mdi-circle-small"></i>
                                        <span>  Yesterday</span>
                                    </p>
                                    <p className="mb-0 fs-11 text-muted">
                                        <span>Jun 16, 2022  </span>
                                        <i className="mdi mdi-circle-small"></i>
                                        <span>10:45 AM</span>
                                        <i className="mdi mdi-circle-small"></i>
                                        <span>  UTC +5:30</span>
                                    </p>
                                </div>
                                <div className="flex-1 text-sm-end mt-2 mt-sm-0 ms-auto">
                                    <Link to="#!" className="btn btn-w-lg btn-primary1-light"><i className="ti ti-plus mx-1"></i>Compare</Link>
                                </div>
                            </div>
                            <div id="stockCap-area">
                                <Spkapexcharts chartOptions={Stockareaoptions} chartSeries={Stockareaseries} type="area" width={"100%"} height={165} />
                            </div>
                            <div id="stockCap">
                                <Spkapexcharts chartOptions={Stockoptions} chartSeries={Stockseries} type="bar" width={"100%"} height={165} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                My Watchlist
                            </div>
                            <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass=""> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap">
                                    {Wishlistdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className={`avatar avatar-md p-2 avatar-rounded border border-${idx.color} border-opacity-10 bg-${idx.color}-transparent`}>
                                                        <img src={idx.src} alt="" className={idx.invert} />
                                                    </span>
                                                    <div>
                                                        <Link to="#!" className="fw-medium">{idx.head}</Link>
                                                        <span className="d-block text-muted fs-12">{idx.subhead}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="flex-fill">
                                                        <div id="apple-change">
                                                            <Spkapexcharts chartOptions={idx.chart} chartSeries={idx.series} type="line" width={50} height={30} />
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0"> ${idx.price}</p>
                                                        <p className={`text-${idx.color1} mb-0`}>{idx.percent}%</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3} lg={6} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Statistics</h6>
                            <SpkButton Buttonvariant="light" Buttontype="button" Size="sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body>
                            <div id="portfolio" className=""><Spkapexcharts chartOptions={Portoptions} chartSeries={Portseries} type="donut" width={"100%"} height={245} />
                            </div>
                        </Card.Body>
                        <div className="card-footer p-3 my-2">
                            <div className="row row-cols-12">
                                <div className="col p-0">
                                    <div className="text-center">
                                        <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-primary-transparent text-primary"></i>
                                        <span className="text-muted fs-12 mb-1 rounded-dot dot-primary d-inline-block ms-2">Stocks
                                        </span>
                                        <div><span className="fs-16 fw-medium">1,624</span> </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-primary1-transparent text-primary1"></i>
                                        <span className="text-muted fs-12 mb-1 rounded-dot dot-secondary d-inline-block ms-2">Funds
                                        </span>
                                        <div><span className="fs-16 fw-medium">1,267</span></div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-primary2-transparent text-primary2"></i>
                                        <span className="text-muted fs-12 mb-1 rounded-dot dot-success d-inline-block ms-2">Bond
                                        </span>
                                        <div><span className="fs-16 fw-medium">1,153</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} lg={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">My Stocks</div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm text-muted no-caret" Toggletext="All Stocks" Arrowicon={true}>
                                <Dropdown.Item href="#!"> All Stocks</Dropdown.Item>
                                <Dropdown.Item href="#!">Wishlist</Dropdown.Item>
                                <Dropdown.Item href="#!">Stocks</Dropdown.Item>
                                <Dropdown.Item href="#!">Crypto</Dropdown.Item>
                                <Dropdown.Item href="#!">ETFs</Dropdown.Item>
                                <Dropdown.Item href="#!">Bonds</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap" header={[{ title: 'Stock' }, { title: 'Quantity' }, { title: 'Stock Price' }, { title: 'Change' }, { title: 'Total Value' }, { title: 'Actions' }]}>
                                    {Srockdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className={`avatar rounded-circle avatar-sm bg-${idx.color}-transparent svg-${idx.color}`}>
                                                        <i className={`ri-${idx.icon1} fs-16`}></i>
                                                    </span>
                                                    <div className="flex-fill">
                                                        <div>{idx.stock}</div>
                                                        <div className="text-muted">{idx.stock1}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.qnty}</td>
                                            <td className="fw-medium">{idx.price}</td>
                                            <td><span className={`text-${idx.color1}`}>{idx.chnage}</span></td>
                                            <td>{idx.total}</td>
                                            <td className="btn-list">
                                                <Link to="#!" className="btn btn-sm btn-primary-light">Buy</Link>
                                                <Link to="#!" className="btn btn-sm btn-primary1-light">Sell</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Growth Analysis</h6>
                            <SpkButton Buttonvariant="light" Buttontype="button" Size="sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className="pb-1">
                            <div className="p-3 bg-light text-default rounded border border-dashed d-flex justify-content-between gap-2 align-items-end">
                                <div>
                                    <span className="d-block mb-1">Tesla, Inc (TSLA)</span>
                                    <h5 className="fw-semibold lh-1 mb-0">$ 17,782.00</h5>
                                </div>
                                <SpkBadge variant="success" Customclass="fw-semibold ms-2">0.64%<i className="ri-arrow-up-s-line ms-1"></i></SpkBadge>
                            </div>
                            <div id="visitors-report">
                                <Spkapexcharts chartOptions={Visioptions} chartSeries={Visiseries} type="line" width={"100%"} height={267} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Transaction History
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="All" Arrowicon={true}>
                                <Dropdown.Item href="#!">Buy</Dropdown.Item>
                                <Dropdown.Item href="#!">Sell</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover text-nowrap" header={[{ title: 'Date' }, { title: 'Stock' }, { title: 'Shares' }, { title: 'Type' }, { title: 'Price' }, { title: 'Change' }]}>
                                    {Transactiondata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>{idx.date}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className={`avatar avatar-sm p-1 avatar-rounded border border-${idx.color} border-opacity-10 bg-${idx.color1}-transparent`}>
                                                        {idx.src}
                                                    </span>
                                                    <div>
                                                        <Link to="#!" className="fw-medium">{idx.stock}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.shares}</td>
                                            <td><span className={`badge bg-${idx.color2}-transparent`}>{idx.type}</span></td>
                                            <td>
                                                <div className="fw-medium">{idx.price}</div>
                                                <div className="text-muted">Value: {idx.value}</div>
                                            </td>
                                            <td><span className={`text-${idx.color3}`}><i className="fas fa-arrow-up"></i> {idx.change}</span></td>
                                        </tr>
                                    ))}

                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Market Movers
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="All" Arrowicon={true}>
                                <Dropdown.Item href="#!">Buy</Dropdown.Item>
                                <Dropdown.Item href="#!">Sell</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Symbol' }, { title: 'Company Name' }, { title: 'Change' }, { title: 'Price' }, { title: '% Change' }, { title: 'Volume' }]}>
                                    {Marketdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>{idx.symbol}</td>
                                            <td>{idx.cmnyname}</td>
                                            <td><span className={`text-${idx.color}`}>{idx.change}</span></td>
                                            <td className="fw-medium fs-14">{idx.price}</td>
                                            <td><span className={`text-${idx.color}`}>{idx.change1}</span></td>
                                            <td>{idx.volume}</td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default Stocks;
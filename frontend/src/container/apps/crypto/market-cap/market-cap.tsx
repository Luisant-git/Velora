import  { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkMarketcap from "../../../../@spk-reusable-components/reusable-apps/spk-marketcap";
import { cryptoData, Marketdata } from "../../../../components/common/data/apps/crypto/marcketcapdata";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";

const MarketCap = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Crypto" currentpage="MarketCap" activepage="MarketCap" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {Marketdata.map((idx) => (
                    <Col xxl={4} xl={6} lg={12} className="" key={Math.random()}>
                        <SpkMarketcap cardClass="custom-card" mainClass="d-flex" className="d-flex align-items-center" classNames="d-flex align-items-center mb-3" classData="me-2" showPriceInfo={true} displaySection="chart1" charts={idx.chartOptions} series={idx.chartSeries} type="area" height={40} width={163} obj={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2  --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Crypto MarketCap
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item href="#!">Market Cap</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Trading Volume</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price Change (24h)</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Rank</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">All-Time High (ATH)</Dropdown.Item></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn-wave waves-effect waves-light">View All</SpkButton>
                                </div>
                            </div>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: '' }, { title: '#' }, { title: 'Crypto Name' }, { title: 'MarketCap' }, { title: 'last 1Week' }, { title: '1h Change' }, { title: "Price (USD)" }, { title: '24h Change' }, { title: 'Volume (24h)' }, { title: 'Circulating Supply' }, { title: 'Trade' }]}>
                                    {cryptoData.map((crypto, index) => (
                                        <tr key={index}>
                                            <td className="text-center">
                                                <Link to="#!">
                                                    <i className="ri-star-line fs-16 text-muted"></i>
                                                </Link>
                                            </td>
                                            <td>{crypto.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={crypto.avatar} alt={crypto.name} />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium">
                                                        <Link to="#!">{crypto.name}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{crypto.marketCap}</span>
                                            </td>
                                            <td>
                                                <div id={crypto.chartId}><Spkapexcharts chartOptions={crypto.chart} chartSeries={crypto.series} type="bar" width={163} height={30} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`text-${crypto.color} fw-medium`}>
                                                    <i className={`ti ti-arrow-narrow-${crypto.color.includes("success")? "up":"down"} fs-15 fw-medium`}></i>
                                                    {crypto.priceChange24h}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link to="#!">{crypto.price}</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`text-${crypto.color1} fw-medium`}>
                                                    <i className={`ti ti-arrow-narrow-${crypto.icon} fs-15 fw-medium`}></i>
                                                    {crypto.count}
                                                </span>
                                            </td>
                                            <td>
                                                <Link to="#!">
                                                    <span className="d-block fw-medium">{crypto.volume}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="#!">
                                                    <span className="fw-medium d-block mb-2">{crypto.supply}</span>
                                                    {crypto.supplyProgress}
                                                </Link>
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="success-light" Size="sm" Buttontype="button">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 overflow-auto float-end">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item active>1</Pagination.Item>
                                    <Pagination.Item>2</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2  --> */}
        </Fragment>
    )
};

export default MarketCap;
import  { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../components/page-header/pageheader'
import { Budgetdata, Cardsdata, Overviewoptions, Overviewseries, Recentdata, Revenu1data, Revenue1options, Revenue1series, Revenue2options, Revenue2series, Revenuedata, SalesTseries, Salesoptions, Topsaleoptions, Topsaleseries, Transactions, Visitoroptions, Visitorseries, WidgetRoptions, WidgetRseries, Wudgetcard1, widget3card } from '../../components/common/data/widgetsdata'
import Spkwidgetcardcomponent from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard'
import Spkwidgetscrad1component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard1'
import Spkapexcharts from '../../@spk-reusable-components/reusable-plugins/spk-apexcharts'
import Spkwidgetrevenuecomponent from '../../@spk-reusable-components/reusable-widgets/spk-widgetrevenue'
import Spkwidgetcard2component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard2'
import Spkrecentactivitycomponent from '../../@spk-reusable-components/reusable-widgets/spk-recentactivity'
import Spkbudgetwidgetcomponent from '../../@spk-reusable-components/reusable-widgets/spk-budget'
import Spkwidgetcard3component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard3'
import Spkwidgetcard4component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard4'
import Spkwidgetcard5component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard5'
import Spkwidgetcard6component from '../../@spk-reusable-components/reusable-widgets/spk-widgetcard6'
 import face9 from "../../assets/images/faces/9.jpg"

const Widgets = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Widgets" currentpage="Widgets" activepage="Widgets" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                {Cardsdata.map((idx) => (
                    <Col xxl={3} xl={6} key={Math.random()}>
                        <Spkwidgetcardcomponent cardClass='overflow-hidden' svgIcon={idx.icon} Product={idx.total} price={idx.price} color={idx.color1} color1={idx.color1} icon={idx.icon1} percent={idx.percent} chartoptions={idx.chartoptions} seriesoptions={idx.chartseries} type="area" width={120} height={50} color2={idx.color} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                {Wudgetcard1.map((idx) => (
                    <Col xl={3} key={Math.random()}>
                        <Spkwidgetscrad1component cardClass={`border-${idx.color} border border-opacity-50 overflow-hidden main-content-card`} color1={idx.color1} icon={idx.icon} percent={idx.percent} data={idx.data} total={idx.total} svgIcon={idx.svgicon} color={idx.color} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={6} xl={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sales Revenue
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="salerevenue">
                                <Spkapexcharts chartOptions={WidgetRoptions} chartSeries={WidgetRseries} type="bar" width={"100%"} height={322} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-header pb-0">
                            <Card.Title>
                                Total Sales
                            </Card.Title>
                        </div>
                        <Card.Body className="p-0 widget-circle-chart">
                            <div id="circlechart">
                                <Spkapexcharts chartOptions={Salesoptions} chartSeries={SalesTseries} type="radialBar" width={"100%"} height={255} />
                            </div>
                        </Card.Body>
                        <div className="card-footer p-0 border-top border-block-start-dashed">
                            <Row>
                                <div className="col-12">
                                    <div className="p-3 ps-5 d-flex gap-2 pb-0">
                                        <div>
                                            <span className="fs-14 visit-gender male ms-1">Average Sales</span>
                                            <div className="mt-1">
                                                <span className="fs-5 fw-medium">8,777</span>
                                            </div>
                                        </div>
                                        <div className="text-muted fs-13 text-end ms-auto">Increased By <span className="text-success">1.5%<i className="ti ti-arrow-narrow-up fs-16"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="p-3 ps-5 d-flex gap-2">
                                        <div>
                                            <span className="fs-14 visit-gender female">Average Profit</span>
                                            <div className="mt-1">
                                                <span className="fs-5 fw-medium">$12,234</span>
                                            </div>
                                        </div>
                                        <div className="text-muted fs-13 text-end ms-auto">Decreased By <span className="text-danger">0.6%<i className="ti ti-arrow-narrow-down fs-16"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} className="col-12">
                    <Spkwidgetrevenuecomponent cardClass='overflow-hidden' data={Revenuedata} />
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                {Revenu1data.map((card) => (
                    <Col xl={3} key={Math.random()}>
                        <Spkwidgetcard2component cardClass='overflow-hidden' widgetCard={card} height={100} width={100} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-5 --> */}

            {/* <!-- Start:: row-6 --> */}
            <Row>
                <div className="col-xxl-4 col-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sales Revenue
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="salerevenue1">
                                <Spkapexcharts chartOptions={Revenue1options} chartSeries={Revenue1series} type="line" width={"100%"} height={315} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-12">
                    <Spkrecentactivitycomponent Recent={Recentdata} cardTitle='Recent Activity' />
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-12">
                    <Spkbudgetwidgetcomponent cardClass='overflow-hidden' Budget={Budgetdata} />
                </div>
            </Row>
            {/* <!-- End:: row-6 --> */}

            {/* <!-- Start:: row-7 --> */}
            <Row>
                {widget3card.map((idx) => (
                    <Col xl={3} key={Math.random()}>
                        <Spkwidgetcard3component height={80} width={100} card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-7 --> */}

            {/* <!-- End:: row-8 --> */}
            <Row>
                <div className="col-xxl-3 col-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Total Visitors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <div id="activecustomers">
                                <Spkapexcharts chartOptions={Visitoroptions} chartSeries={Visitorseries} type="radialBar" width={"100%"} height={227} />
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="row mt-0">
                                <div className="col-4">
                                    <h6 className="text-primary mb-1 fw-medium">45K</h6>
                                    <p className="text-muted mb-0 fs-12">Apps</p>
                                </div>
                                <div className="col-4">
                                    <h6 className="text-primary1 mb-1 fw-medium">35K</h6>
                                    <p className="text-muted mb-0 fs-12">Offline</p>
                                </div>
                                <div className="col-4">
                                    <h6 className="text-primary2 mb-1 fw-medium">10K</h6>
                                    <p className="text-muted mb-0 fs-12">Website</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <Col xxl={6} xl={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sales Revenue
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="salerevenue2">
                                <Spkapexcharts chartOptions={Revenue2options} chartSeries={Revenue2series} type="line" width={"100%"} height={288} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-3 col-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Top Sales
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="top-sales">
                                <Spkapexcharts chartOptions={Topsaleoptions} chartSeries={Topsaleseries} type="line" width={"100%"} height={290} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End:: row-8 --> */}

            {/* <!-- End:: row-9 --> */}
            <Row>
                <Col xxl={3} lg={6}>
                    <Spkwidgetcard4component mainClass="online" icon='check-circle-fill' tooltip='Verified User' Img={face9} name='Daniel David' role='Web Designer' description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan accusant. ' btn1='Follow' btn='Message' />
                </Col>
                <Col xxl={3} lg={6}>
                    <Spkwidgetcard6component cardTitle='Recent Transactions' shop={Transactions} view='View All Transactions' viewcolor='secondary' />
                </Col>
                <Col xxl={3} lg={6}>
                    <Card className="custom-card">
                        <div className="card-header pb-0">
                            <Card.Title>
                                Orders Overview
                            </Card.Title>
                        </div>
                        <Card.Body className="px-0">
                            <div id="recent-orders">
                                <Spkapexcharts chartOptions={Overviewoptions} chartSeries={Overviewseries} type="radialBar" width={"100%"} height={195} />
                            </div>
                            <div className="p-3 pt-0 pb-1">
                                <div className="flex-fill d-flex gap-1 flex-wrap align-items-start justify-content-between">
                                    <div>
                                        <span className="fs-12 mb-1 d-block fw-medium">TOTAL ORDERS</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="mb-0 d-flex align-items-end">3,736<span className="text-success fs-12 ms-2 op-1"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.57%</span></h5>
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="avatar avatar-md bg-primary-transparent">
                                            <i className="ti ti-box fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={6}>
                    <Spkwidgetcard5component cardClass='overflow-hidden' heading='Monthly Budget' price1='$35,800' price='$78,985' color='primary' icon='bx-up-arrow-alt' percent='0.27' Inc='Increased' icon1="ti-arrow-narrow-up" color1="success" />
                </Col>
            </Row>
            {/* <!-- End:: row-9 --> */}
        </Fragment>
    )
}

export default Widgets
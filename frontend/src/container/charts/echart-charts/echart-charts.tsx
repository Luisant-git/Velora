import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkEcharts from "../../../@spk-reusable-components/reusable-plugins/spk-echarts";
import { Backoption, Backseries, Baroption, Barseries, Basicoption, Basicseries, Candleoption, Bubbleoption, Bubbleseries, Candleseries, Doughnutoption, Doughnutseries, Funneloption, Funnelseries, Gaugeoption, Gaugeseries, Graphoption, Graphseries, Heatoption, Heatseries, HoriStackoption, HoriStackseries, Horizontaloption, Horizontalseries, Lineoption, Lineseries, Negativeoption, Negativeseries, Pieoption, Pieseries, Radaroption, Radarseries, Scattoption, Scattseries, Smoothoption, Smoothseries, Stackareaoption, Stackareaseries, Stackoption, Stackseries, Stepoption, Stepseries, Styleoption, Styleseries, Treeoption, Treeseries, Wateroption, Waterseries  } from "../../../components/common/data/charts/echartsdata";

const EchartCharts = () => {

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" currentpage="Echart Charts" activepage="Echart Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Lineoption} chartSeries={Lineseries} id="echart-basic-line" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Smoothed Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Smoothoption} chartSeries={Smoothseries} id="echart-smoothed-line" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Basicoption} chartSeries={Basicseries} id="echart-area-line" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Stackoption} chartSeries={Stackseries} id="echart-stacked-line" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Stackareaoption} chartSeries={Stackareaseries} id="echart-stacked-area" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Step Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Stepoption} chartSeries={Stepseries} id="echart-step-line" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Baroption} chartSeries={Barseries} id="echart-bar-basic" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Background Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Backoption} chartSeries={Backseries} id="echart-bar-background" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Style For a Single Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Styleoption} chartSeries={Styleseries} id="echart-bar-single" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Water Fall Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Wateroption} chartSeries={Waterseries} id="echart-waterfall" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Negative Values Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Negativeoption} chartSeries={Negativeseries} id="echart-negative-values" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Horizontal Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Horizontaloption} chartSeries={Horizontalseries} id="echart-bar-horizontal" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Horizontal Stacked Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={HoriStackoption} chartSeries={HoriStackseries} id="echart-stacked-horizontal" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Pieoption} chartSeries={Pieseries} id="echart-pie" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Doughnut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Doughnutoption} chartSeries={Doughnutseries} id="echart-doughnut" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Scattoption} chartSeries={Scattseries} id="echart-scatter" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Bubbleoption} chartSeries={Bubbleseries} id="echart-bubble" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Candleoption} chartSeries={Candleseries} id="echart-candlestick" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Radar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Radaroption} chartSeries={Radarseries} id="echart-basic-radar" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Heatoption} chartSeries={Heatseries} id="echart-heatmap" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Treeoption} chartSeries={Treeseries} id="echart-treemap" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Funnel Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Funneloption} chartSeries={Funnelseries} id="echart-funnel" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Gauge Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Gaugeoption} chartSeries={Gaugeseries} id="echart-gauge-basic" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Simple Graph Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkEcharts chartOptions={Graphoption} chartSeries={Graphseries} id="echart-simple-graph" mainClass="echart-charts" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default EchartCharts;
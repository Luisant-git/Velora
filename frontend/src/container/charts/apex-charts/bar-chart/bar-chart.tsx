import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import {  Barbasicoptions, Barbasicseries, Barchartoptions, Barchartseries, Bargroupoptions, Bargroupseries, Barimgoptions, Barimgseries, Barlabelseries, Barlableoptions, Barmakeroptions, Barmakerseries, Barpatternoptions, Barpatternseries, Barreverseoptions, Barreverseseries, Barstack1options, Barstackoptions, Barstackseries, Barstck1series } from "../../../../components/common/data/charts/apexcharts/barchartdata";

const BarChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Bar Charts" activepage="Apex Bar Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-basic">
                                <Spkapexcharts chartOptions={Barbasicoptions} chartSeries={Barbasicseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Grouped Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-group">
                                <Spkapexcharts chartOptions={Bargroupoptions} chartSeries={Bargroupseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-stacked">
                                <Spkapexcharts chartOptions={Barstackoptions} chartSeries={Barstackseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">100% Stacked Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-full">
                                <Spkapexcharts chartOptions={Barstack1options} chartSeries={Barstck1series} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bar Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-negative">
                                <Spkapexcharts chartOptions={Barchartoptions} chartSeries={Barchartseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bar Chart With Markers</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-markers">
                                <Spkapexcharts chartOptions={Barmakeroptions} chartSeries={Barmakerseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Reversed Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-reversed">
                                <Spkapexcharts chartOptions={Barreverseoptions} chartSeries={Barreverseseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bar With Categogry DataLabels</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-categories">
                                <Spkapexcharts chartOptions={Barlableoptions} chartSeries={Barlabelseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Patterned Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-pattern">
                                <Spkapexcharts chartOptions={Barpatternoptions} chartSeries={Barpatternseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bar With Image Fill</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-image">
                                <Spkapexcharts chartOptions={Barimgoptions} chartSeries={Barimgseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default BarChart;
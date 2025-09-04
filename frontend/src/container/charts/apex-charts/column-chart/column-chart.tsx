import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Column1options, Column1series, Columnbasicoptions, Columnbasicseries, Columnchartoptions, Columnchartseries,   Columnmakeroptions, Columnmakerseries, Columnoptions, Columnrotateoptions, Columnrotateseries, Columnseries, Columnstack1options, Columnstack1series, Columnvalueoptions, Columnvalueseries, Stackcolumnoptions, Stackcolumnseries, } from "../../../../components/common/data/charts/apexcharts/columnchartdata";

const ColumnChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Column Charts" activepage="Apex Column Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-basic">
                                <Spkapexcharts chartOptions={Columnbasicoptions} chartSeries={Columnbasicseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Column Chart With Datalabels</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-datalabels">
                                <Spkapexcharts chartOptions={Columnchartoptions} chartSeries={Columnchartseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-stacked">
                                <Spkapexcharts chartOptions={Stackcolumnoptions} chartSeries={Stackcolumnseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">100% Stacked Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-stacked-full">
                                <Spkapexcharts chartOptions={Columnstack1options} chartSeries={Columnstack1series} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Column Chart With Markers</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-markers">
                                <Spkapexcharts chartOptions={Columnmakeroptions} chartSeries={Columnmakerseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Column Chart With Rotated Labels</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-rotated-labels">
                                <Spkapexcharts chartOptions={Columnrotateoptions} chartSeries={Columnrotateseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Column Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-negative">
                                <Spkapexcharts chartOptions={Columnvalueoptions} chartSeries={Columnvalueseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Range Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-range">
                                <Spkapexcharts chartOptions={Columnoptions} chartSeries={Columnseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Distributed Columns Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="columns-distributed">
                                <Spkapexcharts chartOptions={Column1options} chartSeries={Column1series} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default ColumnChart;
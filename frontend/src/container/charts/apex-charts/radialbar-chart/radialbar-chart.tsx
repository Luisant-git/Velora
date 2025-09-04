import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Circleoptions, Circleseries, Customoptions, Customseries, Gaugeoptions, Gaugeseries, Gradientoptions, Gradientseries, Multiroptions, Multirseries, Pieoptions, Pieseries, Storkeseries, Strokeoptions } from "../../../../components/common/data/charts/apexcharts/radialbardata";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";

const RadialbarChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Radialbar Charts" activepage="Apex Radialbar Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-basic">
                                <Spkapexcharts chartOptions={Pieoptions} chartSeries={Pieseries} type="radialBar" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Multiple Radialbar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-multiple">
                                <Spkapexcharts chartOptions={Multiroptions} chartSeries={Multirseries} type="radialBar" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Circle Chart - Custom Angle</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-custom">
                                <Spkapexcharts chartOptions={Customoptions} chartSeries={Customseries} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Gradient Circle Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-circle">
                                <Spkapexcharts chartOptions={Gradientoptions} chartSeries={Gradientseries} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stroked Circular Gauge</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-stroked">
                                <Spkapexcharts chartOptions={Strokeoptions} chartSeries={Storkeseries} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Circle Chart With Image</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-image">
                                <Spkapexcharts chartOptions={Circleoptions} chartSeries={Circleseries} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Semi Circular Gauge</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-semi">
                                <Spkapexcharts chartOptions={Gaugeoptions} chartSeries={Gaugeseries} type="radialBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default RadialbarChart;
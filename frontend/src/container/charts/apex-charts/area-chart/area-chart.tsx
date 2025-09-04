import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Areabasicoptions, Areabasicseries, Areagithuboptions, Areagithubseries, Areanulloptions, Areanullseries, Areasplineoptions, Areasplineseries, Areastackoptions, Areastackseries, Areatimeoptions, Areatimeseries, Areavalueoptions, Areavalueseries, Dateoptions, Dateseries, optionsYears, seriesYears } from "../../../../components/common/data/charts/apexcharts/areachartdata";
import { Link } from "react-router-dom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import face1 from "../../../../assets/images/faces/1.jpg"

const AreaChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Area Charts" activepage="Apex Area Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Spkapexcharts chartOptions={Areabasicoptions} chartSeries={Areabasicseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Spline Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline">
                                <Spkapexcharts chartOptions={Areasplineoptions} chartSeries={Areasplineseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative">
                                <Spkapexcharts chartOptions={Areavalueoptions} chartSeries={Areavalueseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Selection-Github Style Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="wrapper">
                                <div id="chart-months">
                                    <Spkapexcharts chartOptions={Areagithuboptions} chartSeries={Areagithubseries} type="area" width={"100%"} height={130} />
                                </div>

                                <div className="github-style d-flex align-items-center">
                                    <div className="me-2">
                                        <img className="userimg rounded" src={face1}
                                            data-hovercard-user-id="634573" alt="" width="38" height="38" />
                                    </div>
                                    <div className="userdetails lh-1">
                                        <Link to="#!" className="username fw-semibold fs-14">coder</Link>
                                        <span className="cmeta d-block mt-1">
                                            <span className="commits"></span> commits
                                        </span>
                                    </div>
                                </div>

                                <div id="chart-years">
                                    <Spkapexcharts chartOptions={optionsYears} chartSeries={seriesYears} type="area" width={"100%"} height={140} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked">
                                <Spkapexcharts chartOptions={Areastackoptions} chartSeries={Areastackseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Irregular Time Series Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-irregular">
                                <Spkapexcharts chartOptions={Areatimeoptions} chartSeries={Areatimeseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Null Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null">
                                <Spkapexcharts chartOptions={Areanulloptions} chartSeries={Areanullseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart-Datetime X-Axis Chart</div>
                            <div className="btn-group ms-auto">
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm">1M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm">6M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm">1Y</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm">ALL</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-datetime">
                                <Spkapexcharts chartOptions={Dateoptions} chartSeries={Dateseries} type='area' height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default AreaChart;
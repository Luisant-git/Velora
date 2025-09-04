import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import Spkapexcharts from "../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Funneloptions, Funnelseries, Pyramidoptions, Pyramidseries } from "../../../../components/common/data/charts/apexcharts/funnelchartdata";

const FunnelChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Funnel Charts" activepage="Apex Funnel Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Funnel Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="funnel-chart">
                                <Spkapexcharts chartOptions={Funneloptions} chartSeries={Funnelseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Pyramid Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pyramid-chart">
                                <Spkapexcharts chartOptions={Pyramidoptions} chartSeries={Pyramidseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default FunnelChart;
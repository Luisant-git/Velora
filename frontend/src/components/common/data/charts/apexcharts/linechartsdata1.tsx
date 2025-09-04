import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../../page-header/pageheader";
import { Lineannotationoptions, Lineannotationseries, Linebasicoptions, Linebasicseries, Linebrushoptions, Linebrushseries, Linedashoptions, Linedashseries, Linedataoptions, Linedataseries, Linegardientoptions, Linegardientseries, Linenulloptions, Linenullseries, Linerealoptions, Linerealseries, Linestepoptions, Linestepseries, Linesyncoptions, Linesyncseries, Linezoomoptions, Linezoomseries, optionsArea, optionsLine, optionsLine2, seriesArea, seriesLine, seriesLine2 } from "./linechartsdata";
import Spkapexcharts from "../../../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";

const LineChart1 = () => {

  return (
    <Fragment>
      {/* Page Header */}
      <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Line Charts" activepage="Apex Line Charts" />
      {/* Page Header Close */}

      {/* Start::row-1 */}
      <Row>
        {/* Basic Line Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Basic Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="line-chart">
                <Spkapexcharts chartOptions={Linebasicoptions} chartSeries={Linebasicseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Line Chart With Data Labels */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line Chart With Data Labels</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="line-chart-datalabels">
                <Spkapexcharts chartOptions={Linedataoptions} chartSeries={Linedataseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Zoomable Time Series Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Zoomable Time Series</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="zoom-chart">
                <Spkapexcharts chartOptions={Linezoomoptions} chartSeries={Linezoomseries} type="area" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Line Chart with Annotations */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line With Annotations</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="annotation-chart">
                <Spkapexcharts chartOptions={Lineannotationoptions} chartSeries={Lineannotationseries} type="area" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Brush Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Brush Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="wrapper">
                <div id="brush-chart1">
                  <Spkapexcharts chartOptions={Linebrushoptions} chartSeries={Linebrushseries} type="line" width={"100%"} height={200} />
                </div>
                <div id="brush-chart">
                  <Spkapexcharts chartOptions={optionsLine} chartSeries={seriesLine} type="area" width={"100%"} height={170} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* StepLine Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>StepLine Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="stepline-chart">
                <Spkapexcharts chartOptions={Linestepoptions} chartSeries={Linestepseries} type="line" width={"100%"} height={380} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Gradient Line Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Gradient Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="gradient-chart">
                <Spkapexcharts chartOptions={Linegardientoptions} chartSeries={Linegardientseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Missing/Null Values Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Missing/Null Values Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="null-chart">
                <Spkapexcharts chartOptions={Linenulloptions} chartSeries={Linenullseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Real-Time Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Real Time Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="dynamic-chart">
                <Spkapexcharts chartOptions={Linerealoptions} chartSeries={Linerealseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Dashed Line Chart */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Dashed Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="dashed-chart">
                <Spkapexcharts chartOptions={Linedashoptions} chartSeries={Linedashseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Syncing Charts */}
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Syncing Charts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="wrapper">
                <div id="chart-line">
                  <Spkapexcharts chartOptions={Linesyncoptions} chartSeries={Linesyncseries} type="line" width={"100%"} height={160} />
                </div>
                <div id="chart-line2">
                  <Spkapexcharts chartOptions={optionsLine2} chartSeries={seriesLine2} type="line" width={"100%"} height={160} />
                </div>
                <div id="chart-area">
                  <Spkapexcharts chartOptions={optionsArea} chartSeries={seriesArea} type="area" width={"100%"} height={160} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* End::row-1 */}
    </Fragment>
  );
};

export default LineChart1;







import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface Spkwidgetcard2componentProps {
    cardClass?: string;
    width?: number;
    height?: number;
    widgetCard?: any;
}

const Spkwidgetcard2component: React.FC<Spkwidgetcard2componentProps> = ({ cardClass, width, height, widgetCard }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-fill">
                            <div className="d-flex justify-content-between mb-3">
                                <span className={`avatar avatar-rounded avatar-md bg-${widgetCard.color}-gradient svg-white`}>
                                    {widgetCard.svgIcon}
                                </span>
                            </div>
                            <p className="flex-fill text-muted fs-14 mb-0">{widgetCard.total}</p>
                        </div>
                        <div id="chart-10">
                            <Spkapexcharts chartOptions={widgetCard.chartoptions} chartSeries={widgetCard.chartseries} type={widgetCard.type} width={width} height={height} />
                        </div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="fs-24 fw-medium mb-0 d-flex align-items-center">{widgetCard.price}</div>
                        <div className="text-muted fs-13 text-end ms-auto">
                            {widgetCard.inc} By <span className={`text-${widgetCard.color1}`}>{widgetCard.percent}%<i className={`ti ti-arrow-narrow-${widgetCard.icon} fs-16`}></i></span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Spkwidgetcard2component;

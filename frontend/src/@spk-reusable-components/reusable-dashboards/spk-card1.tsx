import React from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface SpkCard1ComponentProps {

    width?: string | number;
    height?: string | number;
    card?: any;
}

const SpkCard1Component: React.FC<SpkCard1ComponentProps> = ({ width, height, card }) => {

    return (
        <Card className="custom-card overflow-hidden">
            <Card.Body className="pb-0 pe-0">
                <div>
                    <div className="d-flex gap-1 justify-content-between">
                        <span className={`avatar avatar-rounded bg-${card.color} svg-white mb-3 flex-shrink-0`}>
                            <i className={`bx ${card.Icon} fs-22`}></i>
                        </span>
                        <span className="fw-medium fs-13 text-muted pe-3">{card.title}</span>
                    </div>
                </div>
                <div className="d-flex align-items-end justify-content-between">
                    <div className="pb-3">
                        <span className="fs-20 fw-medium mb-0 d-flex align-items-center">{card.value}</span>
                        <div className="text-muted fs-13">{card.Inc}</div>
                        <span className={`text-${card.Inc.includes("Decreased")? "danger":"success"}`}>{card.percentageChange}%<i className={`ti ti-${card.Icon1} fs-16`}></i></span>
                    </div>
                    <div id="chart-21">
                        <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} height={height} width={width} type={card.type} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SpkCard1Component;

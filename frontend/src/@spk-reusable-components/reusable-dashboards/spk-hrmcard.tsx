import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface SpkHrmcardProps {
    title?: string;
    price?: string;
    percent?: string;
    data?: string;
    color?: string;
    chartOptions?: any;
    chartSeries?: any;
    cardClass?: string;
    icon?: string;
    type?: string;
    width?: string;
    height?: number;
}

const SpkHrmcard: React.FC<SpkHrmcardProps> = ({ title, price, percent, data, color, chartOptions, chartSeries, cardClass = '', icon, type, height, width }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <div className="m-3 bg-light rounded-1 border">
                    <Card.Body className="pb-3">
                        <div className="d-flex align-items-center w-100 justify-content-between gap-1">
                            <div>
                                <p className="mb-1 text-muted fw-medium">{title}</p>
                                <h4 className="mb-0 fw-medium">{price}</h4>
                            </div>
                            <div className="ms-auto text-end">
                                <span className={`badge bg-${color} rounded-pill align-items-center fs-11`}>
                                    <i className={`ri-arrow-left-${icon}-line fs-11`}></i>{percent}
                                </span>
                                <div className="text-muted fs-12 mt-1">{data}</div>
                            </div>
                        </div>
                    </Card.Body>
                    <div id="employees">
                        <Spkapexcharts chartOptions={chartOptions} chartSeries={chartSeries} type={type} width={width} height={height}/>
                    </div>
                </div>
            </Card>
        </Fragment>
    );
};

export default SpkHrmcard;

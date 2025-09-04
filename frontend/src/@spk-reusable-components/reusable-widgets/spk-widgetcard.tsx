import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface SpkwidgetcardcomponentProps {
    cardClass?: string;
    svgIcon?: React.ReactNode;
    Product?: string;
    price?: string;
    color?: string;
    color1?: string;
    icon?: string;
    percent?: string;
    chartoptions?: any;
    seriesoptions?: any;
    type?: string;
    width?: number;
    height?: number;
    color2?: string;
}

const Spkwidgetcardcomponent: React.FC<SpkwidgetcardcomponentProps> = ({ cardClass, color2, svgIcon, Product, price, color, color1, icon, percent, chartoptions, seriesoptions, type, width, height }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex gap-3 align-items-center">
                        <div className={`avatar avatar-lg bg-${color2} svg-white flex-shrink-0`}>
                            {svgIcon}
                        </div>
                        <div>
                            <div className="flex-fill fs-13 text-muted">{Product}</div>
                            <div className="fs-21 fw-medium">
                                {price}
                                <span className={`badge bg-${color1}-transparent text-${color} fs-10 ms-2`}>
                                    <i className={`ri-arrow-right-${icon}-line fs-11`}></i>
                                    {percent}
                                </span>
                            </div>
                        </div>
                        <div className="ms-auto">
                            <div id="chart-01">
                                <Spkapexcharts
                                    chartOptions={chartoptions}
                                    chartSeries={seriesoptions}
                                    type={type}
                                    width={width}
                                    height={height}
                                />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Spkwidgetcardcomponent;

import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface Spkwidgetcard3Props {
    cardClass?: string;
    id?: string;
    type?: string;
    width?: number;
    height?: number;
    card?: any;
}

const Spkwidgetcard3component: React.FC<Spkwidgetcard3Props> = ({ cardClass, id, width, height, card }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex align-items-end flex-wrap justify-content-between text-end gap-2">
                        <div>
                            <div id={id}>
                                <Spkapexcharts chartOptions={card.chartoptions} chartSeries={card.chartseries} type={card.type} width={width} height={height} />
                            </div>
                        </div>
                        <div className="text-end ms-auto">
                            <span className={`avatar avatar-sm bg-${card.color} mb-2`}>
                                <i className={`ri-${card.icon} fs-16`}></i>
                            </span>
                            <div className="flex-fill text-muted fs-14 mb-1">{card.total}</div>
                            <div className="h4 fw-medium mb-0 d-flex align-items-center flex-wrap gap-2">
                                {card.price}
                                <span className={`badge bg-${card.color1}-transparent fs-10`}>
                                    <i className={`ri-arrow-left-${card.icon1}-line`}></i>{card.percent}%
                                </span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Spkwidgetcard3component;

import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface Spkwidgetscrad1componentProps {
    cardClass?: string;
    color1?: string;
    icon?: string;
    percent?: string;
    data?: string;
    total?: string;
    color?: string;
    svgIcon?: React.ReactNode;
}

const Spkwidgetscrad1component: React.FC<Spkwidgetscrad1componentProps> = ({ cardClass, color1, icon, percent, data, total, color, svgIcon, }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="flex-grow-1">
                            <span className={`text-${color1} fw-semibold me-1 d-inline-block badge bg-${color1}-transparent`}>
                                <i className={`fe fe-arrow-${icon}`}></i>{percent}
                            </span>
                            <h4 className="mt-2 mb-2 fw-medium">{data}</h4>
                            <p className="mb-0 fs-12 fw-medium">{total}</p>
                        </div>
                        <div>
                            <span className={`avatar avatar-md bg-${color} svg-white text-fixed-white`}>
                                {svgIcon}
                            </span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Spkwidgetscrad1component;

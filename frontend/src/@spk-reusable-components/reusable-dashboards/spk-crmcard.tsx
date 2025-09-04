import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkCrmcardProps {
    cardClass?: string;
    bodyClass?: string;
    color?: string;
    svgIcon?: React.ReactNode;
    title?: string;
    price?: string;
    percent?: string;
    color1?: string;
}

const SpkCrmcard: React.FC<SpkCrmcardProps> = ({ cardClass = '', bodyClass = '', color, svgIcon, title, price, percent, color1 }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <div>
                        <div className="d-flex justify-content-between mb-2">
                            <div className={`p-2 border border-${color} border-opacity-10 bg-${color}-transparent rounded-pill`}>
                                <span className={`avatar avatar-md avatar-rounded bg-${color} svg-white`}>
                                    {svgIcon}
                                </span>
                            </div>
                        </div>
                        <p className="flex-fill text-muted fs-14 mb-0">{title}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                        <h4 className="mb-0 d-flex align-items-center">{price}</h4>
                        <span className={`text-${color1} badge bg-${color1}-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0`}>
                            <i className={`ri-arrow-left-${percent?.includes("+")? "up":"down"}-line fs-11`}></i>
                            {percent}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkCrmcard;

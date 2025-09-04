import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface MedicalCardProps {
    price?: string;
    title?: string;
    percent?: string;
    cardClass?: string;
    bodyClass?: string;
    svgIcon?: React.ReactNode;
    color?: string;
    icon?: string;
}

const SpkMedicalcard: React.FC<MedicalCardProps> = ({ price, title, percent, cardClass, bodyClass, svgIcon, color, icon }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <h5 className="mb-11d">{price}</h5>
                    <div className="fw-medium op-7">{title}
                        <span className={`fw-normal ms-1 badge bg-${color}-transparent fs-9`}> {percent}
                            <i className={`ri-arrow-${icon}-s-fill`}></i>
                        </span>
                    </div>
                    {svgIcon}
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkMedicalcard;

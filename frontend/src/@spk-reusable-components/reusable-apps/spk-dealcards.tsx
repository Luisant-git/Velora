import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkDealcardsProps {
    cardClass?: string;
    bodyClass?: string;
    mainClass?: string;
    icon?: string;
    iconColor?: string;
    iconColors?: string;
    iconClass?: string;
    badgeColor?: string;
    badge?: string;
}

const SpkDealcards: React.FC<SpkDealcardsProps> = ({ cardClass, bodyClass, mainClass, icon, iconColor, iconColors, iconClass, badgeColor, badge }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <div className={mainClass}>
                        <div>
                            <h6 className="fw-medium mb-0 lead-discovered">
                                <i className={`${icon} p-1 lh-1 fs-7 rounded-2 bg-${iconColor}-transparent text-${iconColors} me-2 align-middle`}></i>
                                {iconClass}
                            </h6>
                        </div>
                        <div className="ms-auto text-center">
                            <span className={`badge bg-${badgeColor}`}>{badge}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkDealcards;

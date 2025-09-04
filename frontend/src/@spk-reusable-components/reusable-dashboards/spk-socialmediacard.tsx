import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpksocialmediacardscomponentProps {
    cardClass?: string;
    data?: string;
    app?: string;
    followers?: string;
    percent?: string;
    icon?: string;
    color?: string;
    color1?: string;
}

const Spksocialmediacardscomponent: React.FC<SpksocialmediacardscomponentProps> = ({ cardClass, data, app, followers, percent, icon, color, color1 }) => {
    return (
        <Fragment>
            <Card 
                className={`custom-card social-cards insta`}
                style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <Card.Body className="flex-fill">
                    <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div>
                            <p className={`flex-fill fs-15 fw-medium mb-1 text-${color1}`}>{app}</p>
                            <p className="mb-2 fs-24 fw-medium">{data}</p>
                            <div className="flex-between">
                                <span className="text-muted fs-12">{followers}</span>
                                <span className={`text-${color} d-inline-block mx-1`}>
                                    <i className={`bi bi-arrow-${icon}-right me-1 fs-10`}></i>{percent}%
                                </span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Spksocialmediacardscomponent;
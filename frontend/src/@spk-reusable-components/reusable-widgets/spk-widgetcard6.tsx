import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface Spkwidgetcard6componentprops {
    cardTitle?: string;
    shop?: any;
    viewcolor?: string;
    view?: string;
}

const Spkwidgetcard6component: React.FC<Spkwidgetcard6componentprops> = ({ cardTitle, shop, viewcolor, view }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Header>
                    <Card.Title>
                        {cardTitle}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ul className="list-unstyled mb-3">
                        {shop.map((idx: any) => (
                            <li className="mb-3" key={Math.random()}>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="lh-1">
                                        <span className={`avatar  avatar-md avatar-rounded p-1 bg-${idx.color} border`}>
                                            <i className={`fe ${idx.icon}`}></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill lh-1">
                                        <span className="fw-medium mb-2 d-block fs-14">{idx.shop}</span>
                                        <span className="d-block text-muted fs-12">{idx.date}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className={`fs-11 text-${idx.percolor}`}><i className={`ti ti-arrow-narrow-${idx.icon1}`}></i>{idx.percent}%</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center">
                        <Link to="#!" className={`text-${viewcolor} fw-medium text-decoration-underline`}>{view}</Link>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkwidgetcard6component
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkBadge from '../reusable-uielements/spk-badge';


interface Spkbudgetwidgetcomponentprops {
    Budget?: any;
    cardClass?: string;
}
const Spkbudgetwidgetcomponent: React.FC<Spkbudgetwidgetcomponentprops> = ({ Budget, cardClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className="bg-primary m-3 rounded-3">
                    <div className="d-flex text-fixed-white gap-3 align-items-center">
                        <div className="avatar avatar-rounded avatar-lg bg-white-transparent svg-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <p className="fs-15 mb-0 op-8">Today Budget</p>
                            <p className="fs-18 fw-semibold mb-0">$2,78,411</p>
                        </div>
                        <div className="text-fixed-white fs-13 align-self-end ms-auto"><span className="op-7">Increased By  </span> <SpkBadge variant='success' Customclass="align-self-end text-fixed-white fs-10"><i className="ri-arrow-right-up-line fs-11"></i>0.5</SpkBadge>
                        </div>

                    </div>
                </Card.Body>
                <Card.Body className="p-0 border-top">
                    <ul className="list-group list-group-flush">
                        {Budget.map((item: any) => (
                            <li className="list-group-item p-3" key={Math.random()}>
                                <div className="d-flex align-items-start gap-3">
                                    <div>
                                        <span className={`avatar avatar-rounded bg-${item.color}-transparent text-${item.color}`}><i className={`ti ti-${item.icon} fs-22`}></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <span className="mb-0 fw-medium d-block">{item.total}</span>
                                        <span className="text-muted fs-12">{item.avg}</span>

                                    </div>
                                    <div className="text-end">
                                        <span className={`text-${item.color} fs-medium fs-5`}>{item.price}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkbudgetwidgetcomponent
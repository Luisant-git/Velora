import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Spkwidgetcard5componentprops {
    cardClass?: string;
    heading?: string;
    price?: string;
    price1?: string;
    Inc?: string;
    percent?: string;
    color?: string;
    icon?: string;
    icon1?: string;
    color1?: string;
}
const Spkwidgetcard5component: React.FC<Spkwidgetcard5componentprops> = ({ cardClass, heading, price, price1, Inc, percent, color, icon, icon1, color1 }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <div className="widget-card">
                    <div className="d-flex align-items-start text-fixed-white flex-wrap px-2">
                        <div className="flex-grow-1 text-center">
                            <div className="mt-2 align-items-center justify-conent-between fs-21 mb-1">
                                <span>{heading}</span>
                                <span className="min-w-fit-content fs-10 ms-1 "></span>
                            </div>
                            <div className="d-flex align-items-center justify-conent-between">
                                <span className="flex-grow-1 fs-30 fw-semibold sale-font counter">{price}<span>
                                </span></span></div>
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <div className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1">
                            <div className="fs-21 fw-medium mb-1">{price1}</div>
                            <div className="flex-grow-1 fs-13 mb-2">{Inc} By</div>
                            <span className={`fs-12 text-${color1}`}><i className={`ti ${icon1}`}></i>{percent}%</span>
                        </div>
                        <span className={`avatar rounded-circle bg-${color}-transparent ms-auto`}>
                            <i className={`bx ${icon}  fs-20`}></i>
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkwidgetcard5component
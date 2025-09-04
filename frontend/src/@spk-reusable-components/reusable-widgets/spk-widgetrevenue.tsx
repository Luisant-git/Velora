import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'


interface SpkwidgetrevenuecomponentProps {
    data?: any;
    cardClass?: string;
}

const Spkwidgetrevenuecomponent: React.FC<SpkwidgetrevenuecomponentProps> = ({ data, cardClass }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Header>
                    <Card.Title>
                        Total Revenue
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="d-flex align-items-center mb-3 gap-2">
                        <h3 className="fw-medium mb-0">$5,874.28</h3>
                        <div className="text-muted fs-13 text-end ms-auto">Increased By <span className="text-success">0.5%<i className="ti ti-arrow-narrow-up fs-16"></i></span>
                        </div>
                    </div>
                    <div className="progress-stacked mb-1">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="progress-bar progress-bar-striped bg-primary1" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="progress-bar progress-bar-striped bg-primary2" role="progressbar" style={{ width: "23%" }} aria-valuenow={23} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="progress-bar progress-bar-striped bg-primary3" role="progressbar" style={{ width: "27%" }} aria-valuenow={27} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </Card.Body>
                <div className="card-footer p-0">
                    <ul className="list-group list-group-flush">
                        {data.map((item: any) => (
                            <li className="list-group-item" key={Math.random()}>
                                <div className="d-flex align-items-center">
                                    <div className="flex-fill align-items-center">
                                        <div className="d-flex align-items-top justify-content-between">
                                            <div>
                                                <p className="mb-1 text-muted d-flex align-items-center"><i className={`ti ti-point-filled fs-20 text-${item.color} me-2 bg-${item.color}-transparent rounded-circle`}></i>{item.revenue}</p>
                                                <h6 className="mb-0 lh-1 fw-medium ms-4 ps-1">{item.price}</h6>
                                            </div>
                                            <div className="text-muted fs-13 text-end ms-auto">{item.inc} By <span className={`text-${item.color1}`}>{item.percent}%<i className={`ti ti-arrow-narrow-${item.icon} fs-16`}></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </Card>
        </Fragment>
    )
}

export default Spkwidgetrevenuecomponent
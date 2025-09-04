import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Spkrecentactivitycomponentprops {
    Recent?: any;
    cardTitle?: string;
}
const Spkrecentactivitycomponent: React.FC<Spkrecentactivitycomponentprops> = ({ Recent, cardTitle }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Header>
                    <Card.Title>
                        {cardTitle}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ul className="widgets-task-list mb-0">
                        {Recent.map((idx: any) => (
                            <li className="" key={Math.random()}>
                                <div className=""> <i className={`task-icon bg-${idx.color}`}></i>
                                    <h6 className="fs-14 mb-0">{idx.review}</h6>
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div className="template-content" dangerouslySetInnerHTML={{ __html: idx.template }} />
                                        <div className="min-w-fit-content ms-2 text-end">
                                            <p className="mb-0 text-muted fs-11">{idx.date}</p>
                                        </div>
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

export default Spkrecentactivitycomponent
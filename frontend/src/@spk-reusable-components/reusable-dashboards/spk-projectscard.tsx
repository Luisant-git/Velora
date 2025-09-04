import React, { Fragment } from 'react'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import { Card } from 'react-bootstrap'

interface SpkProjectscardcomponentProps {
    cardClass?: string;
    width?: number | string;
    height?: number | string;
    project?: any;
}

const SpkProjectscardcomponent: React.FC<SpkProjectscardcomponentProps> = ({ cardClass, width, height, project }) => {

    return (

        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className="">
                    <div className="mb-3 d-flex align-items-start justify-content-between">
                        <span className={`avatar avatar-sm bg-${project.color} svg-white`}>
                            <i className={`ri-${project.icon} fs-16`}></i>
                        </span>
                        <span className={`badge bg-${project.color1}-transparent`}>{project.badge}</span>
                    </div>
                    <div className="d-flex align-items-end justify-content-between flex-wrap">
                        <div className="flex-shrink-0">
                            <div className="text-muted mb-1">{project.projects}</div>
                            <h4 className="mb-0 fs-20 fw-medium">{project.data}</h4>
                        </div>
                        <div id="Projects-2" className="flex-shrink-0 text-end ms-auto">
                            <Spkapexcharts chartOptions={project.chartoptions} chartSeries={project.chartseries} type={project.type} width={width} height={height} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkProjectscardcomponent;
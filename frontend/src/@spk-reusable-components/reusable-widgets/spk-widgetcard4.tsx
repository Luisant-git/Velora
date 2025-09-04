import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uielements/spk-tooltips';


interface Spkwidgetcard4componentprops {
    cardClass?: string;
    Img?: string;
    name?: string;
    role?: string;
    description?: string;
    btn?: string;
    btn1?: string;
    mainClass?: string;
    icon?: string;
    tooltip?: string | any;
}

const Spkwidgetcard4component: React.FC<Spkwidgetcard4componentprops> = ({ cardClass, mainClass, Img, name, role, description, btn, btn1, icon, tooltip }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="text-center">
                        <div className="mb-2">
                            <span className={`avatar avatar-xl avatar-rounded ${mainClass}`}>
                                <img src={Img} alt="" />
                            </span>
                        </div>
                        <div className="main-profile-info">
                            <h6 className="fw-semibold mb-1">{name}  <SpkTooltips placement='top' title={tooltip}>
                                <i className={`bi bi-${icon} text-primary2 fs-14" data-bs-toggle="tooltip`}></i>
                            </SpkTooltips></h6>
                            <p className="text-muted mb-2">{role}</p>
                            <p className="">{description}</p>
                        </div>
                        <div className="d-flex gap-1 justify-content-center mb-4 align-items-center">
                            <i className="ri-facebook-line text-primary border rounded-circle align-middle lh-1 border-opacity-25 p-2 border-primary me-1 d-inline-block fs-17 bg-primary-transparent"></i>
                            <i className="ri-twitter-x-line text-primary1 border rounded-circle align-middle lh-1 border-opacity-25 p-2 border-primary1 me-1 d-inline-block fs-17 bg-primary1-transparent"></i>
                            <i className="ri-linkedin-line text-primary2 border rounded-circle align-middle lh-1 border-opacity-25 p-2 border-primary2 me-1 d-inline-block fs-17 bg-primary2-transparent"></i>
                            <i className="ri-github-line text-primary3 border rounded-circle align-middle lh-1 border-opacity-25 p-2 border-primary3 me-1 d-inline-block fs-17 bg-primary3-transparent"></i>
                        </div>
                        <div className="d-flex gap-2 mb-0 flex-wrap flex-xxl-nowrap">
                            <div className="btn btn-primary btn-sm mb-0 flex-fill">
                                {btn}
                            </div>
                            <div className="btn btn-secondary btn-sm mb-0 flex-fill">
                                {btn1}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkwidgetcard4component;
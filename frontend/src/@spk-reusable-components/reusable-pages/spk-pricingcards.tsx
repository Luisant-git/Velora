import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkButton from '../reusable-uielements/spk-button'
import SpkBadge from '../reusable-uielements/spk-badge';
import SpkTooltips from '../reusable-uielements/spk-tooltips';


interface Pricing {
    planType?: string;
    landing?: boolean;
    card: any;
}

const SpkPricingcards: React.FC<Pricing> = ({ planType, landing = false, card }) => {
    return (
        <Fragment>
            <Card className={`custom-card pricing-card ${card.Customclass}`}>
                {card.Ribbon ?
                    <div className="pricing-table-item-icon">
                        <i className="fe fe-zap me-2"></i> Popular
                    </div> : ""}
                <Card.Body className={`border-bottom border-block-end-dashed ${card.Mainclass} ${landing ? " p-4" : "p-3"}`}>
                    <h6 className={`fw-medium mb-1 ${card.Customh6class}`}>{card.Title}</h6>
                    <h2 className={`fw-semibold d-block ${card.Customh2class} ${card.Mainclass} ${landing ? "mb-1" : "mb-3"}`}>
                        {planType == "monthly" ? card.price : card.yearPrice}
                        <span className="fs-12 fw-medium ms-1 op-8"> / {planType == "monthly" ? "Month" : "Annum"}</span>
                    </h2>
                    <span className={`d-block fs-11 ${card.descriptionclass}`}>{card.description}</span>
                </Card.Body>
                <Card.Body className={`${landing ? " p-4" : "p-3"}${card.Custombodyclass}`}>
                    <ul className="list-unstyled pricing-body">
                        {card.features.map((item: any, index: any) => (
                            <li key={index}>
                                <div className="d-flex align-items-center">
                                    <span className="avatar avatar-xs svg-success">
                                        <i className={`ti ti-circle-arrow-right-filled ${card.arrowClass} fs-18`}></i>
                                    </span>
                                    <span className="ms-2 my-auto flex-fill">
                                        {item.Listitem}
                                    </span>
                                    {item.badge ? <SpkBadge variant={item.badgecolor} Pill={true}>{item.badgetxt}</SpkBadge> :
                                        <span className={` fs-12 fw-medium ${card.Customclass === "hover bg-primary" ? "op-5" : "text-muted"} `}> {planType == "monthly" ? item.days : item.yeardays}</span>}
                                    {item.icon === true ?
                                    <SpkTooltips title='Provide essential insights and data analysis to help you track the performance.'>
                                        <span className={`bg-${item.iconclass} p-1 lh-1 rounded-pill`}>
                                            <i className="ri-information-2-line"></i>
                                        </span> 
                                    </SpkTooltips> 
                                    : ""}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card.Body>
                <Card.Footer className={`border-top border-block-start-dashed ${card.Customfooterclass} ${landing ? " p-4" : "p-3"}`}>
                    <SpkButton Buttonvariant={card.buttonClass} Buttontype="button" Size='lg' Customclass="d-grid w-100 btn-wave">
                        <span className="ms-4 me-4">Get Started!</span>
                    </SpkButton>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default SpkPricingcards
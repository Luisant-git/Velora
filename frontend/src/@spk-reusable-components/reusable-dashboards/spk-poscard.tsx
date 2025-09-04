import React, { Fragment } from 'react'
import {  Card } from 'react-bootstrap'
import SpkButton from '../reusable-uielements/spk-button';
import { Link } from 'react-router-dom';


interface SpkPoscardProps {
    imgSrc?: string;
    title?: string;
    item?: string;
    price?: string;
    handleShow?: () => void;
    cardClass?: string;
}

const SpkPoscard: React.FC<SpkPoscardProps> = ({ imgSrc, title, item, price, handleShow, cardClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card p-3 ${cardClass}`}>
                <img src={imgSrc} className="card-img-top" alt={title} />
                <Card.Body className="bg-secondary-transparent rounded-bottom">
                    <div className="mb-3">
                        <Link to="#!" className="fw-medium fs-16">{title}</Link>
                        <span className="fs-12 text-muted d-block">{item}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 justify-content-between flex-wrap">
                        <h5 className="fw-medium mb-0">{price}</h5>
                        <div>
                            <SpkButton onClickfunc={handleShow} Buttonvariant="primary" Buttontype="button" Size='sm' Buttontoggle="offcanvas" Buttontarget="#viewcart">
                                <i className="ri-add-fill me-1"></i>Add To Cart
                            </SpkButton>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkPoscard

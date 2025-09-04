import React from 'react';
import { Card } from 'react-bootstrap';
import SpkBadge from '../reusable-uielements/spk-badge';
import { Link } from 'react-router-dom';

interface SpkCardNftProps {
    imgSrc?: string;
    avatarSrc?: string;
    auctionTime?: string;
    title?: string;
    rating?: number | string;
    clientName?: string;
    mail?: string;
    currentBid?: number | string;
    svgIcon?: string | any;
}

const SpkCardNft: React.FC<SpkCardNftProps> = ({ imgSrc, avatarSrc, auctionTime, title, rating, clientName, mail, currentBid, svgIcon }) => {

    return (
        <Card className="custom-card overflow-hidden">
            <div className="mb-0 text-fixed-white bg-primary2 nft-auction-time">
                {auctionTime}
            </div>
            <div className="position-relative">
                <img src={imgSrc} className="card-img-top nft-img1" alt={title} />
                <SpkBadge variant='' Customclass="nft-like-badge text-fixed-white">
                    <i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>
                    {rating}
                </SpkBadge>
            </div>
            <Card.Body className="nft-body">
                <p className="fs-15 mb-2 fw-semibold">{title}</p>
                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                    <div className="lh-1">
                        <span className="avatar avatar-rounded avatar-xs">
                            <img src={avatarSrc} alt={clientName} />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="mb-0 fs-12 fw-medium">{clientName}</p>
                        <p className="fs-11 op-8 mb-0 lh-1">{mail}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0">Current Bid :</p>
                    <h6 className="fw-semibold mb-0 bid-amt align-middle">
                        {svgIcon}
                        {currentBid}
                    </h6>
                </div>
                <div className="d-grid">
                    <Link to="#!" className="btn btn-primary mb-md-0 mb-4">Place Bid</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SpkCardNft;

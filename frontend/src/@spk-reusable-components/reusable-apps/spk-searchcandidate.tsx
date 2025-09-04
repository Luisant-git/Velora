import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uielements/spk-tooltips';
import SpkBadge from '../reusable-uielements/spk-badge';
import { Link } from 'react-router-dom';

interface SpkSearchCandidateProps {
    cardClass?: string;
    bodyClass?: string;
    object?: any;
    badge2?: string;
}

const SpkSearchcandidate: React.FC<SpkSearchCandidateProps> = ({ cardClass, bodyClass, object, badge2 }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <div className="float-end">
                        <SpkTooltips placement="top" title="Download CV">
                            <Link to="#!" className={`avatar avatar-rounded avatar-sm bg-${object.avatarColor}-transparent me-1`}>
                                <span><i className="ri-download-cloud-line fs-14"></i></span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Add to Wishlist">
                            <Link to="#!" className={`avatar avatar-rounded avatar-sm bg-${object.avatarColor1}-transparent`}>
                                <span><i className="ri-heart-line fs-14"></i></span>
                            </Link>
                        </SpkTooltips>
                    </div>
                    <div className="d-flex mb-3 align-items-center flex-wrap flex-sm-nowrap gap-2">
                        <div>
                            <span className="avatar avatar-lg avatar-rounded">
                                <img src={object.image} alt="Profile Picture" />
                            </span>
                        </div>
                        <div>
                            <h6 className="fw-medium mb-1 d-flex align-items-center">
                                <Link to={`${import.meta.env.BASE_URL}apps/jobs/candidate-details`}>{object.name}
                                    <SpkTooltips placement="top" title="Verified candidate">
                                        <i className="ri-verified-badge-fill text-primary fs-14"></i>
                                    </SpkTooltips>
                                </Link>
                            </h6>
                            <div className="d-flex gap-2 flex-wrap">
                                <Link to="#!">{object.jobTitle}</Link>
                                <p className="mb-0 fs-12 text-muted"><i className="ri-map-pin-line fs-11"></i>  {object.location}</p>
                            </div>
                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                <p className="fs-12 mb-0">Ratings : </p>
                                <div className="min-w-fit-content ms-2 d-flex gap-1">
                                    {object.ratings}
                                </div>
                                <Link to="#!" className="ms-1 min-w-fit-content text-muted">
                                    <span>{object.ratingCount}</span>
                                    <span className="mx-1">Ratings</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="popular-tags mb-3 d-flex gap-2 flex-wrap">
                        <SpkBadge key="badge1" variant='' Customclass="rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                            <i className="ri-file-text-line me-1"></i> {object.badge}
                        </SpkBadge>
                        <SpkBadge key="badge2" variant='' Customclass="rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                            <i className="ri-remote-control-line me-1"></i> {object.badge1}
                        </SpkBadge>
                        {badge2 && (
                            <><SpkBadge key="badge3" variant='' Customclass="rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                <i className="ri-time-line me-1"></i> {badge2}
                            </SpkBadge>
                                <SpkBadge key="badge4" variant='' Customclass="rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                    <i className="ri-time-fill me-1"></i> {object.badge3}
                                </SpkBadge></>
                        )}
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <div>
                            <p className="mb-1 flex-grow-1">
                                <span className="text-muted">Annual Pay :</span> <span className="fw-medium"> {object.annualPay}</span> - <span className="fw-medium"> {object.annualPay1}</span>
                            </p>
                            <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> {object.languages}</span></p>
                        </div>
                        <div className="ms-auto">
                            <div className="btn btn-primary">View Profile <i className="ri-arrow-right-line"></i></div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default SpkSearchcandidate;

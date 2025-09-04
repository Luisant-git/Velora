import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uielements/spk-tooltips';
import SpkBadge from '../reusable-uielements/spk-badge';
import { Link } from 'react-router-dom';

interface SpkJobCompanyProps {
    obj: any;
}

const SpkJobcompany: React.FC<SpkJobCompanyProps> = ({
    obj

}) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="float-end">
                        <SpkTooltips placement="top" title="Add to Wishlist">
                            <Link to={obj.spanLink} className="avatar avatar-rounded bg-primary-transparent avatar-sm">
                                <span><i className="ri-heart-line align-middle fs-14"></i></span>
                            </Link>
                        </SpkTooltips>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <span className="avatar avatar-xl bg-light shadow-sm border border-primary border-opacity-10 p-3 avatar-rounded">
                            <img src={obj.logo} alt={obj.name} />
                        </span>
                        <div className="ms-2">
                            <h6 className="fw-medium mb-0 d-flex align-items-center">
                                <Link to={obj.link}>
                                    {obj.name}
                                    <SpkTooltips placement="top" title="Verified company">
                                        <i className="ri-verified-badge-fill text-secondary fs-13"></i>
                                    </SpkTooltips>
                                </Link>
                            </h6>
                            <div className="d-flex gap-2 mb-2">
                                <Link to={obj.iconLink}>
                                    <i className="ri-map-pin-2-line text-info"></i> {obj.location}
                                </Link>
                                <p className="mb-0 text-muted">Establishment year - {obj.establishmentYear}</p>
                            </div>
                            <div className="d-flex align-items-center fs-12 text-muted">
                                <p className="fs-12 mb-0">Ratings:</p>
                                <div className="min-w-fit-content ms-2 d-flex gap-1">
                                    {obj.ratings}
                                </div>
                                <Link to={obj.ratingLink} className="ms-1 min-w-fit-content text-muted">
                                    <span>({obj.ratingCount})</span>
                                    <span> Ratings</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <div className="flex-grow-1 d-flex flex-wrap gap-1">
                            <SpkTooltips placement="top" title="No of employees">
                                <SpkBadge Pill={true} variant='primary1-transparent' Customclass="badge-md fs-11 me-1">
                                    <i className="bi bi-people me-1"></i>No. of Emp: {obj.employees}
                                </SpkBadge>
                            </SpkTooltips>
                            <SpkBadge Pill={true} variant='info-transparent' Customclass="badge-md fs-11">
                                <i className="bi bi-briefcase me-1"></i>Vacancies: {obj.vacancies}
                            </SpkBadge>
                        </div>
                        <Link to={obj.viewLink} className="btn-sm btn btn-wave btn-primary">
                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Fragment>
    );
};

export default SpkJobcompany;

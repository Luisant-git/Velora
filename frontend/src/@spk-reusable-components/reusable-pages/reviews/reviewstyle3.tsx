
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface Review {
    quote?: string;
    rating: number;
    imgSrc: string;
    name: string;
    email: string;
    Navigate: string;
}

interface ReviewSlidesProps {
    review: Review;
}


const ReviewSlidescard: React.FC<ReviewSlidesProps> = ({ review }) => (
    <Fragment>
        <Card className="custom-card border mb-0">
            <Card.Body>
                <div>
                    <span>
                        <sup>
                            <i className="bi bi-quote fs-1 me-1 text-primary"></i>
                        </sup>
                        Customer service at this company is outstanding. They were quick to respond to my inquiry and resolved my issue within hours. --
                        <Link to={review.Navigate} className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-dark" data-bs-placement="top" data-bs-title={review.quote}>
                            Read More
                        </Link>
                    </span>
                </div>
                <div className="d-flex align-items-center text-end justify-content-end">
                    <div className="text-warning d-block me-1 fs-10">
                        {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                            <i key={i} className="ri-star-fill me-1"></i>
                        ))}
                        {review.rating % 1 ? <i className="ri-star-half-line"></i> : null}
                    </div>
                    <span>{review.rating}</span>
                </div>
            </Card.Body>
            <div className="card-footer">
                <div className="d-flex align-items-center">
                    <span className="avatar rounded-circle me-2">
                        <img src={review.imgSrc} alt="" className="img-fluid rounded-circle border border-primary border-2" />
                    </span>
                    <div>
                        <p className="mb-0 fw-semibold">{review.name}</p>
                        <p className="mb-0 fs-11 fw-normal op-8">{review.email}</p>
                    </div>
                    <div className="ms-auto fs-12 fw-semibold op-8 text-end">
                        <div className="btn btn-sm btn-icon rounded-circle btn-primary-light me-1"><i className="ri-twitter-x-line"></i></div>
                        <div className="btn btn-sm btn-icon rounded-circle btn-primary1-light"><i className="ri-share-line"></i></div>
                    </div>
                </div>
            </div>
        </Card>
    </Fragment>
);

export default ReviewSlidescard;

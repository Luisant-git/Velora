
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface ReviewAlignmentProps {
    review: any;
}


const ReviewsAlignmentCard: React.FC<ReviewAlignmentProps> = ({ review }) => (
    <Fragment>
        <Card className="custom-card border position-relative">
            <Card.Body className="text-center">
                <div>
                    <img src={review.imgSrc} alt="img" className="mx-auto text-center avatar avatar-xl rounded-circle border-3 border border-white-1 mb-2 bg-primary" />
                </div>
                <div>
                    <div className="mb-0 fw-semibold fs-14">{review.name}</div>
                    <div className="mb-2 text-warning fs-11">
                        {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                            <i key={i} className="lh-1 ri-star-fill me-1"></i>
                        ))}
                        {review.rating % 1 ? <i className="lh-1 ri-star-half-line"></i> : null}
                    </div>
                    <i className="bx bxs-quote-right fs-2 me-1 text-primary"></i>
                    <p className="fs-14 mt-2 mb-1 px-3">
                        "{review.quote}"
                    </p>
                </div>
            </Card.Body>
        </Card>
    </Fragment>
);

export default ReviewsAlignmentCard;

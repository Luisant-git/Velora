// ReviewCard.tsx
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';


interface Review {
    quote?: string;  // Text for the tooltip on "Read More" link
    rating: number; // Numeric rating, can be a decimal
    imgSrc: string; // Profile image URL
    name: string;   // Name of the reviewer
    role: string;   // Name of the reviewer
}

interface ReviewStyle5Props {
    review: Review;
}


const ReviewStyle5Card: React.FC<ReviewStyle5Props> = ({ review }) => (
    <Fragment>
           <Card className="custom-card mb-2 overflow-hidden">
                    <Card.Body>
                        <p className="fs-16">
                            <i className="ri-double-quotes-l fs-1 lh-1 me-3"></i> {review.quote}
                        </p>
                        <div className="d-flex justify-content-end flex-wrap gap-3">
                            <div className="d-flex">
                                <div className="me-2 my-auto mb-0">
                                    <div className="mb-0 lh-1 fs-12 fw-semibold">
                                        {review.name}
                                        <span className="fs-11 fw-normal ms-2">
                                            <i className="ri-star-fill text-warning fs-9 mb-1 align-middle"></i>
                                            {review.rating}
                                        </span>
                                    </div>
                                    <p className="fs-12 mb-0 op-7">{review.role}</p>
                                </div>
                                <img 
                                    src={review.imgSrc} 
                                    alt="img" 
                                    className="avatar avatar-md avatar-rounded border border-3 border-primary2" 
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
    </Fragment>
);

export default ReviewStyle5Card;

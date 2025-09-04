import React from 'react';
import { Card } from 'react-bootstrap';
import SpkTooltips from '../../reusable-uielements/spk-tooltips';
import { Link } from 'react-router-dom';

interface Testimonial {
    image: string;
    name: string;
    stars: number;
    views: number;
    content: string;
    role: string;
    Navigate: string
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const Reviewstyle1Card: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <Card className="custom-card text-fixed-white">
        <Card.Body>
            <div className="d-flex justify-content-between gap-2 align-items-center mb-3">
                <span className="avatar rounded-circle">
                    <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle" />
                </span>
                <div className="text-end">
                    <span className="text-info d-block ms-1">
                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                        ))}
                        {testimonial.stars % 1 !== 0 && <i className="ri-star-half-line"></i>}
                    </span>
                    <span className="op-8 d-block fs-12 fw-medium">{testimonial.views} views</span>
                </div>
            </div>
            <p className="fs-14">
                {testimonial.content} --
                <SpkTooltips
                    tooltipClass="tooltip-primary"
                    placement="top"
                    title="Customer service at this company is outstanding. They were quick to respond to my inquiry and resolved my issue within hours."
                >
                    <Link to={testimonial.Navigate} className="fw-semibold fs-11">Read More</Link>
                </SpkTooltips>
            </p>
            <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="flex-fill">
                    <p className="mb-0 fw-bold fs-14 text-primary">{testimonial.name}</p>
                    <p className="mb-0 fs-11 fw-normal op-8">{testimonial.role}</p>
                </div>
                <div className="ms-auto fs-12 fw-semibold op-8 text-end">
                    <div className="btn btn-sm btn-icon btn-primary1-light"><i className="ri-thumb-up-line"></i></div>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export default Reviewstyle1Card;

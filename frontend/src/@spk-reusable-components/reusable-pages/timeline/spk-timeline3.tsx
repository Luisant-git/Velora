import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

interface TimelineStepProps {
    date: string;
    title: string;
    content: string;
    imageSrc: string;
    bgClass: string;
    Customclass: string;
    popoverContent: string;
    popoverTitle: string;
}

const SpkTimelineStep: React.FC<TimelineStepProps> = ({ date, title, content, imageSrc, Customclass, bgClass, popoverContent, popoverTitle }) => {
    const [showPopover, setShowPopover] = useState(false);

    const togglePopover = () => setShowPopover(prev => !prev);

    return (
        <div className="timeline-step">
            <div className="timeline-content" onClick={togglePopover} onMouseLeave={() => setShowPopover(false)}>
                <div className="inner-circle"></div>
                <Card className={`custom-card mb-0 border border-opacity-25 border-${bgClass} bg-${bgClass}-transparent  ${Customclass}`}>
                    <div className="card-body">
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={imageSrc} alt="" />
                        </span>
                        <p className="fw-medium mt-1 mb-1">{date}</p>
                        <p className="mb-1 fw-semibold">{title}: <span className="text-muted fw-normal mb-0 mb-lg-0">{content}</span></p>
                    </div>
                </Card>
                {showPopover && (
                    <div className="popover">
                        <h5>{popoverTitle}</h5>
                        <p>{popoverContent}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpkTimelineStep;

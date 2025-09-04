import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SpkBadge from '../../reusable-uielements/spk-badge';
import { Link } from 'react-router-dom';

interface NotificationProps {
    date: string;
    time: string;
    avatarSrc: string;
    title: string;
    description: string;
    badgeContent: string;
    badgeClass: string;
    isEnd?: boolean;
    End?: boolean;
    Start?: boolean;
    Navigate: string
}

const Notification: React.FC<NotificationProps> = ({ date, time, End, Start, avatarSrc, Navigate, title, description, badgeContent, badgeClass, isEnd }) => {
    return (
        <li>
            <Row>
                {Start ?
                    <Col xl={6}>
                        <div className={`notification-time d-flex align-items-center gap-2 ${isEnd ? 'content-end' : ''}`}>
                            <span className="date">{date}</span>
                            <span className="time">{time}</span>
                        </div>
                        <div className="notification-icon">
                            <Link to={Navigate} className={badgeClass}></Link>
                        </div>
                    </Col>
                    : ""}
                <Col xl={6}>
                    <div className={`notification-body ${isEnd ? 'notification-body-end' : ''} border border-${badgeClass} border-opacity-50`}>
                        <div className="d-flex align-items-start gap-3 flex-wrap">
                            <div>
                                <span className="avatar avatar-lg online">
                                    <img src={avatarSrc} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill w-50">
                                <h5 className="mb-1 fs-15 fw-medium text-dark">{title}</h5>
                                <p className="mb-0 fs-13 mb-0 text-muted">{description}</p>
                            </div>
                            <div>
                                <SpkBadge variant='' Customclass={`bg-${badgeClass}-transparent`}>
                                    {badgeContent}
                                </SpkBadge>
                            </div>
                        </div>
                    </div>
                </Col>
                {End ?
                    <Col xl={6}>
                        <div className={`notification-time d-flex align-items-center gap-2 ${isEnd ? 'content-end' : ''}`}>
                            <span className="date">{date}</span>
                            <span className="time">{time}</span>
                        </div>
                        <div className="notification-icon">
                            <Link to={Navigate} className={badgeClass}></Link>
                        </div>
                    </Col> : ""}
            </Row>
        </li>
    );
};

export default Notification;

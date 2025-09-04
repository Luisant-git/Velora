import React from 'react';
import { Link } from 'react-router-dom';

interface SpkTimelineProps {
    avatar?: string;
    title?: string | any;
    description?: any;
    timestamp?: string;
    media?: string[];
    sharedWith?: string[];
    desClass?: string;
    SpanContent?: string;
    color?: string
    Textafter?: boolean
    avatartext?: boolean
}

const SpkTimeline: React.FC<SpkTimelineProps> = ({ avatar, title, description, desClass, timestamp,Textafter=false,avatartext=false, media = [], sharedWith = [], SpanContent, color }) => {
    return (
        <li>
            <div>
                <span className="avatar avatar-sm shadow-sm avatar-rounded profile-timeline-avatar">
                    {avatar ? (
                        <img src={avatar} alt="Avatar" />
                    ) : SpanContent ? (
                        <span className={`avatar avatar-sm shadow-sm bg-${color} avatar-rounded profile-timeline-avatar`}>
                            {SpanContent}
                        </span>
                    ) : null}
                </span>
                <div className="mb-2 d-flex align-items-start gap-2 flex-wrap">
                    <div>
                        <span className="fw-medium" dangerouslySetInnerHTML={{ __html: title }}></span>
                    </div>
                    <span className="ms-auto bg-light text-muted badge">{timestamp}</span>
                </div>
                <p className={`text-muted mb-0 ${desClass}`}>{description}</p>
                {media.length > 0 && (
                    <div className="profile-activity-media mb-0 mt-2">
                        {media.map((src, index) => (
                            <Link key={index} to="#!">
                                <img src={src} alt={`Media ${index}`} />
                            </Link>
                        ))}
                {Textafter? <span className="fs-11 text-muted">512.34KB</span>:""}
                    </div>

                )}
                {sharedWith.length > 0 && (
                    <div className="avatar-list-stacked mt-2">
                        {sharedWith.map((src, index) => (
                            <span key={index} className="avatar avatar-xs avatar-rounded">
                                <img src={src} alt="img" />
                            </span>
                        ))}
                        {avatartext ? "4 People reacted" :""}
                    </div>
                )}
            </div>
        </li>
    );
};

export default SpkTimeline;

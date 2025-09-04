import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uielements/spk-dropdown'
import SpkButton from '../reusable-uielements/spk-button'
import { Link } from 'react-router-dom';

interface Profilecard {
    Imgsrc?: string;
    Name?: string;
    Mail?: string;
    Role?: string;
    Color?: string;
    Navigate: string;
}

const SpkProfilefriendscard: React.FC<Profilecard> = ({ Imgsrc, Name, Mail, Role, Color, Navigate }) => {
    return (
        <Fragment>
            <Card className="custom-card shadow-none border">
                <Card.Body className="">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <span className="avatar avatar-xl avatar-rounded flex-shrink-0">
                            <img src={Imgsrc} alt="" />
                        </span>
                        <div className="text-truncate flex-fill">
                            <Link to={Navigate} className="mb-0 fw-semibold">{Name}</Link>
                            <p className="w-75 text-truncate fs-12 op-7 mb-1 text-muted">{Mail}</p>
                            <span className={`badge bg-${Color}-transparent`}>{Role}</span>
                        </div>
                        <SpkDropdown Togglevariant="light" Customclass="dropdown-menu-end" Customtoggleclass="btn-secondary-light btn-icon btn-sm no-caret" Icon={true} IconClass='ri-more-2-fill' >
                            <li><Dropdown.Item>Message</Dropdown.Item></li>
                            <li><Dropdown.Item>Block</Dropdown.Item></li>
                            <li><Dropdown.Item>Remove</Dropdown.Item></li>
                        </SpkDropdown>
                    </div>
                </Card.Body>
                <Card.Footer className="text-center p-3">
                    <div className="d-flex gap-2 flex-wrap justify-content-center">
                        <SpkButton Buttonvariant="" Size='sm' Customclass="btn-primary-light btn-wave me-0">View Profile</SpkButton>
                        <SpkButton Buttonvariant="" Size='sm' Customclass="btn-light btn-wave me-0">Unfollow</SpkButton>
                    </div>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default SpkProfilefriendscard
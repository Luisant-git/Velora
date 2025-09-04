import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface Teamprops {
    Imgsrc?: string;
    Role?: string;
    Title?: string;
    Color?: string;
    CustomBodyclass?: string;
    Imageclass?: string;
    Iconclass?: string;
    Navigate: string;
}

const SpkTeamcards: React.FC<Teamprops> = ({ Imgsrc, Role, Title, Color, CustomBodyclass, Imageclass, Iconclass, Navigate }) => {
    return (
        <Fragment>
            <Card className="custom-card team-member text-center">
                <div className="team-bg-shape primary"></div>
                <Card.Body className={CustomBodyclass}>
                    <div className={`${Imageclass} lh-1 d-flex gap-2 justify-content-center`}>
                        <span className={`avatar avatar-xl avatar-rounded bg-${Color}`}>
                            <img src={Imgsrc} className="card-img" alt="..." />
                        </span>
                    </div>
                    <div className="">
                        <p className={`mb-2 fs-11 badge bg-${Color} fw-medium`}>{Role}</p>
                        <h6 className="mb-3 fw-semibold">{Title}</h6>
                        <p className="text-muted fs-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        <div className={`d-flex justify-content-center ${Iconclass}`}>
                            <Link to={Navigate} className="btn btn-icon btn-primary-light btn-wave btn-sm"><i className="ri-twitter-x-fill"></i></Link>
                            <Link to={Navigate} className="btn btn-icon btn-primary1-light btn-wave btn-sm ms-2"><i className="ri-facebook-fill"></i></Link>
                            <Link to={Navigate} className="btn btn-icon btn-primary2-light btn-wave btn-sm ms-2"><i className="ri-instagram-line"></i></Link>
                            <Link to={Navigate} className="btn btn-icon btn-primary3-light btn-wave btn-sm ms-2"><i className="ri-linkedin-fill"></i></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkTeamcards
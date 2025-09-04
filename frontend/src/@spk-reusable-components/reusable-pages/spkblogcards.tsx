import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface Blogcard {
    Imgsrc1?: string;
    Title?: string;
    Text?: string;
    Imgsrc2?: string;
    Name?: string;
    Time?: string;
    Customlinkclass?: string;
    Linktag?: string;
    Linktagposition?: string;
    textcolor?: string;
    Customclass?: string;
    Customimgclass?: string;
    Anchorroute: string;
    Navigate: string;
    heartfill?: boolean;
    Routepath: string;
    blogauthor?: string;
}
const SpkBlogcards: React.FC<Blogcard> = ({ Imgsrc1, Title, Customclass, Linktag, Routepath, Customimgclass, Navigate, blogauthor, Anchorroute, heartfill = false, Linktagposition, Text, Imgsrc2, Name, Time, Customlinkclass, textcolor }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${Customclass}`}>
                {Linktag === "before" ?
                    <Link to={Anchorroute} className={Customlinkclass}>
                        <img src={Imgsrc1} className={Customimgclass} alt="..." />
                    </Link> : ""}
                <Card.Body className="">
                    <Link to={Routepath} className="h5 fw-semibold mb-2 d-block lh-base">{Title}</Link>
                    <p className="mb-3">{Text}<Link to={Navigate} className={`fw-medium text-${textcolor} ms-2 align-middle fs-12 text-Augoration-underline d-inline-block`}>Read More {heartfill ? "" : "?"} </Link></p>
                    <div className={`d-flex flex-wrap align-items-center justify-content-between ${blogauthor}`}>
                        <div className="d-flex align-items-center">
                            <div className={`avatar avatar-${Linktagposition === "before" ? "sm" : "md"} avatar-rounded me-2`}>
                                <img src={Imgsrc2} alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-medium">{Name}
                                    {Linktagposition === "before" ?
                                        <span className="text-muted fs-12 mb-0">{Time}</span> : ""
                                    }
                                </p>
                                {Linktagposition === "after" ?
                                    <span className="text-muted fs-12 mb-0">{Time}</span>
                                    : ""}
                            </div>
                        </div>
                        <div className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                            <i className={`ri-heart-${heartfill ? "fill" : "line"} text-danger`}></i>
                        </div>
                    </div>
                </Card.Body>
                {Linktag === "after" ?
                    <Link to={Anchorroute} className={Customlinkclass}>
                        <img src={Imgsrc1} className={Customimgclass} alt="..." />
                    </Link> : ""}
            </Card>
        </Fragment>
    )
}

export default SpkBlogcards
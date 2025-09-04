import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Lightboxcomponent } from "../../../../@spk-reusable-components/reusable-plugins/spk-lightbox";
import media44 from "../../../../assets/images/media/media-44.jpg"
import media41 from "../../../../assets/images/media/media-41.jpg"
import media42 from "../../../../assets/images/media/media-42.jpg"
import media43 from "../../../../assets/images/media/media-43.jpg"
import media40 from "../../../../assets/images/media/media-40.jpg"
import media45 from "../../../../assets/images/media/media-45.jpg"
import media46 from "../../../../assets/images/media/media-46.jpg"
import media60 from "../../../../assets/images/media/media-60.jpg"

import logo6 from "../../../../assets/images/company-logos/6.png"
import logo2 from "../../../../assets/images/company-logos/2.png"
import logo4 from "../../../../assets/images/company-logos/4.png"
import logo5 from "../../../../assets/images/company-logos/5.png"
import logo7 from "../../../../assets/images/company-logos/7.png"
import logo8 from "../../../../assets/images/company-logos/8.png"
import logo9 from "../../../../assets/images/company-logos/9.png"

export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const slidedata = [
        { src: media40 },
        { src: media41 },
        { src: media43 },
        { src: media44 },
        { src: media45 },
        { src: media46 },
        { src: media60 }
    ]
    return (
        <Fragment>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media40} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src={logo6} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Beginner</div>
                            </div>
                            <div className="fs-12 text-muted">Beginner In.co</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media41} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src={logo2} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Responsive</div>
                            </div>
                            <div className="fs-12 text-muted">Responsive Design</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media42} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src={logo4} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">JavaScript</div>
                            </div>
                            <div className="fs-12 text-muted">JavaScript Devlops</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media43} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src={logo5} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Layoutscss</div>
                            </div>
                            <div className="fs-12 text-muted">Layout SCSS</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media44} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src={logo6} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">frontend</div>
                            </div>
                            <div className="fs-12 text-muted">Frontend Development.co</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media45} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs">
                                    <img src={logo7} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">backenddevlops</div>
                            </div>
                            <div className="fs-12 text-muted">Backend Solutions</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media46} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs">
                                    <img src={logo8} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Frontend Dev</div>
                            </div>
                            <div className="fs-12 text-muted">Project innovations.in</div>
                        </div>
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media60} alt="image" />
                        <div className="p-3 text-center bg-light">
                            <div className="d-flex align-items-center gap-1 justify-content-center mb-1 flex-wrap">
                                <div className="avatar avatar-xs">
                                    <img src={logo9} alt="" />
                                </div>
                                <div className="figure-caption fs-14 fw-medium text-default">Flawless</div>
                            </div>
                            <div className="fs-12 text-muted">Masters In.co</div>
                        </div>
                    </Link>
                </Col>
                <Col xl={12} className=" mb-4">
                    <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                    </SpkButton>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} 
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} 
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata}
            />

        </Fragment>
    );
};




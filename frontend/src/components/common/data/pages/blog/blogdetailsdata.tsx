import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Lightboxcomponent } from "../../../../../@spk-reusable-components/reusable-plugins/spk-lightbox";

import media48 from "../../../../../assets/images/media/media-48.jpg"
import media49 from "../../../../../assets/images/media/media-49.jpg"
import media50 from "../../../../../assets/images/media/media-50.jpg"
import media51 from "../../../../../assets/images/media/media-51.jpg"
import media52 from "../../../../../assets/images/media/media-52.jpg"
import media53 from "../../../../../assets/images/media/media-53.jpg"
import media54 from "../../../../../assets/images/media/media-54.jpg"
import media55 from "../../../../../assets/images/media/media-55.jpg"
import media56 from "../../../../../assets/images/media/media-56.jpg"

export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);

    const slidedata = [
        { src: media48 },
        { src: media49 },
        { src: media50 },
        { src: media51 },
        { src: media52 },
        { src: media53 },
        { src: media54 },
        { src: media55 },
        { src: media56 }

    ]
    return (
        <Fragment>
            <Row className="row gy-3">
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media48} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media49} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media50} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media51} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media52} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media53} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media54} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media55} alt="image" />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src={media56} alt="image" />
                    </Link>
                </Col>
            </Row>

            <Lightboxcomponent
                close={() => setOpen(false)} 
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} 
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata} index={0} />

        </Fragment>
    );
};




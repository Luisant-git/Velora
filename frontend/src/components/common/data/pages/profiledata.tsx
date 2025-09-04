
"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Lightboxcomponent } from '../../../../@spk-reusable-components/reusable-plugins/spk-lightbox';
import media44 from "../../../../assets/images/media/media-44.jpg"
import media41 from "../../../../assets/images/media/media-41.jpg"
import media42 from "../../../../assets/images/media/media-42.jpg"
import media43 from "../../../../assets/images/media/media-43.jpg"
import media40 from "../../../../assets/images/media/media-40.jpg"
import media45 from "../../../../assets/images/media/media-45.jpg"
import media46 from "../../../../assets/images/media/media-46.jpg"
import media60 from "../../../../assets/images/media/media-60.jpg"
import media26 from "../../../../assets/images/media/media-26.jpg"
import media32 from "../../../../assets/images/media/media-32.jpg"
import media31 from "../../../../assets/images/media/media-31.jpg"
import media59 from "../../../../assets/images/media/media-59.jpg"
import media61 from "../../../../assets/images/media/media-61.jpg"
import media30 from "../../../../assets/images/media/media-30.jpg"

import face2 from "../../../../assets/images/faces/2.jpg"
import face5 from "../../../../assets/images/faces/5.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face7 from "../../../../assets/images/faces/7.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"
import face1 from "../../../../assets/images/faces/1.jpg"

export const Profilelist = () => {

    const [open, setOpen] = useState(false);
    const profileslides = [
        { src: media40 },
        { src: media41 },
        { src: media42 },
        { src: media43 },
        { src: media44 },
        { src: media45 },
        { src: media46 },
        { src: media60 },
        { src: media26 },
        { src: media32 },
        { src: media30 },
        { src: media31 },
        { src: media46 },
        { src: media59 },
        { src: media61 },
        { src: media42 }
    ]

    return (
        <>
            <Row>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media40} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media41} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media42} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media43} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media44} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media45} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media46} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media60} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media26} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media32} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media30} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media31} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media46} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media59} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media61} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img src={media42} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={profileslides}
            />
        </>
    );
};

/////
export const Profilecarddata = [
    { id: 1, src: face2, name: 'Della Jasmine', mail: "dellajasmine117@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 2, src: face15, name: 'Danny Raj', mail: "dannyraj658@gmail.com", role: 'UI Designer', color: 'success' },
    { id: 3, src: face5, name: 'Catalina Keira', mail: "catalinakeira023@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 4, src: face11, name: 'Priceton Gray', mail: "pricetongray451@gmail.com", role: 'Team Manager', color: 'warning' },
    { id: 5, src: face7, name: 'Sarah Ruth', mail: "sarahruth45@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 6, src: face12, name: 'Mahira Hose', mail: "mahirahose9456@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 7, src: face1, name: 'Victoria Gracie', mail: "victoriagracie@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 8, src: face13, name: 'Amith Gray', mail: "amithgray132@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 9, src: face6, name: 'Isha Bella', mail: "ishabella255@gmail.com", role: 'Product Designer', color: 'info' }
]
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Lightboxcomponent } from '../../../../@spk-reusable-components/reusable-plugins/spk-lightbox';
import SpkBadge from '../../../../@spk-reusable-components/reusable-uielements/spk-badge';
import face11 from "../../../../assets/images/faces/11.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"
import face17 from "../../../../assets/images/faces/17.jpg"
import face18 from "../../../../assets/images/faces/18.jpg"
import face19 from "../../../../assets/images/faces/19.jpg"
import face20 from "../../../../assets/images/faces/20.jpg"
import face21 from "../../../../assets/images/faces/21.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import face2 from "../../../../assets/images/faces/2.jpg"
import face3 from "../../../../assets/images/faces/3.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face5 from "../../../../assets/images/faces/5.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"

import media44 from "../../../../assets/images/media/media-44.jpg"
import media41 from "../../../../assets/images/media/media-41.jpg"
import media42 from "../../../../assets/images/media/media-42.jpg"
import media43 from "../../../../assets/images/media/media-43.jpg"
import media40 from "../../../../assets/images/media/media-40.jpg"
import media45 from "../../../../assets/images/media/media-45.jpg"
import media46 from "../../../../assets/images/media/media-46.jpg"
import media60 from "../../../../assets/images/media/media-60.jpg"
import media61 from "../../../../assets/images/media/media-61.jpg"

interface ChatType {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
    Icon: boolean;
    activeclass: string;
}

const data = <SpkBadge variant="primary2" Customclass="rounded-pill float-end">3</SpkBadge>

export const Chat1: ChatType[] = [
    { id: 1, src: face5, heading: "Rashid Khan", description: "Hey!! you are there? 😊", time: "11:12PM", badge: data, status: "online", Icon: false, activeclass: "" },
    { id: 2, src: face2, heading: "Jamison Jen", description: "Typing...", time: "06:52AM", badge: "", status: "online", Icon: false, activeclass: "" },
    { id: 3, src: face10, heading: "Andy Max", description: "Great! I am happy to here this from you. ☕", time: "10:15AM", badge: "", status: "online", Icon: true, activeclass: "" },
    { id: 4, src: face6, heading: "Kerina Cherish", description: "Looking forward about the matter", time: "03:15PM", badge: "", status: "online", Icon: true, activeclass: "" },

]

interface ChatType1 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
}

export const Chat2: ChatType1[] = [
    { id: 1, src: face11, heading: "Rony Erick", description: "You should come definately🎬", time: "04:13PM", badge: "", status: "offline" },
    { id: 2, src: face3, heading: "Kenath kin", description: "Did you remember the date", time: "12:46AM", badge: "", status: "offline" },
    { id: 3, src: face13, heading: "Thomas Lie", description: "Hi, Thank you for everything", time: "07:30PM", badge: "", status: "offline" },
    { id: 4, src: face4, heading: "Peter Stark", description: "Going to Australia!", time: "01:18PM", badge: "", status: "offline" },
    { id: 5, src: face13, heading: "Monte Christ", description: "Little Busy 🍕", time: "08:07PM", badge: "", status: "offline" },
    { id: 6, src: face15, heading: "Regina Mos", description: "Have a Question?", time: "09:19PM", badge: "", status: "offline" },
]
interface ChatType2 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
    class: string;
    liclass: string;
}

const data1 = <SpkBadge variant="primary3" Customclass="rounded-pill float-end">2</SpkBadge>

export const Chat3: ChatType2[] = [
    { id: 1, src: face17, heading: "Huge Rocks 😍", description: "Mony Typing...", time: "12:24PM", badge: data1, status: "online", class: "chat-msg" , liclass:'chat-inactive'},
    { id: 2, src: face18, heading: "Creative Group", description: "Have any updates today?", time: "06:16AM", badge: "", status: "online", class: "" , liclass:'chat-msg-unread'},
    { id: 3, src: face19, heading: "Anyside Spriritual 😎", description: "Samantha, Adam, Jessica, Emily, Alex", time: "2 days ago", badge: "", status: "offline", class: "" , liclass:'chat-inactive'},
    { id: 4, src: face20, heading: "Fun Time", description: "Elsa,Henry,Susan, Emily, Ashlin", time: "3 days ago", badge: "", status: "offline", class: "" , liclass:'chat-inactive'},
    { id: 5, src: face21, heading: "Latest News", description: "Emanuel, Rony, Alina, Lilly, Rush", time: "10 days ago", badge: "", status: "offline", class: "" , liclass:'chat-inactive'},

]

export const ChatGallerylist = () => {

    const [open, setOpen] = useState(false);

    const Slides = [
        { src: media40 },
        { src: media41 },
        { src: media42 },
        { src: media43 },
        { src: media44 },
        { src: media45 },
        { src: media46 },
        { src: media60 }
    ]

    return (
        <>
            <Row className="gy-3">
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media40} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media41} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media42} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media43} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media44} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media45} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media46} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media60} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-12">
                    <Link to="#" className="glightbox card  mb-0" data-gallery="gallery1">
                        <img src={media61} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} 
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} 
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={Slides} index={0} />
        </>
    );
};

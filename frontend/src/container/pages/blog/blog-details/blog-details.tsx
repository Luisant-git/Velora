import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import face12 from "../../../../assets/images/faces/12.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face3 from "../../../../assets/images/faces/3.jpg"
import blog18 from "../../../../assets/images/media/blog/18.jpg";
import blog14 from "../../../../assets/images/media/blog/14.jpg";
import blog15 from "../../../../assets/images/media/blog/15.jpg";
import blog16 from "../../../../assets/images/media/blog/16.jpg";
import blog17 from "../../../../assets/images/media/blog/17.jpg";
import { LightboxGallery } from "../../../../components/common/data/pages/blog/blogdetailsdata";

const BlogDetails = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Pageheader title="Pages" subtitle="Blog" currentpage="Blog Details" activepage="Blog Details" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Link to="#!" className="p-3">
                                    <img src={blog18} className="card-img rounded-3 blog-details-img" alt="..." />
                                </Link>
                                <Card.Body className=" p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <p className="h5 fw-semibold mb-0">Music for the Soul: Enhancing Your Life Through Sound</p>
                                        <SpkBadge variant="secondary">Music</SpkBadge>
                                    </div>
                                    <div className="d-sm-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar avatar-sm avatar-rounded me-3">
                                                <img src={face12} alt="" />
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-medium">Herbert Paul</p>
                                                <div className="fs-12 text-muted fw-normal"><i className="ri-calendar-fill me-2 align-middle lh-1 text-primary1"></i>12 Jan 2024 - 06:56</div>
                                            </div>
                                        </div>
                                        <div className="btn-list mt-sm-0 mt-2">
                                            <SpkButton Buttonvariant="primary2-light" Size="sm"><i className="ri-thumb-up-line"></i> Like</SpkButton>
                                            <SpkButton Buttonvariant="primary3-light" Size="sm"><i className="ri-share-line"></i> Share</SpkButton>
                                            <SpkButton Buttonvariant="info-light" Size="sm"><i className="ri-message-square-line"></i> Comment</SpkButton>
                                        </div>
                                    </div>
                                    <p className="mb-4">
                                        Soul-stirring journey to discover the transformative power of music in our lives. This blog is a sanctuary for those seeking solace, inspiration, and healing through the timeless melodies that resonate within us all.
                                    </p>
                                    <p className="mb-4">
                                        From the therapeutic rhythms of drumming circles to the transcendent harmonies of choral singing, <span className="fs-14 fw-medium"> "Music for the Soul" </span> celebrates the diverse ways in which music enriches our lives and nourishes our innermost being.. Whether you're seeking refuge from the stresses of daily life, seeking inspiration for your artistic pursuits, or simply yearning to connect with something greater than yourself.
                                    </p>

                                    <p className="mb-4">Let the melodies of music be your guiding light on the path to self-discovery and spiritual awakening. Enhancing Your Life Through Sound" invites you to explore the profound impact of music on our emotional well-being, spiritual growth, and everyday existence. The transformative power of music to heal, uplift, and inspire us in ways both subtle and profound.</p>
                                    <blockquote className="blockquote custom-blockquote primary mb-4 text-center">
                                        <h6 className="lh-base">"Music for the Soul" offers a gentle reminder of the healing power that resides within every note, every chord, and every melody. </h6>
                                        <footer className="blockquote-footer mt-3 text-primary1 mb-0">Someone famous as <cite title="Source Title">- Ayyan Abhi</cite></footer>
                                        <span className="quote-icon"><i className="ri-double-quotes-l"></i></span>
                                    </blockquote>
                                    <p className="mb-0">
                                        Through captivating stories, insightful reflections, and practical tips, we delve into the myriad ways in which music enriches our lives, from its ability to evoke cherished memories to its capacity to elevate our consciousness and connect us to something greater than ourselves. Whether you're seeking solace in times of sorrow, seeking inspiration in moments of doubt, or simply yearning to deepen your connection to the world around you, "Music for the Soul" offers a gentle reminder
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header">
                                    <div className="card-title">
                                        COMMENTS
                                    </div>
                                </div>
                                <Card.Body className=" p-0">
                                    <SimpleBar className="list-group list-group-flush" id="blog-details-comment-list">
                                        <li className="list-group-item border-0 border-bottom">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src={face3} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Mary Cateline</span>
                                                    <span className="d-block mb-3">This blog captures the essence of why music is such a powerful force in our lives. It's not just about the sounds. Thank you for reminding us of the beauty and magic of music</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="primary1-light" Size="sm">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 border-bottom">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src={face13} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Monte vin</span>
                                                    <span className="d-block mb-3">Reading your blog is like taking a journey into the heart of music itself. Your passion for the subject shines through in every word!</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="primary1-light" Size="sm">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Master Sets</span>
                                                    <span className="d-block mb-3">The importance of carving out moments of stillness in our busy lives to simply listen and be present with the music. It's a powerful reminder that sometimes .</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="primary1-light" Size="sm">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary2-light" Size="sm"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary3-light" Size="sm"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </SimpleBar>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Leave a Comment
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="blog-first-name" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="blog-first-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="blog-email" className="form-label">Email ID</label>
                                            <input type="text" className="form-control" id="blog-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                                            <textarea className="form-control" id="blog-comment" rows={4} placeholder="Write Here......."></textarea>
                                        </Col>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="text-end">
                                        <SpkButton Buttonvariant="primary">Post Comment</SpkButton>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Related Topics
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-brush-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-primary-transparent text-primary"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Desiging</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="primary">13</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-pencil-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-primary1-transparent text-primary1"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Modern</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="primary1">36</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-microscope-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-primary2-transparent text-primary2"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Science</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="primary2">15</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-flight-takeoff-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-primary3-transparent text-primary3"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Trips</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="primary3">17</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-magic-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-secondary-transparent text-secondary"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Beauty</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="secondary">66</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="#!">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <i className="ri-shirt-fill fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 bg-success-transparent text-success"></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium ms-2">Styling</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant="warning">33</SpkBadge>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Recent Posts
                                    </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 flex-wrap align-items-center">
                                                <span className="avatar avatar-xl">
                                                    <img src={blog14} className="img-fluid" alt="..." />
                                                </span>
                                                <div className="flex-fill">
                                                    <Link to="#!" className="fs-14 mb-0 text-primary">Nature</Link>
                                                    <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                        The Wonders of Nature
                                                    </p>
                                                    <span className="text-muted fs-12">18 Jan 2024, 15:46</span>
                                                </div>
                                                <div>
                                                    <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 flex-wrap align-items-center">
                                                <span className="avatar avatar-xl">
                                                    <img src={blog15} className="img-fluid" alt="..." />
                                                </span>
                                                <div className="flex-fill">
                                                    <Link to="#!" className="fs-14 mb-0 text-primary1">Tourism</Link>
                                                    <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                        Embarking on a Tourism Journey
                                                    </p>
                                                    <span className="text-muted fs-12">20 Feb 2024, 03:03</span>
                                                </div>
                                                <div>
                                                    <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 flex-wrap align-items-center">
                                                <span className="avatar avatar-xl">
                                                    <img src={blog16} className="img-fluid" alt="..." />
                                                </span>
                                                <div className="flex-fill">
                                                    <Link to="#!" className="fs-14 mb-0 text-primary2">Technology</Link>
                                                    <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                        Navigating the Digital Frontier
                                                    </p>
                                                    <span className="text-muted fs-12">05 Feb 2024, 16:23</span>
                                                </div>
                                                <div>
                                                    <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 flex-wrap align-items-center">
                                                <span className="avatar avatar-xl">
                                                    <img src={blog17} className="img-fluid" alt="..." />
                                                </span>
                                                <div className="flex-fill">
                                                    <Link to="#!" className="fs-14 mb-0 text-primary3">Networking</Link>
                                                    <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                        More Designing on websites
                                                    </p>
                                                    <span className="text-muted fs-12">13 Mar 2024, 20:14</span>
                                                </div>
                                                <div>
                                                    <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Gallery
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <LightboxGallery/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card bg-primary-transparent border-0 shadow-none">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Our News Letter
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <label className="form-check-label mb-3">
                                        Subscribe for Updates on the Latest News & Posts
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control border-0 shadow-none" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <SpkButton Buttonvariant="primary" Customclass="" Buttontype="button" Id="blog-subscribe">Subscribe</SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Popular Tags
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <div className="blog-popular-tags">
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#artist</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#musician</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#monology</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#promting</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#critisium</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#mentor</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#adventure</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#capturing</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#navigator</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#mountain</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#popsinger</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#lyrists</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#musicnotes</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#multiplecovers</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#facesact</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#language</SpkBadge>
                                        </Link>
                                        <Link to="#!">
                                            <SpkBadge variant="light" Customclass="text-muted">#fluency</SpkBadge>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default BlogDetails;
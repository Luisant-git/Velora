import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkSwiperJs from "../../../@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Review4Slides, ReviewsStyledata, Reviewstyle1data, ReviewSlides, Review5Slides } from "../../../components/common/data/pages/reviewsdata";
import face1 from "../../../assets/images/faces/1.jpg"
import face2 from "../../../assets/images/faces/2.jpg"
import face3 from "../../../assets/images/faces/3.jpg"
import face4 from "../../../assets/images/faces/4.jpg"
import face5 from "../../../assets/images/faces/5.jpg"

const Reviews = () => {

    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    };
    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    const breakpoints2 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }

    const breakpoints4 = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };

    const faceImages = [
       face1,
       face2,
       face3,
       face4,
       face5
        // Add more images as needed
    ];
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Reviews" activepage="Reviews" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <h6 className="mb-3">Reviews Style 1 :</h6>
                    <SpkSwiperJs slides={Reviewstyle1data} breakpoint={breakpoints} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={true} />
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Reviews Style 2 :
                            </div>
                        </div>
                        <Card.Body className=" pb-0">
                            <SpkSwiperJs slides={ReviewsStyledata} breakpoint={breakpoints4} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={true} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <h6 className="mb-3">Reviews Style 3 :</h6>
                    <div className="review-style-2 mb-3">
                        <SpkSwiperJs slides={ReviewSlides} breakpoint={breakpoints1} slidesPerView={3} spaceBetween={30} pagination={true} className="pagination-dynamic testimonialSwiperService swiper-initialized swiper-horizontal swiper-backface-hidden" autoplay={true} />
                    </div>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xl={12}>
                    <h6 className="mb-3">Reviews Style 4 :</h6>
                    <SpkSwiperJs slides={Review4Slides} breakpoint={breakpoints2} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService2" autoplay={true} />
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xl={12}>
                    <h6 className="mb-3">Reviews Style 5 :</h6>
                    <SpkSwiperJs slides={Review5Slides}
                        breakpoint={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}
                        slidesPerView={2}
                        spaceBetween={5}
                        loop={true}
                        centeredSlides={true}
                        initialSlide={2}
                        pagination={{
                            clickable: true,
                            renderBullet: (index: any, className: any) => {
                                return `<div class="${className} swiper-pagination-bullet" key=${index}>
                                    <img src="${faceImages[index]}" alt="Testimonial ${index + 1}" />
                                </div>`;
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="swiper testimonialSwiper01 pagination-dynamic swiper-pagination-custom"
                    />
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-custom">
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}
        </Fragment>
    )
};

export default Reviews;
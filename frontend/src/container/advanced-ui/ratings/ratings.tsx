import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, } from "react-bootstrap";
import Box from "@mui/material/Box";
import StarsIcon from "@mui/icons-material/Stars";
import Pageheader from "../../../components/page-header/pageheader";
import SpkRatings from "../../../@spk-reusable-components/reusable-plugins/spk-ratings";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";

const Ratings = () => {

    const [ratingValue, setRatingValue] = useState<number | null>(0);
    const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue); // Update the rating value when the user clicks
    };

    const handleResetRating = () => {
        setRatingValue(0); // Clear the rating when the button is clicked
    };

    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState<number>(-1);

    const labels: Record<number, string> = {
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
        2.5: "2.5",
        3: "3",
        3.5: "3.5",
        4: "4",
        4.5: "4.5",
        5: "5",
      };
      
      function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
      }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Advanced Ui" currentpage="Ratings" activepage="Ratings" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={6} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Rater
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center basic-rating" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating : </h6>
                                <SpkRatings name="half-rating" size="large" defaultValue={0} max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 star rater with steps
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14 fw-semibold mb-0">Dont forget to rate the product :</h6>
                                <SpkRatings name="half-rating" defaultValue={0} precision={0.5} max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Custom messages
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14 fw-semibold text-start">Your rating is much appreciated&#128079; :</h6>
                                <SpkRatings name="full-rating" defaultValue={4} precision={1} size="large" max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Unlimited number of stars readOnly
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14  fw-semibold">Thanks for rating :</h6>
                                <SpkRatings name="half-rating-read" defaultValue={6} precision={1} max={10} size="large" readOnly />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                On hover event
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14  fw-semibold text-start">Please give your valuable rating :</h6>
                                <div className="d-flex flex-wrap align-items-center justify-content-center">
                                    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                                        <SpkRatings
                                            name="hover-feedback"
                                            value={value}
                                            precision={0.5} // Enable half-star support
                                            getLabelText={getLabelText}
                                            onChange={(_event, newValue) => setValue(newValue)}
                                            onChangeActive={(_event, newHover) => setHover(newHover)}
                                            Icon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <Box sx={{ ml: 2 }}>
                                            <span className="live-rating badge bg-success-transparent ms-3">
                                                {labels[hover !== -1 ? hover : value]}
                                            </span>
                                            </Box>
                                        )}
                                        </Box>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Clear/reset rater
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold text-start">Thank You so much for your support :</p>
                                <div className="d-flex flex-wrap align-items-center justify-content-center">
                                     <SpkRatings name="clickable-rating" value={ratingValue} onChange={handleRatingChange} />
                                        <SpkTooltips placement="top" title="Reset">
                                            <Button variant='danger-light' className="btn btn-icon btn-sm ms-3" id="rater-reset-button" onClick={handleResetRating}>
                                                <i className="ri-restart-line"></i>
                                            </Button>
                                        </SpkTooltips>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={12} xl={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 Star rater with custom isBusyText and simulated backend
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center" id="rating-value">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <h6 className="fs-14 fw-semibold">Thanks for rating :</h6>
                                <SpkRatings name="full-rating" defaultValue={0} precision={1} max={5} size="large" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Ratings;
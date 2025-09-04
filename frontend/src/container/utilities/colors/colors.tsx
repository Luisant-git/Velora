import  { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import { bgcolor, bggradient, bgoutline, bgtransparent, bordercolors, othercolors } from "../../../components/common/data/utilities/colorsdata";

const Colors = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Utilities" currentpage="Colors" activepage="Colors" />

            {/* <!-- Page Header Close --> */}

            <Row>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Background Colors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bgcolor.map((idx) => (
                                    <Col xl={2} lg={6} className="p-3" key={Math.random()}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Background gradients
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bggradient.map((idx) => (
                                    <Col xl={2} lg={6} className="p-2" key={Math.random()}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Background transparent colors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bgtransparent.map((idx) => (
                                    <Col xl={2} lg={6} className="p-3" key={Math.random()}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Background outline colors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bgoutline.map((idx) => (
                                    <Col xl={2} lg={6} className="p-3" key={Math.random()}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}><i className="bi bi-emoji-smile fs-18"></i></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Border Colors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bordercolors.map((idx) => (
                                    <Col xl={2} lg={6} className="p-3" key={Math.random()}>
                                        <div className={`m-2 border ${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </Col>
                                ))}

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Background Opacity
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                <div className="p-3 col">
                                    <div className="m-2 bg-success bg-opacity-100 text-fixed-white mx-auto color-container">100%</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-white bg-opacity-75 mx-auto color-container">75%</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-50 mx-auto color-container">50%</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-50</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-25 mx-auto color-container">25%</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-25</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-10 mx-auto color-container">10%</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-10</code></p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Text Colors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-primary fw-medium fs-14 text-center">primary</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-primary</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-primary1 fw-medium fs-14 text-center">primary1</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-primary1</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-primary2 fw-medium fs-14 text-center">primary2</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-primary2</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-primary3 fw-medium fs-14 text-center">primary3</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-primary3</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-secondary fw-medium fs-14 text-center">secondary</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-secondary</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-warning fw-medium fs-14 text-center">warning</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-warning</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-info fw-medium fs-14 text-center">info</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-info</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-success fw-medium fs-14 text-center">success</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-success</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-danger fw-medium fs-14 text-center">danger</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-danger</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-light bg-dark fw-medium fs-14 text-center">light</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-light</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-dark fw-medium fs-14 text-center">dark</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-dark</code></p>
                                </Col>
                                <Col xl={2} lg={6} className="p-3">
                                    <div className="m-2 text-muted fw-medium fs-14 text-center">muted</div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>.text-muted</code></p>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Text Opacity
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary fw-medium fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-medium text-center"><code>100% opacity</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-75 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-75</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-50 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-50</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-25 fw-medium fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-medium text-center"><code>.text-opacity-25</code></p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Callout
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div className="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div className="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div className="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Other Colors:</h6>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-blue-${idx.data}`} key={Math.random()}>$blue-{idx.data}</div>
                            ))}

                            <div className="flex-fill p-3 bd-blue">$blue</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-indigo-${idx.data}`} key={Math.random()}>$indigo-{idx.data}</div>
                            ))}

                            <div className="flex-fill p-3 bd-indigo">$indigo</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-purple-${idx.data}`} key={Math.random()}>$purple-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-purple">$purple</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-pink-${idx.data}`} key={Math.random()}>$pink-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-pink">$pink</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-red-${idx.data}`} key={Math.random()}>$red-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-red">$red</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-orange-${idx.data}`} key={Math.random()}>$orange-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-orange">$orange</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-yellow-${idx.data}`} key={Math.random()}>$yellow-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-yellow">$yellow</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-green-${idx.data}`} key={Math.random()}>$green-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-green">$green</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-teal-${idx.data}`} key={Math.random()}>$teal-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-teal">$teal</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-cyan-${idx.data}`} key={Math.random()}>$cyan-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-cyan">$cyan</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="d-xl-flex flex-wrap">
                            {othercolors.map((idx) => (
                                <div className={`flex-fill p-3 bd-gray-${idx.data}`} key={Math.random()}>$gray-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-gray">$gray</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Colors;
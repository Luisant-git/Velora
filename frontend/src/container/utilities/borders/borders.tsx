import  { Fragment } from "react";
import {  Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import { border1, border2, border3, border4, border5, border6, border7, border8  } from "../../../components/common/data/prism/utilities-prism";
import media58 from "../../../assets/images/media/media-58.jpg"

const Borders = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Utilities" currentpage="Borders" activepage="Borders" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Borders" customCardClass="custom-card" customCardBodyClass="" reactCode={border1}>
                        <span className="border border-container"></span>
                        <span className="border-top border-container"></span>
                        <span className="border-end border-container"></span>
                        <span className="border-bottom border-container"></span>
                        <span className="border-start border-container"></span>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Remove borders" customCardClass="custom-card" customCardBodyClass="" reactCode={border2}>
                        <span className="border-0 border-container"></span>
                        <span className="border border-top-0 border-container"></span>
                        <span className="border border-end-0 border-container"></span>
                        <span className="border border-bottom-0 border-container"></span>
                        <span className="border border-start-0 border-container"></span>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Border colors" customCardClass="custom-card" customCardBodyClass="" reactCode={border4}>
                        <span className="border border-container border-primary"></span>
                        <span className="border border-container border-primary1"></span>
                        <span className="border border-container border-primary2"></span>
                        <span className="border border-container border-primary3"></span>
                        <span className="border border-container border-secondary"></span>
                        <span className="border border-container border-success"></span>
                        <span className="border border-container border-danger"></span>
                        <span className="border border-container border-warning"></span>
                        <span className="border border-container border-info"></span>
                        <span className="border border-container border-light"></span>
                        <span className="border border-container border-dark"></span>
                        <span className="border border-container border-white"></span>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Border Widths" customCardClass="custom-card" customCardBodyClass="" reactCode={border3}>
                        <span className="border border-container border-1"></span>
                        <span className="border border-container border-2"></span>
                        <span className="border border-container border-3"></span>
                        <span className="border border-container border-4"></span>
                        <span className="border border-container border-5"></span>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Border Radius" customCardClass="custom-card" customCardBodyClass="" reactCode={border7}>
                        <img src={media58} className="bd-placeholder-img rounded" alt="..." />
                        <img src={media58} className="bd-placeholder-img rounded-top" alt="..." />
                        <img src={media58} className="bd-placeholder-img rounded-end" alt="..." />
                        <img src={media58} className="bd-placeholder-img rounded-bottom" alt="..." />
                        <img src={media58} className="bd-placeholder-img rounded-start" alt="..." />
                        <img src={media58} className="bd-placeholder-img rounded-circle" alt="..." />
                        <img src={media58} className="bd-placeholder-img  rounded-pill" alt="..." />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Sizes" customCardClass="custom-card" customCardBodyClass="" reactCode={border8}>
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                        <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Border with opacity" customCardClass="custom-card" customCardBodyClass="" reactCode={border6}>
                        <div className="border border-success p-2 mb-2">This is default success border</div>
                        <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                            opacity
                            success border
                        </div>
                        <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                            success
                            border
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Border color Styling" customCardClass="custom-card" customCardBodyClass="" reactCode={border5}>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                address</label>
                            <input type="email" className="form-control border-success"
                                id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                            Below Shows Danger Border
                        </div>
                        <div
                            className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                            Customizing borders with background colors
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    )
};

export default Borders;
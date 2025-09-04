
import  { Fragment } from "react";
import {Button, Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import { SVGtooltip, Tooltipdirtooltip  } from "../../../components/common/data/ui-elements/tooltipsdata";
import { datatooltip1, datatooltip3, reusabletooltip1, reusabletooltip2, reusabletooltip3, reusabletooltip4, reusabletooltip5, reusabletooltip6, tooltip1, tooltip2, tooltip3, tooltip4, tooltip5, tooltip6  } from "../../../components/common/data/prism/ui-elements-prism";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import face3 from "../../../assets/images/faces/3.jpg"
import face12 from "../../../assets/images/faces/12.jpg"
import face15 from "../../../assets/images/faces/15.jpg"

const Tooltips = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Ui Elements" currentpage="Tooltips" activepage="Tooltips" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Tooltip Directions" customCardClass="custom-card" customCardBodyClass="" dataCode={datatooltip1} reactCode={tooltip1} reusableCode={reusabletooltip1}>
                        <div className="btn-list">
                            {Tooltipdirtooltip.map((idx: any, index) => (
                                <SpkTooltips placement={idx.text} title={`Tooltip on ${idx.text}`} key={index} trigger={'hover'}>
                                    <Button type="button" variant="primary" className="btn">
                                        Tooltip on {idx.text}
                                    </Button>
                                </SpkTooltips>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Tooltips on links" customCardClass="custom-card" customCardBodyClass="" reactCode={tooltip2} reusableCode={reusabletooltip2}>
                        <p className="text-muted mb-0">
                            Hover on the link to view the
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Link Tooltip ">
                                <Link to="#!"  className="text-primary ms-1 d-inline-flex">Tooltip</Link>
                            </SpkTooltips>
                        </p>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="With an SVG's" customCardClass="custom-card" customCardBodyClass="" dataCode={datatooltip3} reactCode={tooltip3} reusableCode={reusabletooltip3}>
                        {SVGtooltip.map((idx) => (
                            <SpkTooltips key={Math.random()} placement="top" tooltipClass={`tooltip-${idx.color}`} title={idx.text}>
                                <Link to="#!"  className={`me-3 svg-${idx.color}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path
                                            d={idx.class} /></svg>
                                </Link>
                            </SpkTooltips>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Colored Tooltips" customCardClass="custom-card" customCardBodyClass="" reactCode={tooltip4} reusableCode={reusabletooltip4}>
                        <div className="btn-list">
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="primary Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='primary'>
                                    Primary Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary1" title="primary1 Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='primary1'>
                                    Primary1 Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary2" title="primary2 Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='primary2'>
                                    Primary2 Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary3" title="primary3 Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='primary3'>
                                    Primary3 Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="right" tooltipClass="tooltip-secondary" title="Secondary Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='secondary'>
                                    Secondary Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-warning" title="Warning Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='warning'>
                                    Warning Tooltip
                                </Button>
                            </SpkTooltips>

                            <SpkTooltips placement="top" tooltipClass="tooltip-info" title="Info Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='info'>
                                    Info Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-success" title="Success Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='success'>
                                    Success Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-danger" title="Danger Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='danger'>
                                    Danger Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-light" title="Light Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='light'>
                                    Light Tooltip
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-dark" title="Dark Tooltip " trigger={['hover', 'focus']} >
                                <Button type="button" className="btn" variant='dark'>
                                    Dark Tooltip
                                </Button>
                            </SpkTooltips>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Disabled elements" customCardClass="custom-card" customCardBodyClass="" reactCode={tooltip5} reusableCode={reusabletooltip5}>
                        <SpkTooltips id="tooltip-disabled" title="Disabled tooltip" trigger={['hover', 'focus']} >
                            <span className="d-inline-block">
                                <SpkButton Disabled={true} Style={{ pointerEvents: "none" }}>
                                    Disabled button
                                </SpkButton>
                            </span>
                        </SpkTooltips>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Tooltip For Images" customCardClass="custom-card" customCardBodyClass="" reactCode={tooltip6} reusableCode={reusabletooltip6}>
                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Alex Carey">
                            <Link to="#!"
                                className="avatar avatar-md me-2 online avatar-rounded">
                                <img src={face12} alt="img" />
                            </Link>
                        </SpkTooltips>

                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Marina Kai">
                            <Link to="#!"
                                className="avatar avatar-lg me-2 online avatar-rounded">
                                <img src={face3} alt="img" />
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Tim Cook">
                            <Link to="#!"
                                className="avatar avatar-xl me-2 online avatar-rounded">
                                <img src={face15} alt="img" />
                            </Link>
                        </SpkTooltips>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default Tooltips;
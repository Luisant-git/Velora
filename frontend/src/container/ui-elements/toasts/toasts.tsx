import  { Fragment, useState } from "react";
import { Card, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkToast from "../../../@spk-reusable-components/reusable-uielements/spk-toast";
import { reusabletoast1, reusabletoast10, reusabletoast2, reusabletoast3, reusabletoast4, reusabletoast5, reusabletoast6, reusabletoast7, reusabletoast8, reusabletoast9, toast1, toast10, toast2, toast3, toast4, toast5, toast6, toast7, toast8, toast9 } from "../../../components/common/data/prism/ui-elements-prism";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkToastify from "../../../@spk-reusable-components/reusable-plugins/spk-toastify";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png"
import togglewhite from "../../../assets/images/brand-logos/toggle-white.png"

const Toasts = () => {

    //basic example
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    //live example
    const [show1, setShow1] = useState(false);

    //Stacking
    const [show2, setShow2] = useState(true);
    const toggleShow2 = () => setShow2(!show2);

    const [show3, setShow3] = useState(true);
    const toggleShow3 = () => setShow3(!show3);

    //color schemes
    const [show4, setShow4] = useState(true);
    const toggleShow4 = () => setShow4(!show4);

    const [show5, setShow5] = useState(true);
    const toggleShow5 = () => setShow5(!show5);

    const [show6, setShow6] = useState(true);
    const toggleShow6 = () => setShow6(!show6);

    const [show7, setShow7] = useState(true);
    const toggleShow7 = () => setShow7(!show7);

    //Solid Background Toasts

    const [show71, setShow71] = useState(false);
    const [show72, setShow72] = useState(false);
    const [show73, setShow73] = useState(false);
    const [show74, setShow74] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    //Color Variants Live
    const [show13, setShow13] = useState(false);
    const [show132, setShow132] = useState(false);
    const [show133, setShow133] = useState(false);
    const [show134, setShow134] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);

    //Translucent
    const [show19, setShow19] = useState(true);
    const toggleShow19 = () => setShow19(!show19);

    //Custom Content
    const [show20, setShow20] = useState(true);
    const toggleShow20 = () => setShow20(!show20);

    const [show21, setShow21] = useState(true);
    const toggleShow21 = () => setShow21(!show21);

    const [show22, setShow22] = useState(true);
    const toggleShow22 = () => setShow22(!show22);

    //Toast Placements
    const [show23, setShow23] = useState(false);
    const [show24, setShow24] = useState(false);
    const [show25, setShow25] = useState(false);
    const [show26, setShow26] = useState(false);
    const [show27, setShow27] = useState(false);
    const [show28, setShow28] = useState(false);
    const [show29, setShow29] = useState(false);
    const [show30, setShow30] = useState(false);
    const [show31, setShow31] = useState(false);

    //js
    const notify = () => toast("I'm a toast message.");

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Ui Elements" currentpage="Toasts" activepage="Toasts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic example" customCardClass="custom-card" customCardBodyClass="" reactCode={toast1} reusableCode={reusabletoast1}>
                        <SpkToast show={show} onClose={toggleShow} title="Xintra" message="Hello, world! This is a toast message." timestamp="11 min ago" imgSrc={togglelogo} ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Live example" customCardClass="custom-card" customCardBodyClass="" reactCode={toast2} reusableCode={reusabletoast2}>
                        <SpkButton Buttontype="button" Buttonvariant="primary" Id="liveToastBtn" onClickfunc={() => setShow1(true)}>Show live
                            toast</SpkButton>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <SpkToast show={show1} onClose={() => setShow1(false)} title="Xintra" message="Hello, world! This is a toast message." timestamp="11 min ago" imgSrc={togglelogo} ToastHeader={true} toastClass="custom-toast" headerClass="text-default" imgClass="custom-img-class" autohide={false} />
                        </ToastContainer>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <ShowCode title="Stacking" customCardClass="custom-card" customCardBodyClass="" reactCode={toast3} reusableCode={reusabletoast3}>
                        <ToastContainer className="toast-container position-static">

                            <SpkToast show={show2} onClose={toggleShow2} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc={togglelogo} imgClass="me-2" title="Xintra" timestamp="jsut now" message={"See? Just like this."} />
                            <SpkToast show={show3} onClose={toggleShow3} ToastHeader={true} toastClass="fade show" headerClass="text-default" imgSrc={togglelogo} imgClass="me-2" title="Xintra" timestamp="2 seconds ago" message={" Heads up, toasts will stack automatically"} />

                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Color schemes" customCardClass="custom-card" customCardBodyClass="" reactCode={toast4} reusableCode={reusabletoast4}>
                        <SpkToast toastClass="align-items-center text-bg-primary border-0 fade show mb-4" show={show4} message="Hello, world! This is Primary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow4} ToastBtn={true} ToastHeader={false} />
                        <SpkToast toastClass="align-items-center text-bg-secondary border-0 fade show mb-4" show={show5} message="Hello, world! This is Secondary toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow5} ToastBtn={true} ToastHeader={false} />
                        <SpkToast toastClass="align-items-center text-bg-warning border-0 fade show mb-4" show={show6} message="Hello, world! This is Warning toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow6} ToastBtn={true} ToastHeader={false} />
                        <SpkToast toastClass="align-items-center text-bg-info border-0 fade show mb-4" show={show7} message="Hello, world! This is Info toast message. " btnClass="btn-close btn-close-white me-2 m-auto" onclick={toggleShow7} ToastBtn={true} ToastHeader={false} />
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Solid Background Toasts" customCardClass="custom-card" customCardBodyClass="" reactCode={toast5} reusableCode={reusabletoast5}>
                        <div className="btn-list">
                            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow71(true)}>Primary</SpkButton>
                            <SpkButton Buttonvariant='primary1' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow72(true)}>Primary1</SpkButton>
                            <SpkButton Buttonvariant='primary2' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow73(true)}>Primary2</SpkButton>
                            <SpkButton Buttonvariant='primary3' Buttontype="button" Customclass="me-2" Id="solidprimaryToastBtn" onClickfunc={() => setShow74(true)}>Primary3</SpkButton>
                            <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="me-2" Id="solidsecondaryToastBtn" onClickfunc={() => setShow8(true)}>secondary</SpkButton>
                            <SpkButton Buttonvariant='warning' Buttontype="button" Customclass="me-2" Id="solidwarningToastBtn" onClickfunc={() => setShow9(true)}>warning</SpkButton>
                            <SpkButton Buttonvariant='info' Buttontype="button" Customclass="me-2" Id="solidinfoToastBtn" onClickfunc={() => setShow10(true)}>info</SpkButton>
                            <SpkButton Buttonvariant='success' Buttontype="button" Customclass="me-2" Id="solidsuccessToastBtn" onClickfunc={() => setShow11(true)}>success</SpkButton>
                            <SpkButton Buttonvariant='danger' Buttontype="button" Customclass="me-2" Id="soliddangerToastBtn" onClickfunc={() => setShow12(true)}>danger</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary" bodyClass="text-fixed-white" onClose={() => setShow71(false)} show={show71} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary1" bodyClass="text-fixed-white" onClose={() => setShow72(false)} show={show72} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary1" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary2" bodyClass="text-fixed-white" onClose={() => setShow73(false)} show={show73} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary2" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary3" bodyClass="text-fixed-white" onClose={() => setShow74(false)} show={show74} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary3" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-secondary" bodyClass="text-fixed-white" onClose={() => setShow8(false)} show={show8} delay={3000} autohide={true} headerClass="text-fixed-white bg-secondary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-warning" bodyClass="text-fixed-white" onClose={() => setShow9(false)} show={show9} delay={3000} autohide={true} headerClass="text-fixed-white bg-warning" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-info" bodyClass="text-fixed-white" onClose={() => setShow10(false)} show={show10} delay={3000} autohide={true} headerClass="text-fixed-white bg-info" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-success" bodyClass="text-fixed-white" onClose={() => setShow11(false)} show={show11} delay={3000} autohide={true} headerClass="text-fixed-white bg-success" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-danger" bodyClass="text-fixed-white" onClose={() => setShow12(false)} show={show12} delay={3000} autohide={true} headerClass="text-fixed-white bg-danger" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Color Variants Live" customCardClass="custom-card" customCardBodyClass="" reactCode={toast6} reusableCode={reusabletoast6}>
                        <div className="btn-list">
                            <SpkButton Buttontype="button" Buttonvariant='primary-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow13(true)}>Primary</SpkButton>
                            <SpkButton Buttontype="button" Buttonvariant='primary1-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow132(true)}>Primary1</SpkButton>
                            <SpkButton Buttontype="button" Buttonvariant='primary2-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow133(true)}>primary2</SpkButton>
                            <SpkButton Buttontype="button" Buttonvariant='primary3-light' Customclass="btn me-2" Id="primaryToastBtn" onClickfunc={() => setShow134(true)}>Primary3</SpkButton>
                            <SpkButton Buttonvariant='secondary-light' Buttontype="button" Customclass="btn me-2" Id="secondaryToastBtn" onClickfunc={() => setShow14(true)}>secondary</SpkButton>
                            <SpkButton Buttonvariant='warning-light' Buttontype="button" Customclass="btn  me-2" Id="warningToastBtn" onClickfunc={() => setShow15(true)}>warning</SpkButton>
                            <SpkButton Buttonvariant='info-light' Buttontype="button" Customclass="btn  me-2" Id="infoToastBtn" onClickfunc={() => setShow16(true)}>info</SpkButton>
                            <SpkButton Buttonvariant='success-light' Buttontype="button" Customclass="btn  me-2" Id="successToastBtn" onClickfunc={() => setShow17(true)}>success</SpkButton>
                            <SpkButton Buttonvariant='danger-light' Buttontype="button" Customclass="btn me-2" Id="dangerToastBtn" onClickfunc={() => setShow18(true)}>danger</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <SpkToast ToastHeader={true} bg="primary-transparent" toastClass="colored-toast" onClose={() => setShow13(false)} show={show13} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="primary1-transparent" toastClass="colored-toast" onClose={() => setShow132(false)} show={show132} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary1" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="primary2-transparent" toastClass="colored-toast" onClose={() => setShow133(false)} show={show133} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary2" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="primary3-transparent" toastClass="colored-toast" onClose={() => setShow134(false)} show={show134} delay={3000} autohide={true} headerClass="text-fixed-white bg-primary3" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="secondary-transparent" toastClass="colored-toast" onClose={() => setShow14(false)} show={show14} delay={3000} autohide={true} headerClass="text-fixed-white bg-secondary" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="warning-transparent" toastClass="colored-toast" onClose={() => setShow15(false)} show={show15} delay={3000} autohide={true} headerClass="text-fixed-white bg-warning" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="info-transparent" toastClass="colored-toast" onClose={() => setShow16(false)} show={show16} delay={3000} autohide={true} headerClass="text-fixed-white bg-info" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="success-transparent" toastClass="colored-toast" onClose={() => setShow17(false)} show={show17} delay={3000} autohide={true} headerClass="text-fixed-white bg-success" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                            <SpkToast ToastHeader={true} bg="danger-transparent" toastClass="colored-toast" onClose={() => setShow18(false)} show={show18} delay={3000} autohide={true} headerClass="text-fixed-white bg-danger" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} message="Your,toast message here." title="Xintra" />
                        </ToastContainer>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Translucent" customCardClass="custom-card" customCardBodyClass="" reactCode={toast7} reusableCode={reusabletoast7}>
                        <SpkToast ToastHeader={true} show={show19} onClose={toggleShow19} toastClass="show" headerClass="text-default" imgClass="me-2" imgSrc={togglelogo} title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />
                    </ShowCode>
                    <ShowCode title="Custom content" customCardClass="custom-card" customCardBodyClass="" reactCode={toast8} reusableCode={reusabletoast8}>
                        <SpkToast ToastHeader={false} toastClass="lign-items-center fade show mb-3" show={show20} ToastBtn={true} message="Hello, world! This is Primary toast message. " btnClass="btn-close me-2 m-auto" onclick={toggleShow20} />
                        <div>
                            <span className="my-4 text-muted">
                                Alternatively, you can also add additional controls and components to
                                toasts.
                            </span>
                        </div>
                        <Toast className="toast fade show mt-2" role="alert" aria-live="assertive" show={show21}>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                                <div className="mt-2 pt-2 border-top">
                                    <SpkButton Buttontype="button" Buttonvariant="primary" Size="sm" Customclass="me-2">Take
                                        action</SpkButton>
                                    <SpkButton Buttontype="button" Size="sm" Buttonvariant="secondary" onClickfunc={toggleShow21}>Close</SpkButton>
                                </div>
                            </Toast.Body>
                        </Toast>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Aligning Toast Using Flexbox" customCardClass="custom-card" customCardBodyClass="" reactCode={toast9} reusableCode={reusabletoast9}>
                        <div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
                            <div aria-live="polite" aria-atomic="true"
                                className="d-flex justify-content-center align-items-center w-100">
                                <SpkToast ToastHeader={true} show={show22} onClose={toggleShow22} toastClass="fade show shadow-lg" headerClass="text-default" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglelogo} title="Xintra" timestamp="11 mins ago" message="Hello, world! This is a toast message." />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                TOASTIFY JS
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkButton Buttonvariant="primary" Id="toast-button" onClickfunc={notify}>Click For Live Toast</SpkButton>
                            <SpkToastify position="top-right" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Toast Placements" customCardClass="custom-card" customCardBodyClass="" reactCode={toast10} reusableCode={reusabletoast10}>
                        <div className="btn-list">
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow23(true)} Customclass="me-2" Id="topleftToastBtn">Top Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow24(true)} Customclass="me-2" Id="topcenterToastBtn">Top Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow25(true)} Customclass="me-2" Id="toprightToastBtn">Top Right</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow26(true)} Customclass="me-2" Id="middleleftToastBtn">Middle Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow27(true)} Customclass="me-2" Id="middlecenterToastBtn">Middle Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow28(true)} Customclass="me-2" Id="middlerightToastBtn">Middle Right</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow29(true)} Customclass="me-2" Id="bottomleftToastBtn">Bottom Left</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow30(true)} Customclass="me-2" Id="bottomcenterToastBtn">Bottom Center</SpkButton>
                            <SpkButton Buttonvariant='outline-primary' Buttontype="button" onClickfunc={() => setShow31(true)} Customclass="me-2" Id="bottomrightToastBtn">Bottom Right</SpkButton>
                        </div>
                        <ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow23(false)} show={show23} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow24(false)} show={show24} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow25(false)} show={show25} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow26(false)} show={show26} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow27(false)} show={show27} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow28(false)} show={show28} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 start-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow29(false)} show={show29} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow30(false)} show={show30} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                        <ToastContainer className="toast-container position-fixed bottom-0 end-0 p-3">
                            <SpkToast ToastHeader={true} toastClass="toast colored-toast bg-primary-transparent text-primary"
                                onClose={() => setShow31(false)} show={show31} delay={3000} autohide={true} headerClass="bg-primary text-fixed-white" imgClass="bd-placeholder-img rounded me-2" imgSrc={togglewhite} title="Xintra" message="Your,toast message here." />
                        </ToastContainer>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    )
};

export default Toasts;
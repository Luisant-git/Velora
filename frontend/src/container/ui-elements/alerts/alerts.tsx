import  { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Additionalcontentalerts, Customizedalert1, Defaultsolidalerts, Imagealerts, Linkalerts, Outlinealerts, Roundedefaultalerts, Roundedoutlinealerts, Roundedsolidalerts, Roundewithbtnalerts, Shadowsolidalerts, Solidalerts, Svgalert, Svgalert1, avatarsizealert } from "../../../components/common/data/ui-elements/alertsdata";
import { dataalert10, dataalert11, dataalert12, dataalert13, dataalert15, dataalert16, dataalert17, dataalert2, dataalert3, dataalert4, dataalert7, dataalert8, dataalert9, reactalert1, reactalert10, reactalert11, reactalert12, reactalert13, reactalert14, reactalert15, reactalert16, reactalert17, reactalert2, reactalert3, reactalert4, reactalert5, reactalert6, reactalert7, reactalert8, reactalert9, reusealert1, reusealert10, reusealert11, reusealert12, reusealert13, reusealert14, reusealert15, reusealert16, reusealert17, reusealert2, reusealert3, reusealert4, reusealert5, reusealert6, reusealert7, reusealert8, reusealert9 } from "../../../components/common/data/prism/ui-elements-prism";
import SpkAlert from "../../../@spk-reusable-components/reusable-uielements/spk-alert";
import ShowCode from "../../../components/showcode/showcode";
import Pageheader from "../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

const Alerts = () => {

    //Solid Colored Alerts
    const [solidalert, setSolidalert] = useState(Solidalerts);
    const handleRemove = (id: number) => {
        const newList = solidalert.filter((list) => list.id !== id);
        setSolidalert(newList);
    };

    //Rounded Solid Alerts
    const [roundedsolidalert, setRoundedsolidalert] = useState(Roundedsolidalerts);
    const handleRemove3 = (id: number) => {
        const newList = roundedsolidalert.filter((list) => list.id !== id);
        setRoundedsolidalert(newList);
    };

    //Basic Alerts
    const [showr, setShowr] = useState(true);
    const handleDismiss = () => setShowr(false);

    //Live Example
    const [alerts, setAlerts] = useState<any>([]);
    const handleShowAlert = () => {
        const newAlert = {
            id: new Date().getTime(), // Unique ID for each alert
        };
        setAlerts((prevAlerts: any) => [...prevAlerts, newAlert]);
    };
    const handleCloseAlert = (id: any) => {
        setAlerts((prevAlerts: any[]) => prevAlerts.filter((alert: any) => alert.id !== id));
    };

    //Outline Alerts 
    const [outlinealert, setOutlinealert] = useState(Outlinealerts);
    const handleRemove1 = (id: number) => {
        const newList = outlinealert.filter((list) => list.id !== id);
        setOutlinealert(newList);
    };

    //Solid Alerts With Different Shadows
    const [shadowsolidalert, setShadowsolidalert] = useState(Shadowsolidalerts);
    const handleRemove2 = (id: number) => {
        const newList = shadowsolidalert.filter((list) => list.id !== id);
        setShadowsolidalert(newList);
    };

    // Rounded Solid Alerts
    const [roundedoutlinealert, setRoundedOutlinealert] = useState(Roundedoutlinealerts);
    const handleRemove4 = (id: number) => {
        const newList = roundedoutlinealert.filter((list) => list.id !== id);
        setRoundedOutlinealert(newList);
    };

    //Rounded Default Alerts
    const [roundeddefaultalert, setRoundedDefaultalert] = useState(Roundedefaultalerts);
    const handleRemove5 = (id: number) => {
        const newList = roundeddefaultalert.filter((list) => list.id !== id);
        setRoundedDefaultalert(newList);
    };

    //Rounded Alerts With Custom Close Button
    const [roundedwithbtnalert, setRoundedwithbtnalert] = useState(Roundewithbtnalerts);
    const handleRemove6 = (id: number) => {
        const newList = roundedwithbtnalert.filter((list) => list.id !== id);
        setRoundedwithbtnalert(newList);
    };

    //Customized Alerts With SVG's
    const [customized1alert, setcustomized1alert] = useState(Customizedalert1);
    const handleRemove12 = (id: number) => {
        const newList = customized1alert.filter((list) => list.id !== id);
        setcustomized1alert(newList);
    };

    //Alerts With Images
    const [imagesalert, setimagesalert] = useState(Imagealerts);
    const handleRemove8 = (id: number) => {
        const newList = imagesalert.filter((list) => list.id !== id);
        setimagesalert(newList);
    };

    //Alerts With Different Size Images
    const [avataralert, setavataralert] = useState(avatarsizealert);
    const handleRemove9 = (id: number) => {
        const newList = avataralert.filter((list) => list.id !== id);
        setavataralert(newList);
    };


    const [show1, setShow1] = useState(true);
    const toggleShow1 = () => setShow1(!show1);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show2, setShow2] = useState(true);
    const toggleShow2 = () => setShow2(!show2);

    const [show3, setShow3] = useState(true);
    const toggleShow3 = () => setShow3(!show3);


    //additionalcontent
    const [additionalcontentalert, setadditionalcontentalert] = useState(Additionalcontentalerts);
    const handleRemove7 = (id: number) => {
        const newList = additionalcontentalert.filter((list) => list.id !== id);
        setadditionalcontentalert(newList);
    };

    //svg
    const [svgalert, setsvgalert] = useState(Svgalert);
    const handleRemove10 = (id: number) => {
        const newList = svgalert.filter((list) => list.id !== id);
        setsvgalert(newList);
    };

    //svg
    const [svgalert1, setsvgalert1] = useState(Svgalert1);
    const handleRemove11 = (id: number) => {
        const newList = svgalert1.filter((list) => list.id !== id);
        setsvgalert1(newList);
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Ui Elements" currentpage="Alerts" activepage="Alerts" />

            {/* <!-- Page Header Close --> */}

            {/* <!--ROW-START--> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Default alerts" customCardClass="custom-card" reactCode={reactalert1} reusableCode={reusealert1}>
                        <SpkAlert variant="primary">A simple primary alert—check it out!</SpkAlert>
                        <SpkAlert variant="primary1">A simple primary1 alert—check it out!</SpkAlert>
                        <SpkAlert variant="primary2">A simple primary2 alert—check it out!</SpkAlert>
                        <SpkAlert variant="primary3">A simple primary3 alert—check it out!</SpkAlert>
                        <SpkAlert variant="secondary">A simple secondary alert—check it out!</SpkAlert>
                        <SpkAlert variant="success">A simple success alert—check it out!</SpkAlert>
                        <SpkAlert variant="danger">A simple danger alert—check it out!</SpkAlert>
                        <SpkAlert variant="warning">A simple warning alert—check it out!</SpkAlert>
                        <SpkAlert variant="info">A simple info alert—check it out!</SpkAlert>
                        <SpkAlert variant="light">A simple light alert—check it out!</SpkAlert>
                        <SpkAlert variant="dark">A simple dark alert—check it out!</SpkAlert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Links in alerts" customCardClass="custom-card" reactCode={reactalert2} dataCode={dataalert2} reusableCode={reusealert2}>
                        {Linkalerts.map((idx) => (
                            <SpkAlert variant={idx.class} key={Math.random()}>{idx.text1}
                                <Link to="#!"  className="alert-link">{idx.text2}</Link>{idx.text3}
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Solid Colored Alerts" customCardClass="custom-card" reactCode={reactalert3} dataCode={dataalert3} reusableCode={reusealert3}>
                        {solidalert.map((idx) => (
                            <SpkAlert variant={idx.class} key={Math.random()} CustomClass={`alert-dismissible ${idx.color}`}>{idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Buttonlabel="Close" Buttondismiss="alert" Customclass={`btn-close ${idx.color}`}
                                    onClickfunc={() => handleRemove(idx.id)}><i className="bi bi-x"></i></SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Rounded Solid Alerts" customCardClass="custom-card" reactCode={reactalert4} dataCode={dataalert4} reusableCode={reusealert4}>
                        {roundedsolidalert.map((idx) => (
                            <SpkAlert variant={idx.class} key={Math.random()} CustomClass="rounded-pill alert-dismissible">{idx.text}
                                <SpkButton Buttontype="button" Buttonvariant={idx.class} Buttonlabel="Close" Buttondismiss="alert" Customclass="btn-close"
                                    onClickfunc={() => handleRemove3(idx.id)}><i className="bi bi-x"></i></SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Basic Alert" customCardHeaderClass="card-header justify-content-between" reactCode={reactalert5} reusableCode={reusealert5}>
                        {showr && (
                            <SpkAlert variant="warning" Dismiss={true} show={showr} >
                                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                <SpkButton Buttonvariant='' Customclass="btn-close" onClickfunc={handleDismiss}><i className="bi bi-x"></i></SpkButton>
                            </SpkAlert>
                        )}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Live example" customCardClass="custom-card" reactCode={reactalert6} reusableCode={reusealert6}>
                        {alerts.map((alert: any) => (
                            <SpkAlert variant="success" CustomClass="alert-dismissible" key={alert.id}>
                                <strong>Nice, </strong> you triggered this alert message!
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" onClickfunc={() => handleCloseAlert(alert.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="mt-2" Buttonlabel="Close" onClickfunc={handleShowAlert}>
                            Show live alert
                        </SpkButton>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Outline Alerts" customCardClass="custom-card" reactCode={reactalert7} dataCode={dataalert7} reusableCode={reusealert7}>
                        {outlinealert.map((idx) => (

                            <SpkAlert variant={idx.class} CustomClass="alert-dismissible" key={Math.random()}>
                                {idx.text}
                                <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove1(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Solid Alerts With Different Shadows" customCardClass="custom-card" reactCode={reactalert8} dataCode={dataalert8} reusableCode={reusealert8}>
                        {shadowsolidalert.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass={`shadow-${idx.size} alert-dismissible`} key={Math.random()}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove2(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Default Alerts With Different Shadows" customCardClass="custom-card" reactCode={reactalert9} dataCode={dataalert9} reusableCode={reusealert9}>
                        {Defaultsolidalerts.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass={`shadow-${idx.size}`} key={Math.random()}>{idx.text}</SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Outline Alerts" customCardClass="custom-card" reactCode={reactalert10} dataCode={dataalert10} reusableCode={reusealert10}>
                        {roundedoutlinealert.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={Math.random()}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove4(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Default Alerts" customCardClass="custom-card" reactCode={reactalert11} dataCode={dataalert11} reusableCode={reusealert11}>
                        {roundeddefaultalert.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={Math.random()}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove5(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Rounded Alerts With Custom Close Button" customCardClass="custom-card" reactCode={reactalert12} dataCode={dataalert12} reusableCode={reusealert12}>
                        {roundedwithbtnalert.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass="rounded-pill alert-dismissible custom-rounded-alerts" key={Math.random()}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close custom-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove6(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Customized Alerts With SVG's" customCardClass="custom-card" reactCode={reactalert13} dataCode={dataalert13} reusableCode={reusealert13}>
                        {customized1alert.map((idx) => (
                            <SpkAlert variant={idx.color} CustomClass={`alert-dismissible custom-alert-icon shadow-sm svg-${idx.color}`} key={Math.random()}>
                                <svg className={`me-2 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
                                A customized {idx.color} alert with an icon
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove12(idx.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts with icons" customCardClass="custom-card" reactCode={reactalert14} reusableCode={reusealert14}>
                        <SpkAlert variant="primary" CustomClass="d-flex align-items-center svg-primary">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                            <div>
                                An example alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant="success" CustomClass="d-flex align-items-center svg-success">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                            <div>
                                An example success alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant="warning" CustomClass="d-flex align-items-center svg-warning">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>
                            <div>
                                An example warning alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant='danger' CustomClass=" d-flex align-items-center svg-danger">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>
                            <div>
                                An example danger alert with an icon
                            </div>
                        </SpkAlert>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Alerts With Images" customCardClass="custom-card" reactCode={reactalert15} dataCode={dataalert15} reusableCode={reusealert15}>
                        {imagesalert.map((idx) => (
                            <SpkAlert variant={idx.color} CustomClass="alert-img alert-dismissible rounded-pill flex-wrap" key={Math.random()}>
                                <div className="avatar avatar-sm me-3 avatar-rounded">
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove8(idx.id)}>
                                    <i className={`bi bi-x  ${idx.class}`}></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Alerts With Different size Images" customCardClass="custom-card" reactCode={reactalert16} dataCode={dataalert16} reusableCode={reusealert16}>
                        {avataralert.map((idx) => (
                            <SpkAlert variant={idx.color} CustomClass="alert-img alert-dismissible flex-wrap" key={Math.random()}>
                                <div className={`avatar avatar-${idx.class} me-3`}>
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove9(idx.id)}>
                                    <i className={`bi bi-x ${idx.class1}`}></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <div className="card bg-white border-0">
                                <SpkAlert variant="primary" CustomClass="custom-alert1" show={show}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={toggleShow}>
                                        <i className="bi bi-x"></i>
                                    </SpkButton>
                                    <div className="text-center px-5 pb-0 svg-primary">
                                        <svg className="custom-alert-icon svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                        <h5>Information?</h5>
                                        <p className="">This alert is created to just show the related information.</p>
                                        <div className="">
                                            <SpkButton Buttonvariant="outline-danger" Buttontype="button" Customclass="m-1" Size="sm">Decline</SpkButton>
                                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="m-1" Size="sm">Accept</SpkButton>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </div>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className=" bg-white border-0">
                                <SpkAlert variant="secondary" CustomClass="custom-alert1" show={show1}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={toggleShow1}>
                                        <i className="bi bi-x"></i>
                                    </SpkButton>
                                    <div className="text-center px-5 pb-0 svg-secondary">
                                        <svg className="custom-alert-icon svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <h5>Confirmed</h5>
                                        <p className="">This alert is created to just show the confirmation message.</p>
                                        <div className="">
                                            <SpkButton Buttonvariant="secondary" Buttontype="button" Customclass="m-1" Size="sm">Close</SpkButton>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert variant="warning" CustomClass="custom-alert1" show={show2}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={toggleShow2}>
                                        <i className="bi bi-x"></i>
                                    </SpkButton>
                                    <div className="text-center px-5 pb-0 svg-warning">
                                        <svg className="custom-alert-icon svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                                        <h5>Warning</h5>
                                        <p className="">This alert is created to just show the warning message.</p>
                                        <div className="">
                                            <SpkButton Buttonvariant="outline-secondary" Buttontype="button" Customclass="m-1" Size="sm">Back</SpkButton>
                                            <SpkButton Buttonvariant="warning" Buttontype="button" Customclass="m-1" Size="sm">Continue</SpkButton>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert variant="danger" CustomClass="custom-alert1" show={show3}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={toggleShow3}>
                                        <i className="bi bi-x"></i>
                                    </SpkButton>
                                    <div className="text-center px-5 pb-0 svg-danger">
                                        <svg className="custom-alert-icon svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path

                                                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" /></svg>
                                        <h5>danger</h5>
                                        <p className="">This alert is created to just show the danger message.</p>
                                        <div className="">
                                            <SpkButton Buttonvariant="danger" Buttontype="button" Customclass="m-1" Size="sm">Delete</SpkButton>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Additional content" customCardClass="custom-card" reactCode={reactalert17} dataCode={dataalert17} reusableCode={reusealert17}>
                        <div className="row gy-3">
                            {additionalcontentalert.map((idx) => (
                                <Col xl={6} key={Math.random()}>
                                    <SpkAlert variant={idx.class} CustomClass="overflow-hidden p-0" key={Math.random()}>
                                        <div className={`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`}>
                                            <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0 text-fixed-white" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove7(idx.id)}>
                                                <i className="bi bi-x"></i>
                                            </SpkButton>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="p-3">
                                            <p className="mb-0">{idx.text2} <Link to="#!"  className="fw-semibold text-decoration-underline">
                                                {idx.text3}</Link></p>
                                        </div>
                                    </SpkAlert>
                                </Col>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Row>
                        {svgalert.map((idx) => (
                            <Col xl={3} key={Math.random()}>
                                <Card className="border-0">
                                    <SpkAlert variant={idx.color} CustomClass={`border border-${idx.color} mb-0 p-2`} key={Math.random()}>
                                        <div className="d-flex align-items-start">
                                            <div className={`me-2 svg-${idx.color}`}>
                                                {idx.class1}
                                            </div>
                                            <div className={`text-${idx.color} w-100`}>
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}
                                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemove10(idx.id)}>
                                                        <i className="bi bi-x"></i>
                                                    </SpkButton>
                                                </div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#!"  className={`text-${idx.class} fw-semibold me-2 d-inline-block`}>cancel</Link>
                                                    <Link to="#!"  className={`text-${idx.color} fw-semibold`}>open</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SpkAlert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={12}>
                    <Row>
                        {svgalert1.map((idx) => (
                            <Col xl={3} key={Math.random()}>
                                <div className="card border-0">

                                    <SpkAlert variant={`solid-${idx.color}`} CustomClass={`border border-${idx.color} mb-0 p-2`} key={Math.random()}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2 svg-white">
                                                {idx.class1}
                                            </div>
                                            <div className="w-100">
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}
                                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0" Buttonlabel="Close" Buttondismiss="alert"
                                                        onClickfunc={() => handleRemove11(idx.id)}>
                                                        <i className="bi bi-x"></i>
                                                    </SpkButton>
                                                </div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#!"  className={`text-fixed-white fw-semibold me-2 op-7 d-inline-block ${idx.class}`}>{idx.btn1}</Link>
                                                    <Link to="#!"  className="text-fixed-white fw-semibold">{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SpkAlert>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Col>
            </Row>
            {/* <!--ROW-END--> */}
        </Fragment>
    )
};

export default Alerts;
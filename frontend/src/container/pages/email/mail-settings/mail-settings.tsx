import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Nav, Tab } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButtongroup from "../../../../@spk-reusable-components/reusable-uielements/spk-buttongroup";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Accountoptions, Languageoptions, MaxLimitoptions, Maximumoptions } from "../../../../components/common/data/pages/email/mailsettingsdata";

const MailSettings = () => {

    const [success1, setsuccess1] = useState("off");
    const [success2, setsuccess2] = useState("on");
    const [success3, setsuccess3] = useState("off");
    const [success4, setsuccess4] = useState("off");
    const [success5, setsuccess5] = useState("off");
    const [success6, setsuccess6] = useState("off");
    const [success7, setsuccess7] = useState("off");
    const [success8, setsuccess8] = useState("on");
    const [success9, setsuccess9] = useState("on");
    const [success10, setsuccess10] = useState("on");
    const [success11, setsuccess11] = useState("on");
    const [success12, setsuccess12] = useState("off");
    const [success13, setsuccess13] = useState("on");
    const [success14, setsuccess14] = useState("on");
    const [success15, setsuccess15] = useState("on");
    const [success16, setsuccess16] = useState("on");
    const [success17, setsuccess17] = useState("on");
    const [success18, setsuccess18] = useState("off");
    const [success19, setsuccess19] = useState("on");
    const [success20, setsuccess20] = useState("on");
    const [success21, setsuccess21] = useState("on");
    const [success22, setsuccess22] = useState("on");

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Pages" subtitle="Email" currentpage="Mail Settings" activepage="Mail Settings" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row mb-5">
                <Tab.Container defaultActiveKey="tab1">
                    <Col xl={3}>

                        <Card className="custom-card">
                            <div className="card-body">
                                <Nav className="nav-tabs flex-column nav-tabs-header mb-0 mail-settings-tab" role="tablist">
                                    <Nav.Item className="me-0">
                                        <Nav.Link className="" eventKey="tab1"
                                            href="#email-settings" aria-selected="true"><i className="ri-mail-line me-2 align-middle fs-14 lh-1 text-primary"></i>Email</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="me-0">
                                        <Nav.Link className="" eventKey="tab2"
                                            href="#security" aria-selected="true"><i className="ri-lock-star-line me-2 align-middle fs-14 lh-1 text-primary"></i>Security</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="me-0">
                                        <Nav.Link className="" eventKey="tab3"
                                            href="#notification-settings" aria-selected="true"><i className="ri-notification-3-line me-2 align-middle fs-14 lh-1 text-primary"></i>Notifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="me-0">
                                        <Nav.Link className="" eventKey="tab4"
                                            href="#account-settings" aria-selected="true"><i className="ri-shield-user-line me-2 align-middle fs-14 lh-1 text-primary"></i>Account Settings</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <div className="card-header">
                                <div className="card-title">Social Links</div>
                            </div>
                            <div className="card-body">
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="facebook" className="">Facebook :</Form.Label>
                                        <Form.Control type="text" className="bg-light" id="facebook" placeholder="https://" defaultValue="https://www.facebook.com" /> </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Twitter" className="">Twitter :</Form.Label>
                                        <Form.Control type="text" className="bg-light" id="Twitter" placeholder="https://" defaultValue="https://twitter.com" /> </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Pinterest" className="">Pinterest:</Form.Label>
                                        <Form.Control type="text" className="bg-light" id="Pinterest" placeholder="https://" defaultValue="https://in.pinterest.com" /> </Col>
                                    <Col xl={12}> <Form.Label htmlFor="Linkedin" className="">Linkedin :</Form.Label>
                                        <Form.Control type="text" className="bg-light" id="Linkedin" placeholder="https://" defaultValue="https://www.linkedin.com" /> </Col>
                                </div>
                            </div>
                        </Card>

                    </Col>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <div className="card-body p-0">
                                <Tab.Content className="border-0">
                                    <Tab.Pane eventKey="tab1" className="p-0" id="email-settings"
                                        role="tabpanel">
                                        <ul className="list-group list-group-flush rounded">
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Keyboard Shortcuts :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-enable1" />
                                                            <label className="form-check-label" htmlFor="keyboard-enable1">
                                                                Keyboard Shortcuts Enable
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="keyboard-disable2">
                                                                Keyboard Shortcuts Disable
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3} lg={3} md={3} sm={12} className="">
                                                        <span className="fs-14 fw-medium mb-0">Menu View :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Default View
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Advanced View
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Images :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="images-open" id="images-open1" />
                                                            <label className="form-check-label" htmlFor="images-open1">
                                                                Always Open Images
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="images-open" id="images-hide2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="images-hide2">
                                                                Ask For Permission
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success3}`} onClick={() => { success3 == "on" ? setsuccess3("off") : setsuccess3("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Mail Send Action :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="on-keyboard" defaultChecked />
                                                            <label className="form-check-label" htmlFor="on-keyboard">
                                                                On Keyboard Action
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="on-buttonclick" />
                                                            <label className="form-check-label" htmlFor="on-buttonclick">
                                                                On Button Click
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="float-sm-end">
                                                            <Link to="#!" className="btn btn-success-ghost btn-sm">Learn-more</Link>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Maximum Mails Per Page :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <SpkSelect name="colors" option={Maximumoptions} mainClass="basic-multi-select"
                                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Maximumoptions[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success4}`} onClick={() => { success4 == "on" ? setsuccess4("off") : setsuccess4("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Mail Composer :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="d-flex gap-4 align-items-center">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="mail-composer" id="mail-composeron1" />
                                                                <label className="form-check-label" htmlFor="mail-composeron1">
                                                                    Mail Composer On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="mail-composer" id="mail-composeroff2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="mail-composeroff2">
                                                                    Mail Composer Off
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success5}`} onClick={() => { success5 == "on" ? setsuccess5("off") : setsuccess5("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Language :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="mail-language" className="form-label">Languages :</label>
                                                        <SpkSelect multi name="colors" option={Languageoptions}
                                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languageoptions[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success6}`} onClick={() => { success6 == "on" ? setsuccess6("off") : setsuccess6("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Auto Correct :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="d-flex gap-4 align-items-center">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="auto-correct" id="auto-correcton1" />
                                                                <label className="form-check-label" htmlFor="auto-correcton1">
                                                                    Auto Correct On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="auto-correct" id="auto-correctoff2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="auto-correctoff2">
                                                                    Auto Correct Off
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${success7}`} onClick={() => { success7 == "on" ? setsuccess7("off") : setsuccess7("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2" className="p-0" id="security"
                                        role="tabpanel">
                                        <ul className="list-group list-group-flush list-unstyled rounded">
                                            <li className="list-group-item">
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Logging In</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Max Limit for login attempts</p>
                                                                <p className="fs-12 mb-0 text-muted mb-sm-0 mb-2">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
                                                            </div>
                                                            <div>
                                                                <SpkSelect name="colors" option={MaxLimitoptions} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[MaxLimitoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Account Freeze time management</p>
                                                                <p className="fs-12 mb-0 text-muted mb-sm-0 mb-2">You can change the time for the account freeze when attempts for </p>
                                                            </div>
                                                            <div>
                                                                <SpkSelect name="colors" option={Accountoptions} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Accountoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Password Requirements</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to password strength.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Minimum number of characters in the password</p>
                                                                <p className="fs-12 mb-0 text-muted">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="8" />
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Contain A Number</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain a number.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success8}`} onClick={() => { success8 == "on" ? setsuccess8("off") : setsuccess8("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Contain A Special Character</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain a special Character.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success9}`} onClick={() => { success9 == "on" ? setsuccess9("off") : setsuccess9("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Atleast One Capital Letter</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain atleast one capital letter.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success10}`} onClick={() => { success10 == "on" ? setsuccess10("off") : setsuccess10("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Maximum Password Length</p>
                                                                <p className="fs-12 mb-0 text-muted">Maximum password lenth should be selected here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Unknown Chats</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to unknown chats.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <SpkButtongroup Customclass="float-sm-end" Buttongrplabel="Basic radio toggle button group">
                                                            <input type="radio" className="btn-check" name="btnunknownchats" id="unknown-chats-show" defaultChecked />
                                                            <label className="btn btn-outline-light" htmlFor="unknown-chats-show">Show</label>
                                                            <input type="radio" className="btn-check" name="btnunknownchats" id="unknown-chats-hide" />
                                                            <label className="btn btn-outline-light" htmlFor="unknown-chats-hide">Hide</label>
                                                        </SpkButtongroup>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3" className="p-0" id="notification-settings"
                                        role="tabpanel">
                                        <ul className="list-group list-group-flush list-unstyled rounded">
                                            <li className="list-group-item">
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-medium">Email Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
                                                    </Col>
                                                    <div className="col-xl-7">
                                                        <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Updates & Features</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications about new updates and their features.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success11}`} onClick={() => { success11 == "on" ? setsuccess11("off") : setsuccess11("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Early Access</p>
                                                                <p className="fs-12 mb-0 text-muted">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success12}`} onClick={() => { success12 == "on" ? setsuccess12("off") : setsuccess12("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Email Shortcuts</p>
                                                                <p className="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success13}`} onClick={() => { success13 == "on" ? setsuccess13("off") : setsuccess13("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success14}`} onClick={() => { success14 == "on" ? setsuccess14("off") : setsuccess14("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success15}`} onClick={() => { success15 == "on" ? setsuccess15("off") : setsuccess15("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-medium">Push Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
                                                    </Col>
                                                    <div className="col-xl-7">
                                                        <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success16}`} onClick={() => { success16 == "on" ? setsuccess16("off") : setsuccess16("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success17}`} onClick={() => { success17 == "on" ? setsuccess17("off") : setsuccess17("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Extensions</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success18}`} onClick={() => { success18 == "on" ? setsuccess18("off") : setsuccess18("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab4" className="p-0" id="account-settings"
                                        role="tabpanel">
                                        <div className="row gy-3">
                                            <div className="col-xxl-7">
                                                <Card className="custom-card shadow-none mb-0">
                                                    <div className="card-body">
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="w-75">
                                                                <p className="fs-14 mb-1 fw-medium">Two Step Verification</p>
                                                                <p className="fs-12 text-muted mb-0">Two-step verification provides enhanced security measures and helps prevent unauthorized access and fraudulent activities.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success19}`} onClick={() => { success19 == "on" ? setsuccess19("off") : setsuccess19("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="mb-sm-0 mb-2 w-75">
                                                                <p className="fs-14 mb-2 fw-medium">Authentication</p>
                                                                <div className="mb-0 authentication-btn-group">
                                                                    <SpkButtongroup Buttongrplabel="Basic radio toggle button group">
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio1"><i className="ri-lock-unlock-line me-1 align-middle d-inline-block"></i>Pin</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle d-inline-block"></i>Password</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle d-inline-block"></i>Finger Print</label>
                                                                    </SpkButtongroup>
                                                                </div>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success20}`} onClick={() => { success20 == "on" ? setsuccess20("off") : setsuccess20("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="w-75">
                                                                <p className="fs-14 mb-1 fw-medium">Recovery Mail</p>
                                                                <p className="fs-12 text-muted mb-0">In case of forgetting passwords, emails are sent to aana14@gmail.com.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success21}`} onClick={() => { success21 == "on" ? setsuccess21("off") : setsuccess21("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">SMS Recovery</p>
                                                                <p className="fs-12 text-muted mb-0">In case of recovery, SMS messages are sent to 9876543xx</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${success22}`} onClick={() => { success22 == "on" ? setsuccess22("off") : setsuccess22("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Reset Password</p>
                                                                <p className="fs-12 text-muted">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
                                                                <div className="mb-2">
                                                                    <label htmlFor="current-password" className="form-label">Current Password</label>
                                                                    <input type="text" className="form-control" id="current-password" placeholder="Current Password" />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="new-password" className="form-label">New Password</label>
                                                                    <input type="text" className="form-control" id="new-password" placeholder="New Password" />
                                                                </div>
                                                                <div className="mb-0">
                                                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                            <div className="col-xxl-5">
                                                <Card className="custom-card shadow-none mb-0">
                                                    <div className="card-header justify-content-between d-sm-flex d-block">
                                                        <div className="card-title">Registered Devices</div>
                                                        <div className="mt-sm-0 mt-2">
                                                            <SpkButton Size="sm" Buttonvariant="primary">Signout from all devices</SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                <div className="d-sm-flex d-block align-items-top">
                                                                    <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-phone me-2 fs-16 align-middle text-muted"></i></div>
                                                                    <div className="lh-1 flex-fill">
                                                                        <p className="mb-1">
                                                                            <span className="fw-medium">Mobile-LG-1023</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span className="text-muted fs-11">Manchester, UK-Nov 30, 04:45PM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2 text-end" toggleas="a" Menuclass="dropdown-menu-end" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                                        <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Another action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Something else here</Dropdown.Item></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="d-sm-flex d-block align-items-top">
                                                                    <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
                                                                    <div className="lh-1 flex-fill">
                                                                        <p className="mb-1">
                                                                            <span className="fw-medium">Lenovo-1291203</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span className="text-muted fs-11">England, UK-Aug 12, 12:25PM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2 text-end" toggleas="a" Menuclass="dropdown-menu-end" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                                        <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Another action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Something else here</Dropdown.Item></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="d-sm-flex d-block align-items-top">
                                                                    <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
                                                                    <div className="lh-1 flex-fill">
                                                                        <p className="mb-1">
                                                                            <span className="fw-medium">Macbook-Suzika</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span className="text-muted fs-11">Brightoon, UK-Jul 18, 8:34AM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2 text-end" toggleas="a" Menuclass="dropdown-menu-end" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                                        <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Another action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Something else here</Dropdown.Item></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <div className="d-sm-flex d-block align-items-top">
                                                                    <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted"></i></div>
                                                                    <div className="lh-1 flex-fill">
                                                                        <p className="mb-1">
                                                                            <span className="fw-medium">Apple-Desktop</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span className="text-muted fs-11">Darlington, UK-Jan 14, 11:14AM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2 text-end" toggleas="a" Menuclass="dropdown-menu-end" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                                        <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Another action</Dropdown.Item></li>
                                                                        <li><Dropdown.Item>Something else here</Dropdown.Item></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                            <div className="card-footer border-top-0 d-flex justify-content-between gap-2 flex-wrap">
                                <SpkButton Buttonvariant="primary1-light">
                                    Restore Defaults
                                </SpkButton>
                                <div className="ms-auto">
                                    <SpkButton Buttonvariant="primary">
                                        Save Changes
                                    </SpkButton>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Tab.Container>
            </div>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default MailSettings;
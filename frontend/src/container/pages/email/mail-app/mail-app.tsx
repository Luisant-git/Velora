import  { Fragment, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Offcanvas } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkSunEditor from "../../../../@spk-reusable-components/reusable-plugins/spk-suneditor";
import SimpleBar from "simplebar-react";
import { Maildata, Mails, Mails1  } from "../../../../components/common/data/pages/email/mailappdata";
import { Link } from "react-router-dom";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import face16 from "../../../../assets/images/faces/16.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face3 from "../../../../assets/images/faces/3.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face7 from "../../../../assets/images/faces/7.jpg"
import face8 from "../../../../assets/images/faces/8.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import media74 from "../../../../assets/images/media/media-74.jpg"
import media75 from "../../../../assets/images/media/media-75.jpg"
import media77 from "../../../../assets/images/media/media-77.jpg"

// 
const MailApp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleVisibility = () => {
        if (isMobile) {
            setIsVisible((prev) => !prev);
        }
    };

  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" subtitle="Email" currentpage="Mail App" activepage="Mail App" />

            {/* <!-- Page Header Close --> */}

            <div className="main-mail-container mb-2 gap-2 d-flex">
                <div className="mail-navigation border" onClick={toggleVisibility} style={{ display: isMobile ? (isVisible ? 'block' : 'none') : 'block', }}>
                    <div className="d-grid align-items-top p-3 border-bottom border-block-end-dashed">
                        <SpkButton Buttonvariant="primary" Customclass="d-flex align-items-center justify-content-center" onClickfunc={handleShow} data-bs-toggle="modal"
                            data-bs-target="#mail-Compose">
                            <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
                        </SpkButton>
                        <Modal show={show} onHide={handleClose} className="modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel">
                                <Modal.Header>
                                    <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal" onClickfunc={handleClose}
                                        aria-label="Close"></SpkButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="row">
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="fromMail" className="">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Form.Control type="email" className="" id="fromMail" defaultValue="henrymilo2345@gmail.com" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="toMail" className="">To<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <SpkSelect id="blog-tags" multi name="blog-tags" option={Maildata} mainClass="block w-full text-[0.875rem] !rounded-md"
                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Maildata[0]]}
                                            />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="mailCC" className=" text-dark fw-medium">Cc</Form.Label>
                                            <Form.Control type="email" className="" id="mailCC" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="mailBcc" className=" text-dark fw-medium">Bcc</Form.Label>
                                            <Form.Control type="email" className="" id="mailBcc" />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="Subject" className="">Subject</Form.Label>
                                            <Form.Control type="text" className="" id="Subject" placeholder="Subject" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className="col-form-label">Content :</Form.Label>
                                            <div className="mail-compose">
                                                <div id="mail-compose-editor"> <SpkSunEditor height={'200px'} /></div>
                                            </div>
                                        </Col>
                                    </div>
                                </Modal.Body>
                                <div className="modal-footer">
                                    <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                                        Buttondismiss="modal">Cancel</SpkButton>
                                    <SpkButton Buttonvariant="primary" Buttontype="button">Send</SpkButton>
                                </div>=
                        </Modal>
                    </div>
                    <div>
                        <SimpleBar>
                            <ul className="list-unstyled mail-main-nav" id="mail-main-nav">
                                <li className="px-0 pt-0">
                                    <span className="fs-11 text-muted op-7 fw-medium">MAILS</span>
                                </li>
                                {Mails.map((idx) => (
                                    <li className={`${idx.class1} mail-type`} key={Math.random()}>
                                        <Link to="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className={`ti ti-${idx.icon} align-middle fs-16`}></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-medium">LABELS</span>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-primary1"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Mail
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-primary2"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Home
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-primary3"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Work
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-warning"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Friends
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-medium">ONLINE USERS</span>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src={face4} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-medium mb-1">Angelica</p>
                                                <p className="fs-12 text-muted mb-0 fw-normal">Can please send me the file.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!">
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src={face6} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-medium mb-1">Rexha</p>
                                                <p className="fs-12 text-muted mb-0 fw-normal">Waiting for response &#128077;.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-medium">SETTINGS</span>
                                </li>
                                <li>
                                    <Link to={`${import.meta.env.BASE_URL}pages/email/mail-settings`}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ti ti-settings align-middle fs-14"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Settings
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </SimpleBar>
                    </div>
                </div>
                <div className="total-mails border" style={{ display: isMobile ? (isVisible ? 'none' : 'block') : 'block', }}>
                    <div className="p-3 d-flex align-items-center border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div className="input-group">
                            <input type="text" className="form-control shadow-none" placeholder="Search Email" aria-describedby="button-addon" />
                            <SpkButton Buttonvariant="primary" Buttontype="button" Id="button-addon"><i className="ri-search-line me-1"></i> Search</SpkButton>
                        </div>
                    </div>
                    <div className="px-3 p-2 d-flex align-items-center border-bottom flex-wrap gap-2">
                        <div className="me-3">
                            <input className="form-check-input check-all" type="checkbox" id="checkAll" defaultValue="" aria-label="..." />
                        </div>
                        <div className="flex-fill">
                            <h6 className="fw-medium mb-0">All Mails</h6>
                        </div>
                        <div className="d-flex gap-1 align-items-center">
                            <SpkButton Buttonvariant="light" Customclass="btn-icon me-1 d-lg-none d-block total-mails-close" onClickfunc={toggleVisibility}>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="primary1-light" Size="sm" Customclass="" Buttontype="button" aria-expanded="false">
                                <i className="ri-inbox-archive-line me-1"></i> Archive
                            </SpkButton>
                            <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="" Buttontype="button" aria-expanded="false">
                                <i className="ri-error-warning-line me-1"></i> Spam
                            </SpkButton>
                            <SpkDropdown Togglevariant="primary3-light" Customtoggleclass="btn btn-sm btn-wave no-caret align-middle" Icon={true} IconClass="ti ti-dots-vertical">
                                <Dropdown.Item href="#!">Recent</Dropdown.Item>
                                <Dropdown.Item href="#!">Unread</Dropdown.Item>
                                <Dropdown.Item href="#!">Mark All Read</Dropdown.Item>
                                <Dropdown.Item href="#!">Delete All</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                    </div>
                    <SimpleBar className="mail-messages" id="mail-messages">
                        <ul className="list-unstyled mb-0 mail-messages-container">
                            {Mails1.map((idx) => (
                                <li key={Math.random()} className={idx.bordercls}>
                                    <div className="d-sm-flex align-items-top">
                                        <div className="me-3 mt-1">
                                            <input defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                        </div>
                                        <div className="me-1 lh-1">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src={idx.img} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill text-truncate">
                                            <Link to="#!" data-bs-toggle="offcanvas" onClick={handleShow1}
                                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <p className="mb-1 fs-12 fw-medium">
                                                    {idx.name}  <span className={idx.badge}>{idx.badgetxt}</span>
                                                    <span className="float-end text-muted fw-normal fs-11"><span className="me-2"><i className={idx.icon}></i></span>{idx.time}</span>
                                                </p>
                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="d-block mb-0 fw-medium text-truncate w-75">{idx.title}</span>
                                                <SpkButton Customclass={`p-0 lh-1 mail-starred ${idx.star} border-0 float-end`} Buttonvariant="">
                                                    <i className="ri-star-fill fs-14"></i>
                                                </SpkButton>
                                                <div
                                                    className="fs-12 text-muted w-75 text-truncate mail-msg-content">{idx.text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SimpleBar>
                </div>
                <div className="mail-recepients border">
                    <div className="p-3 border-bottom">
                        <SpkTooltips placement="top" title="Add Recepient">
                            <Button variant="primary1-light" className="btn-icon rounded-pill"><i className="ri-add-line"></i></Button>
                        </SpkTooltips>
                    </div>
                    <div className="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
                        <SpkTooltips placement="top" title="Hadley Kylin">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar online avatar-rounded">
                                    <img src={face11} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Iliana Lilly">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar online avatar-rounded">
                                    <img src={face7} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Jasmine Della">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline avatar-rounded">
                                    <img src={face4} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Emanuel Rush">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline online avatar-rounded">
                                    <img src={face8} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Nyra Tiyana">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline avatar-rounded">
                                    <img src={face3} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Maria Violet">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline avatar-rounded">
                                    <img src={face11} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Priceton Gray">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar online avatar-rounded">
                                    <img src={face16} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Charlie Edson">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline avatar-rounded">
                                    <img src={face10} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Spencer Robin">
                            <Link to="#!" className="mail-recepeint-person">
                                <span className="avatar offline avatar-rounded">
                                    <img src={face15} alt="" />
                                </span>
                            </Link>
                        </SpkTooltips>
                    </div>
                </div>
            </div>
            <Offcanvas placement="end" show={show1} onHide={handleClose1} className="offcanvas-end mail-info-offcanvas" tabIndex="-1" id="offcanvasRight"
            >
                <Offcanvas.Header className="offcanvas-header border-bottom">
                    <div className="mail-info-header d-flex flex-wrap gap-2 align-items-center flex-fill">
                        <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar me-1">
                            <img src={face12} alt="" />
                        </span>
                        <div className="flex-fill">
                            <h6 className="mb-0 fw-medium">Raiden stevie</h6>
                            <span className="text-muted fs-11">raidenstevie777@gmail.com</span>
                        </div>
                        <div className="mail-action-icons ms-auto">
                            <SpkTooltips placement="bottom" title="Starred">
                                <Button variant="outline-light" className="btn-icon border">
                                    <i className="ri-star-line"></i>
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="bottom" title="Archive">
                                <Button variant="outline-light" className="btn-icon border ms-1">
                                    <i className="ri-inbox-archive-line"></i>
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="bottom" title="Report sapm">
                                <Button variant="outline-light" className="btn-icon border ms-1">
                                    <i className="ri-spam-2-line"></i>
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="bottom" title="Delete">
                                <Button variant="outline-light" className="btn-icon border ms-1">
                                    <i className="ri-delete-bin-line"></i>
                                </Button>
                            </SpkTooltips>
                            <SpkTooltips placement="bottom" title="Reply">
                                <Button variant="outline-light" className="btn-icon border ms-1">
                                    <i className="ri-reply-line"></i>
                                </Button>
                            </SpkTooltips>
                            <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={handleClose1} Size="sm" Customclass="btn-close btn-icon border" Buttondismiss="offcanvas"
                                Buttonlabel="Close"></SpkButton>
                        </div>
                        <div className="responsive-mail-action-icons">
                            <SpkDropdown Togglevariant="light" Customtoggleclass="btn-icon waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                <li><Dropdown.Item href="#!"><i className="ri-star-line me-1 align-middle d-inline-block"></i>Starred</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Archive</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-1 align-middle d-inline-block"></i>Report Spam</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!"><i className="ri-reply-line me-1 align-middle d-inline-block"></i>Reply</Dropdown.Item></li>
                            </SpkDropdown>
                            <SpkButton Buttonvariant="light" Customclass="btn-icon ms-1 close-button" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose1}>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <div className="mails-information">
                        <div className="p-3" id="mail-info-body">
                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>
                                    <p className="fs-20 fw-medium mb-0">Strategic Insights Webinar: Navigating Future Trends.</p>
                                </div>
                                <div className="float-end">
                                    <span className="fs-12 text-muted">Oct-22-2024,03:05PM</span>
                                </div>
                            </div>
                            <div className="main-mail-content mb-3">
                                <p className="fs-14 fw-medium mb-3">Greetings Mr Jack &#128400;,</p>
                                <p className="mb-2 text-muted">We're excited to invite you to our upcoming webinar, "Navigating Future Trends," where industry experts will share strategic insights to help you stay ahead in an ever-evolving landscape. Join us on [Date] at [Time] for an engaging session that promises to provide actionable knowledge and valuable perspectives.</p>
                                <span className="d-block text-muted fw-meidum">Key Highlights :</span>
                                <ul className="text-muted my-3">
                                    <li className="mb-2">Expert analysis of emerging trends</li>
                                    <li className="mb-2">Practical strategies for staying competitive</li>
                                    <li className="mb-2">Q&A session for personalized insights</li>
                                </ul>
                                <p className="mb-2 text-muted">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator, making the true shape of the Earth an "oblate spheroid.".</p>
                                <p className="mb-0 mt-4">
                                    <span className="d-block">Best Regards,</span>
                                    <span className="d-block">Raiden stevie</span>
                                </p>
                            </div>
                            <div className="mail-attachments mb-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mb-2">
                                        <span className="fs-14 fw-medium"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (5.8KB):</span>
                                    </div>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="primary-light" Size="sm">Download All</SpkButton>
                                    </div>
                                </div>
                                <div className="mt-2 d-flex flex-wrap gap-3">
                                    <div className="d-flex align-items-center flex-wrap gap-3 border p-2 rounded-2">
                                        <div className="me-1 lh-1">
                                            <span className="avatar avatar-md bg-primary">
                                                <i className="ri-file-pdf-2-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!">
                                                <p className="mb-1 fs-12 fw-medium">
                                                    Instructions_file.pdf
                                                </p>
                                            </Link>
                                            <div className="fs-12 text-muted text-wrap">2.1KB</div>
                                        </div>
                                        <div className="ms-auto btn btn-sm btn-primary1-light rounded-circle btn-icon">
                                            <i className="ri-download-line"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 border p-2 rounded-2">
                                        <div className="me-1 lh-1">
                                            <span className="avatar avatar-md bg-primary">
                                                <i className="ri-file-pdf-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!">
                                                <p className="mb-1 fs-12 fw-medium">
                                                    Complete_Folder.doc
                                                </p>
                                            </Link>
                                            <div className="fs-12 text-muted text-wrap">1.5KB</div>
                                        </div>
                                        <div className="ms-auto btn btn-sm btn-primary1-light rounded-circle btn-icon">
                                            <i className="ri-download-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mail-images mb-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mb-2">
                                        <span className="fs-14 fw-medium"><i className="ri-image-line me-1 align-middle"></i>Images:</span>
                                    </div>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="primary-light" Size="sm">Download All</SpkButton>
                                    </div>
                                </div>
                                <div className="mt-2 d-flex flex-wrap gap-3">
                                    <Link to="#!">
                                        <span className="avatar avatar-lg shadow-sm">
                                            <img src={media74} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-lg shadow-sm">
                                            <img src={media75} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-lg shadow-sm">
                                            <img src={media77} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-lg bg-primary-transparent">
                                            5+
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="fs-14 fw-medium"><i className="ri-reply-all-line me-1 align-middle d-inline-block"></i>Reply:</span>
                            </div>
                            <div className="mail-reply">
                                <div id="mail-reply-editor"><SpkSunEditor height={'200px'} /></div>
                            </div>
                        </div>
                        <div className="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div>
                                <SpkTooltips placement="top" title="Print">
                                    <Button variant="primary-light" className="btn-icon">
                                        <i className="ri-printer-line"></i>
                                    </Button>
                                </SpkTooltips>
                                <SpkTooltips placement="top" title="Mark as read">
                                    <Button variant="secondary-light" className="btn-icon ms-1">
                                        <i className="ri-mail-open-line"></i>
                                    </Button>
                                </SpkTooltips>
                                <SpkTooltips placement="top" title="Reload">
                                    <Button variant="success-light" className="btn-icon ms-1">
                                        <i className="ri-refresh-line"></i>
                                    </Button>
                                </SpkTooltips>
                            </div>
                            <div>
                                <SpkButton Buttonvariant="secondary" Customclass="">
                                    <i className="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                                </SpkButton>
                                <SpkButton Buttonvariant="danger" Customclass="ms-1">
                                    <i className="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                                </SpkButton>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
};

export default MailApp;


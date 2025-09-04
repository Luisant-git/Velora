import  { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Dealsdata, Dealsdata1, Dealsdata2, Dealsdata3, Dealsdata4, Dealsdata5, Dealsdata6  } from "../../../../components/common/data/apps/crm/dealsdata";
import SpkDealsCard from "../../../../@spk-reusable-components/reusable-apps/spk-dealscard";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";
import SpkDealcards from "../../../../@spk-reusable-components/reusable-apps/spk-dealcards";
import face9 from "../../../../assets/images/faces/9.jpg"

const Deals = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };

    const firstContainerRef = useRef<HTMLDivElement | null>(null);
    const secondContainerRef = useRef<HTMLDivElement | null>(null);
    const thirdContainerRef = useRef<HTMLDivElement | null>(null);
    const fourthContainerRef = useRef<HTMLDivElement | null>(null);
    const fifthContainerRef = useRef<HTMLDivElement | null>(null);
    const sixthContainerRef = useRef<HTMLDivElement | null>(null);
    const windowElement:any  = window;
  
    useEffect(() => {
      if (firstContainerRef.current && secondContainerRef.current) {
        windowElement.dragula([firstContainerRef.current, secondContainerRef.current, thirdContainerRef.current, fourthContainerRef.current,fifthContainerRef.current,sixthContainerRef.current]);
      }
    }, []);

    const [selectedImage, setSelectedImage] = useState(face9);
    const fileInputRef: any = useRef(null);
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="CRM" currentpage="Deals" activepage="Deals" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-2">Deals</span><SpkBadge variant="primary" Customclass="align-middle">26</SpkBadge>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <SpkButton Buttonvariant="primary" Size="sm" Customclass="" onClickfunc={handleShow} Buttontoggle="modal" Buttontarget="#create-contact">
                                        <i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal
                                    </SpkButton>
                                    <SpkButton Buttonvariant="success-light" Size="sm" Customclass="">
                                        Export As CSV
                                    </SpkButton>
                                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                        <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Date Added</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">A - Z</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                {Dealsdata.map((idx) => (
                    <Col xxl={2} md={4} className="" key={Math.random()}>
                        <SpkDealcards key={Math.random()} cardClass={`border border-${idx.color} border-opacity-50`} bodyClass="p-3" mainClass="d-flex align-items-top flex-wrap justify-content-between" icon={idx.iconClass} iconClass={idx.title} iconColor={idx.color} badge={idx.badgeText} badgeColor={idx.color} iconColors={idx.color} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={2} className="" id="leads-discovered" ref={firstContainerRef}>
                    {Dealsdata1.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="leads-qualified" ref={secondContainerRef}>
                    {Dealsdata2.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="contact-initiated" ref={thirdContainerRef}>
                    {Dealsdata3.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="needs-identified" ref={fourthContainerRef}>
                    {Dealsdata4.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="negotiation" ref={fifthContainerRef}>
                    {Dealsdata5.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="deal-finalized" ref={sixthContainerRef}>
                    {Dealsdata6.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start:: New Deal --> */}
            <Modal show={show} onHide={handleClose} centered className="fade" id="create-contact" tabIndex={-1}>
                    <Modal.Header>
                        <h6 className="modal-title">New Deal</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src={selectedImage || ''} alt="" id="profile-img" />
                                        <SpkBadge variant="primary" Customclass="rounded-pil avatar-badge" Onclickfun={openFileInput}>
                                            <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}  />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-name" className="">Contact Name</Form.Label>
                                <Form.Control type="text" className="" id="deal-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-lead-score" className="">Deal Value</Form.Label>
                                <Form.Control type="number" className="" id="deal-lead-score" placeholder="Deal Value" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                                <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Last Contacted</Form.Label>
                                <InputGroup className="custom-input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <SpkFlatpickr inputClass="form-control" placeholder='Choose date and time' onfunChange={handleDateChange} dataEnableTime={true} />
                                </InputGroup>
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Create Deal</SpkButton>
                    </Modal.Footer>
            </Modal>
            {/* <!-- End:: New Deal --> */}
        </Fragment>
    )
};

export default Deals;
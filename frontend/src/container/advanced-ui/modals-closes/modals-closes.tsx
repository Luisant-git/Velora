import  { Fragment, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { CloseButton, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { modal1, modal10, modal11, modal12, modal13, modal14, modal15, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9 } from "../../../components/common/data/prism/advanced-ui-prism";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import { Link } from "react-router-dom";

const ModalsCloses = () => {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// static
	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);
	//scrolling
	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	//popover
	const [show3, setShow3] = useState(false);

	const handleClose3 = () => setShow3(false);
	const handleShow3 = () => setShow3(true);

	//@mdo
	const [show4, setShow4] = useState(false);

	const handleClose4 = () => setShow4(false);
	const handleShow4 = () => setShow4(true);

	//@fat
	const [show5, setShow5] = useState(false);

	const handleClose5 = () => setShow5(false);
	const handleShow5 = () => setShow5(true);

	//@getbootstrap

	const [show6, setShow6] = useState(false);

	const handleClose6 = () => setShow6(false);
	const handleShow6 = () => setShow6(true);

	//vertically centered modal
	const [modalShow, setModalShow] = useState(false);

	//vertically centered scrollable
	const [modalShow1, setModalShow1] = useState(false);

	//grid
	const [modalShow2, setModalShow2] = useState(false);

	// small modal
	const [smShow, setSmShow] = useState(false);

	//large modal
	const [lgShow, setLgShow] = useState(false);

	//large modal
	const [xlShow, setXlShow] = useState(false);

	//  Twomodals
	const [showt1, setShowt1] = useState(false);
	const [showt2, setShowt2] = useState(false);
	const handleCloset1 = () => setShowt1(false);
	const handleShowt1 = () => setShowt1(true);
	const handleCloset2 = () => setShowt2(false);

	const Handleclose1 = () => {
		setShowt1(false);
		setShowt2(true);
	};
	const Handleclose2 = () => {
		setShowt2(false);
		setShowt1(true);
	};

	//fullscreen modals
	const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down",];
	const colors = ["primary", "secondary", "warning", "info", "success", "danger"];
	const [fullscreen, setFullscreen] = useState<any>(true);
	const [showf, setShowf] = useState(false);

	function handleShowf(breakpoint: string | boolean, _color: string) {
		setFullscreen(breakpoint);
		setShowf(true);
	}

	//Animated Modal
	const [, _setVisible] = useState(false);

	const [animation1, setanimation1] = useState(false);
	const [animation2, setanimation2] = useState(false);
	const [animation3, setanimation3] = useState(false);
	const [animation4, setanimation4] = useState(false);
	const [animation5, setanimation5] = useState(false);
	const [animation6, setanimation6] = useState(false);
	const [animation7, setanimation7] = useState(false);
	const [animation8, setanimation8] = useState(false);
	const [animation9, setanimation9] = useState(false);



	const viewDemoShow1 = (modal: string) => {
		switch (modal) {
			case "Basic":
				setanimation1(true);
				break;
			case "show2":
				setanimation2(true);
				break;
			case "show3":
				setanimation3(true);
				break;
			case "show4":
				setanimation4(true);
				break;
			case "show5":
				setanimation5(true);
				break;
			case "show6":
				setanimation6(true);
				break;
			case "show7":
				setanimation7(true);
				break;
			case "show8":
				setanimation8(true);
				break;
			case "show9":
				setanimation9(true);
				break;
		}
	};

	const viewDemoClose1 = (modal: string) => {
		switch (modal) {
			case "Basic":
				setanimation1(false);
				break;
			case "show2":
				setanimation2(false);
				break;
			case "show3":
				setanimation3(false);
				break;
			case "show4":
				setanimation4(false);
				break;
			case "show5":
				setanimation5(false);
				break;
			case "show6":
				setanimation6(false);
				break;
			case "show7":
				setanimation7(false);
				break;
			case "show8":
				setanimation8(false);
				break;
			case "show9":
				setanimation9(false);
				break;
		}
	};

	return (
		<Fragment>

			{/* <!-- Page Header --> */}

			<Pageheader title="Advanced Ui" currentpage="Modal & Closes" activepage="Modal & Closes" />

			{/* <!-- Page Header Close --> */}

			{/* <!-- Start:: row-1 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Basic Modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal1}>
						<SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={handleShow}>
							Launch demo modal
						</SpkButton>
						<Modal show={show} onHide={handleClose} className="fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalLabel1">Modal title</h6>
							</Modal.Header>
							<Modal.Body className="">
								...
							</Modal.Body>
							<Modal.Footer className="">
								<SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={handleClose}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Static backdrop" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal2}>
						<SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={handleShow1}>
							Launch static backdrop modal
						</SpkButton>
						<Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<p className="mb-0">I will not close if you click outside me. Don't even try to
									press
									escape key.</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={handleClose1}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button" >Understood</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Scrolling long content" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal3}>
						<SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={handleShow2}>
							Scrolling long content
						</SpkButton>
						<Modal show={show2} onHide={handleClose2} keyboard={false}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel1">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Libero
									ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
									nisi
									ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									voluptatibus, ipsam quo est rerum modi quos expedita facere,
									ex
									tempore fuga similique ipsa blanditiis et accusamus
									temporibus
									commodi voluptas! Nobis veniam illo architecto expedita quam
									ratione quaerat omnis. In, recusandae eos! Pariatur,
									deleniti
									quis ad nemo ipsam officia temporibus, doloribus fuga
									asperiores
									ratione distinctio velit alias hic modi praesentium aperiam
									officiis eaque, accusamus aut. Accusantium assumenda,
									commodi
									nulla provident asperiores fugit inventore iste amet aut
									placeat
									consequatur reprehenderit. Ratione tenetur eligendi, quis
									aperiam dolores magni iusto distinctio voluptatibus minus a
									unde
									at! Consequatur voluptatum in eaque obcaecati, impedit
									accusantium ea soluta, excepturi, quasi quia commodi
									blanditiis?
									Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
									consequuntur quod quo veniam? Labore dignissimos reiciendis
									accusamus recusandae est consequuntur iure.</p>
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<p>Lorem ipsum dolor sit amet.</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={handleClose2}>Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Tooltips" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal4}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={handleShow3}>
							Launch demo modal
						</SpkButton>
						<Modal show={show3} onHide={handleClose3} centered className='popover-modal' id="exampleModalScrollable4" aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
							aria-hidden="true">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel4">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<h5>Tooltips in a modal</h5>
								<p className="mb-0">
									<SpkTooltips placement="top" title="tooltip">
										<Link to="#!"  className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link </Link>
									</SpkTooltips>
									and 
									<SpkTooltips placement="top" title="tooltip">
										<Link to="#!"  className="text-primary ms-1" data-bs-toggle="tooltip" title="Tooltip"> that link </Link>
									</SpkTooltips> have tooltips on hover.
								</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={handleClose3}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button" >Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Vertical Centered Scrollable" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal5}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => setModalShow1(true)}
							Buttontarget="#exampleModalScrollable3">
							Vertically centered scrollable modal
						</SpkButton>
						<Modal centered show={modalShow1} onHide={() => setModalShow1(false)}
							keyboard={false} className="modal fade">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel3">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									voluptatibus, ipsam quo est rerum modi quos expedita facere,
									ex
									tempore fuga similique ipsa blanditiis et accusamus
									temporibus
									commodi voluptas! Nobis veniam illo architecto expedita quam
									ratione quaerat omnis. In, recusandae eos! Pariatur,
									deleniti
									quis ad nemo ipsam officia temporibus, doloribus fuga
									asperiores
									ratione distinctio velit alias hic modi praesentium aperiam
									officiis eaque, accusamus aut. Accusantium assumenda,
									commodi
									nulla provident asperiores fugit inventore iste amet aut
									placeat
									consequatur reprehenderit. Ratione tenetur eligendi, quis
									aperiam dolores magni iusto distinctio voluptatibus minus a
									unde
									at! Consequatur voluptatum in eaque obcaecati, impedit
									accusantium ea soluta, excepturi, quasi quia commodi
									blanditiis?
									Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
									consequuntur quod quo veniam? Labore dignissimos reiciendis
									accusamus recusandae est consequuntur iure.</p>
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<p>Lorem ipsum dolor sit amet.</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => setModalShow1(false)}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Toggle between modals" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal6}>
						<SpkButton Buttonvariant="primary" Buttontoggle="modal" onClickfunc={handleShowt1}
						>Open first modal
						</SpkButton>
						<Modal id="m1" className="fade" aria-hidden="true"
							aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
								</h6>
							</Modal.Header>
							<Modal.Body>
								Show a second modal and hide this one with the button below.
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='primary'
									Buttontarget="#exampleModalToggle2" onClickfunc={Handleclose1}
									Buttontoggle="modal">Open second modal</SpkButton>
							</Modal.Footer>
						</Modal>
						<Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
							centered show={showt2} onHide={handleCloset2}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
								</h6>
							</Modal.Header>
							<Modal.Body>
								Hide this modal and show the first with the button below.
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='primary' Buttontarget="#exampleModalToggle" onClickfunc={Handleclose2}
									Buttontoggle="modal">Back to first</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Using the grid" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal7}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => setModalShow2(true)}
							Buttontarget="#exampleModalScrollable5">
							Launch demo modal
						</SpkButton>
						<Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel5">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<Container fluid>
									<Row>
										<Col md={4} className=" bg-light border">.col-md-4</Col>
										<Col md={4} className=" ms-auto bg-light border">.col-md-4
											.ms-auto</Col>
									</Row>
									<Row className="row mt-3">
										<Col md={3} className=" ms-auto bg-light border">.col-md-3
											.ms-auto</Col>
										<Col md={2} className=" ms-auto bg-light border">.col-md-2
											.ms-auto</Col>
									</Row>
									<Row className="row mt-3">
										<Col md={6} className=" ms-auto bg-light border">.col-md-6
											.ms-auto</Col>
									</Row>
									<Row className="row mt-3">
										<Col sm={9} className=" bg-light border">
											Level 1: .col-sm-9
											<Row>
												<Col sm={6} className="col-8 bg-light border">
													Level 2: .col-8 .col-sm-6
												</Col>
												<Col sm={6} className="col-4 bg-light border">
													Level 2: .col-4 .col-sm-6
												</Col>
											</Row>
										</Col>
									</Row>
								</Container>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={() => setModalShow2(false)}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Vertically centered modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal8}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => setModalShow(true)}
							Buttontarget="#exampleModalScrollable2">
							Vertically centered modal
						</SpkButton>
						<Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel2">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Libero
									ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
									nisi
									ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => setModalShow(false)}
									Buttondismiss="modal">Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-1 --> */}

			{/* <!-- Start:: row-2 --> */}
			<Row>
				<Col xl={12}>
					<ShowCode title="Fullscreen modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal9}>
						{values.map((v, idx) => (
							<SpkButton Buttonvariant=""
								key={idx}
								Customclass={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
								onClickfunc={() => handleShowf(v, colors[idx % colors.length])}
							>
								Full screen {typeof v === "string" && `below ${v.split("-")[0]}`}
							</SpkButton>
						))}
						<Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
							<Modal.Header className="me-2" closeButton>
								<Modal.Title as="h6">
									Full screen {typeof fullscreen === "string" ? `below ${fullscreen.split("-")[0]}` : ''}
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>Modal body content</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant="secondary" onClickfunc={() => setShowf(false)}>
									Close
								</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Optional sizes" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal10}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => setXlShow(true)}
							Buttontarget="#exampleModalXl">Extra large modal</SpkButton>
						<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => setLgShow(true)}
							Buttontarget="#exampleModalLg">Large modal</SpkButton>
						<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => setSmShow(true)}
							Buttontarget="#exampleModalSm">Small modal</SpkButton>
						<Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
							aria-labelledby="example-modal-sizes-title-sm">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalXlLabel">Extra large
									modal</h6>
							</Modal.Header>
							<Modal.Body>
								...
							</Modal.Body>
						</Modal>
						<Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalLgLabel">Large modal
								</h6>
							</Modal.Header>
							<Modal.Body>
								...
							</Modal.Body>
						</Modal>
						<Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
							aria-labelledby="example-modal-sizes-title-sm">
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalSmLabel">Small modal
								</h6>
							</Modal.Header>
							<Modal.Body>
								...
							</Modal.Body>
						</Modal>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-2 --> */}

			{/* <!-- Start:: row-3 --> */}
			<h6 className="mb-3">Close Buttons:</h6>
			<Row>
				<Col xl={4}>
					<ShowCode title="Basic Close" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal12}>
						<SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" aria-label="Close"></SpkButton>
					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="Disable state" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal13}>
						<SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Disabled={true} aria-label="Close"></SpkButton>
					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="White variant" customCardClass="custom-card overflow-hidden" customCardHeaderClass="" customCardBodyClass="bg-black" reactCode={modal14}>
						<CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
						<CloseButton type="button" className="btn-close btn-close-white" disabled aria-label="Close"></CloseButton>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-3 --> */}

			{/* <!-- Start:: row-4 --> */}
			<Row>
				<Col xl={12}>
					<ShowCode title="Modal Animation Effects" reactCode={modal15} customCardClass="">
						<Row className="row-sm">
							<Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
								<Rodal onClose={() => viewDemoClose1("Basic")} visible={animation1} animation='Scale' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("Basic")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
								<Rodal onClose={() => viewDemoClose1("show2")} visible={animation2} animation='fade' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show2")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
								<Rodal onClose={() => viewDemoClose1("show3")} visible={animation3} animation='flip' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show3")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
								<Rodal onClose={() => viewDemoClose1("show4")} visible={animation4} animation='door' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show4")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
								<Rodal onClose={() => viewDemoClose1("show5")} visible={animation5} animation='rotate' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show5")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
								<Rodal onClose={() => viewDemoClose1("show6")} visible={animation6} animation='slideUp' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show6")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
								<Rodal onClose={() => viewDemoClose1("show7")} visible={animation7} animation='slideDown' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show7")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
								<Rodal onClose={() => viewDemoClose1("show8")} visible={animation8} animation='slideLeft' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show8")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link to="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
								<Rodal onClose={() => viewDemoClose1("show9")} visible={animation9} animation='slideRight' height={330}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => viewDemoClose1("show9")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
						</Row>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Varying modal content" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="" reactCode={modal11}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="btn  mb-1 me-2" onClickfunc={handleShow4}>Open modal for
							@mdo</SpkButton>
						<Modal show={show4} onHide={handleClose4}>
							<Modal.Header closeButton>
								<Modal.Title as="h6">New message to @mdo
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Recipient:</Form.Label>
										<Form.Control type="email" defaultValue="@mdo" autoFocus />
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>Message:</Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant="secondary" onClickfunc={handleClose4}>
									Close
								</SpkButton>
								<SpkButton Buttonvariant="primary">Send message</SpkButton>
							</Modal.Footer>
						</Modal>
						<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="mb-1 me-2" onClickfunc={handleShow5}>Open modal for
							@fat</SpkButton>
						<Modal show={show5} onHide={handleClose5}>
							<Modal.Header closeButton>
								<Modal.Title as="h6">New message to @fat
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Recipient:</Form.Label>
										<Form.Control type="email" defaultValue="@fat" autoFocus />
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>Message:</Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant="secondary" onClickfunc={handleClose5}>
									Close
								</SpkButton>
								<SpkButton Buttonvariant="primary">Send message</SpkButton>
							</Modal.Footer>
						</Modal>
						<SpkButton Buttonvariant='light' Buttontype="button" Customclass="mb-1" onClickfunc={handleShow6}>Open modal for
							@getbootstrap</SpkButton>
						<Modal show={show6} onHide={handleClose6}>
							<Modal.Header closeButton >
								<Modal.Title as="h6">New message to @getbootstrap</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Recipient:</Form.Label>
										<Form.Control
											type="email"
											defaultValue=" @getbootstrap"
											autoFocus
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>Message:</Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant="secondary" onClickfunc={handleClose6}>
									Close
								</SpkButton>
								<SpkButton Buttonvariant="primary">Send message</SpkButton>
							</Modal.Footer>
						</Modal>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-4 --> */}
		</Fragment>
	)
};

export default ModalsCloses;
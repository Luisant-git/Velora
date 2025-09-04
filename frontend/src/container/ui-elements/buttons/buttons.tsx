import  { Fragment } from "react";
import { Col } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { databutton17, databutton2, databutton21, databutton22, databutton3, databutton5, databutton7, databutton8, databutton9, reactbutton1, reactbutton10, reactbutton11, reactbutton12, reactbutton13, reactbutton14, reactbutton15, reactbutton16, reactbutton17, reactbutton18, reactbutton19, reactbutton2, reactbutton20, reactbutton21, reactbutton22, reactbutton23, reactbutton24, reactbutton25, reactbutton3, reactbutton4, reactbutton5, reactbutton6, reactbutton7, reactbutton8, reactbutton9, reusebutton1, reusebutton10, reusebutton11, reusebutton12, reusebutton13, reusebutton14, reusebutton15, reusebutton16, reusebutton17, reusebutton18, reusebutton19, reusebutton2, reusebutton20, reusebutton21, reusebutton22, reusebutton23, reusebutton24, reusebutton25, reusebutton3, reusebutton4, reusebutton5, reusebutton6, reusebutton7, reusebutton8, reusebutton9 } from "../../../components/common/data/prism/ui-elements-prism";
import { ColoredButtons, DefaultButtons, GhostButtons, GradientButtons, LightButtons, OutlineButtons, SocialIconButtons  } from "../../../components/common/data/ui-elements/buttonsdata";

const Buttons = () => {
	return (
		<Fragment>

			{/* <!-- Page Header --> */}

			<Pageheader title="Ui Elements" currentpage="Buttons" activepage="Buttons" />

			{/* <!-- Page Header Close --> */}

			{/* <!--ROW-START--> */}
			<div className="row">
				<Col xl={12}>
					<ShowCode title="Light Buttons" customCardBodyClass="" reactCode={reactbutton1} reusableCode={reusebutton1}>
						<div className="btn-list">
							<SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="me-2">Primary</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="primary1-light" Customclass="me-2">Primary1</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="primary2-light" Customclass="me-2">Primary2</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="primary3-light" Customclass="me-2">Primary3</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="me-2">Secondary</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="me-2">Success</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="me-2">Danger</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="warning-light" Customclass="me-2">Warning</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="info-light" Customclass="me-2">Info</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="purple-light" Customclass="me-2">Purple</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="teal-light" Customclass="me-2">Teal</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="orange-light" Customclass="me-2">Orange</SpkButton>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Default Buttons" customCardBodyClass="" dataCode={databutton2} reactCode={reactbutton2} reusableCode={reusebutton2}>
						<div className="btn-list">
							{DefaultButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="waves-effect waves-light me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Light Rounded Buttons" customCardBodyClass="" dataCode={databutton3} reactCode={reactbutton3} reusableCode={reusebutton3}>
						<div className="btn-list">
							{LightButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Rounded Buttons" customCardBodyClass="" dataCode={databutton2} reactCode={reactbutton4} reusableCode={reusebutton4}>
						<div className="btn-list">
							{DefaultButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Outline Buttons" customCardBodyClass="" dataCode={databutton5} reactCode={reactbutton5} reusableCode={reusebutton5}>
						<div className="btn-list">
							{OutlineButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Rounded Outline Buttons" customCardBodyClass="" dataCode={databutton5} reactCode={reactbutton6} reusableCode={reusebutton6}>
						<div className="btn-list">
							{OutlineButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass=" rounded-pill me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Gradient Buttons" customCardBodyClass="" dataCode={databutton7} reactCode={reactbutton7} reusableCode={reusebutton7}>
						<div className="btn-list">
							{GradientButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Rounded Gradient Buttons" customCardBodyClass="" dataCode={databutton8} reactCode={reactbutton8} reusableCode={reusebutton8}>
						<div className="btn-list">
							{GradientButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Ghost Buttons" customCardBodyClass="" dataCode={databutton9} reactCode={reactbutton9} reusableCode={reusebutton9}>
						<div className="btn-list">
							{GhostButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="rounded-pill me-2" key={Math.random()}>{idx.text}</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Button tags" customCardBodyClass="" reactCode={reactbutton10} reusableCode={reusebutton10}>
						<div className="btn-list">
							<SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"} >Link</SpkButton>
							<SpkButton Buttontype="submit" Buttonvariant="secondary" >Button</SpkButton>
							<SpkButton as="input" Buttontype="button" Buttonvariant="info" Value="Input" />
							<SpkButton as="input" Buttontype="submit" Buttonvariant="warning" />
							<SpkButton as="input" Buttontype="reset" Buttonvariant="success" />
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="disabled state with anchor tags" customCardBodyClass="" reactCode={reactbutton11} reusableCode={reusebutton11}>
						<div className="btn-list">
							<div className="mb-4">
								<SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}> Primary Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}> Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-primary" Disabled={true}>Primary Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Disabled={true}>Button</SpkButton>
							</div>

							<div>
								<SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary Link</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="button plugin toggle states" customCardBodyClass="" reactCode={reactbutton12} reusableCode={reusebutton12}>
						<div className="btn-list">
							<div className="mb-4">
								<SpkButton Buttontype="button" Buttonvariant="primary">Toggle button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary">Active toggle button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true}>Disabled toggle button</SpkButton>
							</div>
							<div>
								<SpkButton Buttontype="button" Buttonvariant="primary" Navigate={"#!"}>Toggle link</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary" Navigate={"#!"}>Active toggle link</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="teal" Disabled={true} Navigate={"#!"}>Disabled toggle link</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title=" Link functionally caveat" customCardBodyClass="" reactCode={reactbutton13} reusableCode={reusebutton13}>
						<div className="btn-list">
							<SpkButton Buttontype="button" Buttonvariant="primary" Disabled={true}>Primary link</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="secondary" Disabled={true}>Link</SpkButton>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Loading Buttons" customCardBodyClass="" reactCode={reactbutton14} reusableCode={reusebutton14}>
						<div className="btn-list d-md-flex flex-wrap">

							<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-loader">
								<span className="me-2">Loading</span>
								<span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
							</SpkButton>

							<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="btn-loader">
								<span className="me-2">Loading</span>
								<span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
							</SpkButton>

							<SpkButton Buttontype="button" Buttonvariant="info-transparent" Customclass="btn-loader">
								<span className="me-2">Loading</span>
								<span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
							</SpkButton>

							<SpkButton Buttontype="button" Buttonvariant="warning-transparent" Customclass="btn-loader">
								<span className="me-2">Loading</span>
								<span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
							</SpkButton>

							<SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-loader" Disabled={true}>
								<span className="me-2">Disabled</span>
								<span className="loading"><i className="ri-refresh-line fs-16"></i></span>
							</SpkButton>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Icon Buttons" customCardBodyClass="" reactCode={reactbutton15} reusableCode={reusebutton15}>
						<div className="btn-list d-md-flex d-block">
							<div className="mb-md-0 mb-2">
								<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
									<i className="ri-bank-fill"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
									<i className="ri-medal-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
									<i className="ri-archive-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-icon me-5">
									<i className="ri-calendar-2-line"></i>
								</SpkButton>
							</div>
							<div className="mb-md-0 mb-2">
								<SpkButton Buttontype="button" Buttonvariant="primary-transparent" Customclass="rounded-pill btn-icon">
									<i className="ri-home-smile-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary-transparent" Customclass="rounded-pill btn-icon">
									<i className="ri-delete-bin-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="success-transparent" Customclass="rounded-pill btn-icon">
									<i className="ri-notification-3-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="danger-transparent" Customclass="rounded-pill btn-icon me-5">
									<i className="ri-chat-settings-line"></i>
								</SpkButton>
							</div>
							<div className="">
								<SpkButton Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
									<i className="ri-phone-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
									<i className="ri-customer-service-2-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
									<i className="ri-live-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-secondary" Customclass="rounded-pill btn-icon">
									<i className="ri-save-line"></i>
								</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Icon Button Sizes" reactCode={reactbutton16} customCardClass="custom-card" reusableCode={reusebutton16}>
						<div className="btn-list d-md-flex d-block gap-5">
							<div className="mb-md-0 mb-2">
								<SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="btn-icon">
									<i className="ri-bank-fill"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-icon">
									<i className="ri-medal-line"></i>
								</SpkButton>
								<SpkButton Size="lg" Buttontype="button" Buttonvariant="danger" Customclass="btn-icon">
									<i className="ri-archive-line"></i>
								</SpkButton>
							</div>
							<div className="mb-md-0 mb-2">
								<SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="rounded-pill btn-icon">
									<i className="ri-home-smile-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="rounded-pill btn-icon">
									<i className="ri-delete-bin-line"></i>
								</SpkButton>
								<SpkButton Size="lg" Buttontype="button" Buttonvariant="success-light" Customclass="rounded-pill btn-icon">
									<i className="ri-notification-3-line"></i>
								</SpkButton>
							</div>
							<div className="">
								<SpkButton Size="sm" Buttontype="button" Buttonvariant="outline-primary" Customclass="rounded-pill btn-icon">
									<i className="ri-phone-line"></i>
								</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="outline-teal" Customclass="rounded-pill btn-icon">
									<i className="ri-customer-service-2-line"></i>
								</SpkButton>
								<SpkButton Size="lg" Buttontype="button" Buttonvariant="outline-success" Customclass="rounded-pill btn-icon">
									<i className="ri-live-line"></i>
								</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title=" Social Buttons" customCardBodyClass="" dataCode={databutton17} reactCode={reactbutton17} reusableCode={reusebutton17}>
						{SocialIconButtons.map((idx) => (
							<SpkButton Buttontype="button" Buttonvariant={idx.class1} Customclass="waves-effect waves-light m-1 btn-icon" key={Math.random()}>
								<i className={`ri-${idx.class}-line`}></i>
							</SpkButton>
						))}
					</ShowCode>
				</Col>
				<Col xl={12}>
					<div className="row">
						<Col xl={12}>
							<ShowCode title="Sizes" customCardBodyClass="" reactCode={reactbutton18} reusableCode={reusebutton18}>
								<div className="btn-list">
									<SpkButton Size="sm" Buttontype="button" Buttonvariant="primary" Customclass="">
										Small button
									</SpkButton>
									<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="">
										Default button
									</SpkButton>
									<SpkButton Size="lg" Buttontype="button" Buttonvariant="success" Customclass="">
										Large button
									</SpkButton>
								</div>
							</ShowCode>
						</Col>
					</div>
				</Col>
				<Col xl={12}>
					<div className="row">
						<Col xl={12}>
							<ShowCode title="Button Widths" customCardBodyClass="" reactCode={reactbutton19} reusableCode={reusebutton19}>
								<div className="btn-list">
									<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-w-xs">XS</SpkButton>
									<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-w-sm">SM</SpkButton>
									<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="btn-w-md">MD</SpkButton>
									<SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-w-lg">LG</SpkButton>
								</div>
							</ShowCode>
						</Col>
					</div>
				</Col>
				<Col xl={12}>
					<ShowCode title="Buttons With Different Shadows" customCardBodyClass="" reactCode={reactbutton20} reusableCode={reusebutton20}>
						<div className="btn-list d-flex">
							<div className="me-5">
								<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-sm">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="shadow-lg">Button</SpkButton>
							</div>
							<div>

								<SpkButton Size="sm" Buttontype="button" Buttonvariant="secondary" Customclass="shadow-sm">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="info" Customclass="shadow">Button</SpkButton>
								<SpkButton Size="lg" Buttontype="button" Buttonvariant="success" Customclass="shadow-lg">Button</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Different Colored Buttons With Shadows" customCardBodyClass="" reactCode={reactbutton21} dataCode={databutton21} reusableCode={reusebutton21}>
						<div className="btn-list">
							{ColoredButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass={`shadow-${idx.class}`} key={Math.random()}>Button</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Raised Buttons" customCardBodyClass="" reactCode={reactbutton22} dataCode={databutton22} reusableCode={reusebutton22}>
						<div className="btn-list">
							{ColoredButtons.map((idx) => (
								<SpkButton Buttontype="button" Buttonvariant={idx.class} Customclass="btn-raised-shadow" key={Math.random()}>Button</SpkButton>
							))}
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Label Buttons" customCardBodyClass="" reactCode={reactbutton23} reusableCode={reusebutton23}>
						<div className="btn-list">
							<SpkButton Buttontype="button" Buttonvariant="primary" Customclass="label-btn">
								<i className="ri-chat-smile-line label-btn-icon me-2"></i>
								Primary
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="label-btn">
								<i className="ri-settings-4-line label-btn-icon me-2"></i>
								Secondary
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="warning" Customclass="label-btn rounded-pill">
								<i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
								Warning
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="info" Customclass="label-btn rounded-pill">
								<i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
								Info
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="success" Customclass="label-btn label-end">
								<i className="ri-thumb-up-line label-btn-icon ms-2"></i>
								Success
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="danger" Customclass="label-btn label-end rounded-pill">
								<i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
								Cancel
							</SpkButton>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Custom Buttons" customCardBodyClass="" reactCode={reactbutton24} reusableCode={reusebutton24}>
						<div className="btn-list">
							<SpkButton Buttontype="button" Buttonvariant="info" Customclass="custom-button rounded-pill">
								<span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
								Twitter
							</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="teal-light" Customclass="btn-border-down">Border</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-border-start">Border</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="purple-light" Customclass="btn-border-end">Border</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="warning-light" Customclass="btn-border-top">Border</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-glare"> Glare Border</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="danger" Customclass="btn-hover btn-hover-animate">Like</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-darken-down">Hover</SpkButton>
							<SpkButton Buttontype="button" Buttonvariant="orange" Customclass="btn-custom-down">Hover</SpkButton>
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Block buttons" customCardBodyClass="" reactCode={reactbutton25} reusableCode={reusebutton25}>
						<div className="btn-list">
							<div className="d-grid gap-2 mb-4">
								<SpkButton Buttontype="button" Buttonvariant="primary">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="secondary">Button</SpkButton>
							</div>
							<div className="d-grid gap-2 d-md-block">

								<SpkButton Buttontype="button" Buttonvariant="info">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="success">Button</SpkButton>
							</div>
							<div className="d-grid gap-2 col-6 mx-auto">

								<SpkButton Buttontype="button" Buttonvariant="danger">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="warning">Button</SpkButton>
							</div>
							<div className="d-grid gap-2 d-md-flex justify-content-md-end">

								<SpkButton Buttontype="button" Buttonvariant="teal">Button</SpkButton>
								<SpkButton Buttontype="button" Buttonvariant="purple">Button</SpkButton>
							</div>
						</div>
					</ShowCode>
				</Col>
			</div>
			{/* <!--ROW-END--> */}
		</Fragment>
	)
};

export default Buttons;
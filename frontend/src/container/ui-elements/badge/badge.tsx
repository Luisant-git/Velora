import  { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { databadge10, databadge12, databadge13, databadge3, databadge4, databadge8, reactbadge1, reactbadge10, reactbadge11, reactbadge12, reactbadge13, reactbadge2, reactbadge3, reactbadge4, reactbadge5, reactbadge6, reactbadge7, reactbadge8, reactbadge9, reusebadge1, reusebadge10, reusebadge11, reusebadge12, reusebadge13, reusebadge2, reusebadge3, reusebadge4, reusebadge5, reusebadge6, reusebadge7, reusebadge8, reusebadge9 } from "../../../components/common/data/prism/ui-elements-prism";
import { Outlinebadgesdata, badges1, badgesdata } from "../../../components/common/data/ui-elements/badgesdata";
import face2 from "../../../assets/images/faces/2.jpg"
import face10 from "../../../assets/images/faces/10.jpg"
import face15 from "../../../assets/images/faces/15.jpg"

const Badges = () => {
	return (
		<Fragment>
			{/* <!-- Page Header --> */}

			<Pageheader title="Ui Elements" currentpage="Badges" activepage="Badges" />

			{/* <!-- Page Header Close --> */}

			{/* <!-- Start::row-1 --> */}
			<Row>
				<Col xl={12}>
					<ShowCode title="Buttons With Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge1} reusableCode={reusebadge1}>
						<SpkButton Buttonvariant='primary' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="primary1" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='primary1' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='primary2' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="warning" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='primary3' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="primary1" Customclass=" ms-2 text-fixed-white">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="primary" Customclass=" ms-2 text-fixed-white">7</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='success' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="danger" Customclass=" ms-2 text-fixed-white">12</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='info' Buttontype="button" Customclass="my-1 me-2">
							Notifications <SpkBadge variant="warning" Customclass=" ms-2 text-fixed-white">32</SpkBadge>
						</SpkButton>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Outline Button Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge2} reusableCode={reusebadge2}>
						<SpkButton Buttonvariant='outline-primary' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-primary1' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-primary2' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-primary3' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">4</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-secondary' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">7</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-success' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">12</SpkBadge>
						</SpkButton>
						<SpkButton Buttonvariant='outline-info' Buttontype="button" Customclass="btn  my-1 me-2">
							Notifications <SpkBadge variant="" Customclass="ms-2">32</SpkBadge>
						</SpkButton>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-1 --> */}

			{/* <!-- Start::row-2 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Light Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge3} dataCode={databadge3} reusableCode={reusebadge3}>
						{Outlinebadgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={badge.color} Customclass={`bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge4} dataCode={databadge4} reusableCode={reusebadge4}>
						{badgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={badge.color} Customclass={`bg-${badge.color} ${badge.class}`}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-2 --> */}

			{/* <!-- Start::row-6 --> */}
			<Row>
				<Col xl={12}>
					<Row>
						<Col xl={12}>
							<ShowCode title="Positioned Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-4" reactCode={reactbadge5} reusableCode={reusebadge5}>
								<SpkButton Buttontype="button" Customclass="position-relative">
									Inbox
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
										99+
										<span className="visually-hidden">unread messages</span>
									</span>
								</SpkButton>
								<SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="position-relative">
									Profile
									<span
										className="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</SpkButton>
								<span className="avatar">
									<img src={face2} alt="img" />
									<span
										className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<span className="avatar avatar-rounded">
									<img src={face15} alt="img" />
									<span className="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light  rounded-pill">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<span className="avatar avatar-rounded">
									<img src={face10} alt="img" />
									<span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
							</ShowCode>
						</Col>
						<Col xl={12}>
							<ShowCode title="Custom Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap align-items-center" reactCode={reactbadge6} reusableCode={reusebadge6}>
								<p className="mb-xxl-0 badge bg-outline-secondary custom-badge fs-15 me-5">
									<i className="ti ti-flame me-1 me-1 d-inline-flex"></i>Hot</p>
								<p className="mb-xxl-0 icon-badge me-5">
									<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
									<SpkBadge variant="success" Customclass="rounded-pill">14</SpkBadge>
								</p>
								<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
								<p className="mb-xxl-0 text-badge me-5">
									<span className="text fs-18">Inbox</span>
									<SpkBadge variant="success" Pill={true}>32</SpkBadge>
								</p>
							</ShowCode>
						</Col>
					</Row>
				</Col>
				<Col xl={12}>
					<ShowCode title="Headings" customCardClass="custom-card" customCardBodyClass="" reactCode={reactbadge7} reusableCode={reusebadge7}>
						<h1>Example heading <SpkBadge variant="primary">New</SpkBadge></h1>
						<h2>Example heading <SpkBadge variant="primary">New</SpkBadge></h2>
						<h3>Example heading <SpkBadge variant="primary">New</SpkBadge></h3>
						<h4>Example heading <SpkBadge variant="primary">New</SpkBadge></h4>
						<h5>Example heading <SpkBadge variant="primary">New</SpkBadge></h5>
						<h6>Example heading <SpkBadge variant="primary">New</SpkBadge></h6>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-6 --> */}

			{/* <!-- Start::row-3 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Gradient Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge8} dataCode={databadge8} reusableCode={reusebadge8}>
						{badges1.map((badge1) => (
							<SpkBadge key={Math.random()} Customclass={` bg-${badge1.color}-gradient`}>{badge1.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Gradient Pill Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge9} dataCode={databadge8} reusableCode={reusebadge9}>
						{badges1.map((badge1) => (
							<SpkBadge key={Math.random()} Customclass={`bg-${badge1.color}-gradient`} Pill={true}>{badge1.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-3 --> */}

			{/* <!-- Start::row-4 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Outline Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge10} dataCode={databadge10} reusableCode={reusebadge10}>
						{Outlinebadgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={`outline-${badge.color}`} Customclass={badge.class}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Outline Pill Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge11} dataCode={databadge10} reusableCode={reusebadge11}>
						{Outlinebadgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={`outline-${badge.color}`} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-4 --> */}

			{/* <!-- Start::row-5 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Pill badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge12} dataCode={databadge12} reusableCode={reusebadge12}>
						{badgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={badge.color} Pill={true} Customclass={badge.class}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Light Pill Badges" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap gap-2" reactCode={reactbadge13} dataCode={databadge13} reusableCode={reusebadge13}>
						{Outlinebadgesdata.map((badge) => (
							<SpkBadge key={Math.random()} variant={badge.color} Pill={true} Customclass={`bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</SpkBadge>
						))}
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End::row-5 --> */}
		</Fragment>
	)
};

export default Badges;
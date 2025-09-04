import React, { Fragment } from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkBreadcrumb from "../../../@spk-reusable-components/reusable-uielements/spk-breadcrumb";
import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6, reusebreadcrumb1, reusebreadcrumb2, reusebreadcrumb3, reusebreadcrumb4, reusebreadcrumb5, reusebreadcrumb6 } from "../../../components/common/data/prism/ui-elements-prism";

const Breadcrumbs = () => {
	return (
		<Fragment>
			{/* <!-- Page Header --> */}

			<Pageheader title="Ui Elements" currentpage="Breadcrumb" activepage="Breadcrumb" />

			{/* <!-- Page Header Close --> */}

			{/* <!--ROW-START--> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Example" customCardClass="custom-card" reactCode={breadcrumb1} reusableCode={reusebreadcrumb1}>
						<SpkBreadcrumb>
							<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
						</SpkBreadcrumb>
						<nav aria-label="breadcrumb">
							<SpkBreadcrumb>
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="mb-0 custom-breadcrumb">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Example1" customCardClass="custom-card" reactCode={breadcrumb2} reusableCode={reusebreadcrumb2}>
						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="breadcrumb-example1">
								<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="breadcrumb-example1">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="breadcrumb-example1 breadcrumb-second mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Breadcrumb Style-1" customCardClass="custom-card" reactCode={breadcrumb3} reusableCode={reusebreadcrumb3}>
						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="breadcrumb-style1 breadcrumb-second mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Breadcrumb Style-2" customCardClass="custom-card" reactCode={breadcrumb4} reusableCode={reusebreadcrumb4}>
						<nav aria-label="breadcrumb">
							<SpkBreadcrumb Customclass="breadcrumb-style2 breadcrumb-second mb-0">
								<Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Dividers" customCardClass="custom-card" reactCode={breadcrumb5} reusableCode={reusebreadcrumb5}>
						<nav
							aria-label="breadcrumb" className='divider-breadcrumb'>
							<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Embedded SVG icon" customCardClass="custom-card" reactCode={breadcrumb6} reusableCode={reusebreadcrumb6}>
						<nav style={{
							"--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"currentColor\"/%3E%3C/svg%3E');"
						} as React.CSSProperties}>
							<SpkBreadcrumb Customclass="breadcrumb-second mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active " aria-current="page">Library</Breadcrumb.Item>
							</SpkBreadcrumb>
						</nav>
					</ShowCode>
				</Col>
			</Row>
			{/* <!--ROW-END--> */}
		</Fragment>

	)
};

export default Breadcrumbs;
import  { Fragment } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import { ActiveButtons, BasicButtons, ContextualButtons, CustomButtons, HorizontalButtons, LinksButtons, ListbadgesButtons, SubheadingsButtons  } from "../../../components/common/data/ui-elements/listgroupdata";
import { Listgroup1, Listgroup10, Listgroup11, Listgroup12, Listgroup13, Listgroup14, Listgroup15, Listgroup16, Listgroup2, Listgroup3, Listgroup4, Listgroup5, Listgroup6, Listgroup7, Listgroup8, Listgroup9, datalistgroup1, datalistgroup11, datalistgroup12, datalistgroup13, datalistgroup14, datalistgroup15, datalistgroup16, datalistgroup4, datalistgroup6, datalistgroup7, reuseListgroup1, reuseListgroup10, reuseListgroup11, reuseListgroup12, reuseListgroup13, reuseListgroup14, reuseListgroup15, reuseListgroup16, reuseListgroup2, reuseListgroup3, reuseListgroup4, reuseListgroup5, reuseListgroup6, reuseListgroup7, reuseListgroup8, reuseListgroup9  } from "../../../components/common/data/prism/ui-elements-prism";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";

const ListGroups = () => {
	return (
		<Fragment>
			{/* <!-- Page Header --> */}

			<Pageheader title="Ui Elements" currentpage="List Group" activepage="List Group" />

			{/* <!-- Page Header Close --> */}

			{/* <!-- Start:: row-1 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Basic List" customCardClass="custom-card" customCardBodyClass="" dataCode={datalistgroup1} reactCode={Listgroup1} reusableCode={reuseListgroup1}>
						<SpkListgroup as="ul">
							{BasicButtons.map((idx) => (
								<ListGroup.Item as="li" key={Math.random()}>
									<div className="d-flex align-items-center">
										<span className="avatar avatar-sm">
											<img src={idx.src} alt="img" />
										</span>
										<div className="ms-2 fw-semibold">
											{idx.text}
										</div>
									</div>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Disabled items" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup2} reusableCode={reuseListgroup2}>

						<SpkListgroup as="ul">
							<ListGroup.Item as="li" disabled className="" aria-disabled="true">A disabled item meant to be disabled
							</ListGroup.Item>
							<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
							<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
							<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
							<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Flush" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup3} reusableCode={reuseListgroup3}>
						<SpkListgroup Variant='flush'>
							<ListGroup.Item className="fw-medium"><i className="ri-home-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
							<ListGroup.Item className="fw-medium"><i className="ri-cloud-line fs-15 lh-1 align-center me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
							<ListGroup.Item className="fw-medium"><i className="ri-global-line fs-15 lh-1 align-center me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
							<ListGroup.Item className="fw-medium"><i className="ri-stack-line fs-15 lh-1 align-center me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
							<ListGroup.Item className="fw-medium"><i className="ri-gift-2-line fs-15 lh-1 align-center me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Active items" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup4} dataCode={datalistgroup4} reusableCode={reuseListgroup4}>
						<SpkListgroup as="ul">
							{ActiveButtons.map((idx) => (
								<ListGroup.Item as="li" className={`list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
									<div className="d-flex align-items-center">
										<div>
											<span className="fs-15">
												<i className={`bi bi-${idx.class}`}></i>
											</span>
										</div>
										<div className="ms-2">
											{idx.text}
										</div>
									</div>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="buttons" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup5} reusableCode={reuseListgroup5}>
						<SpkListgroup>
							<ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<SpkBadge variant="primary" Customclass="float-end bg-">243</SpkBadge></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<SpkBadge variant="secondary-transparent" Customclass="float-end bg-">35</SpkBadge></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<SpkBadge variant="info-transparent" Customclass="float-end bg-">132</SpkBadge></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<SpkBadge variant="success-transparent" Customclass="float-end bg-">2525</SpkBadge></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<SpkBadge variant="danger-transparent" Customclass="float-end bg-">21</SpkBadge></ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Links" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup6} dataCode={datalistgroup6} reusableCode={reuseListgroup6}>
						<SpkListgroup>
							{LinksButtons.map((idx) => (
								<ListGroup.Item action className={`list-group-item-action ${idx.class1}`} key={Math.random()}
									aria-current="true">
									<div className="d-flex align-items-center">
										<div>
											<span className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}>
												{idx.text1}
											</span>
										</div>
										<div className="ms-2">{idx.text}</div>
									</div>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-1 --> */}

			{/* <!-- Start:: row-2 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Sub headings" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup7} dataCode={datalistgroup7} reusableCode={reuseListgroup7}>
						<SpkListgroup as="ol" Numbered={true}>
							{SubheadingsButtons.map((idx) => (
								<ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
									<div className="ms-2 me-auto text-muted">
										<div className="fw-semibold fs-14 text-default">{idx.text1}</div>
										{idx.text2}
									</div>
									<SpkBadge variant={idx.class}>{idx.text3}</SpkBadge>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Numbered Lists" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup8} reusableCode={reuseListgroup8}>
						<SpkListgroup as="ol" Numbered={true}>
							<ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
							<ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
							<ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
							<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
							<ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
							<ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="List With Checkboxes" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup9} reusableCode={reuseListgroup9}>
						<SpkListgroup as="ul">
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								Accurate information at any given point.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								Hearing the information and responding.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								Setting up and customizing your own sales.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								New Admin Launched.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								To maximize profits and improve productivity.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								To have a complete 360° overview of sales information, having.
							</ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="List With Radios" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup10} reusableCode={reuseListgroup10}>
						<SpkListgroup>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" defaultChecked />
								Accurate information at any given point.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" defaultChecked />
								Hearing the information and responding.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" defaultChecked />
								Setting up and customizing your own sales.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" />
								New Admin Launched.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" />
								To maximize profits and improve productivity.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-2" type="radio" value=""
									name="list-radio" />
								To have a complete 360° overview of sales information, having.
							</ListGroup.Item>
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="List With badges" customCardClass="custom-card" customCardBodyClass="" dataCode={datalistgroup11} reactCode={Listgroup11} reusableCode={reuseListgroup11}>
						<SpkListgroup as="ul">
							{ListbadgesButtons.map((idx) => (
								<ListGroup.Item as="li" key={Math.random()}
									className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
									{idx.text1}
									<SpkBadge variant={idx.class} Customclass={idx.color}>{idx.text2}</SpkBadge>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Horizontal" customCardClass="custom-card" customCardBodyClass="horizontal-listgroup" dataCode={datalistgroup12} reactCode={Listgroup12} reusableCode={reuseListgroup12}>
						{HorizontalButtons.map((idx) => (
							<SpkListgroup as="ul" CustomClass={`list-group-horizontal${idx.class} mb-2`} key={Math.random()}>
								<ListGroup.Item as="li">An item</ListGroup.Item>
								<ListGroup.Item as="li">A second item</ListGroup.Item>
								<ListGroup.Item as="li">A third item</ListGroup.Item>
							</SpkListgroup>
						))}
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-2 --> */}

			{/* <!-- Start:: row-3 --> */}
			<Row>
				<Col xl={12}>
					<ShowCode title="Custom content" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup13} dataCode={datalistgroup13} reusableCode={reuseListgroup13}>
						<SpkListgroup>
							{CustomButtons.map((idx) => (
								<ListGroup.Item action className={`list-group-item-action ${idx.class1}`} key={Math.random()}
									aria-current="true">
									<div className="d-flex w-100 justify-content-between gap-1">
										<h6 className={`mb-1 fw-semibold ${idx.color}`}>{idx.heading}</h6>
										<small className={idx.class2}>{idx.text1}</small>
									</div>
									<p className="mb-1">{idx.text2}</p>
									<small>{idx.text3}.</small>
								</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Solid Colored Lists" customCardClass="custom-card" customCardBodyClass="" dataCode={datalistgroup14} reactCode={Listgroup14} reusableCode={reuseListgroup14}>
						<SpkListgroup as="ul">
							{ContextualButtons.map((idx) => (
								<ListGroup.Item className={`list-item-solid-${idx.class} ${idx.class1}`} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-3 --> */}

			{/* <!-- Start:: row-4 --> */}
			<Row>
				<Col xl={6}>
					<ShowCode title="Contextual classes with hover styles" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup15} dataCode={datalistgroup15} reusableCode={reuseListgroup15}>
						<ListGroup>
							{ContextualButtons.map((idx) => (
								<ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={Math.random()}>{idx.text}</ListGroup.Item>
							))}
						</ListGroup>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Contextual classes" customCardClass="custom-card" customCardBodyClass="" reactCode={Listgroup16} dataCode={datalistgroup16} reusableCode={reuseListgroup16}>
						<SpkListgroup as="ul">
							{ContextualButtons.map((idx) => (
								<ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
							))}
						</SpkListgroup>
					</ShowCode>
				</Col>
			</Row>
			{/* <!-- End:: row-4 --> */}
		</Fragment>
	)
};

export default ListGroups;
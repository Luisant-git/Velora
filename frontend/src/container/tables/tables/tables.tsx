import  { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import ShowCode from "../../../components/showcode/showcode";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import { Activedata, Basictable, Borderdata, Captiondata, Groupdata, Hoverabledata, Responsivedata, Table10data, Table11data, Table12data, Table13data, Table1data, Table2data, Table3data, Table4data, Table5data, Table6data, Table7data, Table8data, Table9data, Topcaptuiondata } from "../../../components/common/data/tables/tablesdata";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { datatable10, datatable17, datatable18, datatable19, datatable2, datatable24, datatable28, datatable29, datatable3, datatable32, datatable4, datatable5, datatable8, reusabletable1, reusabletable10, reusabletable11, reusabletable12, reusabletable13, reusabletable14, reusabletable15, reusabletable16, reusabletable17, reusabletable18, reusabletable19, reusabletable2, reusabletable20, reusabletable21, reusabletable22, reusabletable23, reusabletable24, reusabletable25, reusabletable26, reusabletable27, reusabletable28, reusabletable29, reusabletable3, reusabletable30, reusabletable31, reusabletable32, reusabletable4, reusabletable5, reusabletable6, reusabletable7, reusabletable8, reusabletable9, table1, table10, table11, table12, table13, table14, table15, table16, table17, table18, table19, table2, table20, table21, table22, table23, table24, table25, table26, table27, table28, table29, table3, table30, table31, table32, table4, table5, table6, table7, table8, table9 } from "../../../components/common/data/prism/tables-prism";
import SpkProgress from "../../../@spk-reusable-components/reusable-uielements/spk-progress";
import { Link } from "react-router-dom";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

const Tables = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Pageheader title="Tables" currentpage="Tables" activepage="Tables" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Tables" customCardClass="" customCardBodyClass="" reactCode={table1} reusableCode={reusabletable1}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
                                {Basictable.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.date}</td>
                                        <td>{idx.number}</td>
                                        <td><SpkBadge Customclass={`bg-outline-${idx.color}`}>{idx.status}</SpkBadge></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Bordered Tables" customCardClass="custom-card" customCardBodyClass="" reactCode={table2} dataCode={datatable2} reusableCode={reusabletable2}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'User' }, { title: 'Status' }, { title: 'Email' }, { title: 'Action' }]}>
                                {Table1data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </th>
                                        <td><SpkBadge variant={idx.color} Customclass={`${idx.class}`}>{idx.text}</SpkBadge></td>
                                        <td>{idx.mail}</td>
                                        <td>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Link to="#!" className="text-info fs-14 lh-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link to="#!" className="text-danger fs-14 lh-1">
                                                    <i className="ri-delete-bin-5-line"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode title=" Bordered Primary" customCardClass="custom-card" customCardBodyClass="" reactCode={table3} dataCode={datatable3} reusableCode={reusabletable3}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-bordered border-primary" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Action' }]}>
                                {Table4data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            {idx.order}
                                        </th>
                                        <td>
                                            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </td>
                                        <td><SpkBadge variant="primary-transparent">Booked</SpkBadge></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Bordered Success" customCardClass="custom-card" customCardBodyClass="" reactCode={table4} dataCode={datatable4} reusableCode={reusabletable4}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-bordered border-success" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
                                {Table5data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            {idx.order}
                                        </th>
                                        <td>
                                            <SpkBadge variant="light" Customclass=" text-dark">{idx.date}</SpkBadge>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </td>
                                        <td><SpkBadge variant="success-transparent">Delivered</SpkBadge></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Bordered warning" customCardClass="custom-card" customCardBodyClass="" reactCode={table5} dataCode={datatable5} reusableCode={reusabletable5}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-bordered border-warning" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
                                {Table6data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            {idx.order}
                                        </th>
                                        <td>
                                            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </td>
                                        <td><SpkBadge variant="warning-transparent">Accepted</SpkBadge></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Table Without Borders" customCardClass="custom-card" customCardBodyClass="" reactCode={table6} reusableCode={reusabletable6}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-borderless" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Borderdata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.transactionid}</td>
                                        <td>{idx.date}</td>
                                        <td><SpkBadge variant="" Customclass={`bg-${idx.color}`}>{idx.status}</SpkBadge></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Group Divideres" customCardClass="custom-card" customCardBodyClass="" reactCode={table7} reusableCode={reusabletable7}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" tBodyClass="table-group-divider" header={[{ title: 'Product' }, { title: 'Seller' }, { title: 'Sale Percentage' }, { title: 'Quantity Sold' }]}>
                                {Groupdata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.product}</th>
                                        <td>{idx.seller}</td>
                                        <td><Link to="#!" className={`text-${idx.color}`}>{idx.percent}<i
                                            className={`ri-arrow-${idx.icon}-fill ms-1`}></i></Link></td>
                                        <td>{idx.sold}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Striped rows" customCardClass="custom-card" customCardBodyClass="" reactCode={table8} dataCode={datatable8} reusableCode={reusabletable8}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-striped" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
                                {Table2data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.order}</th>
                                        <td>{idx.date}</td>
                                        <td>{idx.name}</td>
                                        <td>
                                            <SpkButton Buttonvariant="success" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download </SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Striped columns" customCardClass="custom-card" customCardBodyClass="" reactCode={table9} dataCode={datatable8} reusableCode={reusabletable9}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-striped-columns" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
                                {Table2data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.order}</th>
                                        <td>{idx.date}</td>
                                        <td>{idx.name}</td>
                                        <td>
                                            <SpkButton Buttonvariant="danger" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete </SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode title="Primary Table" customCardClass="custom-card" customCardBodyClass="" reactCode={table10} dataCode={datatable10} reusableCode={reusabletable10}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-primary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Secondary Table" customCardClass="custom-card" customCardBodyClass="" reactCode={table11} dataCode={datatable10} reusableCode={reusabletable11}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-secondary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Warning Table" customCardClass="custom-card" customCardBodyClass="" reactCode={table12} dataCode={datatable10} reusableCode={reusabletable12}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-warning" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Danger Table" customCardClass="custom-card" customCardBodyClass="" reactCode={table13} dataCode={datatable10} reusableCode={reusabletable13}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-danger" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Dark Table" customCardClass="custom-card" customCardBodyClass="" reactCode={table14} dataCode={datatable10} reusableCode={reusabletable14}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-dark" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Success Table With Striped Rows" customCardClass="custom-card" customCardBodyClass="" reactCode={table15} dataCode={datatable10} reusableCode={reusabletable15}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-success table-striped" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                {Table3data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.text1}</td>
                                        <td>{idx.text2}</td>
                                        <td>{idx.text3}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}

            {/* <!-- Start:: row-6 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Hoverable Rows" customCardClass="custom-card" reactCode={table16} reusableCode={reusabletable16}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-hover" header={[{ title: 'Product Manager' }, { title: 'Category' }, { title: 'Team' }, { title: 'Status' }]}>
                                {Hoverabledata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </div>
                                                <div>
                                                    <div className="lh-1">
                                                        <span>{idx.product}</span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span
                                                            className="fs-11 text-muted">{idx.mail}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className={`badge bg-${idx.color}-transparent`}>{idx.category}</span></td>
                                        <td>
                                            {idx.team}
                                        </td>
                                        <td>
                                            <SpkProgress variant='primary' mainClass='progress-xs' now={idx.status} />
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Hoverable rows With striped rows" customCardClass="custom-card" reactCode={table17} dataCode={datatable17} reusableCode={reusabletable17}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-striped table-hover" header={[{ title: 'Invoice' }, { title: 'Customer' }, { title: 'Status' }, { title: 'Date' }]}>
                                {Table13data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.text1}</th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </div>
                                                <div>
                                                    <div className="lh-1">
                                                        <span>{idx.name}</span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span
                                                            className="fs-11 text-muted">{idx.mail}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><SpkBadge variant={idx.color} Customclass={idx.class}><i
                                            className={`ri-${idx.icon} align-middle me-1`}></i>{idx.text2}</SpkBadge></td>
                                        <td>{idx.date}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-6 --> */}

            {/* <!-- Start:: row-7 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Table Head Primary" customCardClass="custom-card" reactCode={table18} dataCode={datatable18} reusableCode={reusabletable18}>
                        <div className="table-responsive">
                            <SpkTablescomponent headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table7data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <div className="hstack gap-2 fs-15">
                                                <Link to="#!" 
                                                    className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
                                                        className="ri-download-2-line"></i></Link>
                                                <Link to="#!" 
                                                    className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
                                                        className="ri-edit-line"></i></Link>
                                                <Link to="#!" 
                                                    className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
                                                        className="ri-delete-bin-line"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head warning" customCardClass="custom-card" reactCode={table19} dataCode={datatable19} reusableCode={reusabletable19}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" headerClass="table-warning" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table8data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Success" customCardClass="custom-card" reactCode={table20} dataCode={datatable19} reusableCode={reusabletable20} >
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" headerClass="table-success" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table8data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Info" customCardClass="custom-card" reactCode={table21} dataCode={datatable19} reusableCode={reusabletable21}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" headerClass="table-info" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table8data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Secondary" customCardClass="custom-card" reactCode={table22} dataCode={datatable19} reusableCode={reusabletable22}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" headerClass="table-secondary" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table8data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Table Head Danger" customCardClass="custom-card" reactCode={table23} dataCode={datatable19} reusableCode={reusabletable23}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" headerClass="table-danger" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
                                {Table8data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.text}</td>
                                        <td>{idx.date}</td>
                                        <td>
                                            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-7 --> */}

            {/* <!-- Start:: row-8 --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode title="Table Foot" customCardClass="custom-card" reactCode={table24} dataCode={datatable24} reusableCode={reusabletable24}>
                        <div className="table-responsive">
                            <SpkTablescomponent footerClass="table-primary" headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Team' }, { title: 'Matches Won' }, { title: 'Win Ratio' }]}>
                                {Table10data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            {idx.text1}
                                        </th>
                                        <td>
                                            {idx.text2}
                                        </td>
                                        <td>
                                            {idx.text3}
                                        </td>
                                        <td>
                                            <SpkBadge variant="primary">{idx.text3}</SpkBadge>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="table-primary">
                                    <th scope="row">
                                        Total
                                    </th>
                                    <td>
                                        United States
                                    </td>
                                    <td>
                                        558
                                    </td>
                                    <td><SpkBadge variant="primary">56%</SpkBadge></td>
                                </tr>
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Table With Caption" customCardClass="custom-card" reactCode={table25} reusableCode={reusabletable25}>
                        <div className="table-responsive">
                            <SpkTablescomponent headerContent={<caption className='px-3'>Top 3 Countries</caption>} tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Medals Won' }, { title: 'No Of Athletes' }]}>
                                {Captiondata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">0{idx.id}</th>
                                        <td>{idx.country}</td>
                                        <td>{idx.won}<i className="ri-medal-line mx-2"></i></td>
                                        <td>{idx.athletes}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Table With Top Caption" customCardClass="custom-card" reactCode={table26} reusableCode={reusabletable26}>
                        <div className="table-responsive">
                            <SpkTablescomponent headerContent={<caption className="px-2">Top IT Companies</caption>} tableClass="text-nowrap caption-top" header={[{ title: 'S.No' }, { title: 'Name' }, { title: 'Revenue' }, { title: 'Country' }]}>
                                {Topcaptuiondata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">{idx.id}</th>
                                        <td>{idx.name}</td>
                                        <td>{idx.revenue}</td>
                                        <td>{idx.country}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-8 --> */}

            {/* <!-- Start:: row-9 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Active Tables" customCardClass="custom-card" reactCode={table27} reusableCode={reusabletable27}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
                                {Activedata.map((idx) => (
                                    <tr key={Math.random()} className={idx.class}>
                                        <th scope="row">{idx.name}</th>
                                        <td>{idx.create}</td>
                                        <td className={idx.tdclass}>{idx.number}</td>
                                        <td><span className={`badge bg-${idx.color}`}>{idx.status}</span></td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Small Tables" customCardClass="custom-card" customCardBodyClass="" reactCode={table28} dataCode={datatable28} reusableCode={reusabletable28}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-sm" header={[{ title: 'Invoice' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Action' }]}>
                                {Table9data.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input id={idx.id} defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" value="" />
                                                <div className="form-check-label">
                                                    {idx.name}
                                                </div>
                                            </div>
                                        </th>
                                        <td>{idx.date}</td>
                                        <td><SpkBadge variant={idx.class} Customclass="bg-success-transparent">{idx.text}</SpkBadge></td>
                                        <td>
                                            <div className="hstack gap-2 fs-15">
                                                <Link to="#!" className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                <Link to="#!" className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-9 --> */}

            {/* <!-- Start:: row-10 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Color variants tables" customCardClass="custom-card" reactCode={table29} dataCode={datatable29} reusableCode={reusabletable29}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Color' }, { title: 'Client' }, { title: 'State' }, { title: 'Quantity' }, { title: 'Total Price' }]}>
                                {Table11data.map((idx) => (
                                    <tr key={Math.random()} className={idx.bgcolor}>
                                        <th scope="row">{idx.text}</th>
                                        <td>{idx.name}</td>
                                        <td><SpkBadge variant={idx.color} Customclass={idx.class2}>Processed</SpkBadge></td>
                                        <td>{idx.quantity}</td>
                                        <td>{idx.price}</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Nesting" customCardClass="custom-card" customCardBodyClass="" reactCode={table30} reusableCode={reusabletable30}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap table-striped table-bordered" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>
                                        <table className="table text-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Alphabets</th>
                                                    <th scope="col">Users</th>
                                                    <th scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">A</th>
                                                    <td>Dino King</td>
                                                    <td>dinoking231@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">B</th>
                                                    <td>Poppins sams</td>
                                                    <td>pops@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">C</th>
                                                    <td>Brian Shaw</td>
                                                    <td>swanbrian@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jimmy</td>
                                    <td>the Ostrich</td>
                                    <td>Dummy Text</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Cobra Kai</td>
                                    <td>the Snake</td>
                                    <td>Another Name</td>
                                </tr>
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-10 --> */}

            {/* <!-- Start:: row-11 --> */}
            <Row>
                <div className="col-xl-12">
                    <ShowCode title="Always responsive" customCardClass="custom-card" reactCode={table31} reusableCode={reusabletable31}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="text-nowrap" showCheckbox={true} header={[{ title: 'Team Head' }, { title: 'Category' }, { title: 'Role' }, { title: 'Gmail' }, { title: 'Team' }, { title: 'Work Progress' }, { title: 'Revenue' }, { title: 'Action' }]}>
                                {Responsivedata.map((idx) => (
                                    <tr key={Math.random()}>
                                        <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src={idx.src} alt="img" />
                                                </span>{idx.name}
                                            </div>
                                        </td>
                                        <td>{idx.category}</td>
                                        <td><SpkBadge variant={`${idx.color}-transparent`}>{idx.role}</SpkBadge></td>
                                        <td>{idx.mail}</td>
                                        <td>
                                            {idx.team}
                                        </td>
                                        <td>
                                            <SpkProgress mainClass="progress progress-xs" variant='primary' now={idx.progress} />
                                        </td>
                                        <td>{idx.revenue}</td>

                                        <td>
                                            <div className="hstack gap-2 fs-15">
                                                <Link to="#!" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                <Link to="#!" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </div>
            </Row>
            {/* <!-- End:: row-11 --> */}

            {/* <!-- Start:: row-12 --> */}
            <Row>
                <div className="col-xl-12">
                    <ShowCode title="Vertical alignment" customCardClass="custom-card vertical-alignment-table" reactCode={table32} dataCode={datatable32} reusableCode={reusabletable32}>
                        <div className="table-responsive">
                            <SpkTablescomponent tableClass="align-middle" header={[{ title: 'Heading 1' }, { title: 'Heading 2' }, { title: 'Heading 3' }, { title: 'Heading 4' }]}>
                                {Table12data.map((idx) => (
                                    <tr key={Math.random()} className={idx.class1}>
                                        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
                                        <td>This here is some placeholder text, intended to take up
                                            quite a
                                            bit of vertical space, to demonstrate how the vertical
                                            alignment
                                            works in the preceding cells.</td>
                                    </tr>
                                ))}
                            </SpkTablescomponent>
                        </div>
                    </ShowCode>
                </div>
            </Row>
            {/* <!-- End:: row-12 --> */}
        </Fragment>
    )
};

export default Tables;
import  { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import Pageheader from '../../../components/page-header/pageheader';
import Spkcardscomponent from '../../../@spk-reusable-components/reusable-dashboards/spk-cards';
import { Ecommercecard, Newlydata, Orderoptions, Orderseries, Payment, Recentactivity, Reportoptions, Reportseries, TopSellingdata, Visitoroptions, Visitorseries, tableData } from '../../../components/common/data/dashboard/ecommercedata';
import SpkDropdown from '../../../@spk-reusable-components/reusable-uielements/spk-dropdown';
import SpkTablescomponent from '../../../@spk-reusable-components/reusable-tables/tables-component';
import SpkBadge from '../../../@spk-reusable-components/reusable-uielements/spk-badge';
import SpkTooltips from '../../../@spk-reusable-components/reusable-uielements/spk-tooltips';
import SpkActivityCard from '../../../@spk-reusable-components/reusable-dashboards/spk-ecommerceactivity';
import Spkapexcharts from '../../../@spk-reusable-components/reusable-plugins/spk-apexcharts';
import { Link } from 'react-router-dom';
import SpkProgress from '../../../@spk-reusable-components/reusable-uielements/spk-progress';
import SpkButton from '../../../@spk-reusable-components/reusable-uielements/spk-button';
import png17 from "../../../assets/images/ecommerce/png/17.png"
import media90 from "../../../assets/images/media/media-90.png"
const Ecommerce = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="Ecommerce" activepage="Ecommerce" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xl={3}>
                            {Ecommercecard.map((idx) => (
                                <Spkcardscomponent textbefore={false} textafter={true} key={Math.random()} svgIcon={idx.svgIcon} cardClass='overflow-hidden main-content-card' headingClass='d-block mb-1' mainClass='d-flex align-items-start justify-content-between' card={idx} badgeClass="md" dataClass="mb-0" />
                            ))}
                        </Col>
                        <Col xl={9}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <div className="card-title">Sales Report</div>
                                    <div className="d-flex gap-2">
                                        <div className="btn btn-sm btn-outline-light">Today</div>
                                        <div className="btn btn-sm btn-outline-light">Weakly</div>
                                        <div className="btn btn-sm btn-light">Yearly</div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pb-2">
                                    <div id="sales-report">
                                        <Spkapexcharts chartOptions={Reportoptions} chartSeries={Reportseries} type="line" width={"100%"} height={397} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={8} xl={7}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <div className="card-title">Recent Orders</div>
                                    <Link to="#!" className="btn btn-outline-light border d-flex align-items-center text-muted btn-sm">
                                        View All
                                    </Link>
                                </Card.Header>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <SpkTablescomponent tableClass='text-nowrap table-hover' header={[{ title: 'Order ID' }, { title: 'Customer' }, { title: 'Date' }, { title: 'Amount' }, { title: 'Status' }]} >
                                            {tableData.map((row, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Link to="#!" className="text-primary">
                                                            {row.id}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src={row.imageSrc} alt={row.name} />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link to="#!" className="fs-14 fw-medium">
                                                                    {row.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="d-block text-muted">{row.date}</span>
                                                    </td>
                                                    <td>
                                                        <span className="d-block mb-1">{row.amount}</span>
                                                    </td>
                                                    <td>
                                                        <SpkBadge variant='' Customclass={`bg-${row.color}-transparent`}>
                                                            {row.status}
                                                        </SpkBadge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTablescomponent>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <div className="col-xxl-4 col-xl-5">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Total Orders
                                    </div>
                                    <SpkDropdown Togglevariant="" toggleas="a" Customtoggleclass="btn btn-outline-light btn-sm border d-flex align-items-center text-muted no-caret" Toggletext='View All' Navigate="#!" Arrowicon={true} Menulabel="dropdownMenuButton1" Id="dropdownMenuButton1">
                                        <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                    </SpkDropdown>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center text-center bg-light p-3 rounded-1 order-content">
                                        <div>
                                            <p className="mb-1">Total Orders</p>
                                            <h4 className="text-primary mb-0">12,500</h4>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-center">Overall Growth from Last Year</p>
                                            <h5 className="text-success mb-0 text-center">+15%</h5>
                                        </div>
                                    </div>
                                    <div id="total-orders">
                                        <Spkapexcharts chartOptions={Orderoptions} chartSeries={Orderseries} type="radialBar" width={"100%"} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="row">
                        <div className="col-xxl-5 ">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between flex-wrap pb-0">
                                    <div className="card-title">
                                        New Visitors
                                    </div>
                                    <SpkDropdown toggleas="a" Customtoggleclass="btn btn-outline-light btn-icons btn-sm text-muted no-caret" Navigate="#!" Icon={true} IconClass="fe fe-more-vertical">
                                        <Dropdown.Item className="border-bottom" href="#!">Today</Dropdown.Item>
                                        <Dropdown.Item className="border-bottom" href="#!">This Week</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                                <Card.Body>
                                    <div className="row align-items-end mx-0">
                                        <div className="col-5">
                                            <h3 className="fw-medium mb-0">5,642</h3>
                                            <div><i className="ri-checkbox-blank-circle-fill text-primary lh-1 align-middle fs-10"></i> Total New Visitors</div>
                                        </div>
                                        <div className="col-7">
                                            <div className="fw-medium">Percentage of New Visitors</div>
                                            <div className="text-muted fs-12">Last 30 Days: Increased By <span className="text-success fw-medium">42.5%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className="card-body p-0">
                                    <div id="websitedesign">
                                        <Spkapexcharts chartOptions={Visitoroptions} chartSeries={Visitorseries} type="bar" width={"100%"} height={190} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Col xxl={3} md={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Payment Methods
                                    </div>
                                    <SpkDropdown toggleas="a" Customtoggleclass="btn btn-outline-light btn-icons btn-sm text-muted no-caret" Navigate="#!" Icon={true} IconClass="fe fe-more-vertical">
                                        <Dropdown.Item className="border-bottom" href="#!">Today</Dropdown.Item>
                                        <Dropdown.Item className="border-bottom" href="#!">This Week</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                                <Card.Body className="p-0">
                                    <ul className="list-group list-group-flush">
                                        {Payment.map((idx) => (
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={Math.random()}>
                                                <div>
                                                    <i className={`${idx.icon} p-1 bg-${idx.color}-transparent lh-1 me-2 fs-22 rounded-1`}></i>
                                                    {idx.title}
                                                </div>
                                                <SpkBadge variant="primary" Customclass="rounded-pill">{idx.percent}</SpkBadge>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} md={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between pb-3">
                                    <div className="card-title">
                                        Traffic Sources
                                    </div>
                                    <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-sm text-muted no-caret" Navigate="#!" Arrowicon={true} Toggletext="View All">
                                        <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTablescomponent tableClass='table-hover text-nowrap' header={[{ title: 'Browser' }, { title: 'Traffic' }, { title: 'Sessions' }]}>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar  avatar-sm p-2 bg-primary3-transparent me-2">
                                                            <i className="ri-chrome-line fs-18"></i>
                                                        </span>
                                                        <div className="fw-medium">Chrome</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkProgress variant='primary3' mainClass="progress progress-sm" striped={true} animated={true} now={78} />
                                                </td>
                                                <td>
                                                    <span>15,248<i className="ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-2 bg-primary2-transparent me-2">
                                                            <i className="ri-safari-line fs-18"></i>
                                                        </span>
                                                        <div className="fw-medium">Safari</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkProgress variant='primary2' mainClass="progress progress-sm" striped={true} animated={true} now={56} />
                                                </td>
                                                <td>
                                                    <span>22,945<i className="ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-2 bg-primary1-transparent me-2">
                                                            <i className="ri-opera-line fs-18"></i>
                                                        </span>
                                                        <div className="fw-medium">Opera</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkProgress variant='primary1' mainClass="progress progress-sm" striped={true} animated={true} now={62} />
                                                </td>
                                                <td>
                                                    <span>32,453<i className="ri-arrow-down-s-fill ms-1 text-danger align-middle fs-18"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar  avatar-sm p-2 bg-primary-transparent me-2">
                                                            <i className="ri-edge-fill fs-18"></i>
                                                        </span>
                                                        <div className="fw-medium">Edge</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkProgress variant='primary' mainClass="progress progress-sm" striped={true} animated={true} now={45} />
                                                </td>
                                                <td>
                                                    <span>9,886<i className="ri-arrow-up-s-fill ms-1 text-success align-middle fs-18"></i></span>
                                                </td>
                                            </tr>
                                        </SpkTablescomponent>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Col>
                <div className="col-xxl-3">
                    <div className="card custom-card offer-card">
                        <div className="card-body p-3 pe-0">
                            <div className="d-flex align-items-end">
                                <div className="offer-card-details">
                                    <div className="offer-item">
                                        <div className="avatar avatar-xl mb-3">
                                            <img src={png17} alt="Product Image" className="img-fluid" />
                                        </div>
                                        <div className="product-info">
                                            <h4 className="mb-2 fw-medium text-fixed-white">Today's Sale</h4>
                                            <span className="mb-1 text-success fw-semibold fs-12">Up to 20% Off on </span>
                                            <span className="mb-3 text-fixed-white h6"> HeadPhones</span>
                                        </div>
                                        <span className="text-fixed-white">Price: $9.99</span>
                                        <span className="text-fixed-white ps-2">Discount: 20%</span>
                                    </div>
                                    <SpkButton Buttonvariant='primary1' Customclass="mt-4 shadow">Add to Cart</SpkButton>
                                </div>
                                <img src={media90} alt="Product Image" className="img-fluid offer-item-img ms-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Top-Selling Products</div>
                            <Link to="#!" className="btn btn-outline-light border d-flex align-items-center text-muted btn-sm">
                                View All
                            </Link>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0" id="product-list">
                                {TopSellingdata.map((idx) => (
                                    <li className="" key={Math.random()}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-3 lh-1">
                                                <span className="avatar avatar-lg bg-gray-200">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className=" flex-fill">
                                                <span className="fs-14 d-block mb-0 fw-medium">{idx.header}</span>
                                                <span className="text-muted fs-12">{idx.data}</span>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 fs-14 fw-medium">{idx.price}</p>
                                                <p className="mb-0 text-muted fs-14">{idx.sales}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="card custom-card">
                        <div className="card-header justify-content-between pb-0">
                            <div className="card-title"> Recent Activity </div>
                            <SpkDropdown toggleas="a" Customtoggleclass="fs-12 text-muted bg-light rounded btn btn-sm btn-light no-caret" Navigate="#!" Arrowicon={true} Toggletext="View All">
                                <li><Dropdown.Item className="">Today</Dropdown.Item></li>
                                <li><Dropdown.Item className="">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item className="">Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0 ecommerce-recent-activity">
                                {Recentactivity.map((activity) => (
                                    <li className="ecommerce-recent-activity-content d-flex gap-3 align-items-top" key={activity.Id}>
                                        <SpkActivityCard productactivity={activity} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Newly Added Products
                            </div>
                            <div className="d-sm-flex">
                                <div className="me-3 mb-3 mb-sm-0">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-primary btn-sm no-caret" Navigate="#!" Arrowicon={true} Toggletext="Sort By">
                                    <li><Dropdown.Item as="li">New</Dropdown.Item></li>
                                    <li><Dropdown.Item as="li">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item as="li">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'Product Id' }, { title: 'Product Name' }, { title: 'Category' }, { title: '% Discount' }, { title: 'Price' }, { title: 'Status' }, { title: 'Added Date' }, { title: 'Actions' }]}>
                                    {Newlydata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <span className="fw-medium">{idx.product}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md bg-light">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14">{idx.prdtname}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.category}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary">{idx.discount}%</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.price}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement='top' title="View">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon btn-secondary-light"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement='top' title="Edit">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon btn-info-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement='top' title="Delete">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon  btn-primary2-light"><i className="ti ti-trash"></i></Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
}

export default Ecommerce;
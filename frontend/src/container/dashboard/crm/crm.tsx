import  { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Pagination, Row, Tab } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import { Crmcard, Crmoptions, Crmseries, Leadoptions, Leadsdata, Leadsseries, Profitoptions, Profitseries, Reoptions, Reseries, Salesdata, Todolist, Todolist1 } from "../../../components/common/data/dashboard/crmdata";
import SpkCrmcard from "../../../@spk-reusable-components/reusable-dashboards/spk-crmcard";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkProgress from "../../../@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTooltips from "../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import { Link } from "react-router-dom";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";

const Crm = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="CRM" activepage="CRM" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {Crmcard.map((idx) => (
                    <Col md={6} lg={4} className="col-xl" key={Math.random()}>
                        <SpkCrmcard cardClass="crm-card" color={idx.borderColorClass} color1={idx.color} title={idx.title} price={idx.price} percent={idx.percent} svgIcon={idx.icon} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col md={12} xxl={3} className="">
                    <Card className="custom-card overflow-hidden earnings-card card-bg-primary shadow-sm">
                        <Card.Body className="p-0 text-fixed-white">
                            <div className="p-3 position-absolute total-earnings-content w-100">
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <span className="mb-1 d-block">Total Revenue</span>
                                        <h4 className="mb-1 text-fixed-white">$578,784</h4>
                                        <div className="text-fixed-white fs-13">
                                            <span className="op-7"> Increased By </span>
                                            <SpkBadge variant="primary1" Customclass="align-middle op-9">7.66%<i className="ti ti-arrow-narrow-up"></i></SpkBadge>
                                        </div>
                                    </div><div className="avatar avatar-lg bg-white-transparent svg-white ms-auto shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div id="profit-report"><Spkapexcharts chartOptions={Profitoptions} chartSeries={Profitseries} type="area" width={"100%"} height={130} />
                            </div>
                            <div id="revenue-report"><Spkapexcharts chartOptions={Reoptions} chartSeries={Reseries} type="bar" width={"100%"} height={130} />
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="card border border-primary2 border-opacity-25 custom-card">
                        <Card.Body>
                            <div className="d-flex gap-2 align-items-center my-1">
                                <div>
                                    <span className="mb-1 d-block">Total Profit</span>
                                    <h4 className="mb-1">$37,566</h4>
                                    <div className="text-muted fs-13">
                                        <span className=""> Increased By </span>
                                        <SpkBadge variant="primary3" Customclass="align-middle">5.66%<i className="ti ti-arrow-narrow-up"></i></SpkBadge>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg bg-primary2-transparent svg-primary2 ms-auto shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path></svg>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col md={12} xxl={6} className="">
                    <Card className="custom-card ">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Sales Overview</Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-sm btn-outline-light">Today</div>
                                <div className="btn btn-sm btn-outline-light">Weakly</div>
                                <div className="btn btn-sm btn-light">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="sales-overview-crm">
                                <Spkapexcharts chartOptions={Crmoptions} chartSeries={Crmseries} type="area" width={"100%"} height={270} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xxl={3} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Profit By Sale</div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light text-muted dropdown-toggle no-caret" Toggletext="Sort By" Arrowicon={true}>
                                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">This Month</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <SpkListgroup as="ul" CustomClass="list-unstyled mb-0">
                                <ListGroup.Item as="li" className="border-0 p-0 mb-4">
                                    <div className="d-flex justify-content-between align-items-top">
                                        <div className="d-flex">
                                            <span className="avatar avatar-rounded avatar-md bg-primary-transparent"><i
                                                className='bx bx-wallet-alt fs-18'></i></span>
                                            <div className="d-flex flex-column ms-2">
                                                <p className="fw-medium mb-0">Total Sales</p>
                                                <p className="fs-12 text-muted mb-0">10% Increases</p>
                                            </div>
                                        </div>
                                        <h6 className="fw-medium mb-0">$12,345</h6>
                                    </div>
                                    <SpkProgress mainClass="progress-xs mt-2 mb-0" striped={true} animated={true} now={80} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 mb-4">
                                    <div className="d-flex justify-content-between align-items-top">
                                        <div className="d-flex">
                                            <span
                                                className="avatar avatar-md avatar-rounded bg-secondary-transparent"><i
                                                    className='bx bx-money-withdraw fs-18'></i></span>
                                            <div className="d-flex flex-column ms-2">
                                                <p className="fw-medium mb-0">Total Profit</p>
                                                <p className="fs-12 text-muted mb-0">12% Increases</p>
                                            </div>
                                        </div>
                                        <h6 className="fw-medium mb-0">$9,345</h6>
                                    </div>
                                    <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: "75%" }}></div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 mb-4">
                                    <div className="d-flex justify-content-between align-items-top">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary1-transparent"><i
                                                className='bx bx-money-withdraw fs-18'></i></span>
                                            <div className="d-flex flex-column ms-2">
                                                <p className="fw-medium mb-0">Total Revenue</p>
                                                <p className="fs-12 text-muted mb-0">11% Decrease</p>
                                            </div>
                                        </div>
                                        <h6 className="fw-medium mb-0">$9,345</h6>
                                    </div>
                                    <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary1" style={{ width: "78%" }}></div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="border-0 p-0 mb-2">
                                    <div className="d-flex justify-content-between align-items-top">
                                        <div className="d-flex">
                                            <span className="avatar avatar-md avatar-rounded bg-primary2-transparent"><i
                                                className='bx bx-money-withdraw fs-18'></i></span>
                                            <div className="d-flex flex-column ms-2">
                                                <p className="fw-medium mb-0">Total loss</p>
                                                <p className="fs-12 text-muted mb-0">11% Decrease</p>
                                            </div>
                                        </div>
                                        <h6 className="fw-medium mb-0">$11,345</h6>
                                    </div>
                                    <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary2" style={{ width: "68%" }}></div>
                                    </div>
                                </ListGroup.Item>
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="today">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Tasks List
                                </div>
                                <div>
                                    <Nav className="nav-tabs justify-content-end nav-tabs-header card-headertabs" role="tablist">
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link className="" eventKey="today">Today</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link className="" eventKey="Upcoming">Upcoming</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Card.Body className="todo-tab p-0">
                                <Tab.Content className="">
                                    <Tab.Pane className="border-0" eventKey="today" role="tabpanel">
                                        <ul className="list-unstyled task-list-tab mb-0">
                                            {Todolist.map((todo) => (
                                                <li key={todo.id}>
                                                    <div className="todolist d-flex">
                                                        <div className="mb-3 form-check me-2">
                                                            <input type="checkbox" className="form-check-input" defaultChecked={todo.completed} />
                                                        </div>
                                                        <div className="flex-fill w-100">
                                                            <div className="d-flex align-items-start justify-content-between gap-1 flex-wrap">
                                                                <div>
                                                                    <span className="d-block fw-medium">
                                                                        {todo.title}
                                                                        <SpkTooltips placement="top" title={todo.status}>
                                                                            <i className={`${todo.icon} bg-${todo.color}-transparent p-1 align-middle fs-10 lh-1 rounded-circle ms-1 d-inline-block`}></i>
                                                                        </SpkTooltips>
                                                                    </span>
                                                                    <p className="text-muted mb-0 fs-12">{todo.description}</p>
                                                                </div>
                                                                <div className="d-flex gap-1">
                                                                    <SpkTooltips placement="top" title="Edit">
                                                                        <Link to="#!" className="btn btn-sm btn-info-light btn-icon">
                                                                            <i className="ti ti-edit"></i>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips placement="top" title="Delete">
                                                                        <Link to="#!" className="btn btn-sm btn-danger-light btn-icon">
                                                                            <i className="ti ti-trash"></i>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="border-0" eventKey="Upcoming" role="tabpanel">
                                        <ul className="list-unstyled task-list-tab mb-0">
                                            {Todolist1.map(task => (
                                                <li key={task.id}>
                                                    <div className="todolist d-flex">
                                                        <div className="mb-3 form-check me-2">
                                                            <input type="checkbox" className="form-check-input" />
                                                        </div>
                                                        <div className="flex-fill w-100">
                                                            <div className="d-flex align-items-start justify-content-between gap-1">
                                                                <div>
                                                                    <span className="d-block fw-medium">
                                                                        {task.title}
                                                                        <SpkTooltips placement="top" title={task.status}>
                                                                            <i className="ri-time-line bg-primary3-transparent p-1 align-middle fs-10 lh-1 rounded-circle ms-1 d-inline-block"></i>
                                                                        </SpkTooltips>
                                                                    </span>
                                                                    <p className="text-muted mb-0 fs-12">{task.description}</p>
                                                                </div>
                                                                <div className="d-flex gap-1">
                                                                    <SpkTooltips placement="top" title="Edit">
                                                                        <Link to="#!" className="btn btn-sm btn-info-light btn-icon">
                                                                            <i className="ti ti-edit"></i>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips placement="top" title="Delete">
                                                                        <Link to="#!" className="btn btn-sm btn-danger-light btn-icon">
                                                                            <i className="ti ti-trash"></i>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Leads Overview
                            </div>
                            <SpkDropdown Customtoggleclass="btn btn-sm btn-light dropdown-toggle no-caret" Togglevariant="" Toggletext="Yearly" IconClass="ti ti-chevron-down ms-1" Icon={true}>
                                <Dropdown.Item as="li" href="#!">Yearly</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Weekly</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Monthly</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                        <div className="card-body px-0">
                            <div id="Leads-overview"><Spkapexcharts chartOptions={Leadoptions} chartSeries={Leadsseries} type="radar" width={"100%"} height={327} />
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={12} xxl={5} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Sales Performance</div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light border btn-full btn-sm no-caret" Toggletext="Today" IconClass="ti ti-chevron-down ms-1" Icon={true}>
                                <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Weekly</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Monthly</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap text-center" header={[{ title: 'S.No.' }, { title: 'Representative' }, { title: 'Deals Closed' }, { title: 'Leads' }, { title: 'Rate (%)' }]}>
                                    {Salesdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>{idx.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link to="#!" className="fw-medium">{idx.repname}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.close}</td>
                                            <td>{idx.leads}</td>
                                            <td>{idx.rate}<i className={`ri-arrow-${idx.icon}-s-fill ms-1 text-${idx.color} align-middle fs-18`}></i></td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Leads Report
                            </div>
                            <SpkDropdown Togglevariant="" toggleas="a" Customtoggleclass="btn btn-light border btn-full btn-sm no-caret" Toggletext="View All" IconClass="ti ti-chevron-down ms-1" Icon={true}>
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="active-tab">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-bordered text-nowrap mb-0" header={[{ title: 'S.NO' }, { title: 'Lead' }, { title: 'Company Name' }, { title: 'Phone Number' }, { title: 'Status' }, { title: 'Location ' }, { title: 'Date' }, { title: 'Amount' }, { title: 'Action' }]}>
                                    {Leadsdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td>
                                                <span className="">0{idx.id}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <p className="mb-0 fs-14">{idx.lead}</p>
                                                        <Link to="#!" className="text-muted fs-12">{idx.mail}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.phnnum}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.cmpname}</span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span><i className="ri-map-pin-fill text-muted me-1"></i>{idx.location}</span>
                                            </td>
                                            <td>
                                                <span>{idx.date}</span>
                                            </td>
                                            <td>
                                                <span>{idx.amount}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link to="#!"  className="btn  btn-icon rounded-pill btn-primary-light"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link to="#!"  className="btn  btn-icon rounded-pill btn-info-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link to="#!"  className="btn  btn-icon rounded-pill  btn-primary2-light"><i className="ti ti-trash"></i></Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i></div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-4 --> */}
        </Fragment>
    )
};

export default Crm;
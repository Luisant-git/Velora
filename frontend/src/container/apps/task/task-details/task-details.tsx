import  { Fragment } from "react";
import { Card, Col, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkProgress from "../../../../@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import { Link } from "react-router-dom";
import SpkListgroup from "../../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { timelineData } from "../../../../components/common/data/apps/task/taskdetailsdata";
import SpkTimeline from "../../../../@spk-reusable-components/reusable-apps/spk-projecttimeline";
import face11 from "../../../../assets/images/faces/11.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face5 from "../../../../assets/images/faces/5.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face1 from "../../../../assets/images/faces/1.jpg"
import face9 from "../../../../assets/images/faces/9.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import filemanager1 from "../../../../assets/images/media/file-manager/1.png"
import filemanager3 from "../../../../assets/images/media/file-manager/3.png"
import media37 from "../../../../assets/images/media/media-37.jpg"
import media38 from "../../../../assets/images/media/media-38.jpg"
import media39 from "../../../../assets/images/media/media-39.jpg"
import media40 from "../../../../assets/images/media/media-40.jpg"
import media41 from "../../../../assets/images/media/media-41.jpg"

const TaskDetails = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Task" currentpage="Task Details" activepage="Task Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={3}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Task Information
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <div className="p-3 d-flex gap-4 border-bottom bg-light">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="assign" id="assign1" defaultChecked />
                                    <label className="form-check-label" htmlFor="assign1">
                                        Assign Lead
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="assign" id="assign2" />
                                    <label className="form-check-label" htmlFor="assign2">
                                        Assign Member
                                    </label>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap">
                                    <tr>
                                        <td><span className="fw-medium">Task ID :</span></td>
                                        <td>SPK - 456</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Task Tags :</span></td>
                                        <td>
                                            <SpkBadge variant="info-transparent" Customclass="bg- me-1 d-inline-block">Marketing</SpkBadge>
                                            <SpkBadge variant="primary3-transparent" >Campaign</SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Name :</span></td>
                                        <td>
                                            New Product Launch Strategy
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-medium">Assigned By :</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face11} alt="" />
                                                    </span>
                                                </div>
                                                <span className="d-block fs-14 fw-medium">Emily Watson</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-medium">Progress :</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <SpkProgress mainClass="progress progress-sm flex-fill me-2" variant="primary" striped={true} animated={true} now={45} />
                                                <div className="text-muted fs-11">45%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Status :</span></td>
                                        <td>
                                            <span className="fw-medium text-secondary">Inprogress</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Priority :</span></td>
                                        <td>
                                            <SpkBadge variant="danger-transparent"><i className="ri-circle-fill fs-8"></i> High</SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Start Date :</span></td>
                                        <td>
                                            13, June 2024
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">End Date :</span></td>
                                        <td>
                                            31, Dec 2024
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Assigned To :</span></td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <SpkTooltips placement="top" title="Simon">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face4} alt="Simon" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Sasha">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="Sasha" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Anagha">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face5} alt="Anagha" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Hishen">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="Hishen" />
                                                    </span>
                                                </SpkTooltips>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Last Updated Date :</span></td>
                                        <td>
                                            <span className="text-primary1 fw-medium">18, June 2024</span>
                                            <span className="text-primary1 fw-medium ms-1">10:30</span>
                                        </td>
                                    </tr>
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Attachments list
                            </div>
                            <Link  to="#!" className="btn btn-primary-light ms-auto btn-sm mt-1"> View More</Link>
                        </div>
                        <Card.Body className="card-body p-0">
                            <SpkListgroup Variant="flush" as="ul" >
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src={filemanager1} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">Full Project</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">assets.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src={filemanager1} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">image-1.png</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">documentation.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">landing.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttonlabel="button" Buttontype="button" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between align-items-center">
                            <div className="card-title">Task Details</div>
                            <div className="btn-list">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="card-body">
                            <div className="d-flex gap-2 mb-4 align-items-center">
                                <div className="fs-15 fw-medium">Task Title :</div>
                                <h5 className="fw-medium mb-0">
                                    Develop New Website Features <SpkBadge variant="primary1-transparent" Customclass="bg- fs-10 fw-medium"># created on 12 June, 2024</SpkBadge>
                                </h5>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Task Description :</div>
                            <p className="text-muted mb-4">Enhance existing website features to improve user engagement and streamline user experience. Implement new functionalities to support business growth and adaptability.</p>
                            <div className="row mb-4">
                                <Col xl={6}>
                                    <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                    <ul className="task-details-key-tasks mb-0">
                                        <li>Review current website features and identify areas for improvement.</li>
                                        <li>Brainstorm and develop ideas for new website functionalities.</li>
                                        <li>Design wireframes and prototypes for new features.</li>
                                        <li>Implement front-end and back-end development for new functionalities.</li>
                                        <li>Perform comprehensive testing and debugging.</li>
                                        <li>Launch and monitor performance of new website features.</li>
                                    </ul>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-15 fw-medium">Sub Tasks :</div>
                                        <Link to="#!" className="btn btn-info-light btn-wave btn-sm waves-effect waves-light">See More</Link>
                                    </div>
                                    <ul className="list-group mb-0">
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                <div className="fw-medium">Research latest web development trends.</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                <div className="fw-medium">Create technical specifications document.</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                <div className="fw-medium">Optimize website for mobile responsiveness.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Uploads :</div>
                            <div className="d-flex gap-2 mb-0 flex-wrap">
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl">
                                    <img src={media37} alt="File 1" />
                                </Link>
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl">
                                    <img src={media38} alt="File 2" />
                                </Link>
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl">
                                    <img src={media39} alt="File 3" />
                                </Link>
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl">
                                    <img src={media40} alt="File 4" />
                                </Link>
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl">
                                    <img src={media41} alt="File 5" />
                                </Link>
                                <Link aria-label="anchor" to="#!" className="avatar avatar-xl bg-primary text-fixed-white">
                                    +2
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="task">
                            <div className="card-header justify-content-between">
                                <Nav className="nav nav-tabs tab-style-8 scaleX profile-settings-tab" id="myTab4" role="tablist">
                                    <Nav.Item className="flex-fill" role="presentation">
                                        <Nav.Link eventKey="task" className="bg-primary-transparent px-3" id="task-activity" data-bs-toggle="tab" data-bs-target="#task-activity-pane" type="button" role="tab" aria-controls="task-activity-pane" aria-selected="true">Task Activity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="flex-fill" role="presentation">
                                        <Nav.Link eventKey="comment" className="bg-primary-transparent px-3" id="task-comments-tab" data-bs-toggle="tab" data-bs-target="#task-comments-tab-pane" type="button" role="tab" aria-controls="task-comments-tab-pane" aria-selected="false" tabIndex={-1}>Comments</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="card-body">
                                <Tab.Pane eventKey="task" className="overflow-hidden p-0 border-0" id="task-activity-pane" role="tabpanel" aria-labelledby="task-activity" tabIndex={0}>
                                    <ul className="timeline-list list-unstyled profile-timeline">
                                        {timelineData.map((item, index) => (
                                            <SpkTimeline
                                                key={index}
                                                avatar={item.avatar}
                                                title={item.title}
                                                description={item.description}
                                                timestamp={item.timestamp}
                                                media={item.media}
                                                SpanContent="S"
                                                sharedWith={item.sharedWith}
                                                color={item.color}
                                                Textafter={true}
                                                avatartext={true}
                                            />
                                        ))}
                                    </ul>
                                    <div className="p-3 mt-2 bg-light rounded">
                                        <div className="d-sm-flex align-items-center lh-1">
                                            <div className="me-sm-3 mb-2 mb-sm-0">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src={face9} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill me-sm-2">
                                                <div className="input-group timeline-task">
                                                    <input type="text" className="form-control shadow-none border" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="border"><i className="bi bi-emoji-smile"></i></SpkButton>
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="border"><i className="bi bi-paperclip"></i></SpkButton>
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="border"><i className="bi bi-camera"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary" Buttontype="button">Post</SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="comment" className="overflow-hidden p-0 border-0" id="task-comments-tab-pane" role="tabpanel" aria-labelledby="task-comments-tab" tabIndex={0}>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Mary Cateline</span>
                                                    <span className="d-block mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="primary1-light" Size="sm" Customclass="waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src={face13} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Monte vin</span>
                                                    <span className="d-block mb-3">Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="primary1-light" Size="sm" Customclass="waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon  waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon  waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default TaskDetails;
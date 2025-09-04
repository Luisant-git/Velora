import    { Fragment, useRef, useState} from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkListgroup from "../../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { timelineData } from "../../../../components/common/data/apps/projects/projectoverviewdata";
import SpkTimeline from "../../../../@spk-reusable-components/reusable-apps/spk-projecttimeline";

import face11 from "../../../../assets/images/faces/11.jpg"
import face2 from "../../../../assets/images/faces/2.jpg"
import face8 from "../../../../assets/images/faces/8.jpg"
import face5 from "../../../../assets/images/faces/5.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"

import filemanager1 from "../../../../assets/images/media/file-manager/1.png"
import filemanager3 from "../../../../assets/images/media/file-manager/3.png"
import { ReactSortable } from "react-sortablejs";
const ProjectOverview = () => {


    interface TaskType {
        id:string;
        task:string;
        status:string;
        date:string;
        color:string;
        check:string | any ;
      }
    const tasks:TaskType[] = [
        { id: "1", task: 'Implement responsive design', status: 'Not Started', date: '17-Jan-2024', color: "primary2", check: true },
        { id: "2", task: 'Fix login authentication issue', status: 'Completed', date: '17-Jan-2024', color: "success", check: "" },
        { id: "3", task: 'Optimize database queries', status: 'Not Started', date: '18-Feb-2024', color: "primary2", check: "" },
        { id: "4", task: 'Integrate third-party API', status: 'Pending', date: '19-Feb-2024', color: "warning", check: true },
        { id: "5", task: 'Create user documentation', status: 'Not Started', date: '21-Feb-2024', color: "primary2", check: true },
        { id: "6", task: 'Deploy to staging environment', status: 'In Progress', date: '24-Feb-2024', color: "primary1", check: "" },
        { id: "8", task: 'Conduct security audit', status: 'Not Started', date: '27-Feb-2024', color: "primary2", check: true },
    ]

    const [sortList, setSortList] = useState(tasks);
    const [selectAll, setSelectAll] = useState(false);
    const tableRef = useRef(null);


    const handleSelectAll = (e:any) => {
        setSelectAll(e.target.checked);
        setSortList((prevList) =>
            prevList.map((item) => ({
                ...item,
                check: e.target.checked,
            }))
        );
    };

    const handleCheckboxToggle = (id:any) => {
        setSortList((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, check: !item.check } : item
            )
        );
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Projects" currentpage="Projects Overview" activepage="Projects Overview" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Project Details
                            </div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}apps/projects/create-project`} className="btn btn-sm btn-primary btn-wave me-1"><i className="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link>
                                <Link  to="#!" className="btn btn-sm btn-primary1 btn-wave"><i className="ri-share-line align-middle fw-medium me-1"></i>Share</Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4 gap-2 flex-wrap">
                                <span className="avatar avatar-lg me-1 bg-primary-gradient"><i className="ri-stack-line fs-24 lh-1"></i></span>
                                <div>
                                    <h6 className="fw-medium mb-2 task-title">
                                        Customer Feedback Dashboard Development
                                    </h6>
                                    <SpkBadge variant="success-transparent"> In progress</SpkBadge>
                                    <span className="text-muted fs-12"><i className="ri-circle-fill text-success mx-2 fs-9"></i>Last Updated 1 Day Ago</span>
                                </div>
                                <div className="ms-auto align-self-start">
                                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-icon btn-sm btn-primary-light no-caret" IconClass="fe fe-more-vertical" Icon={true}>
                                        <Dropdown.Item as="li" href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Project Description :</div>
                            <p className="text-muted mb-4">The Customer Feedback Dashboard Development project aims to create a comprehensive dashboard that aggregates and visualizes customer feedback data. This will enable our team to gain actionable insights and improve customer satisfaction.</p>
                            <div className="d-flex gap-5 mb-4 flex-wrap">
                                <div className="d-flex align-items-center gap-2 me-3">
                                    <span className="avatar avatar-md avatar-rounded me-1 bg-primary1-transparent"><i className="ri-calendar-event-line fs-18 lh-1 align-middle"></i></span>
                                    <div>
                                        <div className="fw-medium mb-0 task-title">
                                            Start Date
                                        </div>
                                        <span className="fs-12 text-muted">28 August, 2024</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 me-3">
                                    <span className="avatar avatar-md avatar-rounded me-1 bg-primary2-transparent"><i className="ri-time-line fs-18 lh-1 align-middle"></i></span>
                                    <div>
                                        <div className="fw-medium mb-0 task-title">
                                            End Date
                                        </div>
                                        <span className="fs-12 text-muted">30 Oct, 2024</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="avatar avatar-md p-1 avatar-rounded me-1 bg-primary-transparent"><img src={face11} alt="" /></span>
                                    <div>
                                        <span className="d-block fs-14 fw-medium">Amith Catzem</span>
                                        <span className="fs-12 text-muted">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <Row>
                                    <Col xl={6}>
                                        <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                        <ul className="task-details-key-tasks mb-0">
                                            <li>Design and implement a user-friendly dashboard interface.</li>
                                            <li>Integrate data sources and APIs to fetch customer feedback data.</li>
                                            <li>Develop interactive data visualizations for easy interpretation.</li>
                                            <li>Implement filters and sorting functionalities for data analysis.</li>
                                            <li>Create user authentication and access control features.</li>
                                            <li>Perform usability testing and iterate based on feedback.</li>
                                        </ul>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-15 fw-medium">Sub Tasks :</div>
                                            <Link to="#!" className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">See More</Link>
                                        </div>
                                        <SpkListgroup as="ul">
                                            <ListGroup.Item as="li">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Research latest web development trends.</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Create technical specifications document.</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Optimize website for mobile responsiveness.</div>
                                                </div>
                                            </ListGroup.Item>
                                        </SpkListgroup>
                                    </Col>
                                </Row>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Skills :</div>
                            <div className="d-flex gap-2 flex-wrap">
                                <SpkBadge variant="light" Customclass="text-default border">UI/UX Design</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Data Integration</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Data Visualization</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Front-End Development</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Authentication Systems</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Usability Testing</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Agile Methodology</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">API Development</SpkBadge>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Assigned To :</span>
                                    <div className="avatar-list-stacked">
                                        <SpkTooltips title="John" tooltipClass="tooltip-primary">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face2} alt="" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Emily">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face8} alt="" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Liam">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face5} alt="" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Sophia">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face10} alt="" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Charlotte">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src={face15} alt="" />
                                            </span>
                                        </SpkTooltips>

                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Status:</span>
                                    <span className="d-block"><SpkBadge variant="info">On going</SpkBadge></span>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Priority:</span>
                                    <span className="d-block fs-14 fw-medium"><SpkBadge variant="primary3">Medium</SpkBadge></span>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">To Do Tasks</div>
                            <div className="btn btn-sm btn-primary-light btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task</div>
                        </Card.Header>
                        <div className="card-body p-0 position-relative" id="todo-content">
                            <div>
                                <div className="table-responsive">
                                      <SpkTablescomponent Bodytag={false} checked={selectAll} onChange={handleSelectAll}
                                            showCheckbox={true}
                                            tableClass="text-nowrap project-overview-table"
                                            header={[
                                                { title: '' },
                                                { title: 'Task Title' },
                                                { title: 'Status' },
                                                { title: 'End Date' },
                                                { title: 'Action' },
                                            ]}
                                        >
                                            <ReactSortable
                                                        list={sortList}
                                                        setList={setSortList}
                                                        handle=".todo-handle"
                                                        animation={150}
                                                        tag="tbody"  
                                                        id="todo-drag"
                                                
                                            >
                                                {sortList.map((item, index) => (
                                                    <tr className="todo-box" ref={tableRef} key={index} data-id={item.id}>
                                                        <td> <input
                                                            type="checkbox"
                                                            checked={item.check}
                                                            onChange={() => handleCheckboxToggle(item.id)}
                                                            className="form-check-input"
                                                        /></td>
                                                        <td>
                                                            <SpkButton
                                                                Buttonvariant="light"
                                                                Size="sm"
                                                                Customclass="btn-icon todo-handle"
                                                            >
                                                                : :
                                                            </SpkButton>
                                                        </td>
                                                        <td>
                                                            <span className="fw-medium">{item.task}</span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`fw-medium text-${item.color}`}
                                                            >
                                                                <i className="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>{item.date}</td>
                                                        <td className="text-end">
                                                            <div className="d-flex gap-2">
                                                                <Link
                                                                    to="#!"
                                                                    className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"
                                                                >
                                                                    <i className="ri-edit-line"></i>
                                                                </Link>
                                                                <Link
                                                                    to="#!"
                                                                    className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                                                                >
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </ReactSortable>
                                        </SpkTablescomponent>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card justify-content-between">
                        <Card.Header className="">
                            <div className="card-title">Project Discussions</div>
                        </Card.Header>
                        <div className="card-body">
                            <ul className="list-unstyled profile-timeline">
                                {timelineData.map((item, index) => (
                                    <SpkTimeline
                                        key={index}
                                        avatar={item.avatar}
                                        title={item.title}
                                        desClass={item.desClass}
                                        description={item.description}
                                        timestamp={item.timestamp}
                                        media={item.media || []}
                                        sharedWith={item.sharedWith || []}
                                        SpanContent={item.data}
                                        color={item.color}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-2 mb-2 mb-sm-0 p-1 rounded-circle bg-primary-transparent d-inline-block">
                                    <img src={face5} alt="" className="avatar avatar-sm avatar-rounded" />
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control w-sm-50 border shadow-none" placeholder="Share your thoughts" aria-label="Recipient's username with two button addons" />
                                        <SpkButton Buttonvariant="primary-light" Customclass="waves-effect waves-light" Buttontype="button"><i className="bi bi-emoji-smile"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Customclass="waves-effect waves-light" Buttontype="button"><i className="bi bi-paperclip"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Customclass="waves-effect waves-light" Buttontype="button"><i className="bi bi-camera"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary" Customclass="waves-effect waves-light text-nowrap" Buttontype="button">Post</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Project Documents
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-full btn-sm no-caret" Toggletext="View All" IconClass="ti ti-chevron-down ms-1" Icon={true}>
                                <Dropdown.Item href="#!">Download</Dropdown.Item>
                                <Dropdown.Item href="#!">Import</Dropdown.Item>
                                <Dropdown.Item href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <div className="card-body p-0">
                            <SpkListgroup Variant="flush">
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <span className="avatar avatar-md avatar-rounded p-2 bg-light lh-1">
                                            <img src={filemanager1} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">Project Proposal.pdf</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">1.2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <span className="avatar avatar-rounded bg-light lh-1">
                                            <img src={filemanager3} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">Contracts.docx</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">1.5MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <span className="avatar avatar-md avatar-rounded p-2 bg-light lh-1">
                                            <img src={filemanager1} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">Meeting Notes.txt</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">256KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <span className="avatar avatar-rounded bg-light lh-1">
                                            <img src={filemanager3} alt="" />
                                        </span>
                                        <div className="flex-fill">
                                            <Link to="#!"><span className="d-block fw-medium">User Manual.pdf</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">1.8MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </SpkListgroup>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default ProjectOverview;
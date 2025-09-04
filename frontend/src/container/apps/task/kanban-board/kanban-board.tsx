import  { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { FilePond } from 'react-filepond';
import Pageheader from "../../../../components/page-header/pageheader";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkBadge from "../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import { Taskdata1, Taskdata2, Taskdata4, Taskdata5, Tasksdata } from "../../../../components/common/data/apps/task/kanbanboarddata";
import { Link } from "react-router-dom";
import SpkKanbanboard from "../../../../@spk-reusable-components/reusable-apps/spk-kanbanboard";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";
import face2 from "../../../../assets/images/faces/2.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face8 from "../../../../assets/images/faces/8.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"

const KanbanBoard = () => {

    const [files, setFiles] = useState<any>([]);
    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    const leftContainerRef = useRef<HTMLDivElement | null>(null);
    const rightContainerRef = useRef<HTMLDivElement | null>(null);
    const topContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomContainerRef = useRef<HTMLDivElement | null>(null);
    const lastContainerRef = useRef<HTMLDivElement | null>(null);
    const windowElement  : any  = window;
    useEffect(() => {
      if (leftContainerRef.current && rightContainerRef.current) {
        windowElement.dragula([leftContainerRef.current, rightContainerRef.current, topContainerRef.current, bottomContainerRef.current, lastContainerRef.current]);
  
        if(document.querySelector('.firstdrag')?.classList.contains('task-Null'))
        {
            
            document.querySelector('.view-more-button')?.classList.add('d-none'); 
        }
      }
  
      OnDivChange();
    }, []);
  
    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
      ];
  
      const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
          const element: any = elementId.current;
      
          if (element && element.children) { // Check that element and element.children exist
            if (element.children.length <= 0) {
              element.classList.add('task-Null');
              
              const viewMoreButton = element.parentNode?.parentElement?.parentElement?.querySelector('.view-more-button');
              if (viewMoreButton) {
                viewMoreButton.classList.add('d-none');
              }
            } else {
              element.classList.remove('task-Null');
              
              const viewMoreButton = element.parentNode?.parentElement?.parentElement?.querySelector('.view-more-button');
              if (viewMoreButton) {
                viewMoreButton.classList.remove('d-none');
              }
            }
          }
        });
      };

    //Modal Function
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'UI/UX', label: 'UI/UX' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Product', label: 'Product' },
        { value: 'Development', label: 'Development' }
    ];


    //Modals

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Task" currentpage="Kanban Board" activepage="Kanban Board" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex align-items-center flex-wrap gap-2 flex-xxl-nowrap" role="search">
                                    <span className="fw-medium fs-15 text-nowrap flex-nowrap me-2">WorkSpace :</span>
                                    <input className="form-control me-1" type="search" placeholder="Search Tasks" aria-label="Search" />
                                    <SpkButton Buttonvariant="secondary-light" Buttontype="submit">Search</SpkButton>
                                </div>
                                <div className="ms-auto d-flex gap-4 align-items-center flex-wrap">
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face2} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face8} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face2} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face10} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face4} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face13} alt="img" />
                                        </span>
                                        <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +8
                                        </a>
                                    </div>
                                    <div className="d-flex gap-2 kanban-board">
                                        <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Customclass="btn-w-lg" Buttontoggle="modal" Buttontarget="#add-board"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Board</SpkButton>
                                        <div className="flex-fill">
                                            <SpkSelect name="colors" option={Option1} mainClass="basic-multi-select" placeholder="Sort By"
                                                menuplacement='auto' classNameprefix="Select2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <div className="TASK-kanban-board">
                <div className="kanban-tasks-type new">
                    <div className="karban-task-main mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary text-fixed-white rounded">
                            <span className="d-block fw-medium fs-15">NEW </span>
                            <div>
                                <SpkBadge variant="" Customclass="badge-task text-fixed-white">18</SpkBadge>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="new-tasks">
                        <div id="new-tasks-draggable" data-view-btn="new-tasks" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                            {Tasksdata.map((idx) => (
                                <SpkKanbanboard key={idx.taskId} headerClass="justify-content-between" status={"In Progress"} obj={idx} />
                            ))}
                        </div>
                    </SimpleBar>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                        <Link to="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link onClick={handleShow1} aria-label="anchor" to="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type todo">
                    <div className="karban-task-main mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary1 text-fixed-white rounded">
                            <span className="d-block fw-medium fs-15">TODO </span>
                            <div>
                                <SpkBadge variant="" Customclass="badge-task text-fixed-white">12</SpkBadge>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="todo-tasks">
                        <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                            {Taskdata1.map((idx) => (
                                <SpkKanbanboard key={idx.taskId} headerClass="justify-content-between" status={"In Progress"} obj={idx} />
                            ))}
                        </div>
                    </SimpleBar>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                        <Link to="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link  onClick={handleShow1} aria-label="anchor" to="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type in-progress">
                    <div className="karban-task-main mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary2 text-fixed-white rounded">
                            <span className="d-block fw-medium fs-15">ON GOING </span>
                            <div>
                                <SpkBadge variant="" Customclass="badge-task text-fixed-white">26</SpkBadge>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="inprogress-tasks">
                        <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" ref={topContainerRef} onMouseEnter={OnDivChange}>
                            {Taskdata2.map((idx) => (
                                <SpkKanbanboard key={idx.taskId} headerClass="justify-content-between" status={"In Progress"} obj={idx} />

                            ))}
                        </div>
                    </SimpleBar>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                        <Link to="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link  onClick={handleShow1} aria-label="anchor" to="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type inreview">
                    <div className="karban-task-main mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary3 text-fixed-white rounded">
                            <span className="d-block fw-medium fs-15">IN REVIEW </span>
                            <div>
                                <SpkBadge variant="" Customclass="badge-task text-fixed-white">30</SpkBadge>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="inreview-tasks">
                        <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                            {Taskdata5.map((idx) => (
                                <SpkKanbanboard key={idx.taskId} headerClass="justify-content-between" status={"In Progress"} obj={idx} />

                            ))}

                        </div>
                    </SimpleBar>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                        <Link to="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link  onClick={handleShow1} aria-label="anchor" to="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
                <div className="kanban-tasks-type completed">
                    <div className="karban-task-main mb-3">
                        <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-secondary text-fixed-white rounded">
                            <span className="d-block fw-medium fs-15">COMPLETED </span>
                            <div>
                                <SpkBadge variant="" Customclass="badge-task text-fixed-white">36</SpkBadge>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="kanban-tasks" id="completed-tasks">
                        <div id="completed-tasks-draggable" data-view-btn="completed-tasks" ref={lastContainerRef} onMouseEnter={OnDivChange}>
                            {Taskdata4.map((idx) => (
                                <SpkKanbanboard key={idx.taskId} headerClass="justify-content-between" status={"In Progress"} obj={idx} />

                            ))}
                        </div>
                    </SimpleBar>
                    <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                        <Link to="#!" className="btn btn-primary-light btn-wave flex-fill">View More</Link>
                        <Link  onClick={handleShow1} aria-label="anchor" to="#!" className="btn btn-secondary-light border btn-wave flex-fill" data-bs-toggle="modal" data-bs-target="#add-task">
                            <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!--End::row-2 --> */}

            {/* <!-- Start::add board modal --> */}
            <Modal show={show} onHide={handleClose} centered className="fade" id="add-board" tabIndex={-1}>
                    <Modal.Header>
                        <h6 className="modal-title">Add Board</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={handleClose} Customclass="btn-close" Buttondismiss="modal"
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xl={12}>
                                <label htmlFor="board-title" className="form-label">Task Board Title</label>
                                <Form.Control type="text" className="" id="board-title" placeholder="Board Title" />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            data-bs-dismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Add Board</SpkButton>
                    </Modal.Footer>
            </Modal>
            {/* <!-- End::add board modal --> */}

            {/* <!-- Start::add task modal --> */}
            <Modal className="fade" centered id="add-task" tabIndex={-1} show={show1} onHide={handleClose1}>
                    <Modal.Header>
                        <h6 className="modal-title">Add Task</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose1}
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-2">
                            <Col xl={6}>
                                <label htmlFor="task-name" className="form-label">Task Name</label>
                                <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                            </Col>
                            <Col xl={6}>
                                <label htmlFor="task-id" className="form-label">Task ID</label>
                                <Form.Control type="text" className="" id="task-id" placeholder="Task ID" />
                            </Col>
                            <div className="col-xl-12">
                                <label htmlFor="text-area" className="form-label">Task Description</label>
                                <Form.Control as="textarea" className="form-control" id="text-area" rows={2} placeholder="Write Description" />
                            </div>
                            <div className="col-xl-12">
                                <label htmlFor="text-area" className="form-label">Task Images</label>
                                <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                                <FilePond files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                            </div>
                            <div className="col-xl-12">
                                <label className="form-label">Assigned To</label>
                                <SpkSelect multi name="colors" option={Option2} menuplacement='auto' classNameprefix="Select2" />
                            </div>
                            <div className="col-xl-6 ">
                                <label className="form-label">Target Date</label>
                                <div className="form-group datepicker-inputwraper">
                                    <div className="input-group">
                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                        <SpkFlatpickr inputClass="form-control" placeholder='Choose date and time' onfunChange={handleDateChange} dataEnableTime={true} />
                                    </div>
                                </div>
                            </div>
                            <Col xl={6}>
                                <Form.Label className="">Tags</Form.Label>
                                <SpkSelect multi name="colors" option={Option3} mainClass="w-full !rounded-md" menuplacement='top' classNameprefix="Select2" />
                            </Col>
                        </div>
                    </Modal.Body>
                    <div className="modal-footer">
                        <SpkButton Buttonvariant="primary1-light" Buttontype="button" Customclass="m-0 me-2" onClickfunc={handleClose1}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="m-0">Add Task</SpkButton>
                    </div>
            </Modal>
            {/* <!-- End::add task modal --> */}
        </Fragment>
    )
};

export default KanbanBoard;
import { Card, Dropdown } from "react-bootstrap";
import SpkDropdown from "../reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";

interface SpkKanbanboardProps {
    status?: 'In Progress' | 'Completed' | 'Pending';
    cardClass?: string;
    headerClass?: string;
    obj: any
}

const SpkKanbanboard: React.FC<SpkKanbanboardProps> = ({ status, cardClass, headerClass, obj }) => {
    return (
        <Card className={`custom-card ${cardClass}`}>
            <div className={`card-header ${headerClass}`}>
                <div className="task-badges">
                    <span className={`badge bg-${obj.idColor}-transparent ms-1 me-1`}>{obj.taskId}</span>
                    {obj.badges}
                </div>
                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-light no-caret" Icon={true} IconClass="ri-more-2-fill" Id="dropdownMenuButton1"
                    Menulabel="dropdownMenuButton1">
                    <Dropdown.Item as="li" href="#!">View</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Edit</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Delete</Dropdown.Item>
                </SpkDropdown>
            </div>
            <Card.Body>
                <h6 className="fw-medium mb-1 fs-15">{obj.title}</h6>
                <p className="kanban-task-description">{obj.description}</p>
                <div className="kanban-card-footer">
                    <span className={`badge bg-${obj.color} me-1`}>{obj.priority}</span>
                    <span className={`badge bg-${status === 'In Progress' ? 'success' : 'warning'}`}>{obj.status}</span>
                </div>
            </Card.Body>
            <div className="p-3 border-top border-block-start-dashed">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="avatar-list-stacked">
                        {obj.avatars}
                    </div>
                    <div>
                        <Link to="#!" className="me-2 text-secondary">
                            <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span>
                            <span className="fw-medium fs-12">{obj.likes}</span>
                        </Link>
                        <Link to="#!" className="text-info">
                            <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span>
                            <span className="fw-medium fs-12">{obj.comments}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SpkKanbanboard;

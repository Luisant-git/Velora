import face7 from "../../../../assets/images/faces/7.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face8 from "../../../../assets/images/faces/8.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"
import face14 from "../../../../assets/images/faces/14.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face3 from "../../../../assets/images/faces/3.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
interface TaskType {
  id:number;
  title:string;
  status:string;
  dueDate:string;
  priority:string;
  assignee:string;
  name:string;
  progress:number;
  color:string;
  color1:string;
  data:number;
  color2:string;
  check:string | any ;
}

export const Task:TaskType[] = [
  {
    id: 1,
    title: "Software Development Tasks",
    status: "In Progress",
    dueDate: "15-Jan-2024",
    priority: "Medium",
    assignee: face7,
    name: "Mehtha",
    progress: 32,
    color: "primary",
    color1: "primary2",
    data: 32,
    color2: "primary",
    check: ""
  },
  {
    id: 2,
    title: "Bug Fixes and Issue Tracking",
    status: "Not Started",
    dueDate: "16-Jan-2024",
    priority: "High",
    assignee: face12,
    name: "Ranjeeth",
    progress: 80,
    color: "primary2",
    color1: "primary3",
    data: 80,
    color2: "secondary",
    check: true
  },
  {
    id: 3,
    title: "IT Infrastructure Upgrades",
    status: "Not Started",
    dueDate: "18-Feb-2024",
    priority: "Low",
    assignee: face8,
    name: "Vency",
    progress: 90,
    color: "primary2",
    color1: "primary1",
    data: 90,
    color2: "orange",
    check: ""
  },
  {
    id: 4,
    title: "Network Configuration",
    status: "Pending",
    dueDate: "19-Feb-2024",
    priority: "Medium",
    assignee: face15,
    name: "Cimen Sobs",
    progress: 69,
    color: "warning",
    color1: "primary2",
    data: 69,
    color2: "info",
    check: true
  },
  {
    id: 5,
    title: "Backup and Recovery Report",
    status: "Not Started",
    dueDate: "21-Feb-2024",
    priority: "High",
    assignee: face14,
    name: "Dhruv Dany",
    progress: 96,
    color: "primary2",
    color1: "primary3",
    data: 96,
    color2: "warning",
    check: true
  },
  {
    id: 6,
    title: "User Account Management",
    status: "In Progress",
    dueDate: "24-Feb-2024",
    priority: "Low",
    assignee: face11,
    name: "Rony Parker",
    progress: 88,
    color: "primary",
    color1: "primary1",
    data: 88,
    color2: "danger",
    check: ""
  }, {
    id: 7,
    title: "Deployment Schedule",
    status: "Not Started",
    dueDate: "27-Feb-2024",
    priority: "High",
    assignee: face4,
    name: "Monjitha",
    progress: 36,
    color: "primary2",
    color1: "primary3",
    data: 36,
    color2: "teal",
    check: true
  },
  {
    id: 8,
    title: "Database Management",
    status: "Not Started",
    dueDate: "03-Mar-2024",
    priority: "Medium",
    assignee: face3,
    name: "Killies",
    progress: 57,
    color: "primary2",
    color1: "primary2",
    data: 57,
    color2: "pink",
    check: ""
  },
  {
    id: 9,
    title: "Monitoring and Alert",
    status: "Not Started",
    dueDate: "05-Mar-2024",
    priority: "Low",
    assignee: face13,
    name: "Tom Cruz",
    progress: 79,
    color: "primary2",
    color1: "primary1",
    data: 79,
    color2: "dark",
    check: ""
  },
  {
    id: 10,
    title: "Server Maintenance",
    status: "Completed",
    dueDate: "17-Jan-2024",
    priority: "Low",
    assignee: face13,
    name: "Palam Nath",
    progress: 58,
    color: "success",
    color1: "primary1",
    data: 58,
    color2: "success",
    check: ""
  },
];
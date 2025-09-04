
import face2 from "../../../../../assets/images/faces/2.jpg"
import face4 from "../../../../../assets/images/faces/4.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face8 from "../../../../../assets/images/faces/8.jpg"
import face10 from "../../../../../assets/images/faces/10.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"
import face7 from "../../../../../assets/images/faces/7.jpg"

interface ListType {
    value: string;
    label: string;
}
export const Listviewassigneddata: ListType[] = [
    { value: 'Angelina May', label: 'Angelina May' },
    { value: 'Kiara advain', label: 'Kiara advain' },
    { value: 'Hercules Jhon', label: 'Hercules Jhon' },
    { value: 'Mayor Kim', label: 'Mayor Kim' },
]
export const Prioritydata: ListType[] = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
]
export const Statusdata: ListType[] = [
    { value: 'New', label: 'New' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Inprogress', label: 'Inprogress' },
    { value: 'Pending', label: 'Pending' }
]

interface Listdata {
    id: number;
    title: string;
    code: string;
    startDate: string;
    status: string; 
    dueDate: string;
    priority: string;
    avatars: string | any;
    reviewStatus: string;
    isChecked: boolean | any;
    color: string;
    color1: string;
    color2: string;
    count: string;
}
export const Listviewdata: Listdata[] = [
    {
        id: 1,
        title: "Design New Landing Page",
        code: "SPK - 01",
        startDate: "02-06-2024",
        status: "New",
        dueDate: "10-06-2024",
        priority: "Medium",
        avatars: [face2, face8, face2],
        reviewStatus: "In Review",
        isChecked: "",
        color: "primary",
        color1: "secondary",
        color2: "info",
        count: "2",
    },
    {
        id: 2,
        title: "New Project Blueprint",
        code: "SPK - 04",
        startDate: "05-06-2024",
        status: "In Progress",
        dueDate: "15-06-2024",
        priority: "High",
        avatars: [face12, face11],
        reviewStatus: "On Hold",
        isChecked: true,
        color: "secondary",
        color1: "danger",
        color2: "warning",
        count: "4",
    },
    {
        id: 3,
        title: "Server Side Validation",
        code: "SPK - 11",
        startDate: "12-06-2024",
        status: "Pending",
        dueDate: "16-06-2024",
        priority: "Low",
        avatars: [face5, face9, face13],
        reviewStatus: "In Review",
        isChecked: "",
        color: "warning",
        color1: "success",
        color2: "info",
        count: "5",
    },
    {
        id: 4,
        title: "New Project Buleprint",
        code: "SPK - 12",
        startDate: "01-07-2024",
        status: "Inprogress",
        dueDate: "10-07-2024",
        priority: "High",
        avatars: [face6, face10],
        reviewStatus: "In Review",
        isChecked: true,
        color: "secondary",
        color1: "danger",
        color2: "info",
        count: "4",
    },
    {
        id: 5,
        title: "Server Side Validation",
        code: "SPK - 13",
        startDate: "15-07-2024",
        status: "Pending",
        dueDate: "20-07-2024",
        priority: "Low",
        avatars: [face3, face7, face4],
        reviewStatus: "In Review",
        isChecked: "",
        color: "warning",
        color1: "success",
        color2: "info",
        count: "5",
    },
    {
        id: 6,
        title: "New Plugin Development",
        code: "SPK - 24",
        startDate: "08-06-2024",
        status: "Completed",
        dueDate: "17-06-2024",
        priority: "Low",
        avatars: [face2, face8],
        reviewStatus: "On Hold",
        isChecked: true,
        color: "success",
        color1: "success",
        color2: "warning",
        count: "2",
    },
    {
        id: 7,
        title: "Designing New Authentication Page",
        code: "SPK - 16",
        startDate: "03-06-2024",
        status: "In Progress",
        dueDate: "08-06-2024",
        priority: "Medium",
        avatars: [face10, face15],
        reviewStatus: "In Review",
        isChecked: "",
        color: "secondary",
        color1: "secondary",
        color2: "info",
        count: "3",
    },
    {
        id: 8,
        title: "New Plugin Development",
        code: "SPK - 24",
        startDate: "08-06-2024",
        status: "Completed",
        dueDate: "17-06-2024",
        priority: "Low",
        avatars: [face2, face8],
        reviewStatus: "In Review",
        isChecked: "",
        color: "success",
        color1: "success",
        color2: "info",
        count: "2",
    },
    {
        id: 9,
        title: "Designing New Authentication Page",
        code: "SPK - 16",
        startDate: "03-06-2024",
        status: "In Progress",
        dueDate: "08-06-2024",
        priority: "Medium",
        avatars: [face10, face15],
        reviewStatus: "In Review",
        isChecked: "",
        color: "secondary",
        color1: "secondary",
        color2: "info",
        count: "3",
    },
    {
        id: 10,
        title: "Documentation For New Template",
        code: "SPK - 07",
        startDate: "12-06-2024",
        status: "New",
        dueDate: "25-06-2024",
        priority: "High",
        avatars: [face12],
        reviewStatus: "On Hold",
        isChecked: "",
        color: "primary",
        color1: "danger",
        color2: "warning",
        count: "1",
    },
];


export const taskData = [
    {
        id: 1,
        title: "New Tasks",
        count: "45,478",
        percentageChange: "2.56%",
        changeDirection: "up",
        Icon: "ri ri-task-line",
        backgroundColor: "primary",
        inc: 'Increased By',
        color: 'success',
        icon: 'ti ti-arrow-narrow-up',
    },
    {
        id: 2,
        title: "Completed Tasks",
        count: "2,345",
        percentageChange: "3.05%",
        changeDirection: "down",
        Icon: "ri ri-check-line",
        backgroundColor: "primary1",
        inc: 'Decreased By',
        color: 'danger',
        icon: 'ti ti-arrow-narrow-down',
    },
    {
        id: 3,
        title: "Pending Tasks",
        count: "1,245",
        percentageChange: "2.16%",
        changeDirection: "up",
        Icon: "ri ri-time-line",
        backgroundColor: "primary2",
        inc: 'Increased By',
        color: 'success',
        icon: 'ti ti-arrow-narrow-up',
    },
    {
        id: 4,
        title: "Inprogress Tasks",
        count: "658",
        percentageChange: "2.1%",
        changeDirection: "up",
        Icon: "ri ri-loader-line",
        backgroundColor: "primary3",
        inc: 'Increased By',
        color: 'success',
        icon: 'ti ti-arrow-narrow-up',
    },
];

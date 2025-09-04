import { Link } from "react-router-dom";
import filemanager3 from "../../../../../assets/images/media/file-manager/3.png"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face7 from "../../../../../assets/images/faces/7.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"

import media45 from "../../../../../assets/images/media/media-45.jpg"

import media21 from "../../../../../assets/images/media/media-21.jpg"
import media28 from "../../../../../assets/images/media/media-28.jpg"
import media30 from "../../../../../assets/images/media/media-30.jpg"

export const timelineData = [
    {
        avatar: "",
        title: "Project Kick-off Meeting",
        description: "Discuss project scope, objectives, and timelines.",
        timestamp: "15, Jun 2024 - 06:20",
        data: "A",
        color: 'primary'
    },
    {
        avatar: "",
        title: "Project Details Page Planning",
        description: "Define feature requirements and layout for the project details page.",
        timestamp: "20, Jun 2024 - 09:00",
        data: "B",
        color: 'primary2'
    },
    {
        avatar: face12,
        title: `<span className="text-default"><b>Brenda Adams</b> shared a document with <b>you</b></span>`,
        desClass: 'profile-activity-media mb-0',
        description: (
            <>
                <Link to="#!">
                    <img src={filemanager3} alt="" />
                </Link>
                <span className="fs-11 text-muted">728.62KB</span>
            </>
        ),
        timestamp: "18, Jun 2024 - 09:15",
    },
    {
        avatar: "",
        title: `<span class="text-default"><b>You</b> shared a post with 4 people <b>John,Emma,Liam,Sophie</b></span>`,
        description: "",
        timestamp: "30, Jun 2024 - 13:20",
        media: [media21],
        sharedWith: [
            face3,
            face9,
            face6,
            face14,
        ],
        data: "J",
        color: 'primary3'
    },
    {
        avatar: face7,
        title: "Security and Compliance Audit",
        description: "Ensure the system adheres to security and regulatory requirements.",
        timestamp: "",
    },
    {
        avatar: media45,
        title: "<b>Lucas</b>  commented on Project <a class='text-secondary' href='#!'><u>#System Integration</u></a>",
        description: "Integration progress looks good, keep it up! 👍",
        timestamp: "25, Jun 2024 - 10:52",
        media: [
            media28,
            media30,
        ],
    },
];

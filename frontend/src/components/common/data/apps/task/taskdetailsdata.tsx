
import face7 from "../../../../../assets/images/faces/7.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
 import media19 from "../../../../../assets/images/media/media-19.jpg"

import filemanager3 from "../../../../../assets/images/media/file-manager/3.png"
export const timelineData = [
    {
        avatar: face7,
        title: "<span class='fw-medium'>Oliver</span> shared a document with <span class='fw-medium mx-1'>you.</span>",
        description: "\"We've finalized the project specifications and the client has approved the initial designs. Moving forward with the development phase.\"",
        timestamp: "14, June 2024 - 10:45",
        media: [filemanager3],
        sharedWith: [],
    },
    {
        avatar: "",
        title: "<span class='fw-medium'>You</span> shared a post with 6 people, including <span class='fw-medium'>Ava, Sophia, Mia, Lucas</span>.",
        description: "",
        timestamp: "10, June 2024 - 14:23",
        media: [media19],
        sharedWith: [
            face3,
            face9,
            face12,
            face14
        ],
        color: 'primary2'
    },
    {
        avatar: face5,
        title: "<span class='fw-medium'>Liam</span> commented on your post.",
        description: "\"The updates to the project plan look great. I'll review the milestones and get back to you by end of day.\"",
        timestamp: "12, June 2024 - 09:15",
        media: [],
        sharedWith: [],
    },
];

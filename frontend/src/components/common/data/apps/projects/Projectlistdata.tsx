import face1 from "../../../../../assets/images/faces/1.jpg"
import face2 from "../../../../../assets/images/faces/2.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face10 from "../../../../../assets/images/faces/10.jpg"
import face4 from "../../../../../assets/images/faces/4.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face7 from "../../../../../assets/images/faces/7.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face21 from "../../../../../assets/images/faces/21.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face16 from "../../../../../assets/images/faces/16.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"

import logo1 from "../../../../../assets/images/company-logos/1.png"
import logo3 from "../../../../../assets/images/company-logos/3.png"
import logo4 from "../../../../../assets/images/company-logos/4.png"
import logo5 from "../../../../../assets/images/company-logos/5.png"
import logo6 from "../../../../../assets/images/company-logos/6.png"
import logo7 from "../../../../../assets/images/company-logos/7.png"
import logo8 from "../../../../../assets/images/company-logos/8.png"


export const projects = [
  {
    id: 1,
    logo: logo1,
    title: 'Development of Enhanced Analytics Platform',
    tasksCompleted: '18/22',
    description: 'Build an advanced analytics dashboard integrating real-time data from multiple sources.',
    avatars: [face5,face7,face9,face11],
    startDate: '15, Jun 2024',
    endDate: '30, Aug 2024',
    progress: 65,
    priority: 'Medium',
    color: 'warning',
    count: '2',
    color1:'info'
  },

  {
    id: 2,
    logo: logo3,
    title: 'E-commerce Platform Optimization',
    tasksCompleted: '10/20',
    description: 'Enhance performance and user experience for a high-traffic e-commerce platform.',
    avatars: [face4,face6,face12],
    startDate: '02, Jul 2024',
    endDate: '15, Sep 2024',
    progress: 45,
    priority: 'High',
    color: 'danger',
    count: '1',
    color1:'warning'
  },
  {
    id: 3,
    logo: logo7,
    title: 'Data Migration to Cloud',
    tasksCompleted: '5/8',
    description: 'Transfer legacy data systems to cloud infrastructure for scalability and accessibility.',
    avatars: [face1,face21],
    startDate: '15, Oct 2024',
    endDate: '30, Dec 2024',
    progress: 62,
    priority: 'Low',
    color: 'success',
    count: '2',
    color1:'danger'
  },
  {
    id: 4,
    logo: logo8,
    title: 'Cybersecurity Audit and Enhancements',
    tasksCompleted: '2/6',
    description: 'Conduct a comprehensive audit and implement security measures to protect data and systems.',
    avatars: [face12,face11],
    startDate: '01, Nov 2024',
    endDate: '15, Jan 2025',
    progress: 40,
    priority: 'High',
    color: 'danger',
    count: '2',
    color1:'warning'
  },
  {
    id: 5,
    logo: logo6,
    title: "AI-Powered Customer Support System",
    tasksCompleted: "3/10",
    description: "Implement a machine learning-driven system to automate customer support inquiries.",
    avatars: [face5, face12],
    startDate: "05,Sep 2024",
    endDate: "25,Nov 2024",
    progress: 30,
    priority: "Medium",
    color: 'warning',
    count: '1',
    color1:'info'
  },
  {
    id: 6,
    logo: logo4,
    title: "Mobile App Launch",
    tasksCompleted: "5/15",
    description: "Develop and release a new mobile application for iOS and Android platforms.",
    avatars: [face13, face14, face15],
    startDate: "10,Aug 2024",
    endDate: "30,Oct 2024",
    progress: 35,
    priority: "Medium",
    color: 'warning',
    count: '2',
    color1:'success'
  },
  {
    id: 7,
    logo: logo5,
    title: "IT Infrastructure Upgrade",
    tasksCompleted: "2/12",
    description: "Modernize network and server infrastructure to improve reliability and security.",
    avatars: [face16, face11],
    startDate: "20,Jul 2024",
    endDate: "30,Oct 2024",
    progress: 15,
    priority: "Low",
    color: 'success',
    count: '2',
     color1:'secondary'
  },
];

interface AvatarTYpe {
  id: number;
  src: string;
}
export const Avatars: AvatarTYpe[] = [
  { id: 1, src: face1 },
  { id: 2, src: face2 },
  { id: 3, src: face3 },
  { id: 4, src: face12 },
  { id: 5, src: face10 },
  { id: 6, src: face4 },
  { id: 7, src: face5 },
  { id: 8, src: face13 },
]
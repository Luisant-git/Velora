import face4 from "../../../../../assets/images/faces/4.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face8 from "../../../../../assets/images/faces/8.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face10 from "../../../../../assets/images/faces/10.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"

import logo2 from "../../../../../assets/images/company-logos/2.png"
import logo3 from "../../../../../assets/images/company-logos/3.png"
import logo4 from "../../../../../assets/images/company-logos/4.png"
import logo5 from "../../../../../assets/images/company-logos/5.png"
import logo6 from "../../../../../assets/images/company-logos/6.png"
import logo7 from "../../../../../assets/images/company-logos/7.png"
import logo8 from "../../../../../assets/images/company-logos/8.png"
import logo9 from "../../../../../assets/images/company-logos/9.png"

interface loppdata {
    value: string;
    label: string;
}
export const Data: loppdata[] = [
    { value: 'Select Tag', label: 'Select Tag' },
    { value: 'New Lead', label: 'New Lead' },
    { value: 'Prospect', label: 'Prospect' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Hot Lead', label: 'Hot Lead' },
    { value: 'Partner', label: 'Partner' },
    { value: 'LostCustomer', label: 'LostCustomer' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Subscriber', label: 'Subscriber' }
];
export const Data1: loppdata[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];

//Loopingdata
interface loopingdata {
    id: string;
    src1: string;
    src2: string;
    name: string;
    time: string;
    score: string;
    mail: string;
    cell: string;
    text1: string;
    text2: string;
    text3: string;
    color1: string;
    color2: string;
    class1: string;
    class2: string;
    pry: string;
    color: string;
}
export const Loopingdata: loopingdata[] = [
    { id: '1', src1: face4, src2: logo2, name: 'Jhon Doe', time: 'Jun, 15 2024 - 10:30AM', score: '380', pry: "High Priority", color: "danger", mail: 'jhon.doe@example.com', cell: '1678-28993-223 ', text1: 'Example Corp', text2: 'Vip Client', text3: 'Referral', color1: 'primary', color2: 'primary', class1: '', class2: '' },
    { id: '2', src1: face5, src2: logo3, name: 'Alice Smith', time: 'Jun, 14 2024 - 3:15PM', score: '425', mail: 'alice.smith@example.com', cell: ' 8122-2342-4453', text1: 'Smith & Co', text2: 'Regular Client', text3: 'Linkedin', color1: 'primary', color2: 'danger', class1: '', class2: '', pry: "Medium Priority", color: "warning" },
    { id: '3', src1: face6, src2: logo4, name: 'Michael Johnson', time: 'Jun, 13 2024 - 9:00 AM', score: '300', mail: 'johnson@example.com', cell: '555-123-4567', text1: 'Johnson Enterprises', text2: 'Potential Client', text3: ' Website ', color1: 'success', color2: '', class1: '', class2: '', pry: "Low Priority", color: "success" },
    { id: '4', src1: face8, src2: logo5, name: 'Sophia Martinez', time: 'Jun, 12 2024 - 2:00 PM', score: '320', mail: 'sophia.martinez@example.com', cell: '234-567-8901', text1: 'Martinez Enterprises', text2: 'Potential Lead', text3: 'Cold call', color1: 'light text-default', color2: 'secondary', class1: 'text-default', class2: '', pry: "Medium Priority", color: "warning" },
    { id: '5', src1: face9, src2: logo6, name: 'David Wilson', time: 'Jun, 11 2024 - 11:45 AM', score: '280', mail: 'david.wilson@example.com', cell: '345-678-9012', text1: 'Wilson & Sons', text2: 'Regular Client', text3: ' Email Campaign ', color1: 'pink', color2: 'success', class1: '', class2: '', pry: "Low Priority", color: "success" },
    { id: '6', src1: face10, src2: logo7, name: 'Emma Brown', time: 'Jun, 10 2024 - 1:30 PM', score: '280', mail: 'emma.brown@example.com', cell: '456-789-0123', text1: 'Brown Solutions', text2: 'VIP Client', text3: ' Trade Show ', color1: 'danger', color2: 'info', class1: '', class2: '', pry: "High Priority", color: "danger" },
    { id: '7', src1: face12, src2: logo8, name: 'Olivia Davis', time: 'Jun, 9 2024 - 9:15 AM', score: '280', mail: 'olivia.davis@example.com', cell: '567-890-1234', text1: 'Davis Consulting', text2: 'Regular Client', text3: 'Webinar', color1: 'warning', color2: 'purple', class1: '', class2: '', pry: "Medium Priority", color: "warning" },
    { id: '8', src1: face13, src2: logo9, name: 'William Clark', time: 'Jun, 8 2024 - 4:30 PM', score: '350', mail: 'william.clark@example.com', cell: '678-901-2345', text1: 'Clark Solutions', text2: 'VIP Client', text3: ' Advertisement ', color1: 'success', color2: 'info', class1: '', class2: '', pry: "High Priority", color: "danger" },
];


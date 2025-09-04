import face4 from "../../../../../assets/images/faces/4.jpg"
import face2 from "../../../../../assets/images/faces/2.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face10 from "../../../../../assets/images/faces/10.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face16 from "../../../../../assets/images/faces/16.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"
import face7 from "../../../../../assets/images/faces/7.jpg"

import logo1 from "../../../../../assets/images/company-logos/1.png"
import logo2 from "../../../../../assets/images/company-logos/2.png"
import logo3 from "../../../../../assets/images/company-logos/3.png"
import logo4 from "../../../../../assets/images/company-logos/4.png"
import logo5 from "../../../../../assets/images/company-logos/5.png"
import logo6 from "../../../../../assets/images/company-logos/6.png"
import logo7 from "../../../../../assets/images/company-logos/7.png"
import logo8 from "../../../../../assets/images/company-logos/8.png"
import logo9 from "../../../../../assets/images/company-logos/9.png"
import logo10 from "../../../../../assets/images/company-logos/10.png"

interface laedsdata {
    id: number;
    src1: string;
    src2: string;
    name: string;
    mail: string;
    cell: string;
    text1: string;
    text2: string;
    time: string;
    badge: string;
    contracted: string;
    owner: string;
    src3: string;
    color2: string;
}

export const Leadsdata: laedsdata[] = [
    { id: 1, src1: face4, src2: logo1, name: 'Catalina', time: '24, Jul} 2023 - 4:45PM', mail: 'Charlotte2981@gmail.com', cell: '1678-28993-223', badge: 'New Lead', text1: 'Spruko Technologies', text2: 'Social Media', contracted: " 2024-06-15 ", owner: "Jane Smith", src3: face2, color2: "primary1" },
    { id: 2, src1: face5, src2: logo3, name: 'David Johnson', time: '15, Jul 2023 - 11:45AM', mail: 'Thomas289@gmail.com', cell: ' 8122-2342-4453', badge: 'Prospect', text1: 'Spice Infotech', text2: 'Direct mail', contracted: " 2024-06-14 ", owner: "Michael Brown", src3: face3, color2: "primary" },
    { id: 3, src1: face6, src2: logo4, name: 'Sophia Adams', time: '10, Aug 2023 - 3:25PM', mail: 'Matthew789@gmail.com', cell: ' 1902-2001-3023', badge: 'Lead', text1: 'Logitech ecostics', text2: 'Blog Articles', contracted: " 2024-06-13 ", owner: "Emma Wilson", src3: face7, color2: "primary1" },
    { id: 4, src1: face10, src2: logo5, name: 'Sophie Turner', time: '18, Aug 2023 - 10:10AM', mail: 'Isabella290@gmail.com', cell: ' 1603-2032-1123', badge: 'Prospect', text1: 'Initech Info', text2: 'Affiliates', contracted: " 2024-06-14 ", owner: "Olivia Moore", src3: face11, color2: "primary" },
    { id: 5, src1: face12, src2: logo6, name: 'Emma Garcia', time: '19, Jul 2023 - 12:41PM', mail: 'Sophia1993@gmail.com', cell: '1129-2302-1092', badge: 'Lead', text1: 'Massive Dynamic', text2: 'Organic search', contracted: " 2024-06-13 ", owner: "Daniel Harris", src3: face13, color2: "primary1" },
    { id: 6, src1: face14, src2: logo7, name: 'Sophia Lee', time: '14, Aug 2023 - 5:18PM', mail: 'JackMiller345@gmail.com', cell: ' 9923-2344-2003', badge: 'Lead', text1: 'Globex Corporation', text2: 'Social media', contracted: " 2024-06-11 ", owner: "Sophie Turner", src3: face15, color2: "primary1" },
    { id: 7, src1: face15, src2: logo8, name: 'Emma Garcia', time: '12, Jun 2023 - 11:38AM', mail: 'Michael78@gmail.com', cell: '7891-2093-1994', badge: 'Prospect', text1: 'Acme Corporation', text2: 'Blog Articles', contracted: " 2024-06-10 ", owner: "Olivia Moore", src3: face11, color2: "primary" },
    { id: 8, src1: face16, src2: logo9, name: 'Sophia Lee', time: '19, May 2023 - 1:57PM', mail: 'Olivia678@gmail.com', cell: '	1899-2993-1923', badge: 'New Lead', text1: 'Soylent Corp', text2: 'Organic search', contracted: "2024-06-09", owner: "Jane Smith", src3: face2, color2: "primary1" },
    { id: 9, src1: face4, src2: logo10, name: 'Lucas Martin', time: '28, Jul 2023 - 9:31AM', mail: 'Emily289@gmail.com', cell: ' 1768-2332-4934', badge: 'Lead', text1: 'Umbrella Corporation', text2: 'Affiliates', contracted: " 2024-06-08 ", owner: "Sophia Lee", src3: face12, color2: "primary1" },
    { id: 10, src1: face5, src2: logo2, name: 'Catalina', time: '28, Jul 2023 - 9:31AM', mail: 'James186@gmail.com', cell: '4788-7822-4786', badge: 'Contacted', text1: 'Hooli Technologies', text2: 'Direct mail', contracted: " 2024-06-15 ", owner: "Jane Smith", src3: face2, color2: "primary" },
    { id: 10, src1: face9, src2: logo2, name: 'Isabella Adams', time: '28, Jul 2023 - 9:31AM', mail: 'James186@gmail.com', cell: '4788-7822-4786', badge: 'Contacted', text1: 'Hooli Technologies', text2: 'Direct mail', contracted: " 2024-06-07 ", owner: "Sophia Lee", src3: face12, color2: "primary" },
];

interface data {
    value: string;
    label: string;
}

export const Data: data[] = [
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
interface data1 {
    value: string;
    label: string;
}
export const Data1: data1[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];
interface data2 {
    value: string;
    label: string;
}
export const Data2: data2[] = [
    { value: 'Select Status', label: 'Select Status' },
    { value: 'New', label: 'New' },
    { value: 'Follow-up', label: 'Follow-up' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Disqualified', label: 'Disqualified' },
    { value: 'Qualified', label: 'Qualified' }
];

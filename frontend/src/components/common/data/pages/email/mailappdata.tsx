import face5 from "../../../../../assets/images/faces/5.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"
import face7 from "../../../../../assets/images/faces/7.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face16 from "../../../../../assets/images/faces/16.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"

interface Countryoptions1 {
    value: string;
    label: string;
}
export const Maildata: Countryoptions1[] = [
    { value: 'jay@gmail.com', label: 'jay@gmail.com' },
    { value: 'kia@gmail.com', label: 'kia@gmail.com' },
    { value: 'don@gmail.com', label: 'don@gmail.com' },
    { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
]

interface mail {
    id: number;
    icon: string;
    text1: string;
    text2: string;
    class: string;
    class1: string;
}
export const Mails: mail[] = [
    { id: 1, icon: 'mail', text1: 'All Mails', text2: '2,142', class: 'badge bg-primary1 rounded-pill', class1: 'active' },
    { id: 2, icon: 'inbox', text1: 'Inbox', text2: '12', class: 'badge bg-primary2 rounded-pill', class1: '' },
    { id: 3, icon: 'send', text1: 'Sent', text2: '', class: '', class1: '' },
    { id: 4, icon: 'notes', text1: 'Drafts', text2: '', class: '', class1: '' },
    { id: 5, icon: 'alert-circle', text1: 'Spam', text2: '6', class: 'badge bg-primary3 rounded-pill', class1: '' },
    { id: 6, icon: 'archive', text1: 'Archive', text2: '', class: '', class1: '' },
    { id: 7, icon: 'bookmark', text1: 'Important', text2: '', class: '', class1: '' },
    { id: 8, icon: 'trash', text1: 'Trash', text2: '', class: '', class1: '' },
    { id: 9, icon: 'star', text1: 'Starred', text2: '05', class: 'badge bg-warning rounded-pill', class1: '' }
]
interface mail1 {
    id: number;
    checked: string;
    img: string;
    active: string;
    name: string;
    title: string;
    text: string;
    time: string;
    icon: string;
    star: string;
    badge: string;
    badgetxt: string;
    bordercls: string;
}
export const Mails1: mail1[] = [
    { id: 1, checked: '', img: face5, active: 'online', name: 'Iliana Lilly', title: 'Meeting Agenda', text: "Reviewing the agenda for tomorrow's meeting. We'll be discussing the project timeline and budget allocation.", time: '12:12AM', icon: 'ri-attachment-2 align-middle fs-12', star: 'true', badge: '', badgetxt: '', bordercls: '' },
    { id: 2, checked: 'defaultChecked', img: face12, active: 'online', name: 'Priceton Gray', title: 'Exclusive Offers Inside!', text: "Unlock exclusive deals and discounts inside! Don't miss out on this limited-time opportunity to save big on your favorite products and services.", time: '03:18PM', icon: '', star: '', badge: '', badgetxt: '', bordercls: 'active ' },
    { id: 3, checked: '', img: face14, active: 'offline', name: 'Charlie Edson', title: 'Limited-Time Offer: Save on Your Next Trip!', text: "Unlock exclusive deals and discounts inside! Don't miss out on this limited-time opportunity to save big on your favorite products and services.", time: 'Yesterday, 06:45AM', icon: '', star: '', badge: 'badge bg-warning ms-2', badgetxt: 'Promotion', bordercls: '' },
    { id: 4, checked: 'defaultChecked', img: face7, active: 'offline', name: 'Isabella Carter', title: 'You Have New Notifications', text: "Stay connected with your friends and family. See who's commented on your latest post and catch up on messages from loved ones.", time: 'May 15 2024, 08:16PM', icon: '', star: '', badge: 'badge bg-primary1 ms-2', badgetxt: 'Social', bordercls: '' },
    { id: 5, checked: '', img: face15, active: 'offline', name: 'Danny Raj', title: 'New Connection Request', text: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.', time: 'May 13 2024, 11:24AM', icon: '', star: 'true', badge: '', badgetxt: '', bordercls: '' },
    { id: 6, checked: '', img: face16, active: 'offline', name: 'Spencer Robin  ', title: 'Invitation By Summer Soiree Under the Stars!', text: 'Hello, You are cordially invited to join us for an unforgettable evening of summer magic at our Summer Soiree Under the Stars!', time: 'May 18 2024, 11:15PM', icon: '', star: 'true', badge: 'badge bg-primary3 ms-2', badgetxt: 'Personal', bordercls: '' },
    { id: 7, checked: '', img: face3, active: 'offline', name: 'Harry Justin', title: 'New Connection Request', text: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.', time: 'April 05 2024, 08:12AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '' },
    { id: 8, checked: '', img: face13, active: 'offline', name: 'Nicolas Noor', title: 'Claim Your Prize Now!', text: "Congratulations! You've won a prize! Click here to claim your reward before it's too late and enjoy your well-deserved prize..", time: 'March 20, 08:30PM', icon: '', star: '', badge: '', badgetxt: '', bordercls: '' },
]



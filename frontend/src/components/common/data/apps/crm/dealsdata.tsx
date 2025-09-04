interface CardData {
    title: string;
    iconClass: string;
    color: string;
    badgeText: string;
    borderClass: string;
}


import face3 from "../../../../../assets/images/faces/3.jpg"
import face14 from "../../../../../assets/images/faces/14.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face16 from "../../../../../assets/images/faces/16.jpg"

export const Dealsdata: CardData[] = [
    {
        title: 'Leads Discovered',
        iconClass: 'ri-circle-fill',
        color: 'primary',
        badgeText: '24',
        borderClass: 'border-primary border-opacity-50',
    },
    {
        title: 'Qualified Leads',
        iconClass: 'ri-circle-fill',
        color: 'primary1',
        badgeText: '17',
        borderClass: 'border-primary1 border-opacity-50',
    },
    {
        title: 'Contact Initiated',
        iconClass: 'ri-circle-fill',
        color: 'primary2',
        badgeText: '5',
        borderClass: 'border-primary2 border-opacity-50',
    },
    {
        title: 'Needs Identified',
        iconClass: 'ri-circle-fill',
        color: 'primary3',
        badgeText: '43',
        borderClass: 'border-primary3 border-opacity-50',
    },
    {
        title: 'Negotiation',
        iconClass: 'ri-circle-fill',
        color: 'secondary',
        badgeText: '15',
        borderClass: 'border-secondary border-opacity-50',
    },
    {
        title: 'Deal Finalized',
        iconClass: 'ri-circle-fill',
        color: 'success',
        badgeText: '127 Deals',
        borderClass: 'border-success border-opacity-50',
    },
];

interface Deals {
    id: number;
    name: string;
    date: string;
    company: string;
    amount: string;
    avatar: string;
    clientName: string;
    Amounttext: string
}
export const Dealsdata1: Deals[] = [
    {
        id: 1,
        name: 'John Doe',
        date: '21, May 2024 - 10:25AM',
        company: 'Beta Innovations',
        amount: '$50,000',
        avatar: face11,
        clientName: 'Initech Info',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Jane Smith',
        date: '15, April 2024 - 02:15PM',
        company: 'Alpha Solutions',
        amount: '$75,000',
        avatar: face12,
        clientName: 'TechCorp',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'Michael Johnson',
        date: '05, March 2024 - 11:30AM',
        company: 'Gamma Enterprises',
        amount: '$100,000',
        avatar: face13,
        clientName: 'NextGen Inc',
        Amounttext: 'Amount'
    },
    {
        id: 4,
        name: 'Emma Wilson',
        date: '10, February 2024 - 09:45AM',
        company: 'Delta Dynamics',
        amount: '$120,000',
        avatar: face14,
        clientName: 'InnovateX',
        Amounttext: 'Amount'
    },
];

export const Dealsdata2: Deals[] = [
    {
        id: 1,
        name: 'Daniel Brown',
        date: '18, January 2024 - 03:20PM',
        company: 'Omega Solutions',
        amount: '$95,000',
        avatar: face15,
        clientName: 'SkyTech',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Emily Brown',
        date: '18, June 2024 - 11:15AM',
        company: 'Delta Innovations',
        amount: '$65,000',
        avatar: face12,
        clientName: 'Tech Dynamics',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'James Wilson',
        date: '12, June 2024 - 09:30AM',
        company: 'Gamma Enterprises',
        amount: '$80,000',
        avatar: face13,
        clientName: 'Tech Solutions Inc.',
        Amounttext: 'Amount'
    },
    {
        id: 4,
        name: 'Liam Smith',
        date: '30, June 2024 - 01:45PM',
        company: 'Zeta Corporation',
        amount: '$105,000',
        avatar: face12,
        clientName: 'TechVision Ltd.',
        Amounttext: 'Agreed Amount'
    },
];

export const Dealsdata3: Deals[] = [
    {
        id: 1,
        name: 'Sarah Martinez',
        date: '05, June 2024 - 10:45AM',
        company: 'AlphaTech Solutions',
        amount: '$75,000',
        avatar: face14,
        clientName: 'InnovateX',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Robert Lee',
        date: '30, May 2024 - 02:00PM',
        company: 'Omega Ventures',
        amount: '$90,000',
        avatar: face15,
        clientName: 'NextGen Tech',
        Amounttext: 'Amount'
    },
];

export const Dealsdata4: Deals[] = [
    {
        id: 1,
        name: 'David Wilson',
        date: '08, June 2024 - 09:45AM',
        company: 'Alpha Solutions',
        amount: '$70,000',
        avatar: face11,
        clientName: 'Tech Innovations',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Emma Clark',
        date: '20, May 2024 - 03:30PM',
        company: 'Zeta Dynamics',
        amount: '$85,000',
        avatar: face16,
        clientName: 'TechStar Solutions',
        Amounttext: 'Amount'
    },
    {
        id: 3,
        name: 'David Wilson',
        date: '07, June 2024 - 09:45AM',
        company: 'AlphaTech Solutions',
        amount: '$100,000',
        avatar: face11,
        clientName: 'Tech Innovations',
        Amounttext: "Budget"
    },
    {
        id: 4,
        name: 'Sophie Adams',
        date: '14, June 2024 - 11:30AM',
        company: 'GammaTech Solutions',
        amount: '$120,000',
        avatar: face15,
        clientName: 'InnovateX',
        Amounttext: "Estimated Revenue"
    },
];

export const Dealsdata5: Deals[] = [
    {
        id: 1,
        name: 'Olivia Moore',
        date: '25, May 2024 - 02:15PM',
        company: 'Delta Dynamics',
        amount: '$90,000',
        avatar: face9,
        clientName: 'TechStar Solutions',
        Amounttext: "Expected Investement"
    },
    {
        id: 2,
        name: 'Michael Johnson',
        date: '15, June 2024 - 11:00AM',
        company: 'AlphaTech Solutions',
        amount: '$120,000',
        avatar: face15,
        clientName: 'Tech Innovations',
        Amounttext: "Proposed Amount"
    },
    {
        id: 3,
        name: 'Emily Davis',
        date: '10, June 2024 - 09:30AM',
        company: 'BetaTech Innovations',
        amount: '$150,000',
        avatar: face16,
        clientName: 'Tech Solutions Ltd.',
        Amounttext: "Estimated Budget"
    },
];

export const Dealsdata6: Deals[] = [
    {
        id: 1,
        name: 'Emma Thompson',
        date: '25, June 2024 - 03:45PM',
        company: 'Delta Dynamics',
        amount: '$120,000',
        avatar: face12,
        clientName: 'TechStar Innovations',
        Amounttext: 'Amount'
    },
    {
        id: 2,
        name: 'Sophia Garcia',
        date: '18, June 2024 - 09:30AM',
        company: 'Completed Gamma Technologies',
        amount: '$85,000',
        avatar: face3,
        clientName: 'TechSolutions Inc.',
        Amounttext: "Investment"
    }
];


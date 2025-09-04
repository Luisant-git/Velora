
import job1 from "../../../../../assets/images/media/jobs/1.png"
import job2 from "../../../../../assets/images/media/jobs/2.png"
import job3 from "../../../../../assets/images/media/jobs/3.png"
import job4 from "../../../../../assets/images/media/jobs/4.png"

import logo8 from "../../../../../assets/images/company-logos/8.png"
import logo10 from "../../../../../assets/images/company-logos/10.png"
import logo1 from "../../../../../assets/images/company-logos/1.png"
import logo2 from "../../../../../assets/images/company-logos/2.png"

interface tableType {
    id:number;
    class:string;
    class1:string;
    src:string;
    text1:string;
    color1:string;
    src1:string;
    class3:string;
    checked:string | any ;
    data:string;
    data1:string;
    text:string;
    text2:string;
    color:string;
    text3:string;
    number:string;
    number1:string;
}

export const Tabledata:tableType[] = [
    {
        id: 1, class: 'HTML Developer - Fresher', class1: 'Remote/Onsite ', src: logo8, text1: 'SwiftSynergy.pvt.ltd', color1: 'primary',
        src1:job2, class3: '', checked: '', data: 'Full Time', data1: '18 Dec, 2023', text: 'Approved', text2: 'Nov 12 2024', color: 'success', text3: 'Development', number: '18', number1: '36'
    },
    { id: 2, class: 'React Lead Developer', class1: 'Remote/Onsite ', src: logo10, text1: 'Horizon Enterprises', color1: 'danger', src1:job1, class3: '', checked: true, data: 'Full Time', data1: '11 Jan, 2024', text: 'Rejected', text2: 'Oct 15 2024', color: 'danger', text3: 'Design', number: '31', number1: '50' },
    {
        id: 3, class: 'Vuejs Frontend Developer', class1: 'Remote/Onsite ', src: logo1, text1: 'Beatae Industries', color1: 'primary',
        src1:job3, class3: '', checked: true, data: 'Part Time', data1: '15 Dec, 2023', text: 'Pending', text2: 'May 15 2024', color: 'warning', text3: 'Management', number: '36', number1: '35'
    },
    {
        id: 4, class: 'Wordpress Developer - Remote', class1: 'Remote/Onsite ', src: logo2, text1: 'Quantum Innovations Inc.', color1: 'primary',
        src1:job4, class3: '', checked: '', data: 'Part Time', data1: '20 Dec, 2023', text: 'Approved', text2: 'Feb 12 2024', color: 'success', text3: 'Marketing', number: '20', number1: '60'
    },
    { id: 5, class: 'HTML Developer - Fresher', class1: 'Remote/Onsite ', src: logo8, text1: 'SwiftSynergy.pvt.ltd', color1: 'primary', src1:job2, class3: '', checked: '', data: 'Full Time', data1: '12 Nov, 2023', text: 'Approved', text2: 'Nov 12 2024', color: 'success', text3: 'Development', number: '18', number1: '36' },
    { id: 6, class: 'React Lead Developer', class1: 'Remote/Onsite ', src: logo10, text1: "Horizon Enterprises", color1: 'danger', src1:job1, class3: '', checked: true, data: 'Full Time', data1: '28, Sep 2023', text: 'Rejected', text2: 'Oct 15 2024', color: 'danger', text3: 'Design', number: '31', number1: '50' },
    { id: 7, class: 'Vuejs Frontend Developer', class1: 'Remote/Onsite ', src: logo1, text1: 'Beatae Industries', color1: 'primary', src1:job3, class3: '', checked: true, data: 'Part Time', data1: '15, Oct 2023', text: 'Pending', text2: 'May 15 2024', color: 'warning', text3: 'Management', number: '36', number1: '35' },
    {
        id: 8, class: 'Wordpress Developer - Remote', class1: 'Remote/Onsite ', src: logo2, text1: 'Quantum Innovations Inc.', color1: 'primary',
        src1:job4, class3: '', checked: '', data: 'Part Time', data1: 'Feb 12 2024', text: 'Approved', text2: 'Nov 12 2022', color: 'success', text3: 'Marcketin g', number: '20', number1: '60'
    },
];

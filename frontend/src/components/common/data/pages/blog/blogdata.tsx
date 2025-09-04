import  blog5 from "../../../../../assets/images/media/blog/5.jpg"
import  blog6 from "../../../../../assets/images/media/blog/6.jpg"
import  blog8 from "../../../../../assets/images/media/blog/8.jpg"
import  blog9 from "../../../../../assets/images/media/blog/9.jpg"
import  blog7 from "../../../../../assets/images/media/blog/7.jpg"
import  blog14 from "../../../../../assets/images/media/blog/14.jpg"
import  blog15 from "../../../../../assets/images/media/blog/15.jpg"
import  blog16 from "../../../../../assets/images/media/blog/16.jpg"
import  blog17 from "../../../../../assets/images/media/blog/17.jpg"

interface categoriesProps {
    id?: number;
    icon?: string;
    title?: string;
    text?: string;
    color?: string;
}
export const Categoriesdata: categoriesProps[] = [
    { id: 1, icon: 'leaf-fill', title: 'Nature Life', text: '12', color: 'primary' },
    { id: 2, icon: 'flight-takeoff-fill', title: 'Tourism & Trips', text: '36', color: 'primary1' },
    { id: 3, icon: 'global-fill', title: 'Technology', text: '45', color: 'primary2' },
    { id: 4, icon: 'cloud-fill', title: 'Data Networking', text: '124', color: 'primary3' },
    { id: 5, icon: 'home-wifi-fill', title: 'Modern Living', text: '16', color: 'info' }
]
interface recentblog {
    id?: number;
    src?: string;
}
export const Relatedblogdata: recentblog[] = [
    { id: 1, src: blog5 },
    { id: 2, src: blog6 },
    { id: 3, src: blog8 },
    { id: 4, src: blog9, }
]
interface featured {
    id?: number;
    src?: string;
    title?: string;
    text?: string;
    class?: string;
}
export const Featuredblogdata: featured[] = [
    { id: 1, src: blog14, title: 'Jack Diamond', text: ' To generate Lorem Ipsum which looks reasonable', class: "" },
    { id: 2, src: blog15, title: 'Dhruva Gen', text: 'All the Lorem Ipsum generators on the Internet', class: "" },
    { id: 3, src: blog16, title: 'Henry Milo', text: 'Lorem Ipsum is therefore always free from repetition, injected humour', class: "" },
    { id: 4, src: blog17, title: 'Peter Paul', text: 'orem Ipsum is not simply random text. It has roots in a piece of classical', class: "" },
    { id: 4, src: blog7, title: 'Fahad Rafi', text: 'Electronic typesetting, remaining essentially unchanged.', class: "border-bottom-0" }
]
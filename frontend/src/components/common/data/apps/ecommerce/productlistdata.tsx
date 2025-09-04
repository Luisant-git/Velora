import png30 from "../../../../../assets/images/ecommerce/png/30.png"
import png31 from "../../../../../assets/images/ecommerce/png/31.png"
import png32 from "../../../../../assets/images/ecommerce/png/32.png"
import png23 from "../../../../../assets/images/ecommerce/png/23.png"
import png12 from "../../../../../assets/images/ecommerce/png/12.png"
import png14 from "../../../../../assets/images/ecommerce/png/14.png"
import png15 from "../../../../../assets/images/ecommerce/png/15.png"

import face1 from "../../../../../assets/images/faces/1.jpg"
import face2 from "../../../../../assets/images/faces/2.jpg"
import face4 from "../../../../../assets/images/faces/4.jpg"
import face8 from "../../../../../assets/images/faces/8.jpg"
import face9 from "../../../../../assets/images/faces/9.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"

interface dataType {
    id: number;
    pdctsrc: string;
    PdctName: string;
    subname: string;
    category: string;
    price: string;
    stock: string;
    color: string;
    Seller: string;
    src: string;
    date: string;
    status: string;
}

export const ProductList: dataType[] = [
    {
        id: 1,
        pdctsrc: png30,
        PdctName: "Wireless Headphones",
        subname: "SoundWave",
        category: "Electronics",
        price: "$1,299",
        stock: "283",
        status: "Published",
        color: "primary",
        Seller: "Mayor Kelly",
        src: face4,
        date: "24,Nov 2023 - 04:42PM"
    },
    {
        id: 2,
        pdctsrc: png14,
        PdctName: "Elegant Flower Pot",
        subname: "Serene Garden",
        category: "Ceramic",
        price: "$799",
        stock: "98",
        status: "Unpublished",
        color: "danger",
        Seller: "Andrew Garfield",
        src: face15,
        date: "18,Nov 2023 - 06:53AM"
    },
    {
        id: 3,
        pdctsrc: png31,
        PdctName: "Wireless Earbuds",
        subname: "AirPods Max",
        category: "Electronics",
        price: "$2,499",
        stock: "194",
        status: "Published",
        color: "primary",
        Seller: "Simon Cowel",
        src: face11,
        date: "12,Aug 2023 - 11:21AM"
    },
    {
        id: 4,
        pdctsrc: png12,
        PdctName: "Kids' Party Wear Frock",
        subname: "Twinkle Twirl",
        category: "Fashion Wear	",
        price: "$899",
        stock: "267",
        status: "Unpublished",
        color: "danger",
        Seller: "Mirinda Hers",
        src: face8,
        date: "05,Sep 2023 - 10:14AM"
    },
    {
        id: 5,
        pdctsrc: png32,
        PdctName: "Alarm Clock",
        subname: "Midest Brand",
        category: "Home Needs",
        price: "$499",
        stock: "143",
        status: "Published",
        color: "primary",
        Seller: "Simon Cowel",
        src: face1,
        date: "18,Nov 2023 - 14:35PM"
    },
    {
        id: 6,
        pdctsrc: png23,
        PdctName: "Advanced Smartwatch",
        subname: "SmartSync 2024",
        category: "Watches",
        price: "$999",
        stock: "365",
        status: "Published",
        color: "primary",
        Seller: "Mirinda Hers",
        src: face2,
        date: "27,Nov 2023 - 05:12AM"
    },
    {
        id: 7,
        pdctsrc: png15,
        PdctName: "Sport shoe",
        subname: "Conit Brand",
        category: "Sports",
        price: "$1,499",
        stock: "257",
        status: "Unpublished",
        color: "danger",
        Seller: "Jhon Trendy",
        src: face9,
        date: "29,Nov 2023 - 16:32PM"
    },

];

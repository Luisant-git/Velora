
import png28 from "../../../../../assets/images/ecommerce/png/28.png"
import png29 from "../../../../../assets/images/ecommerce/png/29.png"
import png12 from "../../../../../assets/images/ecommerce/png/12.png"
import png14 from "../../../../../assets/images/ecommerce/png/14.png"
import png11 from "../../../../../assets/images/ecommerce/png/11.png"
import png13 from "../../../../../assets/images/ecommerce/png/13.png"
import png23 from "../../../../../assets/images/ecommerce/png/23.png"
import png10 from "../../../../../assets/images/ecommerce/png/10.png"
import png9 from "../../../../../assets/images/ecommerce/png/9.png"
import png30 from "../../../../../assets/images/ecommerce/png/30.png"
import png31 from "../../../../../assets/images/ecommerce/png/31.png"
interface dataType {
    id: number;
    productpicture: string;
    title: string;
    status: string;
    class: string;
    rating: string;
    price: string;
    discount: string;
    discount1: string;
    size: string;
    color: string;
    stock: string;
    stockColor: string;
    images: string;
    views: string;
    badge?: string;
    badgeColor?: string;
    class1?: string
}

//E-commerce Master Data 
export const MasterData: dataType[] = [
    {
        id: 1,
        productpicture: png28,
        title: "Lightweight Sneakers",
        status: "Stealth Series",
        class: "primary1",
        rating: "(874)",
        price: "$771",
        discount: "$880",
        discount1: "12%",
        size: "M",
        color: "primary3",
        views: "",
        stock: "In Stock",
        stockColor: "success",
        images: "../../../assets/img/ecommerce/products/1.png",
        badge: 'Trending',
        badgeColor: 'info'
    },
    {
        id: 2,
        productpicture: png12,
        title: " Kids' Party Wear Frock",
        status: "Twinkle Twirl",
        class: "danger",
        rating: "(231)",
        views: "23,123",
        price: "$236",
        discount: "$267",
        discount1: "15%",
        size: "L",
        color: "info",
        stock: "Out Of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/2.png"
    },
    {
        id: 3,
        productpicture: png29,
        title: "Ladies' Slim Bag",
        status: "Sleek Elegance",
        class: "success",
        rating: "(110)",
        views: "35,586",
        price: "$124",
        discount: "$214",
        discount1: "24%",
        size: "M",
        color: "primary1",
        stock: "In Stock",
        stockColor: "success",
        images: "../../../assets/img/ecommerce/products/3.png"
    },
    {
        id: 4,
        productpicture: png14,
        title: "Elegant Flower Pot",
        status: "Serene Garden",
        class: "danger",
        rating: "(211)",
        views: "15,253",
        price: "$314",
        discount: "$547",
        discount1: "60%",
        size: "Bluetooth",
        color: "success",
        stock: "Out Of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/4.png"
    },
    {
        id: 5,
        productpicture: png11,
        title: "Trendy Sunglasses",
        status: "Crystal Clear",
        class: "success",
        rating: "(514)",
        views: "20,989",
        price: "$251",
        discount: "$399",
        discount1: "10%",
        size: "500ML",
        color: "primary2",
        stock: "In Stock",
        stockColor: "success",
        images: "../../../assets/img/ecommerce/products/5.png"
    },
    {
        id: 6,
        productpicture: png13,
        title: "Sleek Modern Chair",
        status: "Artisanal Comfort",
        class: "success",
        rating: "(211)",
        views: "22,989",
        price: "$314",
        stock: "In Stock",
        stockColor: "success",
        discount: "$547",
        discount1: "60%",
        size: "Adjustable",
        color: "success",
        images: "../../../assets/img/ecommerce/products/6.png"
    },
    {
        id: 7,
        productpicture: png23,
        title: " Advanced Smartwatch",
        status: "SmartSync 2024",
        class: "success",
        rating: "(255)",
        views: "10,252",
        price: "$354",
        discount: "$455",
        discount1: "15%",
        size: "Adjustable",
        color: "warning",
        stock: "In Stock",
        stockColor: "success",
        images: "../../../assets/img/ecommerce/products/7.png",
        badge: 'Trending',
        badgeColor: 'danger'
    },
    {
        id: 8,
        productpicture: png10,
        title: "Classic T-Shirt ",
        status: "Casual Everyday",
        class: "success",
        rating: "(142)",
        views: "10,989",
        price: "$251",
        discount: "$399",
        discount1: "50%",
        size: "M",
        color: "danger",
        stock: "Out Of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/8.png"
    },
    {
        id: 9,
        productpicture: png9,
        title: " Versatile Hoodie",
        status: "Urban Flex",
        class: "danger",
        rating: "(142)",
        views: "50,989",
        price: "$251",
        discount: "$399",
        discount1: "15%",
        size: "M",
        color: "info",
        stock: "In Stock",
        stockColor: "success",
        images: "../../../assets/img/ecommerce/products/9.png"
    },
    {
        id: 10,
        productpicture: png30,
        title: "Wireless Headphones",
        status: "SoundWave",
        class: "success",
        rating: "(142)",
        views: "45,989",
        price: "$251",
        discount: "$399",
        discount1: "21%",
        size: "Small",
        color: "primary1",
        stock: "Out Of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/10.png"
    },
    {
        id: 11,
        productpicture: png31,
        title: " Wireless Earbuds",
        status: "AirPods Max",
        class: "danger",
        rating: "(211)",
        views: "45,989",
        price: "$314",
        discount: "$547",
        discount1: "60%",
        size: "XL",
        color: "success",
        stock: "Out of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/11.png",
        class1: 'filter-bw'

    },
    {
        id: 12,
        productpicture: png11,
        title: "Trendy Sunglasses",
        status: "Crystal Clear",
        class: "success",
        rating: "(514)",
        views: "45,989",
        price: "$251",
        discount: "$399",
        discount1: "10%",
        size: "M",
        color: "primary2",
        stock: "Out Of Stock",
        stockColor: "danger",
        images: "../../../assets/img/ecommerce/products/12.png"
    },
]
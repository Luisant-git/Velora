import png28 from "../../../../../assets/images/ecommerce/png/28.png"
import png12 from "../../../../../assets/images/ecommerce/png/12.png"
import png29 from "../../../../../assets/images/ecommerce/png/29.png"
import png14 from "../../../../../assets/images/ecommerce/png/14.png"
import png13 from "../../../../../assets/images/ecommerce/png/13.png"
import png11 from "../../../../../assets/images/ecommerce/png/11.png"
import png30 from "../../../../../assets/images/ecommerce/png/30.png"
import png31 from "../../../../../assets/images/ecommerce/png/31.png"

import face4 from "../../../../../assets/images/faces/4.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face8 from "../../../../../assets/images/faces/8.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face1 from "../../../../../assets/images/faces/1.jpg"

interface dataType {
    id: number;
    orderid: string;
    src: string;
    src1: string;
    product: string;
    cusromer: string;
    mobile: string;
    date: string;
    status: string;
    payment: string;
    cost: string;
    color: string;
}

export const Ordertable: dataType[] = [
    { id: 1, orderid: "#1172553", src: png28, src1: face4, product: "Lightweight Sneakers", cusromer: "Violeta Tilly", mobile: "(222) 111 - 57840", date: "11 Jan 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$177.00", color: "success" },
    { id: 2, orderid: "#1172555", src: png12, src1: face15, product: "Kids' Party Wear Frock", cusromer: "Danny Raj", mobile: "(222) 687-9954", date: "23 Jan 2024", status: "Pending", payment: "Online Payment", cost: "$153.00", color: "warning" },
    { id: 3, orderid: "#1202513", src: png29, src1: face8, product: "Ladies' Slim Bag", cusromer: "Sissera William", mobile: "(222) 987-1323", date: "19 Feb 2024", status: "Shippped", payment: "Cash On Delivery", cost: "$203.00", color: "success" },
    { id: 4, orderid: "#1202510", src: png14, src1: face11, product: "Elegant Flower Pot", cusromer: "Red Stark", mobile: "(222) 447-4518", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$211.00", color: "danger" },
    { id: 5, orderid: "#1222516", src: png11, src1: face1, product: "Trendy Sunglasses", cusromer: "Henry Milo", mobile: "(222) 666-8080", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$265.00", color: "success" },
    { id: 6, orderid: "#1202513", src: png13, src1: face8, product: "Sleek Modern Chair", cusromer: "Sissera William", mobile: "(222) 144-1423", date: "19 Feb 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$203.00", color: "success" },
    { id: 7, orderid: "#1202510", src: png30, src1: face11, product: "Wireless Headphones", cusromer: "Red Stark", mobile: "(222) 985-4715", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$211.00", color: "danger" },
    { id: 8, orderid: "#1222516", src: png31, src1: face1, product: "Wireless Earbuds", cusromer: "Henry Milo", mobile: "(222) 887-1323", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$265.00", color: "success" },
]

import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpkButton from "../../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../../@spk-reusable-components/reusable-uielements/spk-badge";
import SpkProducts from "../../../../../@spk-reusable-components/reusable-apps/spk-products";
import face1 from "../../../../../assets/images/faces/1.jpg"

import png28 from "../../../../../assets/images/ecommerce/png/28.png"
import png11 from "../../../../../assets/images/ecommerce/png/11.png"
import png30 from "../../../../../assets/images/ecommerce/png/30.png"
import png31 from "../../../../../assets/images/ecommerce/png/31.png"
import png12 from "../../../../../assets/images/ecommerce/png/12.png"
import png29 from "../../../../../assets/images/ecommerce/png/29.png"
import png23 from "../../../../../assets/images/ecommerce/png/23.png"
import png34 from "../../../../../assets/images/ecommerce/png/34.png"
import png33 from "../../../../../assets/images/ecommerce/png/33.png"
import png32 from "../../../../../assets/images/ecommerce/png/32.png"

const reviews = [
    {
        name: "Phillip John",
        rating: 4.3,
        title: "Powerful Performance, Stunning Display!",
        description: "The TechPro X15 Elite - 2024 Edition is a powerhouse! The 4K UHD touchscreen display is stunning.",
        images: [
            png34,
            png33,
        ],
    },
    {
        name: "Henry Milo",
        rating: 4.3,
        title: "Sleek Design, Fast Delivery, Hassle-Free Returns!",
        description: "The TechPro X15 Elite - 2024 Edition impresses with its sleek design and fast delivery.",
        images: [
            png33,
        ],
    },
];

export const ReviewSwiper = reviews.map((review, index) => (
    <div key={index}>
        <Card className="custom-card border shadow-none mb-0">
            <Card.Body>
                <div className="d-sm-flex d-block align-items-center mb-3">
                    <div className="d-flex flex-fill align-items-center">
                        <span className="avatar avatar-sm avatar-rounded me-2">
                            <img src={face1} alt="" />
                        </span>
                        <p className="mb-0 fs-14 lh-1 fw-semibold">{review.name}
                            <span className="mb-0 fs-12 fw-normal ms-1">
                                <i className="ri-star-s-fill text-warning align-middle lh-1 fs-10 me-1 fw-normal align-middle"></i> {review.rating}
                            </span>
                        </p>
                    </div>
                    <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                        <SpkBadge variant="success">Verified Purchase</SpkBadge>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="fw-semibold mb-1">{review.title}</p>
                    <p className="mb-0 fs-11">{review.description}</p>
                </div>
                <div className="product-images ps-0">
                    <Row>
                        <div className="col-xl-6">
                            <div className="products-review-images d-flex">
                                {review.images.map((image, imgIndex) => (
                                    <Link to="#!" key={imgIndex}>
                                        <img src={image} alt="" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                            <SpkButton Buttonvariant="light" Size="sm" Customclass="me-2">Report abuse</SpkButton>
                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn-icon me-2">
                                <i className="ri-thumb-up-line"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn-icon">
                                <i className="ri-thumb-down-line"></i>
                            </SpkButton>
                        </div>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    </div>
))

interface Products {
    id: number;
    title: string;
    price: string;
    discount: string;
    productpicture: string;
    color1: string;
    rating: number;
    status: string;
    trending: boolean | string;
    color: string;
    discount1: string;
    badge?: string;
    badgeColor?: string;
}
const products: Products[] = [
    {
        id: 1,
        title: "Lightweight Sneakers",
        price: "$771",
        discount: "$880",
        productpicture:png28,
        color: "primary3",
        rating: 874,
        status: "Stealth Series",
        trending: true,
        color1: "info",
        discount1: '12%',
        badge: 'Trending',
        badgeColor: 'info'
    },
    {
        id: 2,
        title: "Trendy Sunglasses",
        price: "$251",
        discount: "$399",
        productpicture:png11,
        color: "primary1",
        rating: 514,
        status: "Crystal Clear",
        trending: '',
        color1: "",
        discount1: '10%'
    },
    {
        id: 3,
        title: "Wireless Headphones",
        price: "$251",
        discount: "$399",
        productpicture:png30,
        color: "primary2",
        rating: 142,
        status: "SoundWave",
        trending: '',
        color1: "",
        discount1: '21%'
    },
    {
        id: 4,
        title: "Wireless Earbuds",
        price: "$314",
        discount: "$547",
        productpicture:png31,
        color: "success",
        rating: 211,
        status: "AirPods Max",
        trending: '',
        color1: "",
        discount1: '60%'
    },
    {
        id: 5,
        title: "Kids' Party Wear Frock",
        price: "$236",
        discount: "$267",
        productpicture:png12,
        color: "info",
        rating: 231,
        status: "Twinkle Twirl",
        trending: '',
        color1: "",
        discount1: '15%'
    },
    {
        id: 6,
        title: "Ladies' Slim Bag",
        price: "$124",
        discount: "$105",
        productpicture:png29,
        color: "primary1",
        rating: 110,
        status: "Sleek Elegance",
        trending: '',
        color1: "",
        discount1: '24%'
    },
    {
        id: 7,
        title: "Advanced Smartwatch",
        price: "$354",
        discount: "$455",
        productpicture:png23,
        color: "warning",
        rating: 225,
        status: "SmartSync 2024",
        trending: '',
        color1: "",
        discount1: '15%',
        badge: 'Trending',
        badgeColor: 'danger'
    },
];

export const RelatedSwiper = products.map((idx: any) => (
    <SpkProducts
        shoBadge={true}
        badge={idx.badge}
        idx={{ id: String(idx.id) }}
        card={idx}
    />
));



interface Product {
    name: string;
    imageSrc: string;
    rating: number;
    reviews: string;
    price: number;
    originalPrice: number;
}

export const Producrdetailsdata: Product[] = [
    {
        name: "Ladies' Slim Bag",
        imageSrc: png29,
        rating: 4.3,
        reviews: '16k',
        price: 1099,
        originalPrice: 1759,
    },
    {
        name: "Wireless Headphones",
        imageSrc: png30,
        rating: 4.3,
        reviews: '5k',
        price: 799,
        originalPrice: 1299,
    },
    {
        name: "Wireless Earbuds",
        imageSrc: png31,
        rating: 4.3,
        reviews: '2k',
        price: 1499,
        originalPrice: 2599,
    },
    {
        name: "Voluptatem Alarm Clock",
        imageSrc: png32,
        rating: 4.3,
        reviews: '12k',
        price: 2299,
        originalPrice: 3299,
    },
    {
        name: "Lightweight Sneakers",
        imageSrc: png28,
        rating: 4.3,
        reviews: '12k',
        price: 899,
        originalPrice: 1299,
    },
];

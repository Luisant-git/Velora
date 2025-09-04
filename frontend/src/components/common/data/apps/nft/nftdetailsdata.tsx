import { Key } from "react";
import { Row } from "react-bootstrap";
import SpkButton from "../../../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import nftimage2 from "../../../../../assets/images/nft-images/2.jpg"
import nftimage3 from "../../../../../assets/images/nft-images/3.jpg"
import nftimage4 from "../../../../../assets/images/nft-images/4.jpg"
import nftimage5 from "../../../../../assets/images/nft-images/5.jpg"
import nftimage6 from "../../../../../assets/images/nft-images/6.jpg"
import nftimage7 from "../../../../../assets/images/nft-images/7.jpg"
import nftimage10 from "../../../../../assets/images/nft-images/10.jpg"
import nftimage11 from "../../../../../assets/images/nft-images/11.jpg"
import nftimage13 from "../../../../../assets/images/nft-images/13.jpg"
import nftimage15 from "../../../../../assets/images/nft-images/15.jpg"
import nftimage16 from "../../../../../assets/images/nft-images/16.jpg"
import nftimage18 from "../../../../../assets/images/nft-images/18.jpg"

import face15 from "../../../../../assets/images/faces/15.jpg"
import face10 from "../../../../../assets/images/faces/10.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"

export const Swiperdata = [
    <div className="image-container">
        <img className="img-fluid" src={nftimage2} alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src={nftimage3} alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src={nftimage4} alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src={nftimage5} alt="img" />
    </div>
];

interface NftType {
    name: string;
    date: string;
    rating: number;
    title: string;
    description: string;
    avatar: string;
    images: string | any;
}
const nftReviews: NftType[] = [
    {
        name: "Christopher",
        date: "24 Nov, 2024 - 10:54PM",
        rating: 4.1,
        title: "Vibrant Symphony 😊",
        description: "Vibrant Symphony is an extraordinary NFT that immerses you in a world of vivid colors and imaginative landscapes.",
        avatar: face15,
        images: [nftimage13, nftimage15
        ]
    },
    {
        name: "Sarah Johnson",
        date: "30 Apr, 2024 - 03:22PM",
        rating: 3.7,
        title: "Enchanting Dreamscape",
        description: "Enchanting Dreamscape offers a surreal journey through dream-like imagery and subtle symbolism.",
        avatar: face10,
        images: [
            nftimage6,
            nftimage7
        ]
    },
    {
        name: "Emily Brown",
        date: "15 May, 2024 - 09:15AM",
        rating: 3.8,
        title: "Oceanic Serenity 🌊",
        description: "Oceanic Serenity captivates with its tranquil underwater scenes and ethereal marine life.",
        avatar: face12,
        images: [
            nftimage6,
            nftimage3
        ]
    },
];

export const NftSwiper = nftReviews.map((review, index) => (
    <div key={index}>
        <div className="border rounded p-3">
            <div className="d-sm-flex d-block align-items-top mb-3">
                <div className="d-flex flex-fill">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={review.avatar} alt={review.name} />
                        </span>
                    </div>
                    <div className="lh-1 me-2">
                        <p className="mb-1 fw-medium fs-14">{review.name}</p>
                        <div className="mb-1">
                            <span className="fs-11 text-muted">{review.date}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-1 ms-auto text-end">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`ri-star-${i < Math.floor(review.rating) ? 'fill' : (i < review.rating ? 'half-fill' : 'line')} align-middle text-warning align-middle me-1`}
                        ></i>
                    ))}
                    <span className="align-middle">{review.rating}</span>
                </div>
            </div>
            <div className="ps-sm-4 ps-0 mb-3">
                <p className="fw-medium mb-1 ps-2">{review.title}</p>
                <p className="mb-0 fs-12 text-muted ps-2">{review.description}</p>
            </div>
            <div className="product-images ps-sm-4 ps-0">
                <Row>
                    <div className="col-xl-6">
                        <div className="">
                            {review.images.map((img: string | undefined, imgIndex: Key | null | undefined) => (
                                <Link key={imgIndex} to="#!" className="avatar avatar-sm me-1">
                                    <img src={img} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="me-2">Report abuse</SpkButton>
                        <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon me-2">
                            <i className="ri-thumb-up-line"></i>
                        </SpkButton>
                        <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon">
                            <i className="ri-thumb-down-line"></i>
                        </SpkButton>
                    </div>
                </Row>
            </div>
        </div>
    </div>
))


export const Productsdata = [
    { label: 'Artist Name', value: 'Henry Milo' },
    { label: 'Royalty', value: '10% royalty paid to the artist on secondary sales' },
    { label: 'Total Bids', value: '32' },
    { label: 'Current Owner', value: 'Nikki Jones' },
    { label: 'NFT Type', value: 'Digital art work' },
];

interface NFTItem {
    imageSrc: string;
    name: string;
    badgeCount: string;
    followers: number;
    price: string;
    originalPrice: string;
}

export const NftItems: NFTItem[] = [
    {
        imageSrc: nftimage16,
        name: "Digital Dreamscapes",
        badgeCount: "18.5k",
        followers: 18512,
        price: "2.299 ETH",
        originalPrice: "3.299 ETH",
    },
    {
        imageSrc: nftimage18,
        name: "Galactic Gardens",
        badgeCount: "4.2k",
        followers: 4356,
        price: "1.899 ETH",
        originalPrice: "2.799 ETH",
    },
    {
        imageSrc: nftimage10,
        name: "Pixelated Paradise",
        badgeCount: "9.1k",
        followers: 9153,
        price: "3.599 ETH",
        originalPrice: "5.499 ETH",
    },
    {
        imageSrc: nftimage11,
        name: "Vibrant Voyages",
        badgeCount: "15.7k",
        followers: 15789,
        price: "6.499 ETH",
        originalPrice: "9.999 ETH",
    }
];

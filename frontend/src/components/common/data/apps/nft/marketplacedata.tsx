import face14 from "../../../../../assets/images/faces/14.jpg"
import face2 from "../../../../../assets/images/faces/2.jpg"
import face11 from "../../../../../assets/images/faces/11.jpg"
import face12 from "../../../../../assets/images/faces/12.jpg"
import face3 from "../../../../../assets/images/faces/3.jpg"
import face6 from "../../../../../assets/images/faces/6.jpg"
import face5 from "../../../../../assets/images/faces/5.jpg"
import face8 from "../../../../../assets/images/faces/8.jpg"
import face15 from "../../../../../assets/images/faces/15.jpg"
import face13 from "../../../../../assets/images/faces/13.jpg"


import nftimg2 from "../../../../../assets/images/nft-images/2.jpg"
import nftimg3 from "../../../../../assets/images/nft-images/3.jpg"
import nftimg4 from "../../../../../assets/images/nft-images/4.jpg"
import nftimg5 from "../../../../../assets/images/nft-images/5.jpg"
import nftimg6 from "../../../../../assets/images/nft-images/6.jpg"
import nftimg7 from "../../../../../assets/images/nft-images/7.jpg"
import nftimg8 from "../../../../../assets/images/nft-images/8.jpg"
import nftimg9 from "../../../../../assets/images/nft-images/9.jpg"
import nftimg13 from "../../../../../assets/images/nft-images/13.jpg"
import nftimg14 from "../../../../../assets/images/nft-images/14.jpg"
import nftimg10 from "../../../../../assets/images/nft-images/10.jpg"
import nftimg11 from "../../../../../assets/images/nft-images/11.jpg"
import nftimg12 from "../../../../../assets/images/nft-images/12.jpg"

interface MarketType {
    id: number;
    image: string;
    auctionTime: string;
    title: string;
    name: string;
    avatar: string;
    handle: string;
    currentBid: string;
    likes: string;
}
export const Marketplacedata: MarketType[] = [
    {
        id: 1,
        image: nftimg2,
        auctionTime: "04hrs : 24m : 38s",
        title: "Abstract Digital Art",
        name: "Manistics NFT",
        avatar: face14,
        handle: "@manistics454",
        currentBid: "0.015ETH",
        likes: '1.43k'
    },
    {
        id: 2,
        image: nftimg3,
        auctionTime: "03hrs : 12m : 45s",
        title: "Abstract Digital Art",
        name: "Manistics NFT",
        avatar: face2,
        handle: "@manistics454",
        currentBid: "0.015ETH",
        likes: '1.43k'
    },
    {
        id: 3,
        image: nftimg4,
        auctionTime: "05hrs : 03m : 20s",
        title: "Cyberpunk Creations",
        name: "CyberArt NFT",
        avatar: face11,
        handle: "@cyberartworks154",
        currentBid: "0.014ETH",
        likes: '1.43k'
    },
    {
        id: 4,
        title: "Dreamscapes",
        image: nftimg5,
        auctionTime: "02hrs : 50m : 55s",
        currentBid: "0.016ETH",
        name: "GeoNFT NFT",
        handle: "@geonft_designs47",
        avatar: face12,
        likes: '2.9k',
    },
    {
        id: 5,
        title: "Vibrant Pixel Art",
        image: nftimg6,
        auctionTime: "06hrs : 15m : 10s",
        currentBid: "0.017ETH",
        name: "PixelPerfect",
        handle: "@pixelperfectnft74",
        avatar: face3,
        likes: '2.5k',
    },
    {
        id: 6,
        title: "Surreal Fantasy Art",
        image: nftimg7,
        auctionTime: "01hrs : 58m : 23s",
        currentBid: "0.018ETH",
        name: "Fantasia NFT",
        handle: "@fantasianft13",
        avatar: face14,
        likes: '1.8k',
    },
    {
        id: 7,
        title: "Celestial Digital Art",
        image: nftimg8,
        auctionTime: "03hrs : 45m : 50s",
        currentBid: "0.055ETH",
        name: "Celestial NFT",
        handle: "@celestial_nft55",
        avatar: face6,
        likes: '5.1k'
    },
    {
        id: 8,
        title: "Prismatic Universe",
        image: nftimg9,
        auctionTime: "07hrs : 06m : 15s",
        currentBid: "0.035ETH",
        name: "Prisma NFT",
        handle: "@prisma_universe77",
        avatar: face11,
        likes: '1.64k'
    }
]

export const Artdata = [
    {
        id: 1,
        image: nftimg10,
        title: 'Prismatic Universe',
        currentBid: '0.035ETH',
        timeLeft: '02hrs : 50m : 55s',
        likes: '1.64k',
        name: 'Prisma NFT',
        username: '@prisma_universe77',
        avatar: face12
    },
    {
        id: 2,
        image: nftimg11,
        title: 'Celestial Digital Art',
        currentBid: '0.055ETH',
        timeLeft: '02hrs : 50m : 55s',
        likes: '5.1k',
        name: 'Prisma NFT',
        username: '@prisma_universe77',
        avatar: face15,
    },
    {
        id: 3,
        image: nftimg12,
        title: 'Ethereal Dreams',
        currentBid: '0.08ETH',
        timeLeft: '01hrs : 58m : 23s',
        likes: '0.37k',
        name: 'Ethereal NFT',
        username: '@ethereal_dreams',
        avatar: face13,
    },
];

export const Gamingdata = [
    {
        id: 1,
        title: "Geometric Dreamscapes",
        imgSrc: nftimg13,
        auctionTime: "03hrs : 12m : 45s",
        currentBid: "0.016ETH",
        ownerName: "GeoNFT NFT",
        ownerHandle: "@geonft_designs47",
        likes: 2900,
        ownerImg: face5
    },
    {
        id: 2,
        title: "Celestial Digital Art",
        imgSrc: nftimg14,
        auctionTime: "05hrs : 03m : 20s",
        currentBid: "0.055ETH",
        ownerName: "Celestial NFT",
        ownerHandle: "@celestial_nft55",
        likes: 5100,
        ownerImg: face8
    }
];
import face2 from "../../../../assets/images/faces/2.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import face4 from "../../../../assets/images/faces/4.jpg"
import face1 from "../../../../assets/images/faces/1.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"

import nftimg3 from "../../../../assets/images/nft-images/3.jpg"
import nftimg4 from "../../../../assets/images/nft-images/4.jpg"
import nftimg5 from "../../../../assets/images/nft-images/5.jpg"
import nftimg6 from "../../../../assets/images/nft-images/6.jpg"
import nftimg7 from "../../../../assets/images/nft-images/7.jpg"
import nftimg2 from "../../../../assets/images/nft-images/2.jpg"
import nftimg9 from "../../../../assets/images/nft-images/9.jpg"
import nftimg10 from "../../../../assets/images/nft-images/10.jpg"
import nftimg11 from "../../../../assets/images/nft-images/11.jpg"
import nftimg12 from "../../../../assets/images/nft-images/12.jpg"
import nftimg14 from "../../../../assets/images/nft-images/14.jpg"
import nftimg15 from "../../../../assets/images/nft-images/15.jpg"
import nftimg16 from "../../../../assets/images/nft-images/16.jpg"
import nftimg17 from "../../../../assets/images/nft-images/17.jpg"
import nftimg18 from "../../../../assets/images/nft-images/18.jpg"
import nftimg8 from "../../../../assets/images/nft-images/8.jpg"


//nft-statistics
export const Nftseries = [
    {
        name: 'Last Year',
        type: 'line',
        data: [47, 43, 55, 55, 41, 41, 53, 42, 47, 41, 50, 35]
    },
    {
        name: 'This Year',
        type: 'area',
        data: [35, 60, 41, 57, 52, 63, 41, 41, 65, 65, 53, 57]
    },
]
export const Nftoptions: any = {
    chart: {
        toolbar: {
            show: false
        },
        type: 'line',
        height: 300,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 1,
            opacity: 0.05,
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1.5, 2],
        curve: ['smooth', 'smooth'],
        dashArray: [0, 5],
    },
    fill: {
        type: ['soild', 'gradient'],
        gradient: {
            opacityFrom: 0.23,
            opacityTo: 0.23,
            shadeIntensity: 0.3,
        },
    },
    legend: {
        show: false,
        position: 'top',
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
            borderRadius: 2
        }
    },
    colors: ["var(--primary-color)", "rgb(227, 84, 212)"],

}
const svg = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="65" viewBox="0 0 40 65"> <g fill="none" fillRule="evenodd"> <g fillRule="nonzero" transform="translate(-227 -93)"> <g transform="translate(227 93)"><g> <path fill="#8A92B2" d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"></path> <path fill="#454A75" d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"></path> <path fill="#8A92B2" d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"></path><path fill="gray" d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"></path> <path fill="#62688F" d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"></path> <path fill="#62688F" d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"></path></g></g></g> </g> </svg>

export const Hotdata = [
    { id: 1, header: "Vibrant Spec Cat NFT", src: face10, src1: nftimg10, ename: "Kelinnies NFT", mail: "- @kelinnies05", bid: "0.045ETH", svgIcon: svg },
    { id: 2, header: "Abstract Digital Art", src: face1, src1: nftimg11, ename: "Manistics NFT", mail: "- @manistics454", bid: "0.015ETH", svgIcon: svg },
    { id: 3, header: "Majestic Alpha Wolf", src: face11, src1: nftimg9, ename: "Haridar NFT", mail: "- @haridar687", bid: "0.045ETH", svgIcon: svg },
    { id: 4, header: "Radiant Blossom NFT", src: face12, src1: nftimg4, ename: "Mostee NFT", mail: "- @mostee897", bid: "0.03ETH", svgIcon: svg },
    { id: 5, header: "Vibrant Tropical Fishes", src: face4, src1: nftimg5, ename: "Cheston NFT", mail: "- @cheston541", bid: "0.012ETH", svgIcon: svg },
    { id: 6, header: "Ethereal Elegance NFT", src: face6, src1: nftimg6, ename: "Cornaote NFT", mail: "- @Cornaote245", bid: "0.025ETH", svgIcon: svg },
]

const span = <span className="avatar avatar-sm bg-primary3 avatar-rounded border border-primary1 border-opacity-10">
    +2
</span>
const span1 = <span className="avatar avatar-sm bg-primary1 avatar-rounded border border-primary1 border-opacity-10">
    +1
</span>
const span2 = <span className="avatar avatar-sm bg-primary2 avatar-rounded border border-primary1 border-opacity-10">
    +3
</span>

export const Featuredata = [
    { id: 1, src: face1, src1: nftimg3, data: "Meesthi Si", data1: "@meesthi05", data2: span },
    { id: 2, src: face4, src1: nftimg11, data: "Oorichimaru lo", data1: "@ooro001", data2: "" },
    { id: 3, src: face2, src1: nftimg5, data: "Moniket Ms", data1: "@moniket98", data2: span1 },
    { id: 4, src: face12, src1: nftimg8, data: "SakuraYM", data1: "@sakura903", data2: "" },
    { id: 5, src: face2, src1: nftimg5, data: "Sasuke Uchiha", data1: "@sasuke777", data2: span2 },
    { id: 6, src: face15, src1: nftimg4, data: "Tomarko Ki", data1: "@tomarko98", data2: "" },
]

export const Topdata = [
    { id: 1, rank: "#1", src: nftimg9, collection: "Starter Sense NFT", mail: "@irukasensei229", volume: "2.56ETH", data: "15.2", owners: "99.4K", data1: "3.1", price: "2.31ETH", item: "12.4K",  color: "success", color1: "success" },
    { id: 2, rank: "#2", src: nftimg10, collection: "Lorem Kekkei", mail: "@clansound209", volume: "1.25ETH", data: "3.7", owners: "22.1K", data1: "0.5", price: "0.25ETH", item: "10.1K",color: "success", color1: "danger" },
    { id: 3, rank: "#3", src: nftimg11, collection: "NFT Uchiha", mail: "@sasukeuhi990", volume: "2,092ETH", data: "23.1", owners: "55.3K", data1: "9.12", price: "2,000ETH", item: "52.7K", color: "danger", color1: "success" },
    { id: 4, rank: "#4", src: nftimg12, collection: "Lorem Ipsum Uch", mail: "@kakashi092", volume: "36.25ETH", data: "5.2", owners: "66.3K", data1: "4.1", price: "30.12ETH", item: "31.4K", color: "danger", color1: "danger" },
]

export const Sellerdata = [
    { id: 1, src: nftimg14, data: "Meesthi Si", data1: "@meesthi03" },
    { id: 2, src: nftimg15, data: "Tomarko Parizi", data1: "@tomarko98" },
    { id: 3, src: nftimg16, data: "Kazimo Aruke", data1: "@kazimo900" },
    { id: 4, src: nftimg17, data: "Oorichimaru lo", data1: "@ooro001" },
    { id: 5, src: nftimg18, data: "Sasuke Uchiha", data1: "@sasuke777" },
    { id: 6, src: nftimg3, data: "Nagiro Ohinavo", data1: "@nagiro096" },
]


export const RectActivedata = [
    {
        imgSrc: nftimg2,
        message: "Auction started For",
        highlighted: "Luminous Petal",
        username: "Monisteris (@monisteris547)",
        time: "5 mins ago"
    },
    {
        imgSrc: nftimg3,
        message: "Bid placed on",
        highlighted: "Radium Radiance",
        username: "Isther (@isther457)",
        time: "2 Days ago"
    },
    {
        imgSrc: nftimg4,
        message: "Artwork sold to",
        highlighted: "@Lanisis",
        username: "Rokonis (@rokonis658)",
        time: "3 Days ago"
    },
    {
        imgSrc: nftimg7,
        message: "New Arrivals from",
        highlighted: "@kanith",
        username: "Kanith (@kanith6589)",
        time: "3 Days ago"
    },
    {
        imgSrc: nftimg5,
        message: "New artwork uploaded",
        highlighted: "@fister124",
        username: "Simon (@simon145)",
        time: "5 Days ago"
    },
    {
        imgSrc: nftimg6,
        message: "New collection created.",
        highlighted: "",
        username: "Joviskin (@joviskin124)",
        time: "5 Days ago",
        secondaryImg: nftimg11
    }
];
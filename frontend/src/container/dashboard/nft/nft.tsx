import  { Fragment } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Featuredata, Hotdata, Nftoptions, Nftseries, Sellerdata, Topdata } from "../../../components/common/data/dashboard/nftdata";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkCardNft from "../../../@spk-reusable-components/reusable-dashboards/spk-cardnft";
import nftimg1 from "../../../assets/images/nft-images/1.jpg"
import nftimg2 from "../../../assets/images/nft-images/2.jpg"
import nftimg3 from "../../../assets/images/nft-images/3.jpg"
import nftimg4 from "../../../assets/images/nft-images/4.jpg"
import nftimg5 from "../../../assets/images/nft-images/5.jpg"
import nftimg6 from "../../../assets/images/nft-images/6.jpg"
import nftimg7 from "../../../assets/images/nft-images/7.jpg"
import nftimg11 from "../../../assets/images/nft-images/11.jpg"
import Ethereum from "../../../assets/images/crypto-currencies/regular/Ethereum.svg"

const Nft = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Pageheader title="Dashboards" currentpage="NFT" activepage="NFT" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={7}>
                    <Card className="custom-card nft-banner-card overflow-hidden">
                        <Card.Body className="p-4">
                            <div className="row align-items-center mx-0">
                                <div className="col-xl-7">
                                    <h4 className="fw-semibold text-fixed-white">
                                        Your Gateway to the World of NFTs: Explore, Buy, and Sell
                                    </h4>
                                    <p className="text-fixed-white op-8 mb-4">Dive into the limitless possibilities of NFTs. Explore, invest, and showcase your unique digital assets.</p>
                                    <SpkButton Buttonvariant="primary" Customclass="me-2 waves-effect waves-light mb-1">Explore Now</SpkButton>
                                    <SpkButton Buttonvariant="primary1" Customclass="waves-effect waves-light mb-1">Learn More</SpkButton>
                                </div>
                                <Col xl={5} className="text-end">
                                    <img src={nftimg1} className="img-fluid nft-main-banner-image shadow p-3 me-2" alt="" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card flex-row">
                        <Card.Body className="bg-light m-2 rounded-1">
                            <div className="d-flex flex-wrap align-items-center gap-3 flex-xl-nowrap">
                                <div>
                                    <span className="avatar avatar-md bg-primary svg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path><circle cx="16" cy="12" r="1.5"></circle>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p className="mb-0 ">Your Balance</p>
                                    <h5 className="fw-semibold mb-0">$28,546.96<span className="text-muted fs-12 fw-normal ms-1"> Increased By <span className="text-success align-center fs-11 ms-1 fw-medium">0.14% <i className="ti ti-arrow-narrow-up fs-14"></i></span></span> </h5>
                                </div>
                                <div className="ms-auto">
                                    <Link to="#!" className="btn btn-primary-gradient">View Transactions</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xl={3} md={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="text-center">
                                        <div className="icon lh-1 mb-2">
                                            <span className="avatar avatar-md shadow-sm bg-primary-transparent border border-primary border-2 border-opacity-25 avatar-rounded">
                                                <i className="ri-vidicon-line fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="mb-0">256</h5>
                                            <p className="text-muted mb-0">Assets</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="text-center">
                                        <div className="icon lh-1 mb-2">
                                            <span className="avatar avatar-md shadow-sm bg-primary1-transparent border border-primary1 border-2 border-opacity-25 avatar-rounded">
                                                <i className="bi bi-people fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="mb-0">1,543</h5>
                                            <p className="text-muted mb-0">Followers</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="text-center">
                                        <div className="icon lh-1 mb-2">
                                            <span className="avatar avatar-md shadow-sm bg-primary2-transparent border border-primary2 border-2 border-opacity-25 avatar-rounded">
                                                <i className="bi bi-heart fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="mb-0">12,345</h5>
                                            <p className="text-muted mb-0">Likes</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="text-center">
                                        <div className="icon lh-1 mb-2">
                                            <span className="avatar avatar-md shadow-sm bg-primary3-transparent border border-primary3 border-2 border-opacity-25 avatar-rounded">
                                                <i className="bi bi-currency-dollar fs-17 lh-1"></i>
                                            </span>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="mb-0">$2.5k</h5>
                                            <p className="text-muted mb-0">Bidding</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <h6 className="mb-0">&#128293; Hot Bids :</h6>
                <div>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button" Size="sm">View All</SpkButton>
                </div>
            </div>
            <Row>
                {Hotdata.map((idx) => (
                    <Col xxl={2} xl={4} md={6} key={Math.random()}>
                        <SpkCardNft imgSrc={idx.src1} svgIcon={idx.svgIcon} avatarSrc={idx.src} auctionTime={" 07hrs : 33m : 45s "} title={idx.header} rating={"1.43k"} clientName={idx.ename} mail={idx.mail} currentBid={idx.bid} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Featured Creators
                            </Card.Title>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn-light btn btn-sm text-muted no-caret" Navigate="#!" Arrowicon={true} Toggletext="View All">
                                <Dropdown.Item className="border-bottom" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item className="border-bottom" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush mb-0">
                                {Featuredata.map((idx) => (
                                    <li className="list-group-item d-flex gap-1" key={Math.random()}>
                                        <Link to="#!">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src={idx.src} alt="" />

                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-0">{idx.data}</p>
                                                        <span className="text-muted fs-12">{idx.data1}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="ms-auto my-auto">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm bg-primary1-transparent border border-primary1 border-opacity-10 avatar-rounded">
                                                            <img src={idx.src1} alt="" className="p-1 rounded-circle" />
                                                        </span>
                                                        {idx.data2}
                                                    </div>
                                                </div>
                                                <Link to="#!" className="btn btn-primary-light btn-sm "><i className="ri-add-line align-middle me-1"></i>Follow</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between flex-wrap">
                            <div className="card-title">
                                Total Statistics
                            </div>
                            <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-outline-light no-caret" Navigate="#!" Icon={true} IconClass="fe fe-more-vertical">
                                <li><Dropdown.Item>Today</Dropdown.Item></li>
                                <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                <li><Dropdown.Item>Last Month</Dropdown.Item></li>
                                <li><Dropdown.Item>Last Year</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <Card.Body className="p-0">
                            <div className="d-sm-flex flex-wrap justify-content-evenly flex-fill gap-4 p-3 border-bottom border-block-end-dashed bg-light">
                                <div className="m-1 d-flex gap-3 justify-content-between align-items-end">
                                    <div>
                                        <div>Growth <SpkBadge variant="success">0.14%</SpkBadge></div>
                                        <p className="mb-0 text-muted fs-12">NFTs sold</p>
                                    </div>
                                    <h6 className="mb-0">$500K</h6>
                                </div>
                                <div className="m-1 d-flex gap-3 justify-content-between align-items-end">
                                    <div>
                                        <div>Market <SpkBadge variant="success">0.14%</SpkBadge></div>
                                        <p className="mb-0 text-muted fs-12">NFT marketplaces</p>
                                    </div>
                                    <h6 className="mb-0">$100k</h6>
                                </div>
                                <div className="m-1 d-flex gap-3 justify-content-between align-items-end">
                                    <div>
                                        <div>Bid <SpkBadge variant="danger">0.14%</SpkBadge></div>
                                        <p className="mb-0 text-muted fs-12">Highest bid</p>
                                    </div>
                                    <h6 className="mb-0">$5,000</h6>
                                </div>
                            </div>
                            <div id="nft-statistics" className="p-3 pb-0"><Spkapexcharts chartOptions={Nftoptions} chartSeries={Nftseries} type="line" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Recent Activities
                            </Card.Title>
                            <SpkDropdown toggleas="a" Togglevariant="" Customtoggleclass="btn-light btn btn-sm text-muted no-caret"
                                Navigate="#!" Arrowicon={true} Toggletext="View All">
                                <Dropdown.Item className="border-bottom" href="#!">Today</Dropdown.Item>
                                <Dropdown.Item className="border-bottom" href="#!">This Week</Dropdown.Item>
                                <Dropdown.Item href="#!">Last Week</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush mb-0">
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg2} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">Auction started For <span className="text-primary">Luminous Petal</span></p>
                                                    <span className="text-muted fs-12">Monisteris (@monisteris547)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">5 mins ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg3} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">Bid placed on <span className="text-primary">Radium Radiance</span><span className="text-muted"> #isther457</span></p>
                                                    <span className="text-muted fs-12">Isther (@isther457)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">2 Days ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg4} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">Artwork sold to <span className="text-primary">@Lanisis</span></p>
                                                    <span className="text-muted fs-12">Rokonis (@rokonis658)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">3 Days ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg7} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">New Arrivals form New one <span className="text-primary1">@kanith</span></p>
                                                    <span className="text-muted fs-12">Kanith (@kanith6589)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">3 Days ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg5} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">New artwork uploaded <span className="text-primary">@fister124</span></p>
                                                    <span className="text-muted fs-12">Simon(@simon145)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">5 Days ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="#!">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between flex-xl-nowrap">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={nftimg6} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="fw-medium mb-0">New collection created.
                                                    </p>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="text-muted fs-12 align-middle">Joviskin (@joviskin124)</span>
                                                        <span className="avatar avatar-xs bg-primary1-transparent border border-primary1 border-opacity-10">
                                                            <img src={nftimg11} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-muted fs-12 mt-1 ms-1">5 Days ago</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xxl={8} xl={8}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Collections:
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm no-caret" Arrowicon={true} Toggletext="Sort By">
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="table-hover table-bordered text-nowrap nft-table" header={[{ title: 'Rank' }, { title: 'Collection' }, { title: 'Volume' }, { title: '24h %' }, { title: 'Owners' }, { title: '7d %' }, { title: 'Floor Price' }, { title: 'Items' }]}>
                                    {Topdata.map((idx) => (
                                        <tr key={Math.random()}>
                                            <td><span className="fw-medium text-primary">{idx.rank}</span></td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><Link to="#!" title="nft_name">{idx.collection}</Link></p>
                                                        <Link to="#!" className="fs-12 text-muted fw-normal" title="creator_name">{idx.mail}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={Ethereum} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><Link to="#!" title="nft_name">{idx.volume}</Link></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color}`}><i className={`ti ti-trending-${idx.color.includes("success")? "up":"down"} me-1 align-middle d-inline-block`}></i>{idx.data}%</span>
                                            </td>
                                            <td>{idx.owners}</td>
                                            <td><span className={`text-${idx.color1}`}><i className={`ti ti-trending-${idx.color1.includes("success")? "up":"down"} me-1 align-middle d-inline-block`}></i>{idx.data1}%</span></td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={Ethereum} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><Link to="#!" title="nft_name">{idx.price}</Link></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.item}</td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#!">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link text-primary" href="#!">
                                                    next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                <i className="ri-star-fill text-warning me-2"></i>Best Seller
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm text-muted no-caret" Arrowicon={true} Toggletext="View All">
                                <li><Dropdown.Item>Today</Dropdown.Item></li>
                                <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                <li><Dropdown.Item>Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                                {Sellerdata.map((idx) => (
                                    <li className="list-group-item" key={Math.random()}>
                                        <Link to="#!">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-0">{idx.data}</p>
                                                        <span className="text-muted fs-12 d-inline-flex">{idx.data1}<span className="text-primary lh-1 fs-16 ms-1 d-inline-flex"><i className="ti ti-discount-check-filled "></i></span></span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fs-12 text-muted">99.9k Bidders</span>
                                                    <p className="fw-semibold mb-0 bid-amt align-middle fs-14">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="65" viewBox="0 0 40 65">
                                                            <g fill="none" fillRule="evenodd">
                                                                <g fillRule="nonzero" transform="translate(-227 -93)">
                                                                    <g transform="translate(227 93)"><g>
                                                                        <path fill="#8A92B2" d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"></path>
                                                                        <path fill="#454A75" d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"></path>
                                                                        <path fill="#8A92B2" d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"></path><path fill="gray" d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"></path>
                                                                        <path fill="#62688F" d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"></path>
                                                                        <path fill="#62688F" d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"></path></g></g></g>
                                                            </g>
                                                        </svg>  0.05ETH <span className="fs-11 text-muted fw-normal ms-1 d-inline-flex">: Price</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-4 --> */}
        </Fragment>
    )
};

export default Nft;
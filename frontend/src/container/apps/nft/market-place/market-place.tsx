import  { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { Artdata, Gamingdata, Marketplacedata } from "../../../../components/common/data/apps/nft/marketplacedata";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkNftcards from "../../../../@spk-reusable-components/reusable-apps/spk-nftcards";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import nftimg15 from "../../../../assets/images/nft-images/15.jpg"
import nftimg16 from "../../../../assets/images/nft-images/16.jpg"
import nftimg17 from "../../../../assets/images/nft-images/17.jpg"
import nftimg18 from "../../../../assets/images/nft-images/18.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"

const MarketPlace = () => {

    const nftWithId = Marketplacedata.find(item => item.id === 4);
    const nftWithId6 = Marketplacedata.find(item => item.id === 6);
    const nftWithId2 = Artdata.find(item => item.id === 2);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="NFT" currentpage="Market Place" activepage="Market Place" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Tab.Container defaultActiveKey="all">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">

                            <Card.Body className="">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav className="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                            <Nav.Item>
                                                <Nav.Link eventKey="all" className="" href="#nft-all"> All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="art" className="" href="#nft-art" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="gaming" className="" href="#nft-gaming" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="domain" className="" href="#nft-domain" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="music" className="" href="#nft-music" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="realestate" className="" href="#nft-realestate" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sports" className="" href="#nft-sports" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fashion" className="" href="#nft-fashion" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="avatars" className="" href="#nft-avatars" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="memes" className="" href="#nft-memes" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <SpkButton Buttonvariant="secondary" Size="sm" Buttontype="button" Customclass="">Filters</SpkButton>
                                        <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link className="dropdown-item" to="#!">New Collection</Link></li>
                                            <li><Link className="dropdown-item" to="#!">High - Low</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Low - High</Link></li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="all" className="p-0 border-0" id="nft-all" role="tabpanel">
                                <Row>
                                    {Marketplacedata.map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                            <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                                        </Col>
                                    ))}
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-end mb-4">
                                            <li className="page-item disabled">
                                                <a className="page-link">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#!">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="art" className="p-0 border-0" id="nft-art" role="tabpanel">
                                <Row>
                                    {Artdata.map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                            <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.timeLeft} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.username} count={idx.currentBid} rating={idx.likes} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gaming" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                <Row>
                                    {Gamingdata.map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                            <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.imgSrc} time={idx.auctionTime} title={idx.title} imgSrc1={idx.ownerImg} clientName={idx.ownerName} mail={idx.ownerHandle} count={idx.currentBid} rating={idx.likes} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="domain" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc={nftimg15} time='07hrs : 06m : 15s' title='Surreal Fantasy Art' imgSrc1={face6} clientName='Fantasia NFT' mail='@fantasianft13' count=' 0.018ETH' rating='1.8k' />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="music" className="p-0 border-0" id="nft-music" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc={nftimg16} time='07hrs : 06m : 15s' title='Vibrant Pixel Art' imgSrc1={face12} clientName='PixelPerfect NFT' mail=' @pixelperfectnft74' count=' 0.017ETH' rating='2.5k' />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="realestate" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc={nftimg17} time='07hrs : 06m : 15s' title='Geometric Dreamscapes' imgSrc1={face15} clientName='GeoNFT NFT' mail='@geonft_designs47' count='0.016ETH' rating='2.9k' />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sports" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc={nftimg18} time='07hrs : 06m : 15s' title='Vibrant Pixel Art' imgSrc1={face10} clientName='PixelPerfect NFT' mail='@pixelperfectnft74' count='0.017ETH' rating='2.5k' />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fashion" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                <Row>
                                    {nftWithId && (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={nftWithId.id}>
                                            <SpkNftcards
                                                imgSrc={nftWithId.image}
                                                time={nftWithId.auctionTime}
                                                title={nftWithId.title}
                                                imgSrc1={nftWithId.avatar}
                                                clientName={nftWithId.name}
                                                mail={nftWithId.handle}
                                                count={nftWithId.currentBid}
                                                rating={nftWithId.likes} imgClass={"card-img mb-3"} />
                                        </Col>
                                    )}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="avatars" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                <Row>
                                    {nftWithId6 && (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={nftWithId6.id}>
                                            <SpkNftcards
                                                imgClass={"card-img mb-3"}
                                                imgSrc={nftWithId6.image}
                                                time={nftWithId6.auctionTime}
                                                title={nftWithId6.title}
                                                imgSrc1={nftWithId6.avatar}
                                                clientName={nftWithId6.name}
                                                mail={nftWithId6.handle}
                                                count={nftWithId6.currentBid}
                                                rating={nftWithId6.likes}
                                            />
                                        </Col>
                                    )}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="memes" className="p-0 border-0" id="nft-memes" role="tabpanel">
                                <Row>
                                    {nftWithId2 && (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={nftWithId2.id}>
                                            <SpkNftcards
                                                imgClass={"card-img mb-3"}
                                                imgSrc={nftWithId2.image}
                                                time={nftWithId2.timeLeft}
                                                title={nftWithId2.title}
                                                imgSrc1={nftWithId2.avatar}
                                                clientName={nftWithId2.name}
                                                mail={nftWithId2.username}
                                                count={nftWithId2.currentBid}
                                                rating={nftWithId2.likes}
                                            />
                                        </Col>
                                    )}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default MarketPlace;
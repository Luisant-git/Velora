import  { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Marketplacedata } from "../../../../components/common/data/apps/nft/marketplacedata";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButtongroup from "../../../../@spk-reusable-components/reusable-uielements/spk-buttongroup";
import { Link } from "react-router-dom";
import SpkNftcards from "../../../../@spk-reusable-components/reusable-apps/spk-nftcards";

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const CreateNft = () => {

    const CreatNft = Marketplacedata.slice(0, 1);

    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];

    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Pageheader title="Apps" subtitle="NFT" currentpage="Create NFT" activepage="Create NFT" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9} xl={8} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Create NFT</div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="row gy-3 justify-content-between">
                                <Col xxl={6} xl={12}>
                                    <label className="form-label">Upload NFT</label>
                                    <div className="create-nft-item bg-light py-3 rounded">
                                        <FilePond className="filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </Col>
                                <Col xxl={6} xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="input-placeholder" className="">NFT Title</Form.Label>
                                            <Form.Control type="text" className="" id="input-placeholder" placeholder="eg:Abstract Digital Art" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-description" className="">NFT Description</Form.Label>
                                            <Form.Control as="textarea" className="" id="nft-description" rows={3} placeholder="Enter Description" defaultValue="" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-link" className="">External Link</Form.Label>
                                            <Form.Control type="text" className="" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-creator-name" className="">Creator Name</Form.Label>
                                            <Form.Control type="text" className="" id="nft-creator-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-price" className="">NFT Price</Form.Label>
                                            <Form.Control type="text" className="" id="nft-price" placeholder="Enter Price" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-size" className="">NFT Size</Form.Label>
                                            <Form.Control type="text" className="" id="nft-size" placeholder="Enter Size" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-royality" className="">Royality</Form.Label>
                                            <SpkSelect option={Data1} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                                placeholder="Choose Royalities" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-property" className="">Property</Form.Label>
                                            <Form.Control type="text" className="" id="nft-property" placeholder="Enter Property" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className=" d-block">Method</Form.Label>
                                            <SpkButtongroup Buttongrplabel="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</label>
                                            </SpkButtongroup>
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <Link  to="#!" className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                {CreatNft.map((idx) => (
                    <Col xxl={3} xl={4} className="col-12" key={Math.random()}>
                        <SpkNftcards imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} imgClass="card-img mb-3" />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default CreateNft;
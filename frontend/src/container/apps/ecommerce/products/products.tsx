import  { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, setSelectedItem } from "../../../../components/common/ui/redux/action";
import Pageheader from "../../../../components/page-header/pageheader";
import LabeledTwoThumbs1 from "../../../../components/common/data/apps/jobs/searchcandidatedate";
import { Link } from "react-router-dom";
import SpkProducts from "../../../../@spk-reusable-components/reusable-apps/spk-products";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";

const Products = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);
    const products = useSelector((state: any) => state.products);


    const handleItemClick = (item: any) => {
        dispatch(setSelectedItem(item));
    };

    const handleAddToWishlist = (item: any) => {
        dispatch(addToWishlist(item));
    };

    const allIds = [...cart.map((item: { id: any; }) => item.id), ...products.map((item: { id: any; }) => item.id)];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item: any) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };

    const [allData, _setallData] = useState(products);

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products" activepage="Products" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: Row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="row align-items-center gy-2">
                                <div className="col-sm-8">
                                    <div className="d-flex">
                                        <h6 className="mb-0">
                                            Total <span className="fw-semibold text-primary1">6678 Items </span>Available</h6>
                                    </div>
                                </div>
                                <div className="col-sm-4 text-sm-end text-start">
                                    <SpkDropdown as={ButtonGroup} toggleas="a" Togglevariant="" Customtoggleclass="border no-caret btn-outline-light" Toggletext="Sort By" iconPosition="before"
                                        Icon={true} IconClass="ti ti-sort-descending-2 me-1 d-inline-flex" Arrowicon={true} >
                                        <Dropdown.Item as="li" href="#!">Date Published</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Most Relevant</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Price Low to High</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Price High to Low</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Row>
                        {allData.map((idx: any) => (
                            <Col xxl={3} lg={6} xl={4} sm={6} className="" key={idx.id}>
                                <SpkProducts onclick={() => handleAddToWishlist(idx)} cartClick={() => handleAddToCart(idx)} detailsClick={() => handleItemClick(idx)} card={idx} idx={`${import.meta.env.BASE_URL}apps/ecommerce/product-details?id=${idx.id}`} badge={idx.badge} shoBadge={true} />
                            </Col>
                        ))}
                        <div className="col-md-12">
                            {/* <!-- Start::pagination --> */}
                            <nav aria-label="Page navigation" className="pagination-style-4 mt-3">
                                <Pagination className="pagination text-center justify-content-center gap-1">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item active>1</Pagination.Item>
                                    <Pagination.Item>2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item>4</Pagination.Item>
                                    <Pagination.Item>5</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                            {/* <!-- End::pagination --> */}
                        </div>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card products-navigation-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Filter
                            </div>
                            <div className="ms-auto">
                                <Link to="#!" className="text-decoration-underline fw-medium text-primary2">Clear All</Link>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-semibold mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-1">
                                            Electronics <span className="fs-11 fw-normal text-muted">(2,712)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-2">
                                            Clothing & Apparel <span className="fs-11 fw-normal text-muted">(536)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-3">
                                            Kitchen <span className="fs-11 fw-normal text-muted">(18,289)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-4">
                                            Health & Beauty <span className="fs-11 fw-normal text-muted">(3,453)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-5">
                                            Sports <span className="fs-11 fw-normal text-muted">(7,165)</span>
                                        </label>
                                    </div>
                                    <Collapse in={open}>
                                        <div className="collapse" id="sizes-more">
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="c-6">
                                                    Games <span className="fs-11 fw-normal text-muted">(5,964)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="c-7">
                                                    Food & Grocery <span className="fs-11 fw-normal text-muted">(2,123)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link mt-3"  onClick={() => setOpen(!open)} data-bs-toggle="collapse" to="#category-more" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-semibold mb-0">Price Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear"><LabeledTwoThumbs1 /></div>
                                    <div className="d-flex mt-4">
                                        <div className="fw-semibold h6">$<span id="lower-value">8000.00</span></div>
                                        &nbsp; -- &nbsp;
                                        <div className="fw-semibold h6">$<span id="upper-value">4000.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-semibold mb-0">Discount</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="q-1" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="q-1">
                                            0% - 20%  <span className="fs-11 fw-normal text-muted">(245)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="q-2" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="q-2">
                                            20% - 40% <span className="fs-11 fw-normal text-muted">(987)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="q-3" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="q-3">
                                            40% - 60% <span className="fs-11 fw-normal text-muted">(123)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="q-4" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="q-4">
                                            60% - 80% <span className="fs-11 fw-normal text-muted">(987)</span>
                                        </label>
                                    </div>
                                    <div className="form-check p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="q-5" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="q-5">
                                            80% - 90% <span className="fs-11 fw-normal text-muted">(5,222)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-semibold mb-0">Brand</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="j-1">
                                            Ruby <span className="fs-11 fw-normal text-muted">(663)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="j-2">
                                            Hadlirams <span className="fs-11 fw-normal text-muted">(2,514)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="j-3">
                                            Xioami <span className="fs-11 fw-normal text-muted">(781)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="j-4">
                                            Samsnug <span className="fs-11 fw-normal text-muted">(20)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-0 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="j-5" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="j-5">
                                            Tommy & Hilfigure <span className="fs-11 fw-normal text-muted">(1,112)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h6 className="fw-semibold mb-0">Sizes</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="e-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="e-1">
                                            Extra Small (XS) <span className="fs-11 fw-normal text-muted">(574)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="e-2" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="e-2">
                                            Small (SM) <span className="fs-11 fw-normal text-muted">(1,474)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="e-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="e-3">
                                            Medium (MD) <span className="fs-11 fw-normal text-muted">(12,245)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" value="" id="e-4" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="e-4">
                                            Large (L) <span className="fs-11 fw-normal text-muted">(877)</span>
                                        </label>
                                    </div>
                                    <Collapse in={open1}>
                                        <div className="collapse" id="sizes-more">
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" value="" id="s-5" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="s-5">
                                                    Extra Large (XL) <span className="fs-11 fw-normal text-muted">(954)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" value="" id="s-6" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="s-6">
                                                    XXL <span className="fs-11 fw-normal text-muted">(147)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-0 p-0">
                                                <input className="form-check-input float-end" type="checkbox" value="" id="s-7" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="s-7">
                                                    XXXL <span className="fs-11 fw-normal text-muted">(324)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link  className="ecommerce-more-link mt-3" onClick={() => setOpen1(!open1)} data-bs-toggle="collapse" to="#sizes-more" role="button" aria-expanded={open1} aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}
        </Fragment>
    )
};

export default Products;
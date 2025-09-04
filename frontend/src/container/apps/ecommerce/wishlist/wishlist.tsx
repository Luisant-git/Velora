import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { MasterData } from "../../../../components/common/data/apps/ecommerce/productsdata";
import { addToCart, removeFromWishlist, setSelectedItem } from "../../../../components/common/ui/redux/action";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const reduxWishlist = useSelector((state: any) => state.wishlist);
    const [localWishlist, setLocalWishlist] = useState(MasterData);
    const Wishlistdata = [...localWishlist, ...reduxWishlist];

    const cart = useSelector((state: any) => state.cart);
    const products = useSelector((state: any) => state.products);


    const dispatch = useDispatch();

    const handleClick = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
                console.log("delete")
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: string) => {
        setLocalWishlist(localWishlist.filter((item: { id: any; }) => item.id !== id));
        dispatch(removeFromWishlist(id));
    };

    const handleItemClick = (
        item: any) => {
        dispatch(setSelectedItem(item));
    };

    const allIds = [...cart.map((item: { id: any; }) => item.id), ...products.map((item: { id: any; }) => item.id)];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item: any) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };

    // const isEmpty = Wishlistdata.length === 0;

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Wishlist" activepage="Wishlist" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                My Wishlists
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                        <Card.Body className=" card-body m-3 bg-light p-2 rounded mt-2">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 ps-2">
                                <p className="mb-0 fs-15">Adding<span className="text-primary1 fw-semibold"> 12 items</span> in your wishlist</p>
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-secondary-light">Checkout All <i className="ti ti-arrow-right ms-1"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--start::row-2 --> */}
            <Row>
                {Wishlistdata.map((idx) => (
                    <Col lg={6} key={Math.random()}>
                        <Card className={`custom-card card-style-3 ${idx.class1}`}>
                            <Card.Body className=" p-3">
                                <Row>
                                    <Col md={2}>
                                        <div className="bg-primary-transparent rounded-2 mb-3 mb-md-0">
                                            <Link to="#!">
                                                <img src={idx.productpicture} alt="img" className="img-fluid w-100" />
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex align-items-start justify-content-between mb-2">
                                            <div className="flex-grow-1">
                                                <h6 className="fs-14 mb-1 fw-medium"><Link to={`/apps/ecommerce/product-details?id=${idx.id}`} onClick={() => handleItemClick(idx)}>{idx.title}</Link></h6>
                                                <div className="min-w-fit-content fw-normal mb-1 fs-13 fw-medium text-success">{idx.stock}</div>
                                                <div className="d-flex align-items-baseline gap-2 mb-1">
                                                    <h6 className="fs-22 mb-0">{idx.price}</h6>
                                                    <span className="fs-12 text-muted text-decoration-line-through op-7">{idx.discount}</span>
                                                    <span className={`badge bg-${idx.color}-transparent ms-2`}>{idx.discount1} Off</span>
                                                </div>
                                            </div>
                                            <Link  to="#!" className="btn-delete btn btn-primary2-light btn-icon" onClick={() => handleClick(idx.id)}><i className="ri-delete-bin-line"></i></Link>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`} className="btn btn-primary btn-w-md" onClick={() => handleAddToCart(idx)}><i className="ri-shopping-cart-line me-1"></i> Add Cart</Link>
                                            <Link  to="#!" className="btn btn-primary-light btn-w-md"><i className="ri-bookmark-line me-1"></i> Save for Later</Link>
                                            <div className="d-flex align-items-baseline fs-13 ms-auto">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star"></i></span>
                                                </div>
                                                <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>{idx.rating} </span>
                                                    <span>Ratings</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="d-flex align-items-center flex-wrap overflow-auto p-3 bg-white mb-3">
                        <div className="mb-2 mb-sm-0">
                            Showing <b>1</b> to <b>6 </b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>

                        <div className="ms-auto">
                            <Pagination className="pagination mb-0 overflow-auto">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Item className="pagination-next">next</Pagination.Item>
                            </Pagination>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}

        </Fragment>
    )
};

export default Wishlist;
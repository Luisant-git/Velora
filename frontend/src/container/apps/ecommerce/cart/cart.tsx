import  { Fragment, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MasterData } from "../../../../components/common/data/apps/ecommerce/productsdata";
import {  addToWishlist, removeFromCart } from "../../../../components/common/ui/redux/action";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";

import ecommerce13 from "../../../../assets/images/ecommerce/png/13.png"

const Cart = () => {

    const dispatch = useDispatch();
    const reduxCart = useSelector((state: any) => state.cart);
    const [localCart, setLocalCart] = useState(MasterData);
    const card = [...localCart, ...reduxCart];

    useEffect(() => {
        setLocalCart(localCart.filter((item) => !reduxCart.some((reduxItem: { id: number; }) => reduxItem.id === item.id)));
    }, [reduxCart]);

    const handleClick = (id: number) => {
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
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: number) => {
        setLocalCart(localCart.filter((item: any) => item.id !== id));
        dispatch(removeFromCart(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    const handleAddToWishlist = (item: any) => {
        dispatch(addToWishlist(item));
    };



    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    const isEmpty = card.length === 0;

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader path="" title="Apps" subtitle="Ecommerce" currentpage="Cart" activepage="Cart " />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: Row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card overflow-hidden" id="cart-container-delete">
                        <Card.Header>
                            <div className="card-title">
                                Cart Items
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                {isEmpty ? (
                                    <div className="text-center">
                                        <img src={ecommerce13} alt='' />
                                        <h6>Your Shopping Cart is Empty</h6>
                                        <p>Add Some items to make me happy 😃</p>
                                    </div>
                                ) : (
                                    <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Product Name' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Total' }, { title: 'Action' },]}>
                                        {card.map((idx: any) => (
                                            <tr key={Math.random()}>
                                                <td className="cart-items01">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <img src={idx.productpicture} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <div className="mb-1 fs-14 fw-semibold">
                                                                <Link to="#!">{idx.title}</Link>
                                                            </div>
                                                            <div className="d-flex gap-4 flex-wrap mb-1 align-items-center">
                                                                <div>
                                                                    <span className="me-1 d-inline-flex">Size:</span><span className="fw-medium text-muted">{idx.size}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="me-1 d-inline-flex">Color:</span><span className="fw-medium text-muted">{idx.color}</span>
                                                                </div>
                                                            </div>
                                                            <span className={`badge bg-${idx.stockColor}-transparent`}>{idx.stock}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-semibold fs-14">
                                                        {idx.price}
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group flex-nowrap gap-1 rounded-pill cart-input-group">
                                                        <SpkButton Buttonvariant="primary-light" Size="sm" onClickfunc={dec} Buttontype="button" Buttonlabel="button" Customclass="btn-icon btn-wave border rounded-pill border product-quantity-minus border-end-0 waves-effect waves-light"><i className="ri-subtract-line"></i></SpkButton>
                                                        <Form.Control type="text" className="form-control-sm rounded-pill text-center p-0" aria-label="quantity" defaultValue="1" />
                                                        <SpkButton Buttonvariant="primary-light" Size="sm" onClickfunc={inc} Buttontype="button" Buttonlabel="button" Customclass="btn-icon btn-wave border rounded-pill border product-quantity-plus border-start-0 waves-effect waves-light"><i className="ri-add-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fs-14 fw-semibold">
                                                        $554
                                                    </div>
                                                </td>
                                                <td>
                                                    <SpkTooltips placement="top" title="Add To Wishlist">
                                                        <Link  to={`${import.meta.env.BASE_URL}apps/ecommerce/wishlist`} onClick={() => handleAddToWishlist(idx)} className="btn btn-icon btn-primary btn-sm me-1"><i className="ri-heart-line"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Remove From cart">
                                                        <Link  to="#!" onClick={() => handleClick(idx.id)} className="btn btn-icon btn-primary2 btn-sm btn-delete">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </SpkTooltips>
                                                </td>
                                            </tr>
                                        ))}
                                    </SpkTablescomponent>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card d-none" id="cart-empty-cart">
                        <Card.Header>
                            <div className="card-title">
                                Empty Cart
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="cart-empty text-center">
                                <span className="svg-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                </span>
                                <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                <h5 className="mb-3">Add some items to make me happy :)</h5>
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Order Summary
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <label htmlFor="promo-code" className="fw-medium mb-0">Have a Promo Code?</label>
                                <div className="fs-11 text-muted mb-3">Apply Your Promo Code for an Instant Discount!</div>
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control form-control-sm" id="promo-code" name="promo-code" placeholder="Enter Promo Code" aria-label="Enter Promo Code" aria-describedby="coupons" />
                                    <SpkButton Buttonvariant="primary" Buttontype="button" Id="coupons">Apply</SpkButton>
                                </div>
                            </div>
                            <Tab.Container defaultActiveKey="free">
                                <div className="p-3 pb-2">
                                    <p className="mb-2 fw-semibold">Delivery:</p>
                                    <Nav className="nav-tabs tab-style-8 scaleX rounded cart-summary-nav gap-2 text-center" id="myTab4" role="tablist">
                                        <Nav.Item className="flex-fill me-0" role="presentation">
                                            <Nav.Link eventKey="free" className="w-100" id="freeshipping" data-bs-toggle="tab" data-bs-target="#freeshipping-pane" type="button" role="tab" aria-controls="freeshipping-pane" aria-selected="true">Free Shipping</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="flex-fill" role="presentation">
                                            <Nav.Link eventKey="express" className="w-100" id="expressshipping-tab" data-bs-toggle="tab" data-bs-target="#expressshipping-tab-pane" type="button" role="tab" aria-controls="expressshipping-tab-pane" aria-selected="false" tabIndex={-1}>Express Shipping</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content className="p-3 border-bottom border-block-end-dashed">
                                    <Tab.Pane eventKey="free" className="overflow-hidden p-0 border-0" id="freeshipping-pane" role="tabpanel" aria-labelledby="freeshipping" tabIndex={0}>
                                        <div className="fs-12 text-muted mb-3"><i className="ri-information-fill"></i> Delivered Within 7 Days</div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Sub Total</div>
                                            <div className="fw-medium fs-14">$2,547</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Discount</div>
                                            <div className="fw-medium fs-14 text-success">20% - $124</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Delivery Charges</div>
                                            <div className="fw-medium fs-14 text-danger">- $0</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Service Tax (18%)</div>
                                            <div className="fw-medium fs-14">- $12</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between h5">
                                            <div className="fs-16">Total :</div>
                                            <div className="fw-semibold"> $2,254</div>
                                        </div>
                                        <div className="d-grid">
                                            <Link  to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
                                            <Link  to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary1-light btn-wave">Continue Shopping</Link>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="express" className="overflow-hidden p-0 border-0" id="expressshipping-tab-pane" role="tabpanel" aria-labelledby="expressshipping-tab" tabIndex={0}>
                                        <div className="fs-12 text-muted mb-3"><i className="ri-information-fill"></i> Delivered by Tomorrow</div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Sub Total</div>
                                            <div className="fw-medium fs-14">$2,547</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Discount</div>
                                            <div className="fw-medium fs-14 text-success">20% - $124</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Delivery Charges</div>
                                            <div className="fw-medium fs-14 text-danger">- $15</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted">Service Tax (18%)</div>
                                            <div className="fw-medium fs-14">- $12</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between h5">
                                            <div className="fs-16">Total :</div>
                                            <div className="fw-semibold"> $2,546</div>
                                        </div>
                                        <div className="d-grid">
                                            <Link  to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
                                            <Link  to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary1-light btn-wave">Continue Shopping</Link>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}
        </Fragment>
    )
};

export default Cart;
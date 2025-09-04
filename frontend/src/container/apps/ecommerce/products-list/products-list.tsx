import React, { Fragment, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import { Link } from "react-router-dom";
import { ProductList } from "../../../../components/common/data/apps/ecommerce/productlistdata";

const ProductsList = () => {

    const [allData, setAllData] = useState<any>(ProductList);
    const handleRemove = (id: number) => {
        const newList = allData.filter((item: { id: number; }) => item.id !== id);
        setAllData(newList);
    };

    const [selectedItems, setSelectedItems] = useState<any>([]);

    const handleCheckboxClick = (id: string) => {
        setSelectedItems((prevSelected: string[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: string) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(allData.map((idx: { id: any; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products List" activepage="Products List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Products List
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap table-bordered" showCheckbox={true} onChange={handleSelectAll} checked={selectedItems.length === allData.length} header={[{ title: 'Product' }, { title: 'Category' }, { title: 'Price' }, { title: 'Stock' }, { title: 'Status' }, { title: 'Seller' }, { title: 'Published' }, { title: 'Action' }]}>
                                    {allData.map((idx: any) => (
                                        <tr className="product-list" key={Math.random()}>
                                            <td className="product-checkbox">
                                                <input className="form-check-input check-all" type="checkbox" id="all-products" defaultValue=""
                                                    aria-label="..."
                                                    onChange={() => handleCheckboxClick(idx.id)}
                                                    checked={selectedItems.includes(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <span className="avatar avatar-md avatar-square bg-light"><img src={idx.pdctsrc} className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link to="#!"> {idx.PdctName}</Link></p>
                                                        <p className="fs-12 text-muted mb-0">{idx.subname}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{idx.category}</span>
                                            </td>
                                            <td>{idx.price}</td>
                                            <td>{idx.stock}</td>
                                            <td><span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span></td>
                                            <td>
                                                <div className="d-flex align-items-center fw-semibold">
                                                    <span className="avatar avatar-sm p-1 bg-light me-2 avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <Link to="#!">{idx.Seller}</Link>
                                                </div>
                                            </td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/edit-products`} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
                                                    <Link to="#!" onClick={() => handleRemove(idx.id)} className="btn btn-icon btn-sm btn-danger-light product-btn"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>5</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default ProductsList;
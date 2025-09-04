import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { Historydata } from "../../../../components/common/data/apps/crypto/transactiondata";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkDropdown from "../../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../../@spk-reusable-components/reusable-tables/tables-component";
import SpkTooltips from "../../../../@spk-reusable-components/reusable-uielements/spk-tooltips";

const Transactions = () => {

    const [transaction, setTransaction] = useState(Historydata);
    const handleRemove = (id: number) => {
        const list = transaction.filter((idx) => idx.id !== id)
        setTransaction(list);
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Crypto" currentpage="Transactions" activepage="Transactions" path={""} /> 

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Transaction History
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Year</Dropdown.Item>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Size="sm">View All</SpkButton>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Cryptocurrency' }, { title: 'Date & Time' }, { title: 'Transaction ID' }, { title: 'Type' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Recipient Address' }, { title: 'Actions' }]}>
                                    {transaction.map((idx) => (
                                        <tr key={Math.random()}>

                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <div className="fw-medium">{idx.name}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{idx.date}</span>
                                            </td>
                                            <td>
                                                <span>{idx.txn}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className={`text-${idx.bg1} fw-medium`}>{idx.type}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.amount}</span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.bg}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                <span className="text-muted">{idx.recipoent}</span>
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon">
                                                    <SpkTooltips placement="top" title="download">
                                                        <i className="ri-download-2-line"></i>
                                                    </SpkTooltips>
                                                </SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon ms-1 task-delete-btn" onClickfunc={() => handleRemove(idx.id)}>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                    </SpkTooltips>
                                                </SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 overflow-auto float-end">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item active>1</Pagination.Item>
                                    <Pagination.Item>2</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Transactions;
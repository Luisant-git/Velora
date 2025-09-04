import  { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  StickyHeadTable, { COLUMNS, CustomizedTables, DATATABLE, Deletetable } from "../../../components/common/data/tables/datatablesdata";
import Pageheader from "../../../components/page-header/pageheader";
import Spkdatatable from "../../../@spk-reusable-components/reusable-plugins/spk-datatable";

const DataTables = () => {

    const [_editableData, setEditableData] = useState<any>(DATATABLE);
    const handleResetEditableData = () => {
        setEditableData([...DATATABLE]); // Reset data to its initial state
    };


    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Tables" currentpage="Data Tables" activepage="Data Tables" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Table
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Spkdatatable COLUMNS={COLUMNS} DATATABLE={DATATABLE} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Editable Table
                            </div>
                        </Card.Header>
                        <Card.Body className="responsive-datatable ">
                            <Spkdatatable
                                COLUMNS={COLUMNS}
                                DATATABLE={DATATABLE}
                                editable={true}         // Enables edit mode
                                resetData={handleResetEditableData} // Passes reset handler
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sticky header Table
                            </div>
                        </Card.Header>
                        <Card.Body className="ti-striped-table ti-custom-table-hover">
                            <StickyHeadTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Customization Table
                            </div>
                        </Card.Header>
                        <Card.Body className="customization-table">
                            <CustomizedTables />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Edit Row Table
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Deletetable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};

export default DataTables;
import React, { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import Pageheader from "../../../components/page-header/pageheader";
import { Drag, Drag1, Drag10, Drag11, Drag2, Drag3, Drag4, Drag5, Drag6, Drag7, Drag8, Drag9 } from "../../../components/common/data/adavanec-ui/sortablejsdata";

const Sortablejs = () => {

    const [list, setList] = React.useState(Drag);
    const [list1, setList1] = React.useState(Drag1);
    const [list2, setList2] = React.useState(Drag2);
    const [list3, setList3] = React.useState(Drag3);
    const [list4, setList4] = React.useState(Drag4);
    const [list5, setList5] = React.useState(Drag5);
    const [list6, setList6] = React.useState(Drag6);
    const [list7, setList7] = React.useState(Drag7);
    const [list8, setList8] = React.useState(Drag8);
    const [list9, setList9] = React.useState(Drag9);
    const [list10, setList10] = React.useState(Drag10);
    const [list11, setList11] = React.useState(Drag11);

    type ListItem = {
        id: number;
        text: string;
    };

    const [sortlist, setsortList] = React.useState<ListItem[]>([
        { id: 1, text: "Analyze market trends." },
        { id: 2, text: "Edit video content." },
        { id: 3, text: "Plan social media calendar." },
        { id: 4, text: "Update company policies." },
        { id: 5, text: "Compile sales reports." },
        { id: 6, text: "Schedule client calls." },
    ]);



    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Advanced Ui" currentpage="Sortable JS" activepage="Sortable JS" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SIMPLE LIST
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                <ReactSortable
                                    filter=".addImageButtonContainer"
                                    dragClass="sortableDrag"
                                    list={list}
                                    setList={setList}
                                    group="shared"
                                    animation={200}
                                    easing="ease-out"
                                >
                                    {list.map(item => (
                                        <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                    ))}
                                </ReactSortable>
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">SHARED LISTS</div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            list={list1}
                                            group={'shared'}
                                            setList={setList1}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list1.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </ol>
                                </Col>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            list={list2}
                                            group={'shared'}
                                            setList={setList2}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list2.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </ol>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                DISABLING SORTING
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="disabling-sorting-left">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            list={list10}
                                            group={{
                                                name: 'shared',
                                                pull: 'clone',
                                                put: false
                                            }}
                                            setList={setList10}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list10.map((item: any) => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Col>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="disabling-sorting-right">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            list={list3}
                                            setList={setList3}
                                            animation={200}
                                            easing="ease-out"
                                            group={'shared'}
                                        >
                                            {list3.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                CLONING
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="cloning-left">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            group={{
                                                name: 'shared',
                                                pull: 'clone'
                                            }}
                                            list={list8}
                                            setList={setList8}
                                            direction={'horizontal'}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list8.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>

                                    </SpkListgroup>
                                </Col>
                                <Col xl={6}>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="cloning-right">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            group={{
                                                name: 'shared',
                                                pull: 'clone'
                                            }}
                                            list={list9}
                                            setList={setList9}
                                            direction={'horizontal'}
                                            animation={150}
                                            swapThreshold={1}
                                            easing="ease-out"
                                        >
                                            {list9.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>

                                    </SpkListgroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SORTING WITH FILTER
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkListgroup as="ul" CustomClass="sortable-list" Id="sorting-with-filter">
                                <ReactSortable
                                    filter=".addImageButtonContainer"
                                    dragClass="sortableDrag"
                                    list={list4}

                                    setList={setList4}
                                    animation={200}
                                    easing="ease-out"
                                >
                                    {list4.map(item => (
                                        <li className={`list-group-item ${item.filter}`} key={item.id}>{item.name}</li>
                                    ))}
                                </ReactSortable>
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SORTING WITH HANDLE
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactSortable
                                list={sortlist}
                                setList={setsortList}
                                handle=".handle" 
                                animation={150} 
                                className="list-group sortable-list list-item-numbered"
                                tag="ol" 
                            >
                                {sortlist.map((item) => (
                                    <li
                                        key={item.id}
                                        className="list-group-item d-flex align-items-center"
                                        data-id={item.id} 
                                    >
                                        <i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>
                                        {item.text}
                                    </li>
                                ))}
                            </ReactSortable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        MULTIPLE DRAG
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="multiple-drag">
                                        <ReactSortable
                                            filter=".addImageButtonContainer"
                                            multiDrag={true}
                                            fallbackTolerance={3}
                                            dragClass="sortableDrag"
                                            list={list5}
                                            setList={setList5}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list5.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        SWAP
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <SpkListgroup as="ul" CustomClass="sortable-list" Id="sortable-swap">
                                        <ReactSortable multiDrag
                                            filter=".addImageButtonContainer"
                                            dragClass="sortableDrag"
                                            list={list6}
                                            swap={true}
                                            setList={setList6}
                                            animation={200}
                                            easing="ease-out"
                                        >
                                            {list6.map(item => (
                                                <ListGroup.Item className="" as="li" key={item.id}>{item.name}</ListGroup.Item>
                                            ))}
                                        </ReactSortable>
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                NESTED SORTABLE
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="nestedSortables" className="list-group col nested-sortable">
                                <ReactSortable
                                    filter=".addImageButtonContainer"
                                    dragClass="sortableDrag"
                                    list={list11}
                                    group={'nested'}
                                    fallbackOnBody={true}
                                    setList={setList11}
                                    animation={200}
                                    easing="ease-out"
                                >
                                    {list11.map(item => (
                                        <div
                                            key={item.id}
                                            className={`list-group-item ${item.children ? 'nested-1' : ''}`}
                                            draggable={item.draggable === false ? 'false' : 'true'}
                                        >
                                            {item.name}
                                            {item.children && (
                                                <div className="list-group nested-sortable">
                                                    {item.children.map(child => (
                                                        <div
                                                            key={child.id}
                                                            className={`list-group-item ${child.children ? 'nested-2' : ''}`}
                                                            draggable={child.draggable === false ? 'false' : 'true'}
                                                        >
                                                            {child.name}
                                                            {child.children && (
                                                                <div className="list-group nested-sortable">
                                                                    {child.children.map(grandchild => (
                                                                        <div
                                                                            key={grandchild.id}
                                                                            className="list-group-item nested-3"
                                                                            draggable={grandchild.draggable === false ? 'false' : 'true'}
                                                                        >
                                                                            {grandchild.name}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </ReactSortable>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SORTABLE GRID
                            </div>
                        </Card.Header>
                        <Card.Body id="sortable-grid">
                            <ReactSortable
                                filter=".addImageButtonContainer"
                                dragClass="sortableDrag"
                                list={list7}
                                setList={setList7}
                                animation={200}
                                easing="ease-out"
                            >
                                {list7.map(item => (
                                    <div className="grid-square" key={item.id}>
                                        <span className="fw-medium">{item.name}</span>
                                    </div>
                                ))}
                            </ReactSortable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    )
}
export default Sortablejs;
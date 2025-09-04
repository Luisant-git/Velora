import  { Fragment } from "react";
import {  Col, Row } from "react-bootstrap";
import Pageheader from "../../../components/page-header/pageheader";
import SpkTeamcards from "../../../@spk-reusable-components/reusable-pages/spk-teamcards";
import face1 from "../../../assets/images/faces/1.jpg"
import face2 from "../../../assets/images/faces/2.jpg"
import face3 from "../../../assets/images/faces/3.jpg"
import face4 from "../../../assets/images/faces/4.jpg"
import face5 from "../../../assets/images/faces/5.jpg"
import face6 from "../../../assets/images/faces/6.jpg"
import face7 from "../../../assets/images/faces/7.jpg"
import face8 from "../../../assets/images/faces/8.jpg"

const Team = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Director" Title="Hadley Kylin" Imgsrc={face1} Color="primary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Manager" Title="Ethan Mitchell" Imgsrc={face2} Color="primary1" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Creative Director" Title="Iliana Lilly" Imgsrc={face3} Color="primary2" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Jasmine Della" Imgsrc={face4} Color="primary3" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Aurora Reed" Imgsrc={face5} Color="secondary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Ava Taylor" Imgsrc={face6} Color="success" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Spencer Robin" Imgsrc={face7} Color="primary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Owen Foster" Imgsrc={face8} Color="primary1" Imageclass="mb-3" />
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default Team;
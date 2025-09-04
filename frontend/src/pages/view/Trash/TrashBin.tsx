import { Col, Row } from "react-bootstrap";
import Spksocialmediacardscomponent from "../../../@spk-reusable-components/reusable-dashboards/spk-socialmediacard";
import { Link } from "react-router-dom";
interface Social {
  id: number;
  apps: string;
  data: string;
  followers: string;
  percent: string;
  icon: string;
  color: string;
  color1: string;
  class: string;
  to?: string;
}

const Socialcards: Social[] = [
  {
    id: 1,
    apps: "Purchase",
    data: "457 ",
    followers: "Deleted",
    percent: "1.5",
    icon: "down",
    color: "danger",
    color1: "primary2",
    class: "insta",
    to: "/trash/purchase",
  },
  {
    id: 2,
    apps: "Product",
    data: "457",
    followers: "Deleted",
    percent: "1.5",
    icon: "down",
    color: "danger",
    color1: "info",
    class: "linkedin",
    to: "/trash/product",
  },
  {
    id: 3,
    apps: "Concern",
    data: "212",
    followers: "Deleted",
    percent: "1.9",
    icon: "down",
    color: "danger",
    color1: "primary",
    class: "fb",
    to: "/trash/concern",
  },
  {
    id: 4,
    apps: "Sale",
    data: "265",
    followers: "Deleted",
    percent: "1.9",
    icon: "up",
    color: "success",
    color1: "dark",
    class: "twit",
    to: "/trash/sale",
  },
  {
    id: 5,
    apps: "Customer",
    data: "915",
    followers: "Deleted",
    percent: "1.9",
    icon: "up",
    color: "success",
    color1: "danger",
    class: "youtube",
    to: "/trash/customer",
  },
  {
    id: 6,
    apps: "Party",
    data: "198",
    followers: "Deleted",
    percent: "1.9",
    icon: "up",
    color: "success",
    color1: "secondary",
    class: "msgr",
    to: "/trash/party",
  },
];

function TrashBin() {
  return (
    <div>
      {" "}
      <Col xxl={12}>
        <Row>
          {Socialcards.map((idx) => (
            <Col xl={4} key={Math.random()}>
              <Link to={`${idx.to}`} key={Math.random()}>
                <Spksocialmediacardscomponent
                  cardClass={idx.class}
                  color1={idx.color1}
                  app={idx.apps}
                  data={idx.data}
                  followers={idx.followers}
                  percent={idx.percent}
                  icon={idx.icon}
                  color={idx.color}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default TrashBin;

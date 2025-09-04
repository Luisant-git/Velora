import  { Fragment } from "react";
import Pageheader from "../../../components/page-header/pageheader";
import Draggabledata from "../../../components/common/data/adavanec-ui/draggabledata";;

const DraggableCards = () => {

    return (
        <Fragment>
            <Pageheader title="Advanced Ui" currentpage="Draggable Cards" activepage="Draggable Cards" />

            <Draggabledata />

        </Fragment>

    )
};

export default DraggableCards;
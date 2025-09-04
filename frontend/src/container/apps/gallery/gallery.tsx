import  { Fragment } from "react";
import Pageheader from "../../../components/page-header/pageheader";
import { Gallerylist } from "../../../components/common/data/apps/gallerydata";

const Gallery = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" currentpage="Gallery" activepage="Gallery" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Gallerylist />

            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Gallery;
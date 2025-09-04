import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Availableedit, Brandedit, Categoryedit, Coloredit, Genderedit, Publishedit, Sizeedit, Tagsedit  } from "../../../../components/common/data/apps/ecommerce/editproductsdata";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";
import SpkSunEditor from "../../../../@spk-reusable-components/reusable-plugins/spk-suneditor";
const EditProducts = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);

    const [startDate6, setStartDate6] = useState<any>(new Date());
    const handleDateChange6 = (date: Date | null) => {
        if (date) {
            setStartDate6(date);
        }
    };

    const defaultContent = ` <ul> <li>Care Instructions: Machine Wash</li> <li>Neckline: The pullover is framed with a Crew Neck</li> <li>Fit Type: Regular Fit</li> <li>Long Sleeves: The pullover is designed with Long Sleeves.</li> <li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li> <li>Solid: The pullover is available in solid pattern.</li> </ul>`;
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Edit Products" activepage="Edit Products" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" add-products">
                            <div className="row gx-5">
                                <Col xxl={6} xl={12} lg={12} md={6} className="">
                                    <Card className="custom-card shadow-none mb-0 border-0">
                                        <Card.Body className=" p-0">
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-name-add" className="">Product Name</Form.Label>
                                                    <Form.Control type="text" className="" id="product-name-add" placeholder="Name" defaultValue="Light Blue Sweat Shirt" />
                                                    <Form.Label htmlFor="product-name-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-category-add" className="">Category</Form.Label>
                                                    <SpkSelect searchable name="colors" option={Categoryedit} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Categoryedit[5]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-gender-add" className="">Gender</Form.Label>
                                                    <SpkSelect name="colors" option={Genderedit} mainClass="basic-multi-select" searchable
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" defaultvalue={[Genderedit[1]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-size-add" className="">Size</Form.Label>
                                                    <SpkSelect name="colors" option={Sizeedit} mainClass="basic-multi-select" searchable
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" defaultvalue={[Sizeedit[3]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-brand-add" className="">Brand</Form.Label>
                                                    <SpkSelect name="colors" option={Brandedit} mainClass="basic-multi-select" searchable
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" defaultvalue={[Brandedit[5]]}
                                                    />
                                                </Col>
                                                <Col xl={6} className="color-selection">
                                                    <Form.Label htmlFor="product-color-add" className="">Colors</Form.Label>
                                                    <SpkSelect name="colors" option={Coloredit} mainClass="basic-multi-select" searchable multi
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" defaultvalue={[Coloredit[7]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-cost-add" className="">Enter Cost</Form.Label>
                                                    <Form.Control type="text" className="" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                    <Form.Label htmlFor="product-cost-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Mention final price of the product</Form.Label>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-description-add" className="">Product Description</Form.Label>
                                                    <Form.Control as="textarea" className="" id="product-description-add" rows={2} defaultValue="Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours" />
                                                    <Form.Label htmlFor="product-description-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">Product Features</Form.Label>
                                                    <div id="product-features">
                                                        <SpkSunEditor height={'200px'} setcontent={defaultContent} />
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6} xl={12} lg={12} md={6} className="">
                                    <Card className="custom-card shadow-none mb-0 border-0 mt-3 mt-xxl-0">
                                        <Card.Body className=" p-0">
                                            <div className="row gy-3">
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-actual-price" className="">Actual Price</Form.Label>
                                                    <Form.Control type="text" className="" id="product-actual-price" placeholder="Actual Price" defaultValue="$1,499.90" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-dealer-price" className="">Dealer Price</Form.Label>
                                                    <Form.Control type="text" className="" id="product-dealer-price" placeholder="Dealer Price" defaultValue="$1,299.99" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-discount" className="">Discount</Form.Label>
                                                    <Form.Control type="text" className="" id="product-discount" placeholder="Discount in %" defaultValue="0.75%" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-type" className="">Product Type</Form.Label>
                                                    <Form.Control type="text" className="" id="product-type" placeholder="Type" defaultValue="Watch" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-weight" className="">Item Weight</Form.Label>
                                                    <Form.Control type="text" className="" id="product-weight" placeholder="Weight in gms" defaultValue="180gms" />
                                                </Col>
                                                <Col xl={12} className="product-documents-container">
                                                    <p className="fw-medium mb-2 fs-14">Product Images :</p>
                                                    <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                                </Col>
                                                <Form.Label className=" fw-normal mt-3 text-muted fs-12">*  Minimum of 6 images are need to be uploaded, all images should be uniformly maintained, width and height to the container. </Form.Label>
                                                <Col xl={12} className="product-documents-container">
                                                    <p className="fw-medium mb-2 fs-14">Warrenty Documents :</p>
                                                    <FilePond className="multiple-filepond" files={files1} onupdatefiles={setFiles1} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="publish-date" className="">Publish Date</Form.Label>
                                                    <SpkFlatpickr placeholder="Choose date" inputClass="form-control" value={startDate} onfunChange={handleDateChange} options={{ disableMobile: "true", dateFormat: "Y-m-d" }} />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="publish-time" className="">Publish Time</Form.Label>
                                                    <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" value={startDate6} onfunChange={handleDateChange6} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i' }} />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-status-add" className="">Published Status</Form.Label>
                                                    <SpkSelect name="colors" option={Publishedit} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" defaultvalue={[Publishedit[2]]}
                                                    />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-tags" className="">Product Tags</Form.Label>
                                                    <SpkSelect multi name="colors" option={Tagsedit} defaultvalue={[Tagsedit[0], Tagsedit[3]]}
                                                        mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-availability" className="">Availability</Form.Label>
                                                    <SpkSelect name="colors" option={Availableedit}
                                                        mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top border-block-start-dashed d-sm-flex justify-content-end">
                            <SpkButton Buttonvariant="primary1-light" Customclass="me-2 mb-2 mb-sm-0">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                            <SpkButton Buttonvariant="primary" Customclass="mb-2 mb-sm-0">Save Product<i className="bi bi-download ms-2"></i></SpkButton>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default EditProducts;
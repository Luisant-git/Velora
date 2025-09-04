import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Data1, Data10, Data11, Data12, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9 } from "../../../../components/common/data/apps/jobs/jobpostdata";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";
import { Link } from "react-router-dom";


const JobPost = () => {

    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Post Job" activepage="Post Job" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9} xl={8} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Post New Job
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="job-title" className="">Job Title</Form.Label>
                                    <Form.Control type="text" className="" id="job-title" placeholder="Job Title" defaultValue="UI/UX Developer" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Job Category</Form.Label>
                                    <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Working Experience</Form.Label>
                                    <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Job Type</Form.Label>
                                    <SpkSelect name="colors" option={Data12} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data12[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Priority</Form.Label>
                                    <SpkSelect option={Data3} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                        placeholder="" defaultvalue={[Data3[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Vacancies</Form.Label>
                                    <SpkSelect name="colors" option={Data4} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data4[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Salary</Form.Label>
                                    <SpkSelect option={Data5} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select" placeholder="" defaultvalue={[Data5[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="skills" className="">Skills :</Form.Label>
                                    <SpkSelect multi name="colors" option={Data6} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Data6[0], Data6[1], Data6[2]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="job-deadline" className="">Job Deadline</Form.Label>
                                    <SpkFlatpickr inputClass="form-control" onfunChange={handleDateChange} options={{ dateFormat: "Y-m-d", enableTime: true,}} placeholder="Job Deadline" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Gender Requirement</Form.Label>
                                    <SpkSelect name="colors" option={Data7} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Data7[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="language" className="">Languages :</Form.Label>
                                    <SpkSelect multi name="colors" option={Data8} mainClass="choices__item choices__item--selectable    " classNameprefix="Select2"
                                        defaultvalue={[Data8[0], Data8[3]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="qualification" className="">Qualification :</Form.Label>
                                    <SpkSelect multi name="colors" option={Data9} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Data9[0], Data9[2], Data9[3]]} />
                                </Col>
                                <div className="col-xl-12">
                                    <Form.Label htmlFor="job-description" className="form-label">Job Description :</Form.Label>
                                    <Form.Control as="textarea" className="form-control" id="job-description" rows={4} defaultValue="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet." />

                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-end">
                            <Link to="#!" className="btn btn-primary btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </Link>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Assign To Employer</div>
                        </Card.Header>
                        <Card.Body>
                            <Col xl={12}>
                                <Form.Label className="">Employer Name</Form.Label>
                                <SpkSelect name="colors" option={Data10} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data10[0]]}
                                />
                            </Col>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Company Details</div>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="Company-Name" className="">Company Name</Form.Label>
                                    <Form.Control type="text" id="Company-Name" placeholder="Company Name" defaultValue="Tech Innovators Ltd." />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="Company-Website" className="">Company Website</Form.Label>
                                    <Form.Control type="text" id="Company-Website" placeholder="Company Website" defaultValue="http//www.techinnovatorltd.com" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Country</Form.Label>
                                    <SpkSelect name="colors" option={Data11} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data11[0]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="Company-Address" className="">Address</Form.Label>
                                    <Form.Control type="text" id="Company-Address" placeholder="Company Address" defaultValue="USA" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default JobPost;
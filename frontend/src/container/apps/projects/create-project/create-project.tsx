import  { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import Pageheader from "../../../../components/page-header/pageheader";
import SpkSunEditor from "../../../../@spk-reusable-components/reusable-plugins/spk-suneditor";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";
import SpkSelect from "../../../../@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Multipleselectdata, Multipleselectdata1, multiselectdata } from "../../../../components/common/data/apps/projects/createprojectdata";
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";

const CreateProject = () => {

    const [isSearchable] = useState(true);
    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };

    const components = {
        DropdownIndicator: null,
    };
    const [_startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        if (date) {
            setStartDate1(date);
        }
    };

 

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    const defaultContent = ` <div id="project-descriptioin-editor">
    <p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</p>
    <p><br/></p>
    <ol>
        <li className="ql-size-normal">Ensure data security and compliance with relevant regulations.</li>
        <li className="">Train staff on the enhanced system within two weeks of deployment.</li>
        <li className="">Implement a scalable solution to accommodate future growth.</li>
        <li className="">Decrease the time required for inventory audits by 50%.</li>
        <li className="">Achieve a 10% reduction in excess inventory costs.</li>
    </ol>`;

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Apps" subtitle="Projects" currentpage="Create Project" activepage="Create Project" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Create Project
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label" className="">Project Name :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label" placeholder="Enter Project Name" />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label11" className="">Project Manager :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label11" placeholder="Project Manager Name" />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label1" className="">Client / Stakeholder :</Form.Label>
                                    <Form.Control type="text" className="" id="input-label1" placeholder="Enter Client Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Project Description :</Form.Label>
                                    <SpkSunEditor height={'200px'} defaulContent={defaultContent} />

                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Start Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group datepicker-inputwraper">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="form-control" placeholder="Choose date" onfunChange={handleDateChange} options={{ disableMobile: "true", dateFormat: "Y-m-d", }} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">End Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group datepicker-inputwraper">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="form-control" options={{ dateFormat: "Y-m-d", }} placeholder="Choose date" onfunChange={handleDateChange1} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Status :</Form.Label>
                                    <SpkSelect searchable={isSearchable} name="colors" option={Multipleselectdata1} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Priority :</Form.Label>
                                    <SpkSelect searchable={isSearchable} name="colors" option={Multipleselectdata} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Assigned To</Form.Label>
                                    <SpkSelect multi name="colors" option={multiselectdata} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Tags</Form.Label>
                                    <CreatableSelect
                                        className="tags-data"
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Attachments</Form.Label>
                                    <Form.Control type="file" className="multiple-filepond" name="filepond" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files="6" />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <SpkButton Buttonvariant="primary-light" Customclass="ms-auto float-end">Create Project</SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default CreateProject;
import  { Fragment, useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Pageheader from "../../../../components/page-header/pageheader";
import SpkFlatpickr from "../../../../@spk-reusable-components/reusable-plugins/spk-flatpicker";

const DateTimePicker = () => {

    const [_startDate, setStartDate] = useState<Date | string>(new Date());
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };
    const [_startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        if (date) {
            setStartDate1(date);
        }
    };
    const [_startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date: Date | null) => {
        if (date) {
            setStartDate2(date);
        }
    };
    const [startDate3, setStartDate3] = useState(new Date());
    const handleDateChange3 = (date: Date | null) => {
        if (date) {
            setStartDate3(date);
        }
    };
    const [ startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date: Date | null) => {
        if (date) {
            setStartDate4(date);
        }
    };
    const [_startDate5, setStartDate5] = useState<any>(new Date());
    const handleDateChange5 = (date: Date | null) => {
        if (date) {
            setStartDate5(date);
        }
    };
    const [startDate6, setStartDate6] = useState<any>(new Date());
    const handleDateChange6 = (date: Date | null) => {
        if (date) {
            setStartDate6(date);
        }
    };

    const [startDate7, setStartDate7] = useState(new Date());
    const handleDateChange7 = (date: Date | null) => {
        if (date) {
            setStartDate7(date);
        }
    };

    const [_startDate8, setStartDate8] = useState(new Date());
    const handleDateChange8 = (date: Date | null) => {
        if (date) {
            setStartDate8(date);
        }
    };

    const [_startDate9, setStartDate9] = useState(new Date());
    const handleDateChange9 = (date: Date | null) => {
        if (date) {
            setStartDate9(date);
        }
    };

    const [_startDate10, setStartDate10] = useState(new Date());
    const handleDateChange10 = (date: Date | null) => {
        if (date) {
            setStartDate10(date);
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Date & Time Pickers" activepage="Date & Time Pickers" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Date picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i></InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control" placeholder="Choose date" options={{ dateFormat: "Y-m-d" }} onfunChange={handleDateChange} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date picker With Time
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control" onfunChange={handleDateChange1} placeholder='Choose date with time' dataEnableTime={true} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Human Friendly dates
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control" placeholder="Human friendly dates" onfunChange={handleDateChange2} options={{ dateFormat: "Y-m-d" }} />

                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date range picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control" options={{ mode: 'range', dateFormat: "Y-m-d", }} value={startDate3} onfunChange={handleDateChange3} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Inline Calendar
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group overflow-auto">
                                <SpkFlatpickr inputClass="form-control" onfunChange={handleDateChange4} options={{ inline: 'true', dateFormat: "Y-m-d" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Row>
                        <div className="col-xl-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Date Picker with week numbers
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <SpkFlatpickr placeholder="Choose Date" inputClass=" form-control ti-form-input focus:z-10" onfunChange={handleDateChange5} options={{ weekNumbers: 'true', dateFormat: "Y-m-d" }} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Inline Time Picker
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" value={startDate6} onfunChange={handleDateChange6} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i' }} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Preloading time
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <SpkFlatpickr inputClass="form-control flatpickr-input" value={startDate7} onfunChange={handleDateChange7} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i', defaultDate: "13:45" }} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Time picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" value={startDate4} onfunChange={handleDateChange4} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i' }} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xl-6">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time picker with 24hr Format
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group mb-0">
                                <div className="input-group">
                                    <SpkFlatpickr inputClass="form-control flatpickr-input" placeholder="Choose time in 24hr format" onfunChange={handleDateChange8} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i', time_24hr: true }} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time Picker with Limits
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control flatpickr-input" placeholder="choose time min 16:00 to max 22:30" onfunChange={handleDateChange9} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i', minTime: "16:00", maxTime: "22:30", }} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <SpkFlatpickr inputClass="form-control flatpickr-input" onfunChange={handleDateChange10} options={{  position: "auto" }} placeholder='Choose date with time' dataEnableTime={true} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default DateTimePicker; 
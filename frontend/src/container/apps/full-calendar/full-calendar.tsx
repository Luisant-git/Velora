import  { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import SimpleBar from "simplebar-react";
import listPlugin from "@fullcalendar/list";
import Pageheader from "../../../components/page-header/pageheader";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../@spk-reusable-components/reusable-uielements/spk-badge";

const FullCalender = () => {

  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events",
        id: "1",
        bg: "primary",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: "primary1",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "primary2",
      },
      {
        title: "Office Events",
        id: "4",
        bg: "primary3",
        border: "border-info-transparent"
      },
      {
        title: "Other Events",
        id: "5",
        bg: "secondary",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "danger",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "success",
      },
      {
        title: "Other Events",
        id: "8",
        bg: "info",
      },
    ],
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    const draggableEl: any = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        const title = eventEl.getAttribute("title");
        const id = eventEl.getAttribute("data");
        const classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });
  }, []);

  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = () => { };

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <Pageheader title="Apps" currentpage="Full Calender" activepage="Full Calender" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header className="">
              <div className="card-title">Full Calendar</div>
            </Card.Header>
            <Card.Body className="overflow-scroll">
              <div id='calendar2'>
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <div className="card-title">All Events</div>
              <SpkButton Buttonvariant="primary"><i className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Create New Event</SpkButton>
            </Card.Header>
            <Card.Body className=" p-0">
              <ul id="external-events" className="mb-0 p-3 list-unstyled column-list">
                {state.events.map((event) => (
                  <div
                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${event.bg}-transparent border ${event.border}`}
                    title={event.title}
                    key={event.id}>
                    <div className={`fc-event-main text-${event.bg}`}>{event.title}</div>
                  </div>
                ))}
              </ul>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between pb-1">
              <div className="card-title">
                Activity :
              </div>
              <SpkButton Buttonvariant="primary-light" Size="sm">View All</SpkButton>
            </Card.Header>
            <CardBody className=" p-0 card-body">
              <SimpleBar className="p-3" id="full-calendar-activity">
                <ul className="list-unstyled mb-0 fullcalendar-events-activity">
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-medium">Tuesday, Feb 5, 2024</p>
                      <SpkBadge variant="light" Customclass="text-default mb-1">10:00AM - 11:00AM</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted fs-12">Discussion with team on project updates.</p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-medium">Monday, Jan 2, 2023</p>
                      <SpkBadge variant="success" Customclass="mb-1">Completed</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted fs-12">Review and finalize budget proposal.</p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-medium">Thursday, Mar 8, 2024</p>
                      <SpkBadge variant="warning-transparent" Customclass="mb-1">Reminder</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted fs-12">Prepare presentation slides for client meeting.</p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-medium">Friday, Apr 12, 2024</p>
                      <SpkBadge variant="light" Customclass="text-default mb-1">2:00PM - 4:00PM</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted fs-12">Training session on new software tools.</p>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p className="mb-1 fw-medium">Saturday, Mar 16, 2024</p>
                      <SpkBadge variant="danger-transparent" Customclass="mb-1">Due Date</SpkBadge>
                    </div>
                    <p className="mb-0 text-muted fs-12">Submit quarterly report to management.</p>
                  </li>
                </ul>
              </SimpleBar>

            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}
    </Fragment>
  )
}
// };

export default FullCalender;
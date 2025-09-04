let eventGuid = 0;
// const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
    },

    {
        id: createEventId(),
        title: 'Memorial day',
        start: getDate1("YEAR-MONTH-18"),
        end: getDate1("YEAR-MONTH-18")
    },
    {
        id: createEventId(),
        title: 'Birthday celebrations',
        start: getDate2("YEAR-MONTH-01"),
        end: getDate2("YEAR-MONTH-03")
    },
    {
        id: createEventId(),
        title: 'Music festival',
        start: getDate3("YEAR-MONTH-04"),
        end: getDate3("YEAR-MONTH-07")
    },
    {
        id: createEventId(),
        title: 'Rocho Party',
        start: getDate4("YEAR-MONTH-15T10:30:00+00:00"),
        end: getDate4("YEAR-MONTH-17T10:30:00+00:00")
    },
    {
        id: createEventId(),
        title: 'My rest day',
        start: getDate6("YEAR-MONTH-07"),
        end: getDate6("YEAR-MONTH-09")
    },
    {
        id: createEventId(),
        title: 'Festival day',
        start: getDate7("YEAR-MONTH-05"),
        end: getDate7("YEAR-MONTH-08")
    },
    {
        id: createEventId(),
        title: 'RC Birthday',
        start: getDate8("YEAR-MONTH-13"),
        end: getDate8("YEAR-MONTH-13")
    },
    {
        id: createEventId(),
        title: 'Spruko Birthday',
        start: getDate9("YEAR-MONTH-20"),
        end: getDate9("YEAR-MONTH-22")
    },
    {
        id: createEventId(),
        title: 'Diwali',
        start: getDate10("YEAR-MONTH-25"),
        end: getDate10("YEAR-MONTH-25")
    },
    {
        id: createEventId(),
        title: 'My rest day',
        start: getDate11("YEAR-MONTH-29"),
        end: getDate11("YEAR-MONTH-31")
    },
];
export function createEventId() {
    return String(eventGuid++);
}
function getDate1(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

function getDate2(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
function getDate3(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
function getDate4(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

function getDate6(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
function getDate7(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
function getDate8(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}
function getDate9(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

function getDate10(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

function getDate11(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
        month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

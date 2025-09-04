
"use client"
import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
        return <AfterComplete />;
    } else {
        return (
            <div className="d-flex gap-3 flex-wrap mt-4 mb-0 gy-xxl-0 gy-3 justify-content-center">
                <div>
                    <div className="">
                        <h6 className="mb-1 fw-medium">Days</h6>
                        <h3 className="mb-0 avatar d-block bg-primary-transparent avatar-rounded avatar-xl mt-2 backdrop-blur">{days}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1 fw-medium">Hours</h6>
                        <h3 className="mb-0 avatar d-block bg-primary1-transparent avatar-rounded avatar-xl mt-2 backdrop-blur">{hours}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1 fw-medium">Minutes</h6>
                        <h3 className="mb-0 avatar d-block bg-primary2-transparent avatar-rounded avatar-xl mt-2 backdrop-blur">{minutes}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1 fw-medium">Seconds</h6>
                        <h3 className="mb-0 avatar d-block bg-primary3-transparent avatar-rounded avatar-xl mt-2 backdrop-blur">{seconds}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}


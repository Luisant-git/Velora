import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import face8 from "../../../../assets/images/faces/8.jpg"
import face9 from "../../../../assets/images/faces/9.jpg"
import face6 from "../../../../assets/images/faces/6.jpg"
import face14 from "../../../../assets/images/faces/14.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"

const testimonials = [
    {
        name: "Elsa Teresa",
        email: "elsateresa@gmail.com",
        image: face8,
        rating: 4.3
    },
    {
        name: "Henry Milo",
        email: "henrymilo@gmail.com",
        image: face9,
        rating: 4.3
    },
    {
        name: "Katherin Oslo",
        email: "katherin12@gmail.com",
        image: face6,
        rating: 4.3
    },
    {
        name: "Jestin Calm",
        email: "jestin9@gmail.com",
        image: face14,
        rating: 4.3
    },
    {
        name: "Harin Ford",
        email: "harinford345@gmail.com",
        image: face13,
        rating: 4.3
    },
    {
        name: "Phillip John",
        email: "phillipjohn21@gmail.com",
        image: face11,
        quote: "Customer service at this company is outstanding. They were quick to respond to my inquiry and resolved my issue within hours.",
        rating: 4.3
    }
];

export const Landingtestimonials = testimonials.map((testimonial, index) => (
    <div key={index}>
        <Card className="custom-card overflow-hidden">
            <Card.Body>
                <div>
                    <span>
                        <sup>
                            <i className="bi bi-quote fs-1 me-1 text-fixed-white"></i>
                        </sup>
                        Customer service at this company is outstanding. They were quick to respond to my inquiry and resolved my issue within hours.--
                        <Link
                            to="#!"
                            className="fw-semibold fs-11 text-fixed-white"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="tooltip-dark"
                            data-bs-placement="top"
                            data-bs-title={testimonial.quote}
                        >
                            Read More
                        </Link>
                    </span>
                </div>
                <div className="d-flex align-items-center text-end justify-content-end">
                    <div className="text-warning d-block me-1 fs-10">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                        ))}
                        {testimonial.rating % 1 !== 0 && <i className="ri-star-half-line"></i>}
                    </div>
                    <span>{testimonial.rating}</span>
                </div>
            </Card.Body>
            <div className="p-3 bg-white-transparent">
                <div className="d-flex align-items-center">
                    <span className="avatar rounded-circle me-2">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="img-fluid rounded-circle border border-primary1 shadow-sm border-2"
                        />
                    </span>
                    <div>
                        <p className="mb-0 fw-semibold text-fixed-white">{testimonial.name}</p>
                        <p className="mb-0 fs-11 fw-normal op-8 text-fixed-white">{testimonial.email}</p>
                    </div>
                    <div className="ms-auto fs-12 fw-semibold op-8 text-end">
                        <div className="btn btn-sm btn-icon rounded-circle btn-white me-1">
                            <i className="ri-twitter-x-line"></i>
                        </div>
                        <div className="btn btn-sm btn-icon rounded-circle btn-primary1 me-1">
                            <i className="ri-share-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
))


//Accordions
export const Landingaccordion = [
    {
        id: '1',
        title: "Where can I subscribe to your newsletter?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '2',
        title: "Where can in edit my address?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '3',
        title: "What are your opening hours?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '4',
        title: " Do I have the right to return an item?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '5',
        title: "General Terms & Conditions (GTC)",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '6',
        title: " Do I need to create an account to make an order?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
];
export const Landingaccordion1 = [
    {
        id: '1',
        title: "General Terms & Conditions (GTC)",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '2',
        title: "Do I need to create an account to make an order?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '3',
        title: "Where can I subscribe to your newsletter?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '4',
        title: "Where can in edit my address?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '5',
        title: "What are your opening hours?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
    {
        id: '6',
        title: "Do I have the right to return an item?",
        content: (
            <>
                <strong>This is the first item's accordion body.</strong>
                {" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "}
                <code>.accordion-body</code>
                {" though the transition does limit overflow."}
            </>
        ),
    },
];

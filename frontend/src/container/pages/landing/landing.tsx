import  { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {  Card, Col, Row } from 'react-bootstrap';
import store from '../../../components/common/ui/redux/store';
import { Link } from 'react-router-dom';
import SpkButton from '../../../@spk-reusable-components/reusable-uielements/spk-button';
import Spkimagecapcards from '../../../@spk-reusable-components/reusable-uielements/cards/spkimagecapcards';
import { servicecards } from '../../../components/common/data/pages/landingdata';
import SpkTeamcards from '../../../@spk-reusable-components/reusable-pages/spk-teamcards';
import SpkBadge from '../../../@spk-reusable-components/reusable-uielements/spk-badge';
import { pricingsdata } from '../../../components/common/data/pages/pricingdata';
import SpkPricingcards from '../../../@spk-reusable-components/reusable-pages/spk-pricingcards';
import SpkAccordions from '../../../@spk-reusable-components/reusable-advancedui/spk-accordions';
import { Landingaccordion, Landingtestimonials, Landingaccordion1  } from '../../../components/common/data/landing/landingdata';
import SpkSwiperJs from '../../../@spk-reusable-components/reusable-plugins/spk-swiperjs';
import { ThemeChanger } from '../../../components/common/ui/redux/action';
import web1 from "../../../assets/images/media/landing/web/1.png"
import web2 from "../../../assets/images/media/landing/web/2.png"
import web4 from "../../../assets/images/media/landing/web/4.png"
import web5 from "../../../assets/images/media/landing/web/5.png"
import web6 from "../../../assets/images/media/landing/web/6.png"
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png"
import desktopwhite from "../../../assets/images/brand-logos/desktop-white.png"
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png"
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png"
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png"
import landing1 from "../../../assets/images/media/landing/1.png"
import landing2 from "../../../assets/images/media/landing/2.png"
import face1 from "../../../assets/images/faces/1.jpg"
import face8 from "../../../assets/images/faces/8.jpg"
import face11 from "../../../assets/images/faces/11.jpg"
import face4 from "../../../assets/images/faces/4.jpg"
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Landing = ({  ThemeChanger }: any) => {

    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" });

        }
    }
    useEffect(() => {

        const theme = store.getState();
        ThemeChanger({

            ...theme,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal",
            "dataMenuStyles": "",
            "dataWidth": '',
            "dataVerticalStyle": "",
            "body":"landing-body"

        });

        return () => {
            ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataVerticalStyle": "",
                "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`,
                 "body":""
            });
        };
    }, []);
    // 
    useEffect(() => {
        function handleResize() {

            if (window.innerWidth <= 992) {
                const theme = store.getState();
                ThemeChanger({ ...theme, "toggled": "close", "dataNavLayout": "horizontal" });
            } else {
                const theme = store.getState();
                ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" });
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        // handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const rootDiv = document.getElementById("root");
        if (rootDiv) {
        }
        return () => {
            if (rootDiv) {

                rootDiv.className = ""; // Remove the className when component unmounts
            }
        };
    }, []);

    useEffect(() => {
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", landingpages);
        }
    });

    function handleClick1() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close", "dataNavLayout": "horizontal" });
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
        }
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute("href");
        const location = document.getElementById(target.substring(1))?.offsetTop;
        if (location !== undefined) {
            window.scrollTo({
                left: 0,
                top: location - 64,
                behavior: "smooth",
            });
        }
    };


    useEffect(() => {
        const pageLinks = document.querySelectorAll(".side-menu__item");
        pageLinks.forEach((elem) => {
            elem.addEventListener("click", handleClick);
        });

        return () => {
            // Clean up event listeners when the component unmounts
            pageLinks.forEach((elem) => {
                elem.removeEventListener("click", handleClick);
            });
        };
    }, []);

    //// Template Highlights collapse

    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    function menuClose() {
        const theme = store.getState();
        if (window.innerWidth <= 992) {
            ThemeChanger({ ...theme, toggled: "close" });
        }
        const overlayElement = document.querySelector("#responsive-overlay") as HTMLElement | null;
        if (overlayElement) {
            overlayElement.classList.remove("active");
        }
    }

    const Switchericon = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        const Rightside: any = document.querySelector(".offcanvas-end");
        Rightside.style.insetInlineEnd = "0px";
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    }

    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <body className="landing-body"></body>
                </Helmet>
            </HelmetProvider>
            {/* <!-- app-header --> */}
            <header className="app-header">

                {/* <!-- Start::main-header-container --> */}
                <div className="main-header-container container-fluid">

                    {/* <!-- Start::header-content-left --> */}
                    <div className="header-content-left">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="header-logo">
                                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                                    <img src={toggledark} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            {/* <!-- Start::header-link --> */}
                            <Link to="#!" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleNavigation()}>
                                <span className="open-toggle">
                                    <i className="ri-menu-3-line fs-20"></i>
                                </span>
                            </Link>
                            {/* <!-- End::header-link --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-left --> */}

                    {/* <!-- Start::header-content-right --> */}
                    <div className="header-content-right">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element align-items-center">
                            {/* <!-- Start::header-link|switcher-icon --> */}
                            <div className="btn-list d-lg-none d-flex">
                                <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="btn btn-primary1-light">
                                    Sign Up
                                </Link>
                                <SpkButton Buttonvariant='primary' Customclass="btn-icon switcher-icon d-flex align-items-center justify-content-center" onClickfunc={() => Switchericon()} data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas">
                                    <i className="ri-settings-3-line"></i>
                                </SpkButton>
                            </div>
                            {/* <!-- End::header-link|switcher-icon --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-right --> */}

                </div>
                {/* <!-- End::main-header-container --> */}

            </header>
            {/* <!-- /app-header --> */}

            {/* <!-- Start::app-sidebar --> */}
            <div id="responsive-overlay" onClick={() => menuClose()}></div>
            <aside className="app-sidebar sticky" id="sidebar">

                <div className="container-xl">
                    {/* <!-- Start::main-sidebar --> */}
                    <div className="main-sidebar shadow-none">

                        {/* <!-- Start::nav --> */}
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="header-logo">
                                        <img src={desktoplogo} alt="logo"
                                            className="desktop-logo" />
                                        <img src={desktopwhite} alt="logo"
                                            className="desktop-white" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                            <ul className="main-menu">
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <a className="side-menu__item" href="#home">
                                        <span className="side-menu__label">Home</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#about" className="side-menu__item">
                                        <span className="side-menu__label">About</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#team" className="side-menu__item">
                                        <span className="side-menu__label">Team</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#pricing" className="side-menu__item">
                                        <span className="side-menu__label">Pricing</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#faqs" className="side-menu__item">
                                        <span className="side-menu__label">FAQ's</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#testimonials" className="side-menu__item">
                                        <span className="side-menu__label">Testimonials</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide -->
                            <!-- Start::slide --> */}
                                <li className="slide">
                                    <a href="#contact" className="side-menu__item">
                                        <span className="side-menu__label">Contact Us</span>
                                    </a>
                                </li>
                                {/* <!-- End::slide --> */}

                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                            <div className="d-lg-flex d-none">
                                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                    <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="btn btn-wave btn-primary1">
                                        Sign Up
                                    </Link>
                                    <SpkButton Buttonvariant='primary' Customclass="btn-icon switcher-icon d-flex align-items-center justify-content-center" onClickfunc={() => Switchericon()} Buttontoggle="offcanvas"
                                        Buttontarget="#switcher-canvas">
                                        <i className="ri-settings-3-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End::nav --> */}

                    </div>
                    {/* <!-- End::main-sidebar --> */}
                </div>

            </aside>
            {/* <!-- End::app-sidebar --> */}

            {/* <!-- Start::app-content --> */}
            <div className="main-content landing-main px-0" onClick={handleClick1}>

                {/* <!-- Start:: Section-1 --> */}
                <div className="landing-banner" id="home">
                    <section className="section overflow-hidden">
                        <div className="container main-banner-container pb-lg-0">
                            <Row className="pt-3">
                                <Col xxl={7} xl={7} lg={7} md={8}>
                                    <div className="pt-lg-5 pb-4">
                                        <div className="mb-3">
                                            <h6 className="fw-medium text-fixed-white op-9">Optimized and Accessible</h6>
                                        </div>
                                        <p className="landing-banner-heading mb-3 text-fixed-white">Refined Design, Elevated User Experience:
                                            Explore <span className="fw-semibold text-warning">Xintra</span> Template.</p>
                                        <div className="fs-16 mb-5 text-fixed-white op-7">An intuitive admin template designed for efficiency, featuring a clean and modern interface that simplifies management tasks and enhances productivity.
                                        </div>
                                        <Link to={`${import.meta.env.BASE_URL}dashboard/sales`} className="m-1 btn btn-lg bg-white-transparent">
                                            View Demos
                                            <i className="ri-eye-line ms-2 align-middle"></i>
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}dashboard/sales`}
                                            className="m-1 btn btn-lg btn-primary1 btn-wave waves-effect waves-light">
                                            Discover More
                                            <i className="ri-arrow-right-line ms-2 align-middle"></i>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={4} className="my-auto">
                                    <div className="text-end landing-main-image landing-heading-img">
                                        <img src={landing1} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
                {/* <!-- End:: Section-1 --> */}

                {/* <!-- Start:: Section-2 --> */}
                <section className="section" id="about">
                    <div className="container position-relative">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading text-primary">GLANCE</span>
                            </p>
                            <h4 className="fw-semibold mb-1 mt-3">Why you choose us ?</h4>
                            <div className="row justify-content-center">
                                <div className="col-xl-7">
                                    <p className="text-muted fs-14 mb-5 fw-normal">Our mission is to support you in achieving
                                        your goals.</p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col xl={4}>
                                <Spkimagecapcards Customclass="landing-card border shadow-none text-center" Custombodyclass="">
                                    <div className="mb-4">
                                        <span className="avatar avatar-lg bg-primary-transparent svg-primary avatar-rounded border-3 border border-opacity-50 border-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path></svg>
                                        </span>
                                    </div>
                                    <h6 className="fw-semibold">Responsive and Accessible</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elitipsum dolor sit, amet consectetur</p>
                                    <Link to="#!" className="fw-medium btn btn-sm btn-primary">Read More<i
                                        className="ti ti-arrow-narrow-right ms-2 fs-16 align-bottom d-inline-block"></i></Link>
                                </Spkimagecapcards>
                            </Col>
                            <Col xl={4}>
                                <Spkimagecapcards Customclass="landing-card border shadow-none text-center" Custombodyclass="">
                                    <div className="mb-4">
                                        <span className="avatar avatar-lg bg-primary1-transparent svg-primary1 avatar-rounded border-3 border border-opacity-50 border-primary1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>
                                        </span>
                                    </div>
                                    <h6 className="fw-semibold">Continuous Updates and Support</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elitipsum dolor sit, amet consectetur</p>
                                    <Link to="#!" className="fw-medium btn btn-sm btn-primary">Read More<i
                                        className="ti ti-arrow-narrow-right ms-2 fs-16 align-bottom d-inline-block"></i></Link>
                                </Spkimagecapcards>
                            </Col>
                            <Col xl={4}>
                                <Spkimagecapcards Customclass="landing-card border shadow-none text-center" Custombodyclass="">
                                    <div className="mb-4">
                                        <span className="avatar avatar-lg bg-primary2-transparent svg-primary2 avatar-rounded border-3 border border-opacity-50 border-primary2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path></svg>
                                        </span>
                                    </div>
                                    <h6 className="fw-semibold">Design and Customization</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elitipsum dolor sit, amet consectetur</p>
                                    <Link to="#!" className="fw-medium btn btn-sm btn-primary">Read More<i
                                        className="ti ti-arrow-narrow-right ms-2 fs-16 align-bottom d-inline-block"></i></Link>
                                </Spkimagecapcards>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-2 --> */}

                {/* <!-- Start:: Section-3 --> */}
                <section className="section section-bg" id="expectations">
                    <div className="container">
                        <div className="row gx-5 mx-0">
                            <Col xl={5}>
                                <div className="home-proving-image">
                                    <img src={landing2} alt="" className="img-fluid] about-image d-none d-xl-block" />

                                </div>
                                <div className="proving-pattern-1"></div>
                            </Col>
                            <Col xl={7} className="my-auto">
                                <div className="heading-section text-start mb-4">
                                    <p className="fs-12 fw-medium text-start text-success mb-1"><span
                                        className="landing-section-heading text-primary">ABOUT US</span>
                                    </p>
                                    <h4 className="mt-3 fw-semibold mb-2">Our Commitment!</h4>
                                    <div className="heading-description fs-14">Welcome to Xintra,  our commitment is more than a statement; it's the cornerstone of everything we do.We are dedicated to design, ensuring that every interaction, project, and outcome reflects.</div>
                                </div>
                                <div className="row gy-3 mb-0">
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primary d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    <strong>Years of Experience and Reputation:</strong> We bring 4+ years of experience, backed by a solid reputation for excellence.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primary1 d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    <strong>Professional Team:</strong> Our team consists of experienced and professional individuals dedicated to delivering top-notch service.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primary2 d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    <strong>Client-Centric Approach:</strong> We understand that every client is unique, so we tailor our services to meet your specific needs and preferences.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primary3 d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    <strong>24/7 Support:</strong> We provide round-the-clock support, 365 days a year, ensuring that assistance is always available when you need it most.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>

                {/* <!-- End:: Section-3 --> */}

                {/* <!-- Start:: Section-4 --> */}
                <section className="section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">SERVICES</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">What You Get</h4>
                            <div className="row justify-content-center">
                                <div className="col-xl-7">
                                    <p className="text-muted fs-14 mb-5 fw-normal">Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur</p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            {servicecards.map((idx) => (
                                <Col xl={3} key={Math.random()}>
                                    <Spkimagecapcards Customclass="landing-card" Custombodyclass="text-center">
                                        <div className="mb-4">
                                            <div className="p-2 border d-inline-block border-primary border-opacity-10 bg-primary-transparent rounded-pill">
                                                <span className={`avatar avatar-lg avatar-rounded bg-${idx.bgColor} svg-white`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>
                                                </span>
                                            </div>
                                        </div>
                                        <h6 className="fw-semibold">{idx.title}</h6>
                                        <p className="text-muted mb-0">{idx.description}</p>
                                    </Spkimagecapcards>
                                </Col>
                            ))}
                            
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-4 --> */}

                {/* <!-- Start:: Section-5 --> */}
                <section className="section landing-Features" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Col xl={8}>
                                <div className="heading-section text-center mb-0">
                                    <p className="fs-12 fw-medium text-success mb-1"><span
                                        className="landing-section-heading landing-section-heading-dark text-fixed-white">FEATURES</span>
                                    </p>
                                    <h4 className="text-fixed-white text-center mt-3 fw-medium">Our Features</h4>
                                    <div className="fs-14 text-fixed-white text-center op-8 mb-4">Ullamco ea commodo.Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.perspiciatis unde omnis.</div>
                                </div>
                            </Col>
                            <Col xl={10} className="my-auto">
                                <div
                                    className="d-flex align-items-center justify-content-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-4">
                                    <div className="trust-img"><img src={web1} alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src={web2} alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src={web4} alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src={web5} alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src={web6} alt="img"
                                        className="border-0 shadow-sm" /></div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-5 --> */}

                {/* <!-- Start:: Section-6 --> */}
                <section className="section" id="team">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">OUR TEAM</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">The people who make our organization Successful</h4>
                            <div className="row justify-content-center">
                                <div className="col-xl-7">
                                    <p className="text-muted fs-14 mb-5 fw-normal">Our team is made up of real people who are
                                        passionate about what they do.</p>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                                <SpkTeamcards Navigate="#!" Role="Director" Title="Hadley Kylin" Imgsrc={face1} Color="primary" CustomBodyclass="p-4" Imageclass="mb-4" Iconclass="mt-4" />
                            </Col>
                            <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                                <SpkTeamcards Navigate="#!" Role="Board Director" Title="Owen Foster" Imgsrc={face8} Color="primary1" CustomBodyclass="p-4" Imageclass="mb-4" Iconclass="mt-4" />
                            </Col>
                            <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                                <SpkTeamcards Navigate="#!" Role="Creative Director" Title="Stephen Roy" Imgsrc={face11} Color="primary2" CustomBodyclass="p-4" Imageclass="mb-4" Iconclass="mt-4" />
                            </Col>
                            <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                                <SpkTeamcards Navigate="#!" Role="Board Director" Title="Jasmine Della" Imgsrc={face4} Color="primary3" CustomBodyclass="p-4" Imageclass="mb-4" Iconclass="mt-4" />
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-6 --> */}

                {/* <!-- Start:: Section-7 --> */}
                <section className="section section-bg" id="pricing">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">PRICING</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">Plans that flex with your needs.</h4>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-14 mb-5 fw-normal">Stay agile with plans that seamlessly adjust to your changing requirements, ensuring you always have the flexibility you need.</p>
                                </Col>
                            </div>
                        </div>
                        <Row>
                            <Col xl={12} id="convertable-pricing">
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="switcher-box">
                                        <span className="pricing-time-span">Monthly</span>
                                        <div className="switcher-pricing text-center">
                                            <input type="checkbox" className="pricing-toggle" checked={!isMonthly}
                                                onChange={handleToggle} />
                                        </div>
                                        <span className="pricing-time-span">Annually <SpkBadge variant='primary2'>20% off</SpkBadge></span>
                                    </div>
                                </div>
                                <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                                    <div className="row d-flex align-items-center justify-content-center mb-5">
                                        {pricingsdata.map((idx) => (
                                            <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={Math.random()}>
                                                <SpkPricingcards card={idx} planType="monthly" landing={true} />
                                            </Col>
                                        ))}
                                    </div>
                                </div>
                                <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                                    <div className="row d-flex align-items-center justify-content-center mb-5">
                                        {pricingsdata.map((idx) => (
                                            <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={Math.random()}>
                                                <SpkPricingcards card={idx} landing={true} />
                                            </Col>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-7 --> */}

                {/* <!-- Start:: Section-8 --> */}
                <section className="section" id="faqs">
                    <div className="container text-center">
                        <p className="fs-12 fw-medium text-success mb-1"><span
                            className="landing-section-heading text-primary">F.A.Q 's</span>
                        </p>
                        <h4 className="fw-semibold mt-3 mb-2">Frequently asked questions ?</h4>
                        <div className="row justify-content-center">
                            <div className="col-xl-7">
                                <p className="text-muted fs-14 mb-5 fw-normal">We have shared some of the most frequently asked
                                    questions to help you out.</p>
                            </div>
                        </div>
                        <div className="row text-start">
                            <Col xl={12}>
                                <div className="row gy-2">
                                    <div className="col-xl-6">
                                        <SpkAccordions items={Landingaccordion} defaultActiveKey='1' accordionClass='accordion-customicon1 accordion-primary accordions-items-seperate' />
                                    </div>
                                    <div className="col-xl-6">
                                        <SpkAccordions items={Landingaccordion1} defaultActiveKey='6' accordionClass='accordion-customicon1 accordion-primary accordions-items-seperate' />

                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-8 --> */}

                {/* <!-- Start:: Section-9 --> */}
                <section className="section landing-Features py-4" id="testimonials">
                    <div className="container reviews-container">
                        <div className="row justify-content-center pb-3">
                            <div className="col-xl-10">
                                <div className="text-center mb-0 mt-4 heading-section">
                                    <p className="fs-12 fw-medium text-success mb-1"><span
                                        className="landing-section-heading landing-section-heading-dark text-fixed-white">TESTIMONALS</span>
                                    </p>
                                    <h4 className="mt-3 text-fixed-white mb-1">Discover What People Are Saying About Us</h4>
                                    <div className="fs-14 text-fixed-white mb-4 op-8"> Customer reviews, social media and testimonials to discover how is our products or services.</div>
                                </div>
                            </div>
                            <div className="col-xl-10">
                                <SpkSwiperJs className="mySwiper pagination-dynamic testimonialSwiperService" slides={Landingtestimonials} spaceBetween={30} centeredSlides={false} breakpoint={breakpoints}
                                    slidesPerView={3}
                                    autoplay={true} pagination={true} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-9 --> */}

                {/* <!-- Start:: Section-10 --> */}
                <section className="section" id="contact">
                    <div className="container text-center">
                        <p className="fs-12 fw-medium text-success mb-1"><span
                            className="landing-section-heading text-primary">CONTACT US</span>
                        </p>
                        <h4 className="fw-semibold mt-3 mb-2">Need Help? Find Your Answers Here!</h4>
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <p className="text-muted fs-14 mb-5 fw-normal"> Explore Our Comprehensive Support Resources! Get answers to your queries and find solutions.</p>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <Card className="custom-card contactus-form contactus-form-left overflow-hidden">
                                <Card.Body className="text-start px-xl-5 px-4 py-5">
                                    <div className="row pt-0">
                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div className="mb-3">
                                                <i className="ri-map-pin-fill me-2 text-primary"></i> D.No: 1352/A-12, Street, Hyderabad.
                                            </div>
                                            <div className="mb-3">
                                                <i className="ri-phone-fill text-primary"></i> +122 1234 32422
                                            </div>
                                            <div className="mb-4">
                                                <i className="ri-mail-fill text-primary"></i> carolinahanna424@example.com
                                            </div><iframe height="190" width="100%" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"></iframe>
                                        </div>
                                        <div className="col-xxl-8 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div className="row gy-3 text-start">
                                                <Col xl={12}>
                                                    <label className="form-label" htmlFor="contact-address-firstname">First Name :</label> <input className="form-control bg-light" id="contact-address-firstname" placeholder="Enter Name" type="text" />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label" htmlFor="contact-address-email">Email Id :</label> <input className="form-control bg-light" id="contact-address-email" placeholder="Enter Email Id" type="email" />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label" htmlFor="contact-mail-message">Message :</label>
                                                    <textarea className="form-control bg-light" id="contact-mail-message" rows={2}></textarea>
                                                </Col>
                                            </div>
                                            <div className=" mt-4">
                                                <SpkButton Buttonvariant='primary' Customclass="btn-w-lg waves-effect waves-light">Send Message</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </div>
                </section>
                {/* <!-- End:: Section-10 --> */}

                {/* <!-- Start:: Section-11 --> */}
                <section className="section landing-footer text-fixed-white">
                    <div className="container">
                        <Row>
                            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-3">
                                <div className="px-4">
                                    <p className="fw-medium mb-3"><Link  to={`${import.meta.env.BASE_URL}dashboard/sales`}><img
                                        src={desktopdark} alt="" className="landing-footer-logo" /></Link></p>
                                    <p className="mb-2 op-6 fw-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et magnam,
                                        fuga est mollitia eius, quo illum illo inventore optio aut quas omnis rem. Dolores
                                        accusantium aspernatur minus ea incidunt.
                                    </p>
                                    <p className="mb-0 op-6 fw-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Autem ea esse ad</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium mb-3 text-fixed-white">PAGES</h6>
                                    <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Email</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Timeline</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Portfolio</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6 col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium text-fixed-white">INFO</h6>
                                    <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Contact US</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">About</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium text-fixed-white">CONTACT</h6>
                                    <ul className="list-unstyled fw-normal landing-footer-list">
                                        <li>
                                            <Link  to="#!" className="text-fixed-white op-6"><i
                                                className="ri-home-4-line me-1 align-middle"></i> New York, NY 10012, US</Link>
                                        </li>
                                        <li>
                                            <Link  to="#!" className="text-fixed-white op-6"><i
                                                className="ri-mail-line me-1 align-middle"></i> info@fmail.com</Link>
                                        </li>
                                        <li>
                                            <Link  to="#!" className="text-fixed-white op-6"><i
                                                className="ri-phone-line me-1 align-middle"></i> +(555)-1920 1831</Link>
                                        </li>
                                        <li>
                                            <Link  to="#!" className="text-fixed-white op-6"><i
                                                className="ri-printer-line me-1 align-middle"></i> +(123) 1293 123</Link>
                                        </li>
                                        <li className="mt-3">
                                            <p className="mb-2 fw-medium op-8">FOLLOW US ON :</p>
                                            <div className="mb-0">
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant='primary-light' Size='sm'
                                                        Customclass="btn-ico waves-effect waves-light">
                                                        <i className="ri-facebook-line fw-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant='primary1-light' Size='sm'
                                                        Customclass="btn-icon waves-effect waves-light">
                                                        <i className="ri-twitter-x-line fw-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant='primary2-light' Size='sm'
                                                        Customclass="btn-iconwaves-effect waves-light">
                                                        <i className="ri-instagram-line fw-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant='primary3-light' Size='sm'
                                                        Customclass="btn-icon waves-effect waves-light">
                                                        <i className="ri-github-line fw-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant='info-light' Size='sm'
                                                        Customclass="btn-icon waves-effect waves-light">
                                                        <i className="ri-youtube-line fw-bold"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-11 --> */}

                <div className="text-center landing-main-footer py-3">
                    <span className="text-muted fs-15"> Copyright © <span id="year"> 2024 </span> <Link  to="#!"
                        className="text-primary fw-medium"><u>Xintra</u></Link>.
                        Designed with <span className="fa fa-heart text-danger"></span> by <Link  to="#!"
                            className="text-primary fw-medium"><u>
                                Spruko</u>
                        </Link> All
                        rights
                        reserved
                    </span>
                </div>

            </div>
            {/* <!-- End::app-content --> */}

        </Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing)
import React, {useState} from "react";
// reactstrap components
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, UncontrolledTooltip,} from "reactstrap";

import logo from "assets/img/logo-plain-big-white.png"

function LandingPageNavbar() {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    const [iconColor, setIconColor] = useState("primary");
    const [navbarLogoVisible, setNavbarLogoVisible] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
                setNavbarLogoVisible(true);
                setIconColor("white");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
                setNavbarLogoVisible(false);
                setIconColor("primary");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
                <Container className="navbar-container">
                    <NavbarBrand href="/" className={navbarLogoVisible ? "logo-middle" : "logo-middle opacity-0"}>
                        <img src={logo} alt="Logo" style={{height: "30px"}}/>
                    </NavbarBrand>
                    <div className="navbar-translate">
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            {/*<NavItem>*/}
                            {/*  <NavLink*/}
                            {/*    href=""*/}
                            {/*    target="_blank"*/}
                            {/*    id="facebook-tooltip">*/}
                            {/*    <i className={"fab fa-facebook-square " + iconColor}></i>*/}
                            {/*    <p className="d-lg-none d-xl-none">Facebook</p>*/}
                            {/*  </NavLink>*/}
                            {/*  <UncontrolledTooltip target="#facebook-tooltip">*/}
                            {/*    Like us on Facebook*/}
                            {/*  </UncontrolledTooltip>*/}
                            {/*</NavItem>*/}
                            <NavItem>
                                <NavLink
                                    href="https://www.instagram.com/jroeder_woodworks/"
                                    target="_blank"
                                    id="instagram-tooltip"
                                    aria-label="Visit our instagram page to get to know us better"
                                >
                                    <i className={"fab fa-instagram " + iconColor}></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default LandingPageNavbar;

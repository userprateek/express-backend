import React, { useState } from "react";
import { Link } from "react-router-dom";
import AvtarImage from "../assets/img/prateek-avtar.jpg";

function Navbar() {
    const [location, setLocation] = useState(window.location.pathname);
    const [navshow, setNavshow] = useState(false);
    const togglenav = () => {
        setNavshow(!navshow);
    };
    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner">
                <div className="profile">
                    <div className="person-image">
                        <img className="avtar" src={AvtarImage} alt="profile" />
                    </div>
                    <div className="person-content">
                        <h1 className="person-title">Prateek Kumar</h1>
                        <h2 className="person-subtitle">Front-End Developer</h2>
                    </div>
                </div>
                <nav
                    className={`block main-navigation ${
                        navshow ? "extended" : ""
                    }`}
                >
                    <div className="compactnav">
                        <div className="social">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/userprateek"
                                className="button button-icon"
                                title="linkedin: userprateek"
                            >
                                <i className="fa fa-linkedin-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/userprateek"
                                className="button button-icon"
                                title="github: userprateek"
                            >
                                <i className="fa fa-github-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://facebook.com/userprateek"
                                className="button button-icon"
                                title="facebook: userprateek"
                            >
                                <i className="fa fa-facebook-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/userprateek"
                                className="button button-icon"
                                title="twitter: @userprateek"
                            >
                                <i className="fa fa-twitter-square"></i>
                            </a>
                        </div>
                        <a href="#" className="burger-menu" onClick={togglenav}>
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="navigation-extendable">
                        <ul>
                            <li
                                className={`home ${
                                    location === "/" ? "current" : ""
                                }`}
                            >
                                <Link
                                    to="/"
                                    className="navbar-brand"
                                    onClick={() =>
                                        setLocation(window.location.pathname)
                                    }
                                >
                                    HOME
                                </Link>
                            </li>
                            <li
                                className={`portfolio-nav ${
                                    location === "/portfolio" ? "current" : ""
                                }`}
                            >
                                <Link
                                    to="/portfolio"
                                    className="navbar-brand"
                                    onClick={() =>
                                        setLocation(window.location.pathname)
                                    }
                                >
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li
                                className={`contact-me ${
                                    location === "/contact" ? "current" : ""
                                }`}
                            >
                                <Link
                                    to="/contact"
                                    className="navbar-brand"
                                    onClick={() =>
                                        setLocation(window.location.pathname)
                                    }
                                >
                                    CONTACT ME
                                </Link>
                            </li>
                            <li className="my-cv">
                                <Link
                                    to={{
                                        pathname:
                                            "http://resume.prateekkumar.net/",
                                    }}
                                    target="_blank"
                                    className="navbar-brand"
                                >
                                    MY CV
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="social">
                    <div className="social-header">Get in touch</div>
                    <div className="block-content">
                        <div className="social-icons">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/userprateek"
                                className="button button-icon"
                                title="linkedin: userprateek"
                            >
                                <i className="fa fa-linkedin-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/userprateek"
                                className="button button-icon"
                                title="github: userprateek"
                            >
                                <i className="fa fa-github-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://facebook.com/userprateek"
                                className="button button-icon"
                                title="facebook: userprateek"
                            >
                                <i className="fa fa-facebook-square"></i>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/userprateek"
                                className="button button-icon"
                                title="twitter: @userprateek"
                            >
                                <i className="fa fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
export default Navbar;

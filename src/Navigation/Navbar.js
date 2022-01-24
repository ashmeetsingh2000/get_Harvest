import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [show, setshow] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY >= 71) {
                setshow(true);
            } else setshow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };

    }, []);
    return (
        <>
            <nav className={`navbar ${show && "nabar_white"}`}>
                <div className="nav-container">
                    <NavLink exact to="/harvestHome" className="nav-logo">
                        HARVEST
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/"
                                activeClassName="show" className="nav-links"
                                onClick={handleClick}
                            >
                                Why&nbsp;Harvest?
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/features"
                                activeClassName="show" className="nav-links"
                                onClick={handleClick}
                            >
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/customers"
                                activeClassName="show" className="nav-links"
                                onClick={handleClick}
                            >
                                Customers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/integration"
                                activeClassName="show" className="nav-links"
                                onClick={handleClick}
                            >
                                Integrations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/pricing"
                                activeClassName="show" className="nav-links"
                                onClick={handleClick}
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <div className="forsidebar">
                            <li className="nav-item">
                                <NavLink exact to="/signin"
                                    activeClassName="show" className="nav-links"
                                    onClick={handleClick}
                                >
                                    <span className="fill">Sign&nbsp;in</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/tryHarvestFree"
                                    className="button"
                                    onClick={handleClick}
                                >
                                    <span className="fill">Try&nbsp;Harvest&nbsp;Free</span>
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}> Menu</i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

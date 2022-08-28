import React from "react";
import Hamburger from "./Hamburger";
import "./NavigationBar.css";

const NavigationBar = () => (
    <nav className="nabvar">
        <Hamburger />
        <div className="spacer" />
        <h1> 
            <a className="logo" href="/">
                lusterlab
            </a>
        </h1>
    </nav>
)

export default NavigationBar
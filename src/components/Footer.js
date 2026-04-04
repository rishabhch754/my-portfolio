import React from "react";
import { useTheme } from "../ThemeContext";
import "./Footer.css";

function Footer() {
    const { isDarkMode } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-simple">
            <div className="footer-simple-content">
                <p>
                    <i className="far fa-copyright"></i> 
                    {currentYear} Rishabh Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
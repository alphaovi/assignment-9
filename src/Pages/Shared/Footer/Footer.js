import React from 'react';
import "./Footer.css"

const Footer = () => {
    const date = new Date();
    const today = date.getFullYear() + "-" + date.getMonth();
    return (
        <div className="navbar-fixed-bottom">
            <p> <small>Copyright @ {today}</small></p>
        </div>
    );
};

export default Footer;
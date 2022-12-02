import React from 'react';

const Footer = () => {
    const date = new Date();
    const today = date.getFullYear() + "-" + date.getMonth();
    return (
        <div>
            <p> <small>Copyright @ {today}</small></p>
        </div>
    );
};

export default Footer;
import React from 'react';
import "./Banner.css";
import mainBackground from "../../../images/metro-rail-background/background.jpg";


const Bannner = () => {
    return (
        <div className="banner-container">
            <img className="img-fluid" src={mainBackground} alt="" />        
        </div>
    );
};

export default Bannner;
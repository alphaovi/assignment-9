import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ServiceDetail.css"

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className="serviceDetail">
            <h2>Welcome to Detail: {serviceId}</h2>
            <Link to="/checkout">
                <button className="btn btn-primary">Buy Now</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;
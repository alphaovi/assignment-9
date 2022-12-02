import React from 'react';
import image1 from "../../../images/tickets/Group-1.png";
import image2 from "../../../images/tickets/Group-2.png";
import image3 from "../../../images/tickets/Group-3.png";
import image4 from "../../../images/tickets/Group-4.png";
import Service from '../Service/Service';
import "./Services.css"

const services = [
    {id: 1, name: "ONE TIME TICKET", price: 100, img: image1},
    {id: 2, name: "ONE DAY PASS", price: 500, img: image2},
    {id: 3, name: "MONTHLY PASS", price: 1500, img: image3},
    {id: 4, name: "ANNUAL PASS", price: 9000, img: image4},
]

const Services = () => {
    return (
        <div className="services m-5 p-5">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
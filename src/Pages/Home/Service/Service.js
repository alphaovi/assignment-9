import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Service.css";

const Service = ({ service }) => {
    const { name, price, img } = service;
    return (

        <Card id="cards" style={{ width: '18rem' }}>
            <Card.Text className="name">{name}</Card.Text>
            <Card.Img variant="top" src={img} />
            <Button className="booking-button mx-auto" variant="warning">Book Now</Button>
            <h3 className="price">${price}</h3>
        </Card>


    );
};

export default Service;
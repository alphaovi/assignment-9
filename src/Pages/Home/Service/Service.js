import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const { id, name, price, img } = service;
    const navigate = useNavigate();
    
    const navigateToSelectedTicket = (id) => {
        navigate(`service/${id}`)
    }
    return (

        <Card id="cards" style={{ width: '18rem' }}>
            <div id="card">
                <Card.Text className="name">{name}</Card.Text>
                <Card.Img variant="top" src={img} />
                <Button onClick={() => navigateToSelectedTicket(id)} className="booking-button mx-auto" variant="warning">Book Now</Button>
                <h3 className="price">${price}</h3>
            </div >
        </Card>



    );
};

export default Service;
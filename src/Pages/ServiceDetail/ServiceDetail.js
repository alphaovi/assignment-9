import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut/CheckOut';
import MyLocation from './MyLocation/MyLocation';
import "./ServiceDetail.css"

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [pick, setPick] = useState("");
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();

    const toCheckOut = () => {
        navigate("/checkout")
    }


    const direction = (event) => {
        event.preventDefault();
        const start = event.target.pick.value;
        const end = event.target.destination.value;
        setPick(start);
        setDestination(end);    
    }

    return (
        <div className="serviceDetail row">
            <div className="select-pick col">
                <div>
                    <form onSubmit={direction}>
                        <input type="text" name="pick" placeholder="Pick From" id="" required/>
                        <br />
                        <br />
                        <input type="text" name="destination" placeholder="Destination" id="" required/>
                        <br />
                        {/* <Form.Group className="mb-3">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control />
                        </Form.Group> */}
                        
                            <button onClick={toCheckOut} className="search-location-button btn">Search</button>
                        
                    </form>

                </div>
            </div>
            <div className="col">
                <MyLocation></MyLocation>
            </div>
        </div>
    );
};

export default ServiceDetail;
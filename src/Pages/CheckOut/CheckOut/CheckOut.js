import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyLocation from '../../ServiceDetail/MyLocation/MyLocation';

const CheckOut = ({pick, destination}) => {
    const navigate = useNavigate();
    const navigateToConfirmTicket = () => {
        alert("You Just Successfully Confirmed Your Ticket");
        navigate("/confirmticket");
    }
    return (
        <div className="serviceDetail row">
            <div className="select-pick col">
                <h2>Confirm Your Ticket</h2>
                <h3>From:{pick}</h3>
                <h3>To:{destination}</h3>
                <button onClick={navigateToConfirmTicket} className="btn btn-primary">Confirm Ticket</button>
            </div>
            <div className="col">
                <MyLocation></MyLocation>
            </div>
        </div>
    );
};

export default CheckOut;
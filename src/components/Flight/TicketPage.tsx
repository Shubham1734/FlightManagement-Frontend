import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../css/ticketpage.css";

const handlePrint = () => {
    window.print();
}

const TicketPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { booking, user } = location.state;
 
    const handleCancel = () =>{
        navigate('/');
    }
    

    

    return (
        <>
            <h2>BOOKING CONFIRMATION</h2>
            <div className="ticket-container">
                <p>User ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Booking Date: {booking.bookingDate}</p>
                <p>Payment : Done</p>
                <p>Status: {booking.status ? 'Confirmed' : 'Pending'}</p>
                <button id="print" onClick={handlePrint}>Print</button><br />
                <button id="cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </>
    );
};

export default TicketPage;

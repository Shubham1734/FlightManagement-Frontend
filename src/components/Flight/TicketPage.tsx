import React from 'react';
import { useLocation } from 'react-router-dom';
// import "../../css/ticketpage.css";

const TicketPage: React.FC = () => {
    const location = useLocation();
    const { booking, user } = location.state;

    return (
        <div className="ticket-container">
            <h2>Booking Confirmation</h2>
            <p>Flight ID: {booking.flight.flightId}</p>
            <p>Flight Date: {booking.flight.flightDate}</p>
            <p>User ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Status: {booking.status ? 'Confirmed' : 'Pending'}</p>
        </div>
    );
};

export default TicketPage;

import React, { useEffect, useState } from 'react';
import {getAllBookings} from '../../services/adminservice';
import { Link } from 'react-router-dom';
// import "../../css/viewbookings.css";

const ViewBookings: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllBookings();
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="view-bookings">
        <header className="header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add-flight">Add New Flight</Link>
          <Link to="/view-users">View Users</Link>
          <Link to="/view-bookings">View Bookings</Link>
        </nav>
      </header>
      <h1>View Bookings</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Flight ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.booking_id}>
              <td>{booking.booking_id}</td>
              <td>{booking.flight_id}</td>
              <td>{booking.user_id}</td>
              <td>{booking.booking_date}</td>
                <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;

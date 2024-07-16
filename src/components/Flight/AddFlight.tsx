import React, { useState } from "react";
import * as flightService from "../../services/flightService";
import "../../css/addflight.css";
import { Link } from "react-router-dom";
import { addFlight } from "../../services/adminservice";

const AddFlight = () => {
  const [flight, setFlight] = useState({
    flightId: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    capacity: 0,
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
  };

  const handleFlight = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(flight); // Log the flight data
    try {
      const response = await addFlight(flight);
      console.log(response.data);
      alert("Flight added successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error adding the flight.");
    }
  };

  return (
    <div className="add-flight">
      <header className="header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add-flight">Add New Flight</Link>
          <Link to="/view-users">View Users</Link>
          <Link to="/view-bookings">View Bookings</Link>
        </nav>
      </header>
      <h2 id="add-flight">Enter New Flight Details</h2>
      <div className="addflight-form">
      <form onSubmit={handleFlight}>
        <div className="addcontainer">
          <input
            type="text"
            name="flightId"
            placeholder="Flight ID"
            value={flight.flightId}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            value={flight.origin}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={flight.destination}
            onChange={handleChange}
          />
          <br />
          <input
            type="datetime-local"
            name="departureTime"
            value={flight.departureTime}
            onChange={handleChange}
          />
          <br />
          <input
            type="datetime-local"
            name="arrivalTime"
            value={flight.arrivalTime}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={flight.capacity}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={flight.price}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Add Flight</button>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default AddFlight;

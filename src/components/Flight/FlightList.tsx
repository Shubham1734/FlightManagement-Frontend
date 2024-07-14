import React, { useEffect, useState } from 'react';
import { getFlights } from '../../services/flightService';
import { Flight } from '../../models/Flight';
import "../../css/flightlist.css";
import { deleteFlight } from '../../services/adminservice';
import { Navigate, useNavigate } from 'react-router-dom';

const FlightList: React.FC = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    const response = await getFlights();
    setFlights(response.data);
  };
  const handleDeleteFlight = async (flightId: number) => {
    try {
      await deleteFlight(flightId);
      // Remove the deleted flight from the state
      setFlights(flights.filter(flight => flight.flightId !== flightId));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  const handleUpdate = (flightId: number) =>{
    console.log(flightId);
    console.log("update");
    navigate(`/update-flight/${flightId}`);
  }

  return (
    <div className='flightlist'>
    <h1>FLIGHTS &nbsp;</h1>
    <table>
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight: Flight) => (
          <tr key={flight.flightId}>
            <td>{flight.flightId}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td>
            <td>
              <button className ="delete" onClick={() => handleDeleteFlight(flight.flightId)}>
                Delete
              </button>
              <button onClick={() => handleUpdate(flight.flightId)}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default FlightList;


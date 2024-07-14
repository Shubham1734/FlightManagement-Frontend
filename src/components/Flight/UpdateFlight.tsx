import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFlightById } from '../../services/flightService';
import { Flight } from '../../models/Flight';
import "../../css/updateflight.css";
import { updateFlight } from '../../services/adminservice';

const UpdateFlight: React.FC = () => {
  const { flightId } = useParams<{ flightId: string }>();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<Flight>({
    flightId: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: 0
  });

  useEffect(() => {
    if (flightId) {
      fetchFlight(flightId);
    }
  }, [flightId]);

  const fetchFlight = async(flightId: string) => {
    try {
      const response = await getFlightById(flightId);
      setFlight(response.data);
    } catch (error) {
      console.error('Error fetching flight:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlight({
      ...flight,
      [name]: value,
    });
  };

  const handleUpdateFlight = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await updateFlight(flightId, flight);
      console.log(response);
      navigate('/flights');
    } catch (error) {
      console.error('Error updating flight:', error);
    }
  };

  return (
    <div className='updateflight'>
      <h1>Update Flight</h1>
      <form onSubmit={handleUpdateFlight}>
        <div>
          <label>Origin:</label>
          <input
            type="text"
            name="origin"
            value={flight.origin}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={flight.destination}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Departure Time:</label>
          <input
            type="text"
            name="departureTime"
            value={flight.departureTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Arrival Time:</label>
          <input
            type="text"
            name="arrivalTime"
            value={flight.arrivalTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={flight.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Flight</button>
      </form>
    </div>
  );
};

export default UpdateFlight;

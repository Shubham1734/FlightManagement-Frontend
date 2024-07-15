import { FormEvent, useState } from "react";
import { getFlightByorigindest } from "../../services/flightService";
import { Flight } from "../../models/Flight";
import { Link, useNavigate } from "react-router-dom";
import "../../css/FlightSearch.css";

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);
  const navigate = useNavigate();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const response = await getFlightByorigindest(origin, destination);
    console.log(typeof response.data);
    console.log(response.data);
    setFlights(response.data);
  }

  const handleBook = (flightId: number) => {
    navigate(`/book/${flightId}`);
  };

  return (
    <>
      

      <div className="main-container">
        <h2>ENTER DETAILS TO SEARCH FLIGHT</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <br />
            <br />
            <button type="submit">Search Flights</button>
          </form>
        </div>

        {flights.length > 0 && (
          <div className="table-div">
            <h2>Search Results</h2>
            <table>
              <thead>
                <tr>
                  <th>Flight ID</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.flightId}>
                    <td>{flight.flightId}</td>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.departureTime}</td>
                    <td>{flight.arrivalTime}</td>
                    <td>{flight.price}</td>
                    <button
                      className="book"
                      onClick={() => handleBook(flight.flightId)}
                    >
                      Book
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default FlightSearch;
// San Francisco	Chicago

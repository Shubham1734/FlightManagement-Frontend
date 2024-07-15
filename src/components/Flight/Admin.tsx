
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import FlightList from "./FlightList";
import "../../css/admin.css";

const Admin = () => {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add-flight">Add New Flight</Link>
          <Link to="/view-users">View Users</Link>
          <Link to="/view-bookings">View Bookings</Link>
        </nav>
      </header>
      <br />
      <FlightList />
    </div>
  );
};

export default Admin;

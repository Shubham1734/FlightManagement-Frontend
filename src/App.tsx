
import  { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightList from './components/Flight/FlightList';
import FlightSearch from './components/Flight/FlightSearch';
import BookingDetail from './components/Flight/BookingDetail';
import Register from  './components/Flight/Register';
import Login from './components/Flight/Login';
import AddFlight from './components/Flight/AddFlight'
import UpdateFlight from './components/Flight/UpdateFlight';
import UserProfile from './components/Flight/UserProfile';
import Dashboard from "./components/Flight/Dashboard";
import Admin from './components/Flight/Admin';
import ViewBookings from "./components/Flight/ViewBookings";
import ViewUsers from "./components/Flight/ViewUsers";
import TicketPage from "./components/Flight/TicketPage";
function App() {
  const bookingDetailRef = useRef<any>(null);

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/admin" element = {<Admin/>}/>
          <Route path="/flights" element = {<FlightList/>}/>
          <Route path="/flights-search" element = {<FlightSearch/>}/>
          <Route path="/book/:flightId" element={<BookingDetail ref={bookingDetailRef}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-flight" element={<AddFlight />} />
          {/* <Route path="/update-flight" element={<UpdateFlight />} /> */}
          <Route path="/update-flight/:flightId" element={<UpdateFlight />} />
          <Route path="user-profile" element={<UserProfile />} />
          {/* <Route path="/new" element={<NewDashboard />} /> */}
          <Route path="/ticket" element={<TicketPage/>} />
          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/view-bookings" element={<ViewBookings />} />

        </Routes>
      </div>
    </Router>
    
    </>
  )
}

export default App

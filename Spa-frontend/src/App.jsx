import React from "react";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Page1Render from "./Components/Page1Render";
import Page2Render from "./Components/Page2Render";
import Booking from "./Components/Bookingpage/Booking";
import Adminpage from "./Components/Admindashboard/Adminpage/Adminpage";
import Login from "./Components/Admindashboard/AdminForm/Login";
import Register from "./Components/Admindashboard/AdminForm/Register"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Page1Render />} />
        <Route path="/Services" element={<Page2Render />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


       
        {/* <Route path="/bookingsTable" element={<BookingsTable />} />
        <Route path="/bookingDetails" element={<BookingDetails />} /> */}
      </Routes>
    </div>
  );
};

export default App;

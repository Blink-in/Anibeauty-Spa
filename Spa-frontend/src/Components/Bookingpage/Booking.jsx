import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSuccess, setSnackbarSuccess] = useState("success");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/book/create",
        {
          name,
          email,
          phoneNumber,
          date,
          time,
        }
      );

      setSnackbarMessage(response.data.message);
      setSnackbarSuccess("success");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setSnackbarMessage(
        error.response?.data?.message || "Booking failed. Please try again."
      );
      setSnackbarSuccess("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <div className="bookcontent">
        <div className="bookdiv">
          <div className="booktop">Book Your Session</div>
          <h1 className="bookhead">Experience Tranquility</h1>
          <p className="bookpara">
            Schedule your perfect spa day with us. Relax, Rejuvinate, and
            restore your body and mind.
          </p>
        </div>
        <div className="bookingform">
          <Container maxWidth="sm">
            <div className="innerhead">
              {" "}
              <h2 className="bookhead2">Schedule Your Visit</h2>
              <br />
              <p>
                Fill in your details below and we'll comfirm your appointment
              </p>
            </div>
            <Typography variant="h4" gutterBottom></Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                
              />
              <TextField
                label="Date"
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <TextField
                select
                label="Time"
                fullWidth
                margin="normal"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                {timeSlots.map((slot) => (
                  <MenuItem key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Book Now
              </Button>
            </form>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity={snackbarSuccess}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Container>
        </div>
      </div>
      <br /> <br />
    </>
  );
};

export default Booking;

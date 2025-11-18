const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const Booking = require("./module/bookingModule.js");
const Admin = require('./module/adminModule.js');

app.use(bodyParser.json());
const bookingRoute = require("./routes/bookingRoute.js");
const AdminRoutes = require("./routes/adminLoginRoutes.js");

// API to create a booking
app.use("/api/book", bookingRoute);

// API to admin route

app.use("api/admin", AdminRoutes);

app.get("/", (req, res) => {
  res.send("emma");
});
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("database connected");
  })

  .catch(() => {
    console.log("database not connected");
  });

// Start the server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

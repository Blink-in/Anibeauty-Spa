const express = require("express");
const {
  createBooking,
  getAllBooking,
  getBookingById,
  deleteBooking,
  getBookingByUniqueid,
} = require("../controller/bookingController");
const router = express.Router();

router.post("/create", createBooking);
router.get("/find", getAllBooking);
router.get("/:id", getBookingById);
router.get("/:uniqueId", getBookingByUniqueid);
router.delete("/:id", deleteBooking);

module.exports = router;

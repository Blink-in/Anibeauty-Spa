const mongoose = require("mongoose");
const BookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    uniqueId: {
      type: String,
    },
  },
  {
    Timestamps: false,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;

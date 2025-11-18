const express = require("express");
const Booking = require("../module/bookingModule.js");
const nodemailer = require("nodemailer");
require("dotenv").config(); 


// Simple transporter (uses Gmail service; works with Gmail App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// const createBooking = async (req, res) => {
//   const { name, email, phoneNumber, date, time } = req.body;

//   // Check if the time is already booked
//   const existingBooking = await Booking.findOne({ date, time });
//   if (existingBooking) {
//     return res
//       .status(400)
//       .json({ message: "This time slot is already booked." });
//   }

//   // Check if all time slots are booked
//   const bookedSlots = await Booking.find({ date });
//   if (bookedSlots.length >= 7) {
//     // 7 slots between 9 AM and 4 PM
//     return res
//       .status(400)
//       .json({ message: "All time slots are fully booked for this day." });
//   }

//   // Generate a unique ID
//   const uniqueId = Math.random().toString(36).substring(2, 15);

//   // Save the booking
//   const newBooking = new Booking({
//     name,
//     email,
//     phoneNumber,
//     date,
//     time,
//     uniqueId,
//   });
//   await newBooking.save();

//  // Prepare email
//     const mailOptions = {
//       from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
//       to: email,
//       subject: "Booking Confirmation - Anibeauty Spa",
//       text: `Hi ${name},\n\nYour booking for ${date} at ${time} is confirmed.\nBooking ID: ${uniqueId}\n\nThank you,\nAnibeauty Spa`,
//       html: `<p>Hi ${name},</p>
//              <p>Your booking for <strong>${date}</strong> at <strong>${time}</strong> is confirmed.</p>
//              <p>Booking ID: <strong>${uniqueId}</strong></p>
//              <p>Thank you,<br/>Anibeauty Spa</p>`,
//     };
    
  
//    let emailSent = false;
//     try {
//       await transporter.sendMail(mailOptions);
//       emailSent = true;
//     } catch (emailErr) {
//       console.error("Error sending booking email:", emailErr);
//     }

//     if (emailSent) {
//       res
//         .status(201)
//         .json({ message: "Booking successful! Confirmation email sent.", uniqueId });
//     } else {
//       res
//         .status(201)
//         .json({ message: "Booking successful! But failed to send confirmation email.", uniqueId });
//     }
//   } catch (error) {
//     console.error("createBooking error:", error);
//     res.status(500).json({ message: error.message });
//   }
// };
// ...existing code...
const createBooking = async (req, res) => {
  try {
    const { name, email, phoneNumber, date, time } = req.body;

    // Check if the time is already booked
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "This time slot is already booked." });
    }

    // Check if all time slots are booked
    const bookedSlots = await Booking.find({ date });
    if (bookedSlots.length >= 7) {
      return res
        .status(400)
        .json({ message: "All time slots are fully booked for this day." });
    }

    // Generate a unique ID
    const uniqueId = Math.random().toString(36).substring(2, 15);

    // Save the booking
    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      date,
      time,
      uniqueId,
    });
    await newBooking.save();

    // Prepare email
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation - Anibeauty Spa",
      text: `Hi ${name},\n\nYour booking for ${date} at ${time} is confirmed.\nBooking ID: ${uniqueId}\n\nThank you,\nAnibeauty Spa`,
      html: `<p>Hi ${name},</p>
             <p>Your booking for <strong>${date}</strong> at <strong>${time}</strong> is confirmed.</p>
             <p>Booking ID: <strong>${uniqueId}</strong></p>
             <p>Thank you,<br/>Anibeauty Spa</p>`,
    };

    let emailSent = false;
    try {
      await transporter.sendMail(mailOptions);
      emailSent = true;
    } catch (emailErr) {
      console.error("Error sending booking email:", emailErr);
    }

    if (emailSent) {
      return res
        .status(201)
        .json({ message: "Booking successful! Confirmation email sent.", uniqueId });
    } else {
      return res
        .status(201)
        .json({ message: "Booking successful! But failed to send confirmation email.", uniqueId });
    }
  } catch (error) {
    console.error("createBooking error:", error);
    res.status(500).json({ message: error.message });
  }
};


// GET ALL REGISTERED USERS

const getAllBooking = async (req, res) => {
  try {
    const booking = await Booking.find({});
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BOOKING BY ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const getBookingByUniqueid =  async (req, res) => {
  try {
      const booking = await Booking.findOne({ uniqueId: req.params.uniqueId });
      if (!booking) return res.status(404).send('Booking not found');
      res.json(booking);
  } catch (error) {
      res.status(500).send('Server Error');
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    //check if user exists
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    // delete the user
    await booking.deleteOne();
    res.status(200).json({ message: "booking deleted succe3ssfully" });
  } catch (error) {
    console.error("error deleting booking", error);
    res
      .status(500)
      .json({ message: "error deleting booking", error: error.message });
  }
};
module.exports = {
  createBooking,
  getAllBooking,
  getBookingById,
  getBookingByUniqueid,
  deleteBooking,
};

const express = require("express");
const Booking = require("../module/bookingModule.js");
const nodemailer = require("nodemailer");

const createBooking = async (req, res) => {
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
    // 7 slots between 9 AM and 4 PM
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

  
  res.status(201).json({ message: "Booking successful!", uniqueId });
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

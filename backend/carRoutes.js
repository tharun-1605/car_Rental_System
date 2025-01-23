import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Booking from './bookingModel.js'; // Import the Booking model

// Car model
const carSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    make: String,
    model: String,
    year: Number,
    price: Number,
    location: String,
    Seats: Number,
    rating: String,
    Date: Date
});

const Car = mongoose.model('Car', carSchema);

const router = express.Router(); // Keep this declaration

// Create Booking
router.post('/bookings', async (req, res) => {
    const { name, phoneNumber, email, licenseNumber, aadharNumber, amount } = req.body;
    const booking = new Booking({
        name,
        phoneNumber,
        email,
        licenseNumber,
        aadharNumber,
        amount
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created', booking });
});

// Read Bookings
router.get('/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
});

// Update Booking
router.put('/bookings/:name', async (req, res) => {
    const { nmae } = req.params;
    const updatedBooking = await Booking.findByIdAndUpdate(name, req.body, { new: true });
    res.status(200).json({ message: 'Booking updated', updatedBooking });
});

// Delete Booking
router.delete('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(204).send();
});

// API Endpoints for Cars
router.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

router.get('/cars/:location', async (req, res) => {
    const car = await Car.findOne({ location: req.params.location });
    res.json(car);
});

router.post('/cars', async (req, res) => {
    const id = uuidv4();
    const { make, model, year, price, location, Seats, rating } = req.body;
    if (!location || !Seats) {
        return res.status(400).json({ error: 'Location and Seats are required.' });
    }

    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    const newCar = new Car({ make, model, year, price: formattedPrice, location, Seats, rating });
    await newCar.save();
    res.status(201).json(newCar);
});

router.put('/cars/:id', async (req, res) => {
    const { make, model, year, price, location, Seats, rating } = req.body;
    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    const updatedCar = await Car.findOneAndUpdate({ _id: req.params.id }, { make, model, year, price: formattedPrice, location, Seats, rating }, { new: true });
    res.json(updatedCar);
});

router.delete('/cars/:id', async (req, res) => {
    await Car.findOneAndDelete({ _id: req.params.id });
    res.status(204).send();
});

export default router; // Ensure this line is included

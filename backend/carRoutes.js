import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Booking from './bookingModel.js';
import CustomerCare from './customerCareModel.js';
import bcrypt from "bcrypt"; 
import User from './SigningModel.js';
import jwt from "jsonwebtoken";
import authMiddleware from './authMiddleware.js';

const carSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    make: String,
    rating: String,
    year: Number,
    price: Number,
    location: String,
    Seats: Number,
    mileage:Number,
    image: String // Added image field
});

const Car = mongoose.model('Car', carSchema);

const router = express.Router(); 

router.post('/bookings', async (req, res) => {
    const { name, phoneNumber, email, licenseNumber, aadharNumber, amount,carname } = req.body;
    const booking = new Booking({
            name,
            phoneNumber,
            email,
            licenseNumber,
            aadharNumber,
            amount,
            carname
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created', booking });
});

router.get('/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
});

router.put('/bookings/:name', async (req, res) => {
    const { name } = req.params;
    const updatedBooking = await Booking.findByIdAndUpdate(name, req.body, { new: true });
    res.status(200).json({ message: 'Booking updated', updatedBooking });
});

router.delete('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(204).send();
});

router.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

router.get('/cars/:location', authMiddleware, async (req, res) => {
    const car = await Car.findOne({ location: req.params.location });
    res.json(car);
});

router.post('/cars', async (req, res) => {
    const id = uuidv4();
    const { make, rating, price, location, Seats, mileage, image } = req.body; // Include image field
    if (!location || !Seats) {
        return res.status(400).json({ error: 'Location and Seats are required.' });
    }

    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    console.log('Request body:', req.body); // Log the entire request body
    const newCar = new Car({ id, make, rating, price: formattedPrice, location, Seats,mileage, image }); // Save image
    try {
        await newCar.save();
    } catch (error) {
        console.error('Error saving car:', error); // Log any errors that occur during saving
        return res.status(500).json({ error: 'Failed to save car' });
    }
    res.status(201).json(newCar);
});

router.put('/cars/:id', async (req, res) => {
    const { make, model, year, price, location, Seats, rating } = req.body;
    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    const updatedCar = await Car.findOneAndUpdate({ _id: req.params.id }, 
        { 
            make, model, year, price: formattedPrice, location, Seats, rating 
        }, 
        {
             new: true 
            });
    res.json(updatedCar);
});

router.delete('/cars/:id', async (req, res) => {
    await Car.findOneAndDelete({ _id: req.params.id });
    res.status(204).send();
});

router.post("/createuser", async (req, res) => {
    const { email, username, password, phoneNumber, useraddrees } = req.body;

    // Validate that password is provided
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword, id: uuidv4(), phoneNumber, useraddrees });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, "hello", { expiresIn: '1h' });
    return res.status(200).json({ message: "Login successful", token });
});

router.post('/customer-care', async (req, res) => {
    const { username, email, carName, location, description } = req.body;
    console.log('Received customer care request:', req.body); // Log the incoming request
    const customerCareRequest = new CustomerCare({
        username,
        email,
        carName,
        location,
        description
    });
    try {
        await customerCareRequest.save();
        res.status(201).json({ message: 'Customer care request created', customerCareRequest });
    } catch (error) {
        console.error('Error creating customer care request:', error); // Log the error details
        res.status(500).json({ message: 'Error creating customer care request', error: error.message });
    }
});

router.get('/user/:email', authMiddleware, async (req, res) => {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        useraddrees: user.useraddrees
    });
});

router.delete('/cars/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const deletedCar = await Car.findByIdAndDelete(carId);
        if (!deletedCar) {
            return res.status(404).send('Car not found');
        }
        res.status(200).send('Car deleted successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

export default router;

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
    model: String,
    year: Number,
    price: Number,
    location: String,
    Seats: Number,
    rating: String,
    Date: Date
});

const Car = mongoose.model('Car', carSchema);

const router = express.Router(); 


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

router.get('/cars/:location',authMiddleware, async (req, res) => {
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
    const newCar = new Car({ id,make, model, year, price: formattedPrice, location, Seats, rating });
    await newCar.save();
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
    const { email, username, password,phoneNumber,useraddrees } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword, id: uuidv4(),phoneNumber,useraddrees });
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
    const token=jwt.sign({id:user.id},"hello",{expiresIn:'1h'})
    return res.status(200).json({ message: "Login successful", token });

    // return res.status(200).json({ message: "Login successful" });
});

router.post('/customer-care', async (req, res) => {
    const { username, email, carName, location, description } = req.body;
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
        res.status(500).json({ message: 'Error creating customer care request', error: error.message });
    }
});

router.get('/user/:username', authMiddleware, async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
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

export default router;

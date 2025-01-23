import express from 'express';
import mongoose from 'mongoose';

// Car model
import { v4 as uuidv4 } from 'uuid';

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
    Date: Date
});

const Car = mongoose.model('Car', carSchema);

const router = express.Router(); // Keep this declaration

// API Endpoints
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
    const { make, model, year, price, location, Seats } = req.body;
    if (!location || !Seats) {
        return res.status(400).json({ error: 'Location and Seats are required.' });
    }

    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    const newCar = new Car({ make, model, year, price: formattedPrice, location, Seats });
    await newCar.save();
    res.status(201).json(newCar);
});

router.put('/cars/:id', async (req, res) => {
    const {make, model, year, price,location, Seats } = req.body;
    const formattedPrice = price ? Number(price.replace(/,/g, '')) : undefined;
    const updatedCar = await Car.findOneAndUpdate({ _id: req.params.id }, {make, model, year,  price: formattedPrice,location, Seats }, { new: true });
    res.json(updatedCar);
});

router.delete('/cars/:id', async (req, res) => {
    await Car.findOneAndDelete({ _id: req.params.id });
    res.status(204).send();
});

export default router; // Ensure this line is included

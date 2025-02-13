import express from 'express';
import Car from './models/Car.js';

const router = express.Router();

// Get all cars
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new car
router.post('/cars', async (req, res) => {
  const car = new Car(req.body);
  try {
    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

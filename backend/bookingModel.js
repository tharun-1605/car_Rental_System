import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Booking model
const bookingSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: String,
    phoneNumber: String,
    email: String,
    licenseNumber: String,
    aadharNumber: String,
    amount: Number,
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

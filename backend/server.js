import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import carRoutes from './carRoutes.js'; 

const app = express();
app.use(cors())
app.use(express.json({ limit: '10mb' })); // Increased payload size limit

const mongoURI = 'mongodb+srv://Tharun:123@cluster0.mrnqm.mongodb.net/Car'; 
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', carRoutes); 

app.get('/', (req, res) => {
    res.send('Welcome to the Express backend!');
});

app.listen(4000, () => {
    console.log(`Server is running on http://127.0.0.1:4000`);
});

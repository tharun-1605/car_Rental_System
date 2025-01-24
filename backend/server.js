import express from 'express';
import mongoose from 'mongoose';
import carRoutes from './carRoutes.js'; 

const app = express();

app.use(express.json());

const mongoURI = 'mongodb://127.0.0.1:27017/CAR'; 
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

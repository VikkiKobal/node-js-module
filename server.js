const express = require('express');
const connectDB = require('./db');

const app = express();
app.use(express.json());

connectDB();

const carRoutes = require('./routes/cars.routes');
app.use('/cars', carRoutes);

app.listen(5000, () => console.log('Server is running on port 5000'));

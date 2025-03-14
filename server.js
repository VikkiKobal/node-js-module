const express = require('express');
const connectDB = require('./db');

const app = express();
app.use(express.json());

connectDB();

const carRoutes = require('./routes/cars.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/cars', carRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

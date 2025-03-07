const { port, mongodb_uri } = require('./config');
const express = require('express');
const carRoutes = require('./routes/cars.routes');

const app = express();

app.use('/api/cars', carRoutes);

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true },
    year: { type: Number, required: true },
    make: { type: String, required: true },
    color: { type: String, required: true },
    condition: { type: String, required: true },
    ownerLastName: { type: String, required: true },
    ownerAddress: { type: String, required: true }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

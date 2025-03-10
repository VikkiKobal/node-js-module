const Car = require('../models/car.model');

// Створення автомобіля
async function create(carData) {
    const newCar = new Car(carData);
    return await newCar.save();
}

// Отримання всіх автомобілів
async function find({ searchString = '', page = 1, perPage = 10 }) {
    const query = searchString ? { make: new RegExp(searchString, 'i') } : {};

    const cars = await Car.find(query)
        .skip((page - 1) * perPage)
        .limit(perPage);

    const count = await Car.countDocuments(query);

    return { items: cars, count };
}

// Отримання автомобіля за ID
async function findById(id) {
    return await Car.findById(id);
}

// Оновлення автомобіля
async function update(carId, carData) {
    return await Car.findByIdAndUpdate(carId, carData, { new: true });
}

// Видалення автомобіля
async function remove(id) {
    return await Car.findByIdAndDelete(id);
}

module.exports = { create, find, findById, update, remove };

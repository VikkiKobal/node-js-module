const mockData = require('../helpers/mock-data');
const Car = require('../models/car.model');

function _generateId() {
    const crypto = require("crypto");
    return crypto.randomBytes(16).toString("hex");
}

async function create(carData) {
    const newCar = { id: _generateId(), ...carData };
    mockData.cars.push(newCar);

    return newCar;
}


async function find({ searchString = '', page = 1, perPage = Number.MAX_SAFE_INTEGER }) {
    searchString = searchString?.trim().toLowerCase() || '';

    const carsToFilter = searchString ?
        mockData.cars.filter(c => c.brand?.toLowerCase().includes(searchString)) :
        mockData.cars;

    return {
        items: carsToFilter.slice((page - 1) * perPage, page * perPage),
        count: carsToFilter.length,
    };
}

async function findById(id) {
    return mockData.cars.find(c => c.id == id);
}

async function update(carId, carData) {
    const index = mockData.cars.findIndex(c => c.id === carId);

    if (index === -1) return;

    const updatedCar = { ...mockData.cars[index], ...carData, id: carId };

    mockData.cars[index] = updatedCar;
}

async function remove(id) {
    mockData.cars = mockData.cars.filter(c => c.id != id);
}

module.exports = {
    create,
    find,
    findById,
    update,
    remove,
};

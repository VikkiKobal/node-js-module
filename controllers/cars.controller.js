const carService = require('../services/cars.service');

async function createCar(req, res) {
    try {
        const newCar = await carService.create(req.body);
        res.status(201).json({
            status: 201,
            data: newCar
        });
    } catch (err) {
        console.error("Error creating car:", err);
        res.status(500).json({
            status: 500,
            error: 'Internal server error'
        });
    }
}

async function getCars(req, res) {
    try {
        const { searchString, page = 1, perPage = 10 } = req.query;
        const result = await carService.find({ searchString, page, perPage });

        res.status(200).json({
            status: 200,
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal server error',
            details: err.message,
        });
    }
}

async function getCar(req, res) {
    try {
        const { carId } = req.params;
        const car = await carService.findById(carId);

        if (!car) {
            return res.status(404).json({
                status: 404,
                message: 'Car not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: car,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal server error',
            details: err.message,
        });
    }
}

async function updateCar(req, res) {
    try {
        const { carId } = req.params;
        const carData = req.body;

        const car = await carService.findById(carId);
        if (!car) {
            return res.status(404).json({
                status: 404,
                message: 'Car not found.',
            });
        }

        await carService.update(carId, carData);
        res.status(200).json({
            status: 200,
            message: 'Car updated successfully',
        });
    } catch (err) {
        console.error("Error updating car:", err);
        res.status(500).json({
            status: 500,
            error: 'Internal server error',
            details: err.message,
        });
    }
}

async function deleteCar(req, res) {
    try {
        const { carId } = req.params;
        const car = await carService.findById(carId);
        if (!car) {
            return res.status(404).json({
                status: 404,
                message: 'Car not found.',
            });
        }

        await carService.remove(carId);
        res.status(200).json({
            status: 200,
            message: 'Car deleted successfully',
        });
    } catch (err) {
        console.error("Error deleting car:", err);
        res.status(500).json({
            status: 500,
            error: 'Internal server error',
            details: err.message,
        });
    }
}

module.exports = {
    createCar,
    getCars,
    getCar,
    updateCar,
    deleteCar,
};

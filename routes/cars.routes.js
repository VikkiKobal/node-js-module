const express = require('express');
const router = express.Router();

const controller = require('../controllers/cars.controller');

router.route('/')
    .get(controller.getCars)
    .post(controller.createCar);

router.route('/:carId')
    .get(controller.getCar)
    .patch(controller.updateCar)
    .delete(controller.deleteCar);

module.exports = router;

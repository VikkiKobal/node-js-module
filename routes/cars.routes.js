const express = require('express');
const router = express.Router();
const controller = require('../controllers/cars.controller');
const validateCarData = require('../middlewares/validateCarData');
const authenticationCheck = require('../middlewares/authenticationCheck');

router.post('/', authenticationCheck, validateCarData, controller.createCar);
router.get('/', authenticationCheck, controller.getCars);
router.get('/:carId', authenticationCheck, controller.getCar);
router.patch('/:carId', authenticationCheck, validateCarData, controller.updateCar);
router.delete('/:carId', authenticationCheck, controller.deleteCar);

module.exports = router;

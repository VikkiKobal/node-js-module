const carSchema = require('../joi_validation_schemas/car.schema');
const userSchema = require('../joi_validation_schemas/user.schema');

function validateCar(req, res, next) {
    const { error } = carSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(err => err.message);
        return res.status(400).json({ errors: errorMessages });
    }

    next();
}

function validateUser(req, res, next) {
    const { error } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(err => err.message);
        return res.status(400).json({ errors: errorMessages });
    }

    next();
}

module.exports = { validateUser };
module.exports = { validateCar };


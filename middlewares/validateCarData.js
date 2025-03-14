const createError = require('http-errors');

function validateCarData(req, res, next) {
    const { licensePlate, year, make, color, condition, ownerLastName, ownerAddress } = req.body;

    if (!licensePlate || !year || !make || !color || !condition || !ownerLastName || !ownerAddress) {
        return next(createError.BadRequest('All car fields are required.'));
    }

    if (typeof year !== 'number' || year < 1886 || year > new Date().getFullYear()) {
        return next(createError.BadRequest('Invalid year.'));
    }

    next();
}

module.exports = validateCarData;

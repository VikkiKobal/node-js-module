const createError = require('http-errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authenticationCheck(req, res, next) {
    const token = req.headers['x-auth'];
    if (!token) {
        return next(createError.Unauthorized('Application access token is required'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return next(createError.Unauthorized('Invalid application access token'));
    }
}

module.exports = authenticationCheck;

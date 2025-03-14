const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generateToken(req, res) {
    const payload = {
        user: 'testUser'
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
        token
    });
}

module.exports = {
    generateToken
};

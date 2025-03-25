const authService = require('../services/auth.service');
const User = require('../models/user.model');

async function createTestUser(req, res) {
    try {
        const email = 'testuser@example.com';
        const password = 'testpassword';
        const firstName = 'Test';
        const lastName = 'User';
        const birthDate = new Date('1990-01-01');
        const phone = '1234567890';
        const address = '123 Test St, Test City, Country';

        const user = await authService.createUser({
            email,
            password,
            firstName,
            lastName,
            birthDate,
            phone,
            address
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}


async function generateToken(req, res) {
    try {
        const { email, password } = req.body;

        const user = await authService.authenticateUser(email, password);
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

module.exports = { createTestUser, generateToken };

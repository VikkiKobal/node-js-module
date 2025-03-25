const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

async function createUser(userData) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        const newUser = new User({
            ...userData,
            password: hashedPassword,
        });

        await newUser.save();
        return newUser;
    } catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
}

async function authenticateUser(email, password) {
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid password');

        return user;
    } catch (err) {
        throw new Error('Authentication failed: ' + err.message);
    }
}

module.exports = { createUser, authenticateUser }; 

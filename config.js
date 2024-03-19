require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/exapp',
    jwtSecret: process.env.JWT_SECRET || 'secret',
    enableScheduleJobs: process.env.ENABLE_SCHEDULE_JOBS || true,
};

module.exports = config;
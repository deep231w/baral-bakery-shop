const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection error:', error.message);
        if (error.name === 'MongoNetworkError') {
            console.error('Network error:', error.message);
        } else {
            console.error('Other error:', error.message);
        }
        process.exit(1);
    }
};

module.exports = connectDB;

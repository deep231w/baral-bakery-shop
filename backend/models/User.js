const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
  })

// const user= mongoose.model('User', userSchema);
// module.export=user;

const User = mongoose.model('User', userSchema);

module.exports = User;
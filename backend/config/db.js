const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB= async ()=>
{
    try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to MongoDB');

} catch(e){
        console.log('Error connecting to MongoDB',e);
}
}

module.exports=connectDB;
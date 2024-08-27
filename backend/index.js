const express = require('express');
const connectDB= require('./config/db.js');
console.log('MONGO_URI:', process.env.MONGODB_URL);
const userRoutes= require('./routes/User.js');
const orderRoutes= require('./routes/Order.js');
const productRoutes= require('./routes/Product.js');
const authMiddleware= require('./middleware/auth.js');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app= express();
const port= process.env.PORT||3000;
app.use(cors()); // Enable CORS
app.use(express.json());

//--------------------------------------------------------------
// Define allowed origins
// const allowedOrigins = ['https://baral-bakery-shop-7opc.vercel.app'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// };

//app.use(cors(corsOptions)); // Enable CORS with options
//-------------------------------------

app.use('/api/users',userRoutes);

app.use('/api/orders',orderRoutes);

app.use('/api/products',productRoutes);

app.use(authMiddleware);
app.get("/",(req, res)=>{
        res.send("Welcome")
    })

app.listen(port ,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
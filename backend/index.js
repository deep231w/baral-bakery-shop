const express = require('express');
const connectDB= require('./config/db.js');
console.log('MONGO_URI:', process.env.MONGODB_URL);
const userRoutes= require('./routes/User.js');
const orderRoutes= require('./routes/Order.js');
const productRoutes= require('./routes/Product.js');
const authMiddleware= require('./middleware/auth.js');
//const dotenv = require('.env');
connectDB();
const app= express();
const port= 3000;
app.use(express.json());


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
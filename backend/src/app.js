// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();


const corsOptions = {
  origin: 'https://mernzomato-1.onrender.com', 
  credentials: true,// Or use '*' temporary for testing only
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization' // <-- This tells the browser the token header is allowed
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/food-partner', foodPartnerRoutes);

app.get('/api/token',(req,res)=>{
    const token =req.cookies.token
    if(!token){
        return res.status(400).json({
            message:"Please login"
        })
    }
    return res.status(201).json({
        "token":token
    })
})

module.exports = app;
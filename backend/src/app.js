// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();

app.use(cors({
    // Dynamically allows ALL origins by echoing the incoming request's origin back
    origin: function (origin, callback) {
        // If there's no origin (like server-to-server or Postman requests), allow it
        if (!origin) return callback(null, true);
        
        // This accepts every incoming URL dynamically
        callback(null, true);
    },
    credentials: true // Keeps your cookie/JWT system working perfectly
}));

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/food-partner', foodPartnerRoutes);

module.exports = app;
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
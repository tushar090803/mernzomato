// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(process.env.PORT||8462, () => {
    console.log("Server is running on port 3000");
})

//MONGO_URI=mongodb+srv://tushar_gupta:atlaspass@clusterone.03dn55p.mongodb.net/food-views?appName=ClusterOne
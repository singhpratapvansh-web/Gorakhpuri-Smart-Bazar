const mongoose = require("mongoose");
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, "MongoDB connection error:"));
db.on('error', console.error.bind(console, "MongoDB connection error:"));

const connectDB =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");   
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})

// Connect to database
 const MONGODB_URI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_ENDPOINT}/${process.env.DATABASE_NAME}`


 mongoose.connect(MONGODB_URI)
 .then(() => console.log('MongoDB Connected'))
 .catch((error) => {
    console.log('MongoDB Connection Error:',error.message)
    process.exit(1);
 })

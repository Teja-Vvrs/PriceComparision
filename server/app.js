require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
app= express();
const PORT = process.env.PORT || 5000;

connectDB();
app.get('/', (req, res) => {
    res.send('This is Server')
}
);


app.listen(PORT, () => {
    console.log('Server is running on port 3000')
});

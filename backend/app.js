const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes=require('./routes/user.routes')
const captianRoutes=require('./routes/captian.routes.js')
const mapsRoutes = require('./routes/maps.routes');
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captian',captianRoutes)
app.use('/maps', mapsRoutes);
module.exports = app;
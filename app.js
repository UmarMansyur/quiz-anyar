require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);



module.exports = app;

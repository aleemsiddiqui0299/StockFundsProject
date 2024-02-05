
const express = require('express')
const conn = require('./mondodb-conn')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());
app.use(cors);

// api to be used later = https://www.alphavantage.co/
app.listen(5000, ()=>console.log('Server connected at 5000 port'));





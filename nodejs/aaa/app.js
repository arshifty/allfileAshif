const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/routes');
app.use('/posts', postRoute);


app.get('/',(req, res) =>{
  console.log('sss');
res.send('home');
});



 mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true } , () =>
 console.log('connected to database ')
 );



app.listen(3000);
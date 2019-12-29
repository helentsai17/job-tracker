const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT ||  5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true)

const connection = mongoose.connection;
connection.once('open',()=> {
    console.log("connect successful with mongo")
});


 const userRouter = require("./routes/users");
 const companyRouter = require("./routes/companies");

 app.use('/users',userRouter);
 app.use('/companies',companyRouter);

app.listen(port,() =>{
    console.log('server is running on port : ${port} ');
});
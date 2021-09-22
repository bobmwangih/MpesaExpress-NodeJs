const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require( 'mongoose');
require("dotenv").config();
const mpesaRoutes = require("./routes/mpesa");

const port = process.env.PORT;


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//db connection
mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected successfully to the DB");
}).catch(err=>console.log(err));

app.use(mpesaRoutes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

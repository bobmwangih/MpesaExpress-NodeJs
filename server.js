const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();
const mpesaRoutes = require("./routes/mpesa");

const port = process.env.PORT;


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(mpesaRoutes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
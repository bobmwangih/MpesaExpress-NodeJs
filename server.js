const prettyjson = require("prettyjson");
const express = require("express");
const bodyparser = require("body-parser");
const { response } = require("express");

const options = {
  noColor: true,
};

//creating express server and configuring the BodyParser on the server

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//webhook endpoint to receive webhooks from safaricom

app.post("/hooks/mpesa", (req, res) => {
  console.log("---------received Mpesa webhook--------");

  // format and dump the request payload recieved from safaricom in the terminal
  console.log(prettyjson.render(req.body, options));
  console.log("-----------------------");

  let message  = {
      "ResponseCode":"00000000",
      "ResponseDesc":"success"
  };

  //response to safaricom message
  res.json(message);

});

const server = app.listen(5000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`server listening on port ${port}`);
});

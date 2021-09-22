const prettyjson = require("prettyjson");

const options = {
    noColor: true,
  };

  
//testing
exports.mpesaWelcome = (req, res) => {
    res.json({ status: "success", message: "Api OK" });
};

//webhook endpoint to receive webhooks from safaricom
exports.mpesaWebhook = (req, res) => {
    console.log("---------received Mpesa webhook--------");

    // format and dump the request payload recieved from safaricom in the terminal
    console.log(prettyjson.render(req.body, options));
    console.log("-----------------------");

    let message = {
        ResponseCode: "00000000",
        ResponseDesc: "success",
    };

    //response to safaricom message
    res.json(message);
};

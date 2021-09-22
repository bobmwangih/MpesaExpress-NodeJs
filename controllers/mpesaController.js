require("dotenv").config();

const prettyjson = require("prettyjson");
const dateTime = require("node-datetime");
const axios = require("axios");


const passkey = process.env.PASSKEY;
const consumerKey = process.env.CONSUMERKEY;
const consumerSecret = process.env.CONSUMERSECRET;
const shortCode = process.env.SHORTCODE;
const url = process.env.AUTH_URL;

const dt = dateTime.create();
const formated = dt.format("YmdHMS");

const newPassword = () => {
    const passString = shortCode + passkey + formated;
    const base64EncodedPassword = Buffer.from(passString).toString("base64");
    return base64EncodedPassword;
};

//getting the access token
exports.token = (req, res, next) => {

        const Authorization = `Basic ${new Buffer.from(
    `${consumerKey}:${consumerSecret}`,
    "utf-8"
  ).toString("base64")}`;

  //Calling the DARAJA authorization API
  axios
    .get(url, {
      headers: {
        Authorization,
      },
    })
    .then((response) => {
      let accessToken = response.data.access_token;
      //sending the token with the next req
      req.token = accessToken;
      next();
    })
    .catch((error) => {
      console.log(error);
    });
};

//stkpush
exports.stkPush = (req, res, next) => {
  const token = req.token;
  const stkUrl = process.env.STK_URL;
  const accountType = process.env.ACCOUNT;
  const phone = process.env.PHONE;
  const callBackURL = process.env.CALLBACKURL;
  const headerToken = `Bearer ${token}`;
  let data = {
    BusinessShortCode: shortCode,
    Password: newPassword(),
    Timestamp: formated,
    TransactionType: "CustomerPayBillOnline",
    Amount: "1",
    PartyA: phone,
    PartyB: shortCode,
    PhoneNumber: phone,
    CallBackURL: callBackURL,
    AccountReference: accountType,
    TransactionDesc: accountType,
  };
  //call the MPESA express Api(Lipa na Mpesa online)
  axios
    .post(stkUrl, data, {
      headers: {
        Authorization: headerToken,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//webhook endpoint to receive webhooks from safaricom
exports.mpesaWebhook = (req, res) => {
  let status = req.body.Body.stkCallback.ResultCode;
  console.log(status);
  //check if payment was successful or not
  if (status <= 0) {
    let message = {
      ResponseCode: status,
      ResponseDesc: "success",
    };
    //response to safaricom message
    res.json(message);
  } else {
    let message = {
      ResponseCode: status,
      ResponseDesc: "fail",
    };
    //response to safaricom message
    res.json(message);
  }
};
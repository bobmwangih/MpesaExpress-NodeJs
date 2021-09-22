const express = require("express");
const router = express.Router();
const { mpesaWebhook, token, stkPush } = require("../controllers/mpesaController");

//Endpoint Route
router.post("/stk/push", token, stkPush);

//callBack Route
router.post("/hooks/mpesa", mpesaWebhook);
module.exports = router;
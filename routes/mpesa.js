const express = require("express");
const router = express.Router();
const { mpesaWebhook, mpesaPassword, token, stkPush } = require("../controllers/mpesaController");


router.get("/token", token);
router.post("/token", token);
router.post("/stk/push", token, stkPush);
router.post("/hooks/mpesa", mpesaWebhook);
module.exports = router;
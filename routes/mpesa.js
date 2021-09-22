const express = require("express");
const router = express.Router();
const { mpesaWelcome } = require("../controllers/mpesaController");

router.get("/api", mpesaWelcome);
router.post("/hooks/mpesa");
module.exports = router;

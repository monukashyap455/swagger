const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();
const {createOrder,paymentCallback} = require("./paymentController"); 

router.get('/createorder',createOrder)

router.post('/payment/callback',paymentCallback)




module.exports = router;
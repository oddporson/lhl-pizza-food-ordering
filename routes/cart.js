const express = require('express');
const router  = express.Router();
const twilioService = require('../services/twilioService')
// refactor below code later
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

router.get("/", (req, res) => {
    res.render("cart");
})

router.get('/order', (req) => {
  //send text
  twilioService.sendMessage(process.env.TWILIO_TEST_PHONE, 'Thank you for your order. We will notify you via SMS when it\'s ready for pick up. Your order number is #12345.')
})

module.exports = router;

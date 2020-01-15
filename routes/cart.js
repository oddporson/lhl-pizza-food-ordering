const express = require('express');
const router  = express.Router();
// refactor below code later
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

router.get("/", (req, res) => {
    res.render("cart");
})

module.exports = router;

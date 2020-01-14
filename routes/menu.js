const express = require('express');
const router  = express.Router();
// refactor below code later
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

router.get("/", (req, res) => {
  db.query(`
  SELECT * FROM products;
  `)
  .then(dbRes => {
    let templateVars = {};
    res.render("menu", {templateVars: dbRes.rows});
  })
})
module.exports = router;
//dbRes => res.json(dbRes.rows)

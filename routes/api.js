var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }],
  })
    .then(data => {
      res.json(data);
    })
});

module.exports = router;

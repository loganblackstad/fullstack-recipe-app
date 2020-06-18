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

router.get('/recipes/:id', function (req, res) {
  // find one by private key
  db.Recipes.findByPk(req.params.id, {
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

router.post('/recipes', (req, res) => {
  // destructure the body
  const { name, review, description, url, likes, vegetarian, vegan, glutenfree, categories } = req.body

  // check for name, review, and url
  if (!name) { res.status(400).json({ error: 'name field is required' }) }
  if (!review) { res.status(400).json({ error: 'review field is required' }) }
  if (!url) { res.status(400).json({ error: 'url field is required' }) }

  // creating a new recipe for all fields (using defaults too)
  db.Recipes.create({
    name: name,
    review: review,
    description: description || '',
    url: url,
    likes: likes || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    glutenfree: glutenfree || false,
  })
    .then(recipe => {
      return recipe.addCategories(categories)
        .then(categories => {
          res.status(201).json(recipe);
        })
    })
    .catch(error => {
      if (error.name === 'SequelizeForeignKeyConstraintError') {
        res.json({ error: 'could not find all categories' })
      } else {
        res.json({ error: 'Server Error' });
        console.log(error);
      }
    })
});

router.delete('/recipes/:id', (req, res) => {
  db.Recipes.destroy({
    where: req.params.id
  })
    .then(recipe => {
      if (!recipe) { res.status(400).json({ error: `could not find recipe with ID: ${id}` }) }

    })



  module.exports = router;

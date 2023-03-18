const express = require("express");
const router = express.Router();
const timer = require('../helpers/timer');
const movies = require('../../data/movies.json');

const artificialSlowdown = 6000;

router.get('/', async (req, res) => {
  await timer(artificialSlowdown);
  res.json({ movies });
});

router.get('/:id', async (req, res) => {
  await timer(artificialSlowdown);
  res.json({
    movies: movies.filter((x) => parseInt(x.id) === parseInt(req.params.id))
  });
});

module.exports = router;

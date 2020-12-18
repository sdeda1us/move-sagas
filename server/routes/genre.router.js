const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let filmId = req.params.id;
  console.log(filmId);
  sqlText = `SELECT g.name, m.title, m.id FROM genres AS g
  JOIN movie_genres AS mg ON mg.genres_id = g.id
  JOIN movies AS m ON m.id = mg.movies_id
  WHERE m.id=$1;`
  pool.query(sqlText,[filmId] )
  .then(result => {console.log(result.rows); res.send(result.rows)})
  .catch(error => {console.log('error retrieving posters', error); res.sendStatus(500)})
});

module.exports = router;
var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/** GET AUTHOR    */
router.get('/author', function(req, res) {
  res.render('author', { author: 'Natxo Miranda' });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

module.exports = router;

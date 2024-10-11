var express = require('express');
var router = express.Router();
const gamesMain = require('../controllers/main'); 
const gamesController = require('../controllers/games'); 
const gamesOthers = require('../controllers/others'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/games', gamesController.getGames);
router.get('/game/game1', gamesController.getGame1);
router.get('/game/game2', gamesController.getGame2);
router.get('/game/game3', gamesController.getGame3);
router.get('/game/game4', gamesController.getGame4);
router.get('/game/game5', gamesController.getGame5);
router.get('/game/game6', gamesController.getGame6);

router.get('/vlogs', gamesOthers.getVlogs);
router.get('/about', gamesOthers.getabout);

router.get('/signin', gamesMain.getSignin);
router.get('/signup', gamesMain.getSignup);

// Handle POST request for sign-in
router.post('/signin', function(req, res) {
  const { username, password } = req.body;

  // Add your authentication logic here (dummy check for now)
  if (username === 'Team**' && password ==='GAMIN') {
    u = 1;
    // Redirect to home page on successful sign in
    res.redirect('/');
  } else {
    // Redirect back to the login page on failure
    res.redirect('/signin');
  }
});

// Handle POST request for sign-up
router.post('/signup', function(req, res) {
  const { username, password } = req.body;

  // Add your sign-up logic here (e.g., saving the user to the database)
  if (username && password) {
    // Registration successful, redirect to home page
    res.redirect('/');
  } else {
    // Redirect back to the sign-up page on failure
    res.redirect('/signup');
  }
});

// Handle GET request for logout
router.get('/logout', function(req, res) {
  u = 0; // Reset the u variable
  // Redirect to signin page
  res.redirect('/signin');
});

module.exports = router;
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
router.get('/game/Tic-Tac-Toe', gamesController.getGame1);
router.get('/game/Rock-Paper-Scissors', gamesController.getGame2);
router.get('/game/Connect-4', gamesController.getGame3);
router.get('/game/Snake-Game', gamesController.getGame4);
router.get('/game/Tetris-Game', gamesController.getGame5);
router.get('/game/Memory-Game', gamesController.getGame6);
router.get('/game/demo', gamesController.getGame7);

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
    let logins=true;
    // Redirect to home page on successful sign in
    res.redirect('/games');
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
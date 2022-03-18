const express = require('express');
const { signin, signup, requireSignIn } = require('../controllers/auth');
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

//router.post('/profile', requireSignIn, (req, res) => {
//	res.status(200).json({ user: 'profile' });
//});

module.exports = router;

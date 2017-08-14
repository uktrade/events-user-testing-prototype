var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



// SIGNING PAGE
router.get('/signin-output', function (req, res) {
  res.redirect('/account');
})



module.exports = router

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });

});
router.post('/post', function(req, res, next) {
  console.log(req.body)
  res.redirect('/')

});
router.get('/a', function(req, res, next) {
  req.flash('error','hiiiii')
  res.redirect('/')

});
module.exports = router;

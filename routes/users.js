const express = require('express')
const router = express.Router()

const User = require(process.env.PWD + '/models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(function(users) {
    res.render('users/index', {users})
  })
})

router.get('/new', function(req, res, next) {
  let user = {
    first_name: null,
    last_name: null,
    email: null,
    birth_date: null
  }
  res.render('users/new', {user})
})

module.exports = router

const express = require('express')
const router = express.Router()

const User = require(process.env.PWD + '/models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(function(users) {
    res.send(users)
  })
})

module.exports = router

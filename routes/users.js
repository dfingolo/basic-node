const express = require('express')
const router = express.Router()

const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(function(users) {
    console.log(users)
  })
})

module.exports = router

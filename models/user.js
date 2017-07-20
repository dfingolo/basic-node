const Sequelize = require('sequelize')
const conn = require('../connection')

module.exports = conn.define('users', {
  first_name: { type: Sequelize.STRING },
  last_name:  { type: Sequelize.STRING },
  email:      { type: Sequelize.STRING },
  birth_date: { type: Sequelize.DATEONLY }
},
{timestamps: false})

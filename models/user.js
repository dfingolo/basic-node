const Sequelize = require('sequelize')
const conn = require(process.env.PWD + '/connection')

module.exports = conn.define('users', {
  first_name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  last_name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notNull: true,
      notEmpty: true,
      equals: 'specific value',
    }
  },
  birth_date: {
    type: Sequelize.DATEONLY,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true
    }
  }
},
{timestamps: false})

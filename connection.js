const Sequelize = require('sequelize')

function Connection() {
  const conn = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: process.env.DB_POOL
  })

  return conn
}

module.exports = Connection()

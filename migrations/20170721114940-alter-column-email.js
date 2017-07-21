'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'email',
      {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    )
  }
}

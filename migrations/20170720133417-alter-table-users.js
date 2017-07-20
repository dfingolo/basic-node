'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'users',
      'birth_date',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    )
  }
}

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'birth_date',
      { type: Sequelize.DATEONLY }
    )
  }
}

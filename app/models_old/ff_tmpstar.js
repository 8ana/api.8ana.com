/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_tmpstar', {
    id1: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    name1: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_tmpstar',
    timestamps: false
  });
};

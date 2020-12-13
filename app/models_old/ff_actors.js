/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_actors', {
    actors_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    actors_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    actors_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_actors',
    timestamps: false,
    indexes: [
      {
        name: "actors_id",
        using: "BTREE",
        fields: [
          { name: "actors_id" },
        ]
      },
      {
        name: "actors_name",
        using: "BTREE",
        fields: [
          { name: "actors_name" },
        ]
      },
      {
        name: "actors_type",
        using: "BTREE",
        fields: [
          { name: "actors_name" },
          { name: "actors_type" },
        ]
      },
      {
        name: "actors_id_2",
        using: "BTREE",
        fields: [
          { name: "actors_name" },
          { name: "actors_id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_vodtv', {
    vodtv_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    vodtv_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    vodtv_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'ff_vodtv',
    timestamps: false,
    indexes: [
      {
        name: "vodtv_name",
        using: "BTREE",
        fields: [
          { name: "vodtv_name" },
        ]
      },
      {
        name: "vodtv_id",
        using: "BTREE",
        fields: [
          { name: "vodtv_id" },
          { name: "vodtv_name" },
        ]
      },
      {
        name: "vodtv_sid",
        using: "BTREE",
        fields: [
          { name: "vodtv_name" },
          { name: "vodtv_sid" },
        ]
      },
    ]
  });
};

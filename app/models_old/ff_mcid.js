/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_mcid', {
    mcid_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mcid_mid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mcid_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    mcid_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_mcid',
    timestamps: false,
    indexes: [
      {
        name: "mcid_id",
        using: "BTREE",
        fields: [
          { name: "mcid_id" },
        ]
      },
      {
        name: "mcid_mid",
        using: "BTREE",
        fields: [
          { name: "mcid_mid" },
          { name: "mcid_sid" },
        ]
      },
      {
        name: "mcid_mid_2",
        using: "BTREE",
        fields: [
          { name: "mcid_mid" },
          { name: "mcid_id" },
        ]
      },
      {
        name: "mcid_sid",
        using: "BTREE",
        fields: [
          { name: "mcid_sid" },
          { name: "mcid_mid" },
          { name: "mcid_id" },
        ]
      },
      {
        name: "mcid_mid_3",
        using: "BTREE",
        fields: [
          { name: "mcid_mid" },
        ]
      },
    ]
  });
};

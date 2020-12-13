/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_ads', {
    ads_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ads_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    ads_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    ads_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ads_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    ads_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ads_uptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_ads',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ads_id" },
        ]
      },
      {
        name: "ads_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ads_id" },
        ]
      },
      {
        name: "ads_title",
        using: "BTREE",
        fields: [
          { name: "ads_title" },
        ]
      },
      {
        name: "ads_name",
        using: "BTREE",
        fields: [
          { name: "ads_name" },
        ]
      },
      {
        name: "create_time",
        using: "BTREE",
        fields: [
          { name: "ads_addtime" },
        ]
      },
      {
        name: "update_time",
        using: "BTREE",
        fields: [
          { name: "ads_uptime" },
        ]
      },
    ]
  });
};

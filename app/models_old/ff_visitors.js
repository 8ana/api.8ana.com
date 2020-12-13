/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_visitors', {
    visitors_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    visitors_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    visitors_userid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    visitors_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    visitors_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_visitors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "visitors_id" },
        ]
      },
      {
        name: "visitors_userid",
        using: "BTREE",
        fields: [
          { name: "visitors_userid" },
        ]
      },
      {
        name: "visitors_uid",
        using: "BTREE",
        fields: [
          { name: "visitors_uid" },
        ]
      },
      {
        name: "visitors_addtime",
        using: "BTREE",
        fields: [
          { name: "visitors_addtime" },
        ]
      },
    ]
  });
};

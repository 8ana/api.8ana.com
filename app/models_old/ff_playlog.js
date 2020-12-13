/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_playlog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    log_vid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    log_sid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    log_urlname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    log_maxnum: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    log_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    log_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    log_pid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_playlog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "log_addtime",
        using: "BTREE",
        fields: [
          { name: "log_addtime" },
        ]
      },
      {
        name: "log_vid",
        using: "BTREE",
        fields: [
          { name: "log_vid" },
          { name: "log_addtime" },
        ]
      },
      {
        name: "log_uid",
        using: "BTREE",
        fields: [
          { name: "log_uid" },
          { name: "log_id" },
        ]
      },
    ]
  });
};

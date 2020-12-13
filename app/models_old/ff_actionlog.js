/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_actionlog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    log_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "执行用户id"
    },
    log_ip: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "执行行为者ip"
    },
    log_action: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    log_url: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "操作URL"
    },
    log_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    log_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    log_info: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "日志备注"
    },
    log_useragent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    log_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "执行状态"
    },
    log_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "执行行为的时间"
    }
  }, {
    sequelize,
    tableName: 'ff_actionlog',
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
        name: "log_uid",
        using: "BTREE",
        fields: [
          { name: "log_uid" },
        ]
      },
      {
        name: "log_ip",
        using: "BTREE",
        fields: [
          { name: "log_ip" },
        ]
      },
      {
        name: "log_url",
        using: "BTREE",
        fields: [
          { name: "log_url" },
        ]
      },
      {
        name: "log_addtime",
        using: "BTREE",
        fields: [
          { name: "log_addtime" },
        ]
      },
    ]
  });
};

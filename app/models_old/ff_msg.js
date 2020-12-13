/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_msg', {
    msg_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msg_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    msg_userid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    msg_title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    msg_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    msg_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    msg_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "查看状态{0:未查看,-1:未通过审核,1:已查看}"
    }
  }, {
    sequelize,
    tableName: 'ff_msg',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "msg_id" },
        ]
      },
      {
        name: "msg_uid",
        using: "BTREE",
        fields: [
          { name: "msg_uid" },
        ]
      },
      {
        name: "msg_userid",
        using: "BTREE",
        fields: [
          { name: "msg_userid" },
        ]
      },
      {
        name: "msg_addtime",
        using: "BTREE",
        fields: [
          { name: "msg_addtime" },
        ]
      },
    ]
  });
};

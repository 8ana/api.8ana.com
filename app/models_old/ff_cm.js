/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_cm', {
    cm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cm_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "评论用户ID"
    },
    cm_username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "评论用户名"
    },
    cm_tid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "多级回复评论ID"
    },
    cm_tuid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "对应二级评论ID"
    },
    cm_pid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "一级评论ID"
    },
    cm_spid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "上级评论的id,从三级开始不为0"
    },
    cm_vid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cm_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    cm_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    cm_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "支持数"
    },
    cm_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "反对数"
    },
    cm_rcid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cm_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cm_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cm_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "评论状态{0:未审核,-1:未通过审核,1:通过审核}"
    }
  }, {
    sequelize,
    tableName: 'ff_cm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cm_id" },
        ]
      },
      {
        name: "cm_uid",
        using: "BTREE",
        fields: [
          { name: "cm_uid" },
        ]
      },
      {
        name: "cm_tid",
        using: "BTREE",
        fields: [
          { name: "cm_tid" },
        ]
      },
      {
        name: "cm_tuid",
        using: "BTREE",
        fields: [
          { name: "cm_tuid" },
        ]
      },
      {
        name: "cm_pid",
        using: "BTREE",
        fields: [
          { name: "cm_pid" },
        ]
      },
      {
        name: "cm_spid",
        using: "BTREE",
        fields: [
          { name: "cm_spid" },
        ]
      },
      {
        name: "cm_rcid",
        using: "BTREE",
        fields: [
          { name: "cm_rcid" },
        ]
      },
      {
        name: "cm_ip",
        using: "BTREE",
        fields: [
          { name: "cm_ip" },
        ]
      },
      {
        name: "cm_addtime",
        using: "BTREE",
        fields: [
          { name: "cm_addtime" },
        ]
      },
      {
        name: "cm_vid",
        using: "BTREE",
        fields: [
          { name: "cm_vid" },
        ]
      },
      {
        name: "cm_sid",
        using: "BTREE",
        fields: [
          { name: "cm_sid" },
        ]
      },
      {
        name: "cm_status",
        using: "BTREE",
        fields: [
          { name: "cm_status" },
        ]
      },
      {
        name: "cm_up",
        using: "BTREE",
        fields: [
          { name: "cm_up" },
        ]
      },
      {
        name: "cm_down",
        using: "BTREE",
        fields: [
          { name: "cm_down" },
        ]
      },
      {
        name: "cm_uid_2",
        using: "BTREE",
        fields: [
          { name: "cm_uid" },
          { name: "cm_status" },
        ]
      },
      {
        name: "cm_uid_3",
        using: "BTREE",
        fields: [
          { name: "cm_uid" },
          { name: "cm_sid" },
          { name: "cm_status" },
        ]
      },
    ]
  });
};

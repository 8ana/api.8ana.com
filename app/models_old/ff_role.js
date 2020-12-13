/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_role', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    role_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    role_star: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    role_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    role_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    role_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    role_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_oid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    role_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    role_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    role_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "role_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "role_addtime",
        using: "BTREE",
        fields: [
          { name: "role_addtime" },
        ]
      },
      {
        name: "role_name",
        using: "BTREE",
        fields: [
          { name: "role_name" },
        ]
      },
      {
        name: "role_star",
        using: "BTREE",
        fields: [
          { name: "role_star" },
        ]
      },
      {
        name: "role_hits",
        using: "BTREE",
        fields: [
          { name: "role_hits" },
        ]
      },
      {
        name: "role_hits_week",
        using: "BTREE",
        fields: [
          { name: "role_hits_week" },
        ]
      },
      {
        name: "role_hits_month",
        using: "BTREE",
        fields: [
          { name: "role_hits_month" },
        ]
      },
      {
        name: "role_hits_day",
        using: "BTREE",
        fields: [
          { name: "role_hits_day" },
        ]
      },
      {
        name: "role_vid",
        using: "BTREE",
        fields: [
          { name: "role_vid" },
          { name: "role_status" },
        ]
      },
      {
        name: "role_cid",
        using: "BTREE",
        fields: [
          { name: "role_cid" },
          { name: "role_addtime" },
          { name: "role_hits" },
          { name: "role_hits_day" },
          { name: "role_hits_week" },
          { name: "role_hits_month" },
          { name: "role_status" },
        ]
      },
      {
        name: "role_oid",
        using: "BTREE",
        fields: [
          { name: "role_vid" },
          { name: "role_oid" },
          { name: "role_status" },
        ]
      },
      {
        name: "role_prty",
        using: "BTREE",
        fields: [
          { name: "role_prty" },
        ]
      },
      {
        name: "role_up",
        using: "BTREE",
        fields: [
          { name: "role_up" },
        ]
      },
      {
        name: "role_down",
        using: "BTREE",
        fields: [
          { name: "role_down" },
        ]
      },
      {
        name: "role_uid",
        using: "BTREE",
        fields: [
          { name: "role_uid" },
        ]
      },
      {
        name: "role_cid_status",
        using: "BTREE",
        fields: [
          { name: "role_status" },
          { name: "role_cid" },
          { name: "role_id" },
        ]
      },
    ]
  });
};

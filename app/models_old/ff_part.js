/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_part', {
    part_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    part_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    part_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    part_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    part_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_uptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_oid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    part_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    part_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    part_lock: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    part_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    part_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    part_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_part',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "part_id" },
        ]
      },
      {
        name: "part_addtime",
        using: "BTREE",
        fields: [
          { name: "part_addtime" },
        ]
      },
      {
        name: "part_hits",
        using: "BTREE",
        fields: [
          { name: "part_hits" },
        ]
      },
      {
        name: "part_prty",
        using: "BTREE",
        fields: [
          { name: "part_prty" },
        ]
      },
      {
        name: "part_vid",
        using: "BTREE",
        fields: [
          { name: "part_vid" },
          { name: "part_status" },
        ]
      },
      {
        name: "part_oid",
        using: "BTREE",
        fields: [
          { name: "part_vid" },
          { name: "part_oid" },
        ]
      },
      {
        name: "part_oid_2",
        using: "BTREE",
        fields: [
          { name: "part_oid" },
        ]
      },
      {
        name: "part_status",
        using: "BTREE",
        fields: [
          { name: "part_status" },
        ]
      },
      {
        name: "part_id",
        using: "BTREE",
        fields: [
          { name: "part_id" },
        ]
      },
      {
        name: "part_uid",
        using: "BTREE",
        fields: [
          { name: "part_uid" },
          { name: "part_id" },
        ]
      },
      {
        name: "part_uptime",
        using: "BTREE",
        fields: [
          { name: "part_uptime" },
        ]
      },
      {
        name: "part_vid_2",
        using: "BTREE",
        fields: [
          { name: "part_vid" },
        ]
      },
      {
        name: "part_oid_3",
        using: "BTREE",
        fields: [
          { name: "part_oid" },
        ]
      },
    ]
  });
};

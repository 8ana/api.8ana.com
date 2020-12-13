/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_gb', {
    gb_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    gb_cid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    gb_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gb_uid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gb_nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    gb_title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      comment: "标题"
    },
    gb_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gb_intro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gb_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gb_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gb_oid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gb_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_gb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gb_id" },
        ]
      },
      {
        name: "gb_uid",
        using: "BTREE",
        fields: [
          { name: "gb_uid" },
        ]
      },
      {
        name: "gb_cid",
        using: "BTREE",
        fields: [
          { name: "gb_cid" },
        ]
      },
      {
        name: "gb_addtime",
        using: "BTREE",
        fields: [
          { name: "gb_addtime" },
        ]
      },
      {
        name: "gb_nickname",
        using: "BTREE",
        fields: [
          { name: "gb_nickname" },
        ]
      },
      {
        name: "gb_ip",
        using: "BTREE",
        fields: [
          { name: "gb_ip" },
        ]
      },
      {
        name: "gb_vid",
        using: "BTREE",
        fields: [
          { name: "gb_vid" },
        ]
      },
    ]
  });
};

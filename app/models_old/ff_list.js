/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_list', {
    list_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    list_pid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    list_oid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    list_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    list_name: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    list_skin: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    list_skin_detail: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "vod_detail"
    },
    list_skin_play: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "vod_play"
    },
    list_skin_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "vod_type"
    },
    list_dir: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: ""
    },
    list_ico: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    list_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    list_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_detail_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_detail_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_detail_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_play_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_play_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_play_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    list_vipplay: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    list_pay: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    list_trysee: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
      {
        name: "list_oid",
        using: "BTREE",
        fields: [
          { name: "list_oid" },
        ]
      },
      {
        name: "list_name",
        using: "BTREE",
        fields: [
          { name: "list_name" },
        ]
      },
      {
        name: "list_dir",
        using: "BTREE",
        fields: [
          { name: "list_dir" },
        ]
      },
      {
        name: "list_pid",
        using: "BTREE",
        fields: [
          { name: "list_pid" },
        ]
      },
      {
        name: "list_sid",
        using: "BTREE",
        fields: [
          { name: "list_sid" },
        ]
      },
    ]
  });
};

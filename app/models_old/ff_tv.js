/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_tv', {
    tv_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tv_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_director: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    tv_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tv_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tv_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_area: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    tv_apiid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    tv_apitype: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_uptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 48
    },
    tv_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    tv_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    tv_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    tv_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    tv_gold: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    tv_golder: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    tv_letters: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tv_playurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_tv',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tv_id" },
        ]
      },
      {
        name: "tv_letters",
        using: "BTREE",
        fields: [
          { name: "tv_letters" },
        ]
      },
      {
        name: "tv_apiid",
        using: "BTREE",
        fields: [
          { name: "tv_apiid" },
        ]
      },
      {
        name: "tv_apitype",
        using: "BTREE",
        fields: [
          { name: "tv_apitype" },
        ]
      },
      {
        name: "tv_name",
        using: "BTREE",
        fields: [
          { name: "tv_name" },
        ]
      },
      {
        name: "tv_addtime",
        using: "BTREE",
        fields: [
          { name: "tv_addtime" },
        ]
      },
      {
        name: "tv_hits",
        using: "BTREE",
        fields: [
          { name: "tv_hits" },
        ]
      },
      {
        name: "tv_lasttime",
        using: "BTREE",
        fields: [
          { name: "tv_lasttime" },
        ]
      },
      {
        name: "tv_hits_month",
        using: "BTREE",
        fields: [
          { name: "tv_hits_month" },
        ]
      },
      {
        name: "tv_cid",
        using: "BTREE",
        fields: [
          { name: "tv_cid" },
          { name: "tv_status" },
          { name: "tv_addtime" },
          { name: "tv_hits" },
          { name: "tv_hits_day" },
          { name: "tv_hits_week" },
          { name: "tv_hits_month" },
        ]
      },
      {
        name: "tv_prty",
        using: "BTREE",
        fields: [
          { name: "tv_prty" },
        ]
      },
    ]
  });
};

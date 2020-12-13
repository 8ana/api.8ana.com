/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_news', {
    news_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    news_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_mid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    news_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_mcid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    news_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_bigpic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_inputer: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    news_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    news_playname: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    news_clarity: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "清晰度"
    },
    news_playtime: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "时长"
    },
    news_playurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_original: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "原文地址"
    },
    news_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    news_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    news_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    news_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    news_jumpurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    news_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    news_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    news_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    news_gold: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    news_golder: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_news',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "news_id" },
        ]
      },
      {
        name: "news_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "news_id" },
        ]
      },
      {
        name: "news_up",
        using: "BTREE",
        fields: [
          { name: "news_up" },
        ]
      },
      {
        name: "news_down",
        using: "BTREE",
        fields: [
          { name: "news_down" },
        ]
      },
      {
        name: "news_gold",
        using: "BTREE",
        fields: [
          { name: "news_gold" },
        ]
      },
      {
        name: "news_hits",
        using: "BTREE",
        fields: [
          { name: "news_hits" },
        ]
      },
      {
        name: "news_hits_day",
        using: "BTREE",
        fields: [
          { name: "news_hits_day" },
        ]
      },
      {
        name: "news_hits_week",
        using: "BTREE",
        fields: [
          { name: "news_hits_week" },
        ]
      },
      {
        name: "news_hits_month",
        using: "BTREE",
        fields: [
          { name: "news_hits_month" },
        ]
      },
      {
        name: "news_addtime",
        using: "BTREE",
        fields: [
          { name: "news_addtime" },
        ]
      },
      {
        name: "news_cid",
        using: "BTREE",
        fields: [
          { name: "news_cid" },
          { name: "news_addtime" },
          { name: "news_hits" },
          { name: "news_hits_day" },
          { name: "news_hits_week" },
          { name: "news_hits_month" },
          { name: "news_status" },
        ]
      },
      {
        name: "news_prty",
        using: "BTREE",
        fields: [
          { name: "news_prty" },
          { name: "news_addtime" },
          { name: "news_hits" },
          { name: "news_hits_day" },
          { name: "news_hits_week" },
          { name: "news_hits_month" },
        ]
      },
      {
        name: "news_name",
        using: "BTREE",
        fields: [
          { name: "news_name" },
        ]
      },
      {
        name: "news_cid_status",
        using: "BTREE",
        fields: [
          { name: "news_status" },
          { name: "news_cid" },
          { name: "news_id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_picture', {
    picture_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    picture_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_titles: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_mid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    picture_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_mcid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    picture_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_bigpic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_inputer: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    picture_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    picture_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    picture_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    picture_jumpurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    picture_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    picture_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    picture_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    picture_gold: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    picture_golder: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_picture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "picture_id" },
        ]
      },
      {
        name: "picture_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "picture_id" },
        ]
      },
      {
        name: "picture_up",
        using: "BTREE",
        fields: [
          { name: "picture_up" },
        ]
      },
      {
        name: "picture_down",
        using: "BTREE",
        fields: [
          { name: "picture_down" },
        ]
      },
      {
        name: "picture_gold",
        using: "BTREE",
        fields: [
          { name: "picture_gold" },
        ]
      },
      {
        name: "picture_hits",
        using: "BTREE",
        fields: [
          { name: "picture_hits" },
        ]
      },
      {
        name: "picture_hits_day",
        using: "BTREE",
        fields: [
          { name: "picture_hits_day" },
        ]
      },
      {
        name: "picture_hits_week",
        using: "BTREE",
        fields: [
          { name: "picture_hits_week" },
        ]
      },
      {
        name: "picture_hits_month",
        using: "BTREE",
        fields: [
          { name: "picture_hits_month" },
        ]
      },
      {
        name: "picture_addtime",
        using: "BTREE",
        fields: [
          { name: "picture_addtime" },
        ]
      },
      {
        name: "picture_cid",
        using: "BTREE",
        fields: [
          { name: "picture_cid" },
          { name: "picture_addtime" },
          { name: "picture_hits" },
          { name: "picture_hits_day" },
          { name: "picture_hits_week" },
          { name: "picture_hits_month" },
          { name: "picture_status" },
        ]
      },
      {
        name: "picture_prty",
        using: "BTREE",
        fields: [
          { name: "picture_prty" },
          { name: "picture_addtime" },
          { name: "picture_hits" },
          { name: "picture_hits_day" },
          { name: "picture_hits_week" },
          { name: "picture_hits_month" },
        ]
      },
      {
        name: "picture_name",
        using: "BTREE",
        fields: [
          { name: "picture_name" },
        ]
      },
      {
        name: "picture_cid_status",
        using: "BTREE",
        fields: [
          { name: "picture_status" },
          { name: "picture_cid" },
          { name: "picture_id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_special', {
    special_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    special_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_bigpic: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    special_pic: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    special_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    special_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    special_keywords: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    special_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    special_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    special_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    special_skin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    special_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    special_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    special_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_gold: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    special_golder: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    special_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    special_letters: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    special_mx: {
      type: DataTypes.STRING(155),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_special',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "special_id" },
        ]
      },
      {
        name: "special_letters",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "special_letters" },
          { name: "special_status" },
        ]
      },
      {
        name: "special_addtime",
        using: "BTREE",
        fields: [
          { name: "special_addtime" },
        ]
      },
      {
        name: "special_hits",
        using: "BTREE",
        fields: [
          { name: "special_hits" },
        ]
      },
      {
        name: "special_hits_day",
        using: "BTREE",
        fields: [
          { name: "special_hits_day" },
        ]
      },
      {
        name: "special_hits_week",
        using: "BTREE",
        fields: [
          { name: "special_hits_week" },
        ]
      },
      {
        name: "special_hits_month",
        using: "BTREE",
        fields: [
          { name: "special_hits_month" },
        ]
      },
      {
        name: "special_cid",
        using: "BTREE",
        fields: [
          { name: "special_cid" },
          { name: "special_status" },
          { name: "special_addtime" },
          { name: "special_hits" },
          { name: "special_hits_day" },
        ]
      },
      {
        name: "special_logo",
        using: "BTREE",
        fields: [
          { name: "special_pic" },
        ]
      },
      {
        name: "special_banner",
        using: "BTREE",
        fields: [
          { name: "special_bigpic" },
        ]
      },
      {
        name: "special_prty",
        using: "BTREE",
        fields: [
          { name: "special_prty" },
        ]
      },
    ]
  });
};

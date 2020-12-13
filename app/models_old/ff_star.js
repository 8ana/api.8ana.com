/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_star', {
    star_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    star_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    star_bm: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    star_mcid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    star_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_wwm: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    star_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_letters: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    star_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    star_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    star_bgcolor: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    star_pig: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_pic_thumb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_bigpic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_xb: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    star_sg: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    star_tz: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    star_mz: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    star_cstime: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: ""
    },
    star_school: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_gs: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_weibo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_work: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_guanxi: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_zy: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: ""
    },
    star_xz: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    star_xx: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    star_area: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    star_gj: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_csd: {
      type: DataTypes.CHAR(40),
      allowNull: false,
      defaultValue: ""
    },
    star_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    star_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    star_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    star_jumpurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    star_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    star_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    star_flower: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_star',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "star_id" },
        ]
      },
      {
        name: "star_hits",
        using: "BTREE",
        fields: [
          { name: "star_hits" },
        ]
      },
      {
        name: "star_hits_day",
        using: "BTREE",
        fields: [
          { name: "star_hits_day" },
        ]
      },
      {
        name: "star_hits_month",
        using: "BTREE",
        fields: [
          { name: "star_hits_month" },
        ]
      },
      {
        name: "star_hits_lasttime",
        using: "BTREE",
        fields: [
          { name: "star_hits_lasttime" },
        ]
      },
      {
        name: "star_addtime",
        using: "BTREE",
        fields: [
          { name: "star_addtime" },
        ]
      },
      {
        name: "star_hits_week",
        using: "BTREE",
        fields: [
          { name: "star_hits_week" },
        ]
      },
      {
        name: "star_cid",
        using: "BTREE",
        fields: [
          { name: "star_cid" },
          { name: "star_status" },
          { name: "star_addtime" },
          { name: "star_hits" },
          { name: "star_hits_day" },
          { name: "star_hits_week" },
          { name: "star_hits_month" },
        ]
      },
      {
        name: "star_area",
        using: "BTREE",
        fields: [
          { name: "star_area" },
          { name: "star_addtime" },
          { name: "star_hits" },
          { name: "star_hits_day" },
          { name: "star_status" },
        ]
      },
      {
        name: "star_letters",
        using: "BTREE",
        fields: [
          { name: "star_letters" },
          { name: "star_status" },
        ]
      },
      {
        name: "star_zy",
        using: "BTREE",
        fields: [
          { name: "star_zy" },
          { name: "star_addtime" },
          { name: "star_hits" },
          { name: "star_hits_day" },
          { name: "star_status" },
        ]
      },
      {
        name: "star_xb",
        using: "BTREE",
        fields: [
          { name: "star_xb" },
          { name: "star_addtime" },
          { name: "star_hits" },
          { name: "star_hits_day" },
          { name: "star_status" },
        ]
      },
      {
        name: "star_prty",
        using: "BTREE",
        fields: [
          { name: "star_prty" },
        ]
      },
      {
        name: "star_name",
        using: "BTREE",
        fields: [
          { name: "star_name" },
        ]
      },
    ]
  });
};

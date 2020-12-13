/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_story', {
    story_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    story_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    story_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    story_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    story_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    story_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_continu: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "连载集数"
    },
    story_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    story_isend: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "连载状态"
    },
    story_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    story_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    story_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    story_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    story_lock: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_story',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
        ]
      },
      {
        name: "story_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
        ]
      },
      {
        name: "story_tvmao",
        using: "BTREE",
        fields: [
          { name: "story_reurl" },
        ]
      },
      {
        name: "story_vid",
        using: "BTREE",
        fields: [
          { name: "story_vid" },
        ]
      },
      {
        name: "story_hits",
        using: "BTREE",
        fields: [
          { name: "story_hits" },
        ]
      },
      {
        name: "story_addtime",
        using: "BTREE",
        fields: [
          { name: "story_addtime" },
        ]
      },
      {
        name: "story_cid",
        using: "BTREE",
        fields: [
          { name: "story_cid" },
          { name: "story_status" },
          { name: "story_addtime" },
          { name: "story_hits" },
          { name: "story_hits_day" },
          { name: "story_hits_week" },
          { name: "story_hits_month" },
        ]
      },
      {
        name: "story_prty",
        using: "BTREE",
        fields: [
          { name: "story_prty" },
        ]
      },
      {
        name: "story_continu",
        using: "BTREE",
        fields: [
          { name: "story_continu" },
        ]
      },
    ]
  });
};

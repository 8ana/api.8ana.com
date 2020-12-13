/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_music', {
    music_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    music_vid: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    music_star: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    music_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    music_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    music_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    music_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    music_lyric: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    music_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    music_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    music_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    music_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_music',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "music_id" },
        ]
      },
      {
        name: "music_star",
        using: "BTREE",
        fields: [
          { name: "music_star" },
        ]
      },
      {
        name: "music_vid",
        using: "BTREE",
        fields: [
          { name: "music_vid" },
        ]
      },
      {
        name: "music_hits",
        using: "BTREE",
        fields: [
          { name: "music_hits" },
        ]
      },
      {
        name: "music_hits_day",
        using: "BTREE",
        fields: [
          { name: "music_hits_day" },
        ]
      },
      {
        name: "music_hits_week",
        using: "BTREE",
        fields: [
          { name: "music_hits_week" },
        ]
      },
      {
        name: "music_hits_month",
        using: "BTREE",
        fields: [
          { name: "music_hits_month" },
        ]
      },
      {
        name: "music_hits_lasttime",
        using: "BTREE",
        fields: [
          { name: "music_hits_lasttime" },
        ]
      },
      {
        name: "music_addtime",
        using: "BTREE",
        fields: [
          { name: "music_addtime" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_lines', {
    lines_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    lines_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_role: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    lines_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    lines_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lines_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    lines_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    lines_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_lines',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lines_id" },
        ]
      },
      {
        name: "lines_vid",
        using: "BTREE",
        fields: [
          { name: "lines_vid" },
        ]
      },
      {
        name: "lines_role",
        using: "BTREE",
        fields: [
          { name: "lines_role" },
        ]
      },
      {
        name: "lines_hits",
        using: "BTREE",
        fields: [
          { name: "lines_hits" },
        ]
      },
      {
        name: "lines_hits_day",
        using: "BTREE",
        fields: [
          { name: "lines_hits_day" },
        ]
      },
      {
        name: "lines_hits_week",
        using: "BTREE",
        fields: [
          { name: "lines_hits_week" },
        ]
      },
      {
        name: "lines_hits_month",
        using: "BTREE",
        fields: [
          { name: "lines_hits_month" },
        ]
      },
      {
        name: "lines_hits_lasttime",
        using: "BTREE",
        fields: [
          { name: "lines_hits_lasttime" },
        ]
      },
      {
        name: "lines_addtime",
        using: "BTREE",
        fields: [
          { name: "lines_addtime" },
        ]
      },
    ]
  });
};

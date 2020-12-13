/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_gold', {
    gold_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gold_vid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gold_sid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    F1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    F2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    F3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    F4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    F5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gold_ip: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mark_uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gold_addtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_gold',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gold_id" },
        ]
      },
      {
        name: "mark_vid",
        using: "BTREE",
        fields: [
          { name: "gold_vid" },
        ]
      },
      {
        name: "mark_addtime",
        using: "BTREE",
        fields: [
          { name: "gold_addtime" },
        ]
      },
      {
        name: "mark_ip",
        using: "BTREE",
        fields: [
          { name: "gold_vid" },
          { name: "gold_ip" },
        ]
      },
    ]
  });
};

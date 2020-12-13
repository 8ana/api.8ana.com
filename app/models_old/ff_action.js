/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_action', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    name: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: "",
      comment: "行为唯一标识"
    },
    title: {
      type: DataTypes.CHAR(80),
      allowNull: false,
      defaultValue: "",
      comment: "行为说明"
    },
    remark: {
      type: DataTypes.CHAR(140),
      allowNull: false,
      defaultValue: "",
      comment: "行为描述"
    },
    rule: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "行为规则"
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "日志规则"
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "",
      comment: "类型"
    },
    status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "状态"
    },
    update_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "修改时间"
    }
  }, {
    sequelize,
    tableName: 'ff_action',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "title",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "update_time",
        using: "BTREE",
        fields: [
          { name: "update_time" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_auth_rule', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "规则id,自增主键"
    },
    pid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "父ID"
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "规则所属module"
    },
    name: {
      type: DataTypes.CHAR(80),
      allowNull: false,
      defaultValue: "",
      comment: "规则唯一英文标识"
    },
    title: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "",
      comment: "规则中文描述"
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "是否为菜单"
    },
    isdev: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sort: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    },
    status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "是否有效(0:无效,1:有效)"
    },
    condition: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "",
      comment: "规则附加条件"
    }
  }, {
    sequelize,
    tableName: 'ff_auth_rule',
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
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
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
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};

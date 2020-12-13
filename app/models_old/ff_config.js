/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "配置ID"
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "配置名称"
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "text",
      comment: "配置类型"
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "配置说明"
    },
    class: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    extra: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "配置值"
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "配置说明"
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "小图标"
    },
    addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "创建时间"
    },
    uptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "更新时间"
    },
    status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "状态"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "配置值"
    },
    other: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    style: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    sort: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'ff_config',
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
        name: "create_time",
        using: "BTREE",
        fields: [
          { name: "addtime" },
        ]
      },
      {
        name: "update_time",
        using: "BTREE",
        fields: [
          { name: "uptime" },
        ]
      },
    ]
  });
};

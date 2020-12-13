/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_attribute', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "字段名"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "字段注释"
    },
    length: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "字段定义"
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "数据类型"
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "字段默认值"
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "备注"
    },
    is_show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "是否显示"
    },
    extra: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "参数"
    },
    model_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "模型id"
    },
    is_must: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "是否必填"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "状态"
    },
    update_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "更新时间"
    },
    create_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "创建时间"
    },
    validate_rule: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    validate_time: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    error_info: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    validate_type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    auto_rule: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    auto_time: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    auto_type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_attribute',
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
        name: "model_id",
        using: "BTREE",
        fields: [
          { name: "model_id" },
        ]
      },
    ]
  });
};

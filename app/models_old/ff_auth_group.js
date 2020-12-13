/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_auth_group', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "用户组id,自增主键"
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "用户组所属模块"
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "组类型"
    },
    title: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "",
      comment: "用户组中文名称"
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "",
      comment: "描述信息"
    },
    status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "用户组状态：为1正常，为0禁用,-1为删除"
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "用户组拥有的规则id，多个规则 , 隔开"
    }
  }, {
    sequelize,
    tableName: 'ff_auth_group',
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
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_auth_extend', {
    group_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      comment: "用户id"
    },
    extend_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "扩展表中数据的id"
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "扩展类型标识 1:栏目分类权限;2:模型权限"
    }
  }, {
    sequelize,
    tableName: 'ff_auth_extend',
    timestamps: false,
    indexes: [
      {
        name: "group_extend_type",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
          { name: "extend_id" },
          { name: "type" },
        ]
      },
      {
        name: "uid",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "group_id",
        using: "BTREE",
        fields: [
          { name: "extend_id" },
        ]
      },
    ]
  });
};

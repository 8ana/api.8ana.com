/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_auth_group_access', {
    uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "用户id"
    },
    group_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      comment: "用户组id"
    }
  }, {
    sequelize,
    tableName: 'ff_auth_group_access',
    timestamps: false,
    indexes: [
      {
        name: "uid",
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "group_id",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};

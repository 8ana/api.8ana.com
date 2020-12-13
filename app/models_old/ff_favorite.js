/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_favorite', {
    favorite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    favorite_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    favorite_uid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    favorite_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    favorite_cid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_favorite',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "favorite_id" },
        ]
      },
      {
        name: "favorite_uid",
        using: "BTREE",
        fields: [
          { name: "favorite_uid" },
        ]
      },
      {
        name: "favorite_addtime",
        using: "BTREE",
        fields: [
          { name: "favorite_addtime" },
        ]
      },
      {
        name: "favorite_cid",
        using: "BTREE",
        fields: [
          { name: "favorite_uid" },
          { name: "favorite_cid" },
        ]
      },
      {
        name: "favorite_vid",
        using: "BTREE",
        fields: [
          { name: "favorite_vid" },
          { name: "favorite_uid" },
        ]
      },
    ]
  });
};

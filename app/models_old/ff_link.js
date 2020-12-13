/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_link', {
    link_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    link_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_logo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_oid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    link_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    link_remark: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    link_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
      {
        name: "link_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
      {
        name: "link_type",
        using: "BTREE",
        fields: [
          { name: "link_type" },
          { name: "link_status" },
        ]
      },
    ]
  });
};

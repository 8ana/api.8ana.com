/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_mcat', {
    m_cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    m_list_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    m_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    m_ename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    m_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    m_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    m_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    m_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_mcat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "m_cid" },
        ]
      },
      {
        name: "m_name",
        using: "BTREE",
        fields: [
          { name: "m_name" },
        ]
      },
      {
        name: "m_ename",
        using: "BTREE",
        fields: [
          { name: "m_ename" },
        ]
      },
      {
        name: "m_list_id",
        using: "BTREE",
        fields: [
          { name: "m_list_id" },
          { name: "m_cid" },
        ]
      },
      {
        name: "m_order",
        using: "BTREE",
        fields: [
          { name: "m_order" },
          { name: "m_list_id" },
        ]
      },
    ]
  });
};

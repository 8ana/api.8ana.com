/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_slide', {
    slide_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    slide_oid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    slide_cid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    slide_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    slide_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    slide_bigpic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    slide_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    slide_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    slide_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    slide_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    slide_vid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_slide',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slide_id" },
        ]
      },
      {
        name: "slide_status",
        using: "BTREE",
        fields: [
          { name: "slide_status" },
        ]
      },
      {
        name: "slide_oid",
        using: "BTREE",
        fields: [
          { name: "slide_oid" },
        ]
      },
      {
        name: "slide_cid",
        using: "BTREE",
        fields: [
          { name: "slide_cid" },
          { name: "slide_id" },
          { name: "slide_status" },
        ]
      },
    ]
  });
};

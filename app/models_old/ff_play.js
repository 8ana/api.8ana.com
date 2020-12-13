/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_play', {
    play_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    play_title: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    play_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    play_oid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    play_copyright: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    play_apiurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    play_downurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    play_encry: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    play_key: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    play_keytime: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    play_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    play_display: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    play_cloud: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_play',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "play_id" },
        ]
      },
      {
        name: "play_title",
        using: "BTREE",
        fields: [
          { name: "play_title" },
        ]
      },
      {
        name: "play_name",
        using: "BTREE",
        fields: [
          { name: "play_name" },
        ]
      },
      {
        name: "play_oid",
        using: "BTREE",
        fields: [
          { name: "play_oid" },
        ]
      },
    ]
  });
};

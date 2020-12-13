/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_topic', {
    topic_did: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    topic_tid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    topic_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    topic_tsid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 10
    },
    topic_oid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    topic_addtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_topic',
    timestamps: false,
    indexes: [
      {
        name: "topic_did",
        using: "BTREE",
        fields: [
          { name: "topic_did" },
        ]
      },
      {
        name: "topic_tid",
        using: "BTREE",
        fields: [
          { name: "topic_tid" },
        ]
      },
      {
        name: "topic_sid",
        using: "BTREE",
        fields: [
          { name: "topic_sid" },
        ]
      },
      {
        name: "topic_oid",
        using: "BTREE",
        fields: [
          { name: "topic_oid" },
        ]
      },
      {
        name: "topic_did_2",
        using: "BTREE",
        fields: [
          { name: "topic_did" },
          { name: "topic_sid" },
          { name: "topic_tsid" },
        ]
      },
      {
        name: "topic_name",
        using: "BTREE",
        fields: [
          { name: "topic_name" },
          { name: "topic_tid" },
        ]
      },
      {
        name: "topic_name_2",
        using: "BTREE",
        fields: [
          { name: "topic_name" },
        ]
      },
      {
        name: "topic_tid_2",
        using: "BTREE",
        fields: [
          { name: "topic_tid" },
          { name: "topic_sid" },
          { name: "topic_tsid" },
          { name: "topic_oid" },
        ]
      },
      {
        name: "topic_tid_3",
        using: "BTREE",
        fields: [
          { name: "topic_tid" },
          { name: "topic_sid" },
          { name: "topic_tsid" },
        ]
      },
    ]
  });
};

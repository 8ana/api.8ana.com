/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_card', {
    card_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    card_number: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    card_score: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    card_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    card_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    card_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    card_usetime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "card_id" },
        ]
      },
      {
        name: "card_number",
        using: "BTREE",
        fields: [
          { name: "card_number" },
        ]
      },
      {
        name: "card_uid",
        using: "BTREE",
        fields: [
          { name: "card_uid" },
        ]
      },
      {
        name: "card_addtime",
        using: "BTREE",
        fields: [
          { name: "card_addtime" },
        ]
      },
      {
        name: "card_usetime",
        using: "BTREE",
        fields: [
          { name: "card_usetime" },
        ]
      },
    ]
  });
};

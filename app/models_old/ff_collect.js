/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_collect', {
    collect_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    collect_cid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    collect_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    collect_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    collect_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    collect_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    collect_nature: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    collect_other: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    collect_oid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    collect_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    collect_admin: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    collect_remark: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ff_collect',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collect_id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_urls', {
    urls_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    urls_reurl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ff_urls',
    timestamps: false,
    indexes: [
      {
        name: "urls_id",
        using: "BTREE",
        fields: [
          { name: "urls_id" },
        ]
      },
      {
        name: "urls_reurl",
        using: "BTREE",
        fields: [
          { name: "urls_reurl", length: 333 },
        ]
      },
    ]
  });
};

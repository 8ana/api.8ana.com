/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_timming', {
    timming_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "任务ID"
    },
    timming_name: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: "",
      comment: "任务名称"
    },
    timming_remark: {
      type: DataTypes.CHAR(140),
      allowNull: false,
      defaultValue: "",
      comment: "任务描述"
    },
    timming_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "任务类型"
    },
    timming_apiurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "任务ID"
    },
    timming_cjtime: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "采集时间"
    },
    timming_htmlaction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timming_htmltime: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "采集时间"
    },
    timming_password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "",
      comment: "任务密码"
    },
    timming_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "任务状态"
    },
    timming_uptime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "运行时间"
    },
    timming_addtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "添加时间"
    }
  }, {
    sequelize,
    tableName: 'ff_timming',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "timming_id" },
        ]
      },
    ]
  });
};

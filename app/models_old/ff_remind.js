/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_remind', {
    remind_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    remind_sid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "模型ID"
    },
    remind_vid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "影片id"
    },
    remind_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "用户id"
    },
    remind_cid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "分类ID"
    },
    remind_tags: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "标签"
    },
    remind_content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
      comment: "短评"
    },
    remind_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "IP地址"
    },
    remind_rating: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "评分1~5"
    },
    remind_interest: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "想看1|看过2|在看3|搁置4|抛弃5"
    },
    remind_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "添加时间"
    },
    remind_uptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "订阅的影片最后更新时间"
    }
  }, {
    sequelize,
    tableName: 'ff_remind',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "remind_id" },
        ]
      },
      {
        name: "remind_addtime",
        using: "BTREE",
        fields: [
          { name: "remind_addtime" },
        ]
      },
      {
        name: "remind_uptime",
        using: "BTREE",
        fields: [
          { name: "remind_uptime" },
        ]
      },
      {
        name: "remind_vid",
        using: "BTREE",
        fields: [
          { name: "remind_vid" },
          { name: "remind_uid" },
        ]
      },
      {
        name: "remind_uid",
        using: "BTREE",
        fields: [
          { name: "remind_uid" },
          { name: "remind_cid" },
        ]
      },
      {
        name: "remind_uid_2",
        using: "BTREE",
        fields: [
          { name: "remind_uid" },
          { name: "remind_id" },
        ]
      },
    ]
  });
};

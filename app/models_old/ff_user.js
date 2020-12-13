/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_user', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_uid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_admin: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    user_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    user_password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    user_nickname: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: ""
    },
    user_avatar: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    user_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    user_isemail: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:不需要验证,1:邮箱以验证,2:邮箱需要验证"
    },
    user_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    user_ismobile: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "0:不需要验证1:手机以验证,2:手机需要验证"
    },
    user_salt: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    user_amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    user_remind: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "是否开通订阅提醒"
    },
    user_isstation: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "是否开通站内订阅提醒"
    },
    user_score: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_viptime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_groupid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    qq_openid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    qq_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    weibo_openid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    weibo_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    weiqrcode_openid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    weiqrcode_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_birthday: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      defaultValue: ""
    },
    user_sex: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_prov: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    user_city: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    user_area: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    user_industry: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_edu: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_signature: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user_login: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_reg_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_reg_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_last_login_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_last_login_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "weibo_openid",
        using: "BTREE",
        fields: [
          { name: "weibo_openid" },
        ]
      },
      {
        name: "weiqrcode_openid",
        using: "BTREE",
        fields: [
          { name: "weiqrcode_openid" },
        ]
      },
      {
        name: "qq_openid",
        using: "BTREE",
        fields: [
          { name: "qq_openid" },
        ]
      },
      {
        name: "user_reg_ip",
        using: "BTREE",
        fields: [
          { name: "user_reg_ip" },
        ]
      },
      {
        name: "user_reg_time",
        using: "BTREE",
        fields: [
          { name: "user_reg_time" },
        ]
      },
      {
        name: "user_last_login_ip",
        using: "BTREE",
        fields: [
          { name: "user_last_login_ip" },
        ]
      },
      {
        name: "user_last_login_time",
        using: "BTREE",
        fields: [
          { name: "user_last_login_time" },
        ]
      },
      {
        name: "user_admin",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "user_admin" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "user_status" },
        ]
      },
      {
        name: "user_name",
        using: "BTREE",
        fields: [
          { name: "user_name" },
          { name: "user_status" },
        ]
      },
      {
        name: "user_mobile",
        using: "BTREE",
        fields: [
          { name: "user_mobile" },
          { name: "user_status" },
        ]
      },
      {
        name: "user_email",
        using: "BTREE",
        fields: [
          { name: "user_email" },
          { name: "user_status" },
        ]
      },
    ]
  });
};

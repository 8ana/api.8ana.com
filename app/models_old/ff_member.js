/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_member', {
    member_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "用户ID"
    },
    member_groupid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    member_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      comment: "用户名"
    },
    member_password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "",
      comment: "用户密码"
    },
    member_nickname: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: "",
      comment: "昵称"
    },
    member_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    member_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "邮箱地址"
    },
    member_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "手机号码"
    },
    member_qq: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: "",
      comment: "qq号"
    },
    member_salt: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "密码盐值"
    },
    member_login: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "登录次数"
    },
    member_reg_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "注册IP"
    },
    member_reg_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "注册时间"
    },
    member_last_login_ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "最后登录IP"
    },
    member_last_login_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "最后登录时间"
    },
    member_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "会员状态"
    }
  }, {
    sequelize,
    tableName: 'ff_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "member_name",
        using: "BTREE",
        fields: [
          { name: "member_name" },
        ]
      },
      {
        name: "member_nickname",
        using: "BTREE",
        fields: [
          { name: "member_nickname" },
        ]
      },
      {
        name: "member_reg_ip",
        using: "BTREE",
        fields: [
          { name: "member_reg_ip" },
        ]
      },
      {
        name: "member_reg_time",
        using: "BTREE",
        fields: [
          { name: "member_reg_time" },
        ]
      },
      {
        name: "member_last_login_ip",
        using: "BTREE",
        fields: [
          { name: "member_last_login_ip" },
        ]
      },
      {
        name: "member_last_login_time",
        using: "BTREE",
        fields: [
          { name: "member_last_login_time" },
        ]
      },
    ]
  });
};

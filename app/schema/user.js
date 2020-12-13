'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT, STRING, CHAR, DECIMAL, TINYINT, SMALLINT, BIGINT } = app.Sequelize;

  return {
    user_id: {
      autoIncrement: true,
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    user_uid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_admin: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    user_name: {
      type: STRING(32),
      allowNull: false,
      defaultValue: '',
    },
    user_password: {
      type: STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    user_nickname: {
      type: CHAR(16),
      allowNull: false,
      defaultValue: '',
    },
    user_avatar: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    user_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    user_email: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    user_isemail: {
      type: TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: '0:不需要验证,1:邮箱以验证,2:邮箱需要验证',
    },
    user_mobile: {
      type: STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    user_ismobile: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '0:不需要验证1:手机以验证,2:手机需要验证',
    },
    user_salt: {
      type: STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    user_amount: {
      type: DECIMAL(8, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    user_remind: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否开通订阅提醒',
    },
    user_isstation: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '是否开通站内订阅提醒',
    },
    user_score: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_viptime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_groupid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    qq_openid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    qq_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    weibo_openid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    weibo_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    weiqrcode_openid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    weiqrcode_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    user_birthday: {
      type: CHAR(15),
      allowNull: false,
      defaultValue: '',
    },
    user_sex: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_prov: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    user_city: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    user_area: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    user_industry: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_edu: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_signature: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    user_login: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_reg_ip: {
      type: BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_reg_time: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_last_login_ip: {
      type: BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_last_login_time: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

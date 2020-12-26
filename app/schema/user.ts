export default app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT, STRING, CHAR, DECIMAL, TINYINT, SMALLINT, BIGINT, DATE, NOW } = app.Sequelize;

  return {
    user_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    user_admin: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    user_name: {
      type: STRING(32),
      allowNull: false,
    },
    user_password: {
      type: STRING(64),
      allowNull: false,
    },
    user_nickname: {
      type: CHAR(16),
      defaultValue: '',
    },
    user_avatar: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    user_pic: STRING(255),
    user_email: STRING(100),
    user_isemail: {
      type: TINYINT,
      defaultValue: 0,
      comment: '0:不需要验证,1:邮箱以验证,2:邮箱需要验证',
    },
    user_mobile: STRING(20),
    user_ismobile: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
      comment: '0:不需要验证1:手机以验证,2:手机需要验证',
    },
    user_salt: {
      type: STRING(10),
      allowNull: false,
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
    qq_openid: STRING(255),
    qq_pic: STRING(255),
    weibo_openid: STRING(255),
    weibo_pic: STRING(255),
    weiqrcode_openid: STRING(255),
    weiqrcode_pic: STRING(255),
    user_birthday: CHAR(15),
    user_sex: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_prov: CHAR(10),
    user_city: CHAR(10),
    user_area: CHAR(10),
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
    user_signature: STRING(255),
    user_login: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_reg_ip: {
      type: BIGINT.UNSIGNED,
      allowNull: false,
    },
    user_reg_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    user_last_login_ip: {
      type: BIGINT.UNSIGNED,
      allowNull: false,
    },
    user_last_login_time: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    user_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

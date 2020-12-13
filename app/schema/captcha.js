'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT, STRING, TINYINT, BIGINT } = app.Sequelize;

  // 定义模型
  return {
    captcha_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    captcha_uid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    captcha_captcha: { type: INTEGER(6).UNSIGNED, defaultValue: 0, allowNull: false },
    captcha_type: { type: TINYINT(1).UNSIGNED, defaultValue: 0 },
    captcha_ip: { type: BIGINT(20).UNSIGNED, defaultValue: '', allowNull: false },
    captcha_email: { type: STRING, defaultValue: '', allowNull: false },
    captcha_phone: { type: STRING, defaultValue: '', allowNull: false },
    captcha_code: { type: STRING, defaultValue: '', allowNull: false },
    captcha_create_at: { type: INTEGER(11).UNSIGNED, defaultValue: 0, allowNull: false },
  };
};

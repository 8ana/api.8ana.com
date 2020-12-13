'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT, STRING, TINYINT, BIGINT } = app.Sequelize;

  // 定义模型
  const Captcha = app.model.define(`${app.config.prefix}captcha`, {
    captcha_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    captcha_uid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    captcha_captcha: { type: INTEGER(6).UNSIGNED, defaultValue: 0, allowNull: false },
    captcha_type: { type: TINYINT(1).UNSIGNED, defaultValue: 0 },
    captcha_ip: { type: BIGINT(20).UNSIGNED, defaultValue: '', allowNull: false },
    captcha_email: { type: STRING, defaultValue: '', allowNull: false },
    captcha_phone: { type: STRING, defaultValue: '', allowNull: false },
    captcha_code: { type: STRING, defaultValue: '', allowNull: false },
    captcha_create_at: { type: INTEGER(11).UNSIGNED, defaultValue: 0, allowNull: false },
  }, {
    // 禁用 captcha_create_at 自动转换，使用 mysql 管理
    // 方便后续迁移 ORM 等需求
    timestamps: false,
  });

  return Captcha;
};

/**
 * CREATE TABLE `ff_ captcha` (
  `captcha_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `captcha_uid` int(10) unsigned DEFAULT '0',
  `captcha_captcha` int(6) unsigned DEFAULT '0',
  `captcha_type` tinyint(1) DEFAULT '0',
  `captcha_ip` bigint(20) unsigned DEFAULT '0',
  `captcha_email` varchar(255) DEFAULT '',
  `captcha_phone` varchar(255) DEFAULT '',
  `captcha_code` varchar(255) DEFAULT '',
  `captcha_create_at` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`captcha_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 */

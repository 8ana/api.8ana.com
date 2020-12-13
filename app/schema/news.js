/* jshint indent: 2 */
'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, TINYINT, CHAR, TEXT, DECIMAL, INTEGER } = app.Sequelize;

  return {
    news_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    news_cid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_uid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_mid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    news_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_mcid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_tag: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_label: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_color: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    news_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_bigpic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_inputer: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    news_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_remark: {
      type: TEXT,
      allowNull: false,
    },
    news_playname: {
      type: STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    news_clarity: {
      type: STRING(10),
      allowNull: true,
      comment: '清晰度',
    },
    news_playtime: {
      type: STRING(10),
      allowNull: true,
      comment: '时长',
    },
    news_playurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_original: {
      type: STRING(255),
      allowNull: true,
      comment: '原文地址',
    },
    news_content: {
      type: TEXT,
      allowNull: false,
    },
    news_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    news_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    news_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    news_jumpurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    news_letter: {
      type: CHAR(2),
      allowNull: false,
      defaultValue: '',
    },
    news_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    news_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    news_gold: {
      type: DECIMAL(3, 1),
      allowNull: false,
      defaultValue: 0.0,
    },
    news_golder: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, TEXT, TINYINT, STRING, INTEGER, SMALLINT, DECIMAL, CHAR } = app.Sequelize;

  return {
    picture_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    picture_cid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_titles: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_mid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    picture_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_mcid: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_tag: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_label: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_color: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    picture_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_bigpic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_inputer: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    picture_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_remark: {
      type: TEXT,
      allowNull: false,
    },
    picture_content: {
      type: TEXT,
      allowNull: false,
    },
    picture_image: {
      type: TEXT,
      allowNull: false,
    },
    picture_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    picture_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    picture_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    picture_jumpurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    picture_letter: {
      type: CHAR(2),
      allowNull: false,
      defaultValue: '',
    },
    picture_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    picture_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    picture_gold: {
      type: DECIMAL(3, 1),
      allowNull: false,
      defaultValue: 0.0,
    },
    picture_golder: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

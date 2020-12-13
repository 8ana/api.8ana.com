'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, TINYINT, CHAR, TEXT, INTEGER } = app.Sequelize;

  return {
    star_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    star_cid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_name: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    star_bm: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    star_mcid: {
      type: STRING(255),
      allowNull: false,
    },
    star_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_wwm: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    star_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_letters: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    star_tag: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_label: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_letter: {
      type: CHAR(2),
      allowNull: false,
      defaultValue: '',
    },
    star_color: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    star_bgcolor: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    star_pig: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_pic_thumb: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_bigpic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_xb: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    star_sg: {
      type: CHAR(20),
      allowNull: false,
      defaultValue: '',
    },
    star_tz: {
      type: STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    star_mz: {
      type: STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    star_cstime: {
      type: CHAR(30),
      allowNull: false,
      defaultValue: '',
    },
    star_school: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_gs: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_weibo: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_work: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_guanxi: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_zy: {
      type: CHAR(50),
      allowNull: false,
      defaultValue: '',
    },
    star_xz: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    star_xx: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    star_area: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    star_gj: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_csd: {
      type: CHAR(40),
      allowNull: false,
      defaultValue: '',
    },
    star_content: {
      type: TEXT,
      allowNull: false,
    },
    star_info: {
      type: TEXT,
      allowNull: false,
    },
    star_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    star_jumpurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    star_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    star_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    star_flower: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

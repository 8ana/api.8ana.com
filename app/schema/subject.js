'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, CHAR, TINYINT, DECIMAL, TEXT, INTEGER, BIGINT } = app.Sequelize;

  return {
    vod_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    vod_cid: {
      type: SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    vod_pid: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_mcid: {
      type: STRING(222),
      defaultValue: '',
    },
    vod_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_foreign: {
      type: STRING(255),
      defaultValue: '',
      comment: '操作人',
    },
    vod_aliases: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_tag: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_label: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_color: {
      type: CHAR(8),
      defaultValue: '',
    },
    vod_actor: {
      type: STRING(8000),
      defaultValue: '',
    },
    vod_director: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_content: {
      type: TEXT,
      defaultValue: '',
      allowNull: false,
    },
    vod_pic: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_pic_thumb: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_bigpic: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_website: {
      type: STRING(255),
      defaultValue: '',
      comment: '官网',
    },
    vod_original: {
      type: STRING(255),
      defaultValue: '',
      comment: '漫画原作',
    },
    vod_company: {
      type: STRING(255),
      defaultValue: '',
      comment: '制作公司',
    },
    vod_remark: {
      type: STRING(255),
      defaultValue: '',
      comment: '简评',
    },
    vod_diantai: {
      type: STRING(50),
      defaultValue: '',
    },
    vod_tvcont: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_tvexp: {
      type: TEXT,
      defaultValue: '',
    },
    vod_prty: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_time: {
      type: STRING(10),
      defaultValue: '',
      comment: '时间',
    },
    vod_area: {
      type: CHAR(10),
      defaultValue: '',
    },
    vod_language: {
      type: CHAR(10),
      defaultValue: '',
    },
    vod_year: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_continu: {
      type: STRING(20),
      defaultValue: '0',
    },
    vod_total: {
      type: STRING(20),
      defaultValue: '',
    },
    vod_isend: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_addtime: {
      type: BIGINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_hits: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_hits_lasttime: {
      type: BIGINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_stars: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_status: {
      type: TINYINT.UNSIGNED,
      defaultValue: 1,
    },
    vod_lock: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_copyright: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_up: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_down: {
      type: MEDIUMINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_play: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_playoid: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_server: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_url: {
      type: TEXT,
      defaultValue: '',
    },
    vod_inputer: {
      type: STRING(30),
      defaultValue: '',
    },
    vod_reurl: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_jumpurl: {
      type: STRING(150),
      defaultValue: '',
    },
    vod_letter: {
      type: CHAR(2),
      defaultValue: '',
    },
    vod_skin: {
      type: STRING(30),
      defaultValue: '',
    },
    vod_gold: {
      type: DECIMAL(3, 1),
      defaultValue: 0.0,
    },
    vod_golder: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_isfilm: {
      type: TINYINT.UNSIGNED,
      defaultValue: 1,
    },
    vod_filmtime: {
      type: BIGINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_length: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_weekday: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    reid: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    HasGetComment: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_letters: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_stitle: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_keywords: {
      type: STRING(255),
      defaultValue: '',
      comment: '关键字',
    },
    vod_description: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_doubanid: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    vod_baike: {
      type: STRING(255),
      defaultValue: '',
    },
    vod_vipplay: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_pay: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_downpay: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_trysee: {
      type: SMALLINT.UNSIGNED,
      defaultValue: 0,
    },
    vod_uid: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  };
};

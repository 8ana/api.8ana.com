/* jshint indent: 2 */
export default app => {
  // 获取数据类型
  const { INTEGER, TINYINT, STRING, MEDIUMINT, SMALLINT, CHAR, TEXT, DECIMAL } = app.Sequelize;

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
      allowNull: true,
      defaultValue: 0,
    },
    vod_mcid: {
      type: STRING(222),
      allowNull: false,
      defaultValue: '',
    },
    vod_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_foreign: {
      type: STRING(255),
      allowNull: true,
      comment: '操作人',
    },
    vod_aliases: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_tag: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_label: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_color: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    vod_actor: {
      type: STRING(8000),
      allowNull: false,
      defaultValue: '',
    },
    vod_director: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_content: {
      type: TEXT,
      allowNull: false,
    },
    vod_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_pic_thumb: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_bigpic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_website: {
      type: STRING(255),
      allowNull: false,
      comment: '官网',
    },
    vod_original: {
      type: STRING(255),
      allowNull: false,
      comment: '漫画原作',
    },
    vod_company: {
      type: STRING(255),
      allowNull: false,
      comment: '制作公司',
    },
    vod_remark: {
      type: STRING(255),
      allowNull: true,
      comment: '简评',
    },
    vod_diantai: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    vod_tvcont: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_tvexp: {
      type: TEXT,
      allowNull: false,
    },
    vod_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_time: {
      type: STRING(10),
      allowNull: false,
      comment: '时间',
    },
    vod_area: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    vod_language: {
      type: CHAR(10),
      allowNull: false,
      defaultValue: '',
    },
    vod_year: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    vod_continu: {
      type: STRING(20),
      allowNull: true,
      defaultValue: '0',
    },
    vod_total: {
      type: STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    vod_isend: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    vod_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_status: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
    },
    vod_lock: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_copyright: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_play: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_playoid: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_server: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_url: {
      type: TEXT,
      allowNull: false,
    },
    vod_inputer: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    vod_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_jumpurl: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    vod_letter: {
      type: CHAR(2),
      allowNull: false,
      defaultValue: '',
    },
    vod_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    vod_gold: {
      type: DECIMAL(3, 1),
      allowNull: true,
      defaultValue: 0.0,
    },
    vod_golder: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_isfilm: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
    },
    vod_filmtime: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_length: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_weekday: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    reid: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_letters: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_stitle: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: '关键字',
    },
    vod_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_doubanid: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_baike: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    vod_vipplay: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_pay: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_downpay: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_trysee: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    vod_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
  };
};

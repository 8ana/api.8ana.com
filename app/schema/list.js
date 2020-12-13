'use strict';

module.exports = app => {
  // 获取数据类型
  const { SMALLINT, TINYINT, CHAR, STRING } = app.Sequelize;

  return {
    list_id: {
      autoIncrement: true,
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    list_pid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    list_oid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    list_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    list_name: {
      type: CHAR(20),
      allowNull: false,
      defaultValue: '',
    },
    list_skin: {
      type: CHAR(20),
      allowNull: false,
      defaultValue: '',
    },
    list_skin_detail: {
      type: STRING(20),
      allowNull: false,
      defaultValue: 'vod_detail',
    },
    list_skin_play: {
      type: STRING(20),
      allowNull: false,
      defaultValue: 'vod_play',
    },
    list_skin_type: {
      type: STRING(20),
      allowNull: false,
      defaultValue: 'vod_type',
    },
    list_dir: {
      type: STRING(90),
      allowNull: false,
      defaultValue: '',
    },
    list_ico: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    list_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    list_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_detail_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_detail_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_detail_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_play_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_play_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_play_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    list_jumpurl: {
      type: STRING(150),
      allowNull: false,
      defaultValue: '',
    },
    list_vipplay: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    list_pay: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    list_trysee: {
      type: SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
  };
};

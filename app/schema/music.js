'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, TEXT, TINYINT, STRING, INTEGER } = app.Sequelize;

  return {
    music_id: {
      autoIncrement: true,
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: '主键',
    },
    music_vid: {
      type: MEDIUMINT,
      allowNull: false,
      defaultValue: 0,
    },
    music_star: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    music_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    music_type: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    music_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    music_url: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    music_lyric: {
      type: TEXT,
      allowNull: false,
    },
    music_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    music_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    music_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    music_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

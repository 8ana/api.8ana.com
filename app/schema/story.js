'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, TEXT, TINYINT, INTEGER } = app.Sequelize;

  return {
    story_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    story_cid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_vid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    story_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    story_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    story_content: {
      type: TEXT,
      allowNull: false,
    },
    story_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_continu: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '连载集数',
    },
    story_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    story_isend: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '连载状态',
    },
    story_name: {
      type: STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    story_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    story_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    story_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    story_lock: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

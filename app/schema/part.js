'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, STRING, TINYINT, TEXT, INTEGER } = app.Sequelize;

  return {
    part_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    part_vid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    part_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    part_content: {
      type: TEXT,
      allowNull: false,
    },
    part_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_uptime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_oid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    part_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    part_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    part_lock: {
      type: TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    part_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    part_reurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    part_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

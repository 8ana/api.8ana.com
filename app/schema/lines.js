'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, TINYINT, STRING, INTEGER } = app.Sequelize;

  return {
    lines_id: {
      autoIncrement: true,
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: '主键',
    },
    lines_vid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_role: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    lines_content: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    lines_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    lines_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    lines_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    lines_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

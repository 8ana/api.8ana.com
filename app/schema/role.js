'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, TINYINT, CHAR, TEXT, INTEGER } = app.Sequelize;

  return {
    role_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    role_cid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_vid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_prty: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    role_star: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    role_content: {
      type: TEXT,
      allowNull: false,
    },
    role_pic: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    role_color: {
      type: CHAR(8),
      allowNull: false,
      defaultValue: '',
    },
    role_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_hits_lasttime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_up: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_down: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_oid: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    role_stars: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    role_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    role_skin: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    role_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, SMALLINT, STRING, TINYINT, DATE, NOW } = app.Sequelize;

  return {
    topic_did: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    topic_name: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    topic_tid: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    topic_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    topic_tsid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 10,
    },
    topic_oid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    topic_addtime: {
      type: DATE,
      defaultValue: NOW,
    },
  };
};

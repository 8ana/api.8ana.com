'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, STRING, SMALLINT, TINYINT } = app.Sequelize;

  return {
    play_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    play_title: {
      type: STRING(25),
      allowNull: false,
      defaultValue: '',
    },
    play_name: {
      type: STRING(25),
      allowNull: false,
      defaultValue: '',
    },
    play_oid: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    play_copyright: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    play_apiurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    play_downurl: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    play_encry: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    play_key: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    play_keytime: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    play_status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    play_display: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    play_cloud: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

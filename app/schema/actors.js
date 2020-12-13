'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, STRING, TINYINT } = app.Sequelize;

  return {
    actors_id: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    actors_type: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    actors_name: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
  };
};

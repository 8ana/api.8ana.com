'use strict';

module.exports = app => {
  // 获取数据类型
  const { MEDIUMINT, STRING, TINYINT, INTEGER } = app.Sequelize;

  return {
    mcid_id: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    mcid_mid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    mcid_name: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    mcid_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

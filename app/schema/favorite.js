'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT } = app.Sequelize;

  // 定义模型
  return {
    favorite_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    favorite_vid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_uid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_cid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_addtime: { type: INTEGER(10).UNSIGNED, defaultValue: 0, allowNull: false },
  };
};

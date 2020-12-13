'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT } = app.Sequelize;

  // 定义模型
  const Favorite = app.model.define(`${app.config.prefix}favorite`, {
    favorite_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    favorite_vid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_uid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_cid: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, allowNull: false },
    favorite_addtime: { type: INTEGER(10).UNSIGNED, defaultValue: 0, allowNull: false },
  }, {
    // 禁用 favorite_addtime 自动转换，使用 mysql 管理
    // 方便后续迁移 ORM 等需求
    timestamps: false,
  });

  return Favorite;
};

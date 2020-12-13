'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, TINYINT, BIGINT, NOW } = app.Sequelize;
  // 定义模型 用户收藏数据表
  return {
    history_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    history_sid: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 1, comment: '模型ID' },
    history_cid: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '分类ID' },
    history_uid: { type: INTEGER(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户ID' },
    history_type: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联内容的ID' },
    history_ip: { type: BIGINT(20).UNSIGNED, allowNull: false, defaultValue: 0, comment: 'IP' },
    history_addtime: { type: INTEGER(11).UNSIGNED, allowNull: false, defalutValue: NOW, comment: '添加时间' },
  };
};

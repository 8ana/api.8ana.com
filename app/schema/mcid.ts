export default app => {
  // 获取数据类型
  const { TINYINT, INTEGER } = app.Sequelize;

  return {
    id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true },
    aid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联内容id' },
    mid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '小分类id' },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '模型 id' },
  };
};

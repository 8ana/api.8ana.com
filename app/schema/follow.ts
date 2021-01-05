export default app => {
  // 获取数据类型
  const { INTEGER, BIGINT } = app.Sequelize;

  // 定义模型
  return {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    uid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '被关联用户 id' },
    tuid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '关联用户 id' },
    ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'ip' },
  };
};

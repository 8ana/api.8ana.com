export default app => {
  // 获取数据类型
  const { INTEGER, STRING, TINYINT } = app.Sequelize;

  return {
    id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
    name: { type: STRING(255), allowNull: false, defaultValue: '', comment: '名字' },
    aid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联 id' },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '模型 id' },
  };
};

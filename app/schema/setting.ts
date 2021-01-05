export default app => {
  // 获取数据类型
  const { TEXT, STRING } = app.Sequelize;

  return {
    key: { type: STRING(100), allowNull: false, primaryKey: true, comment: '设置项 key' },
    value: { type: TEXT, allowNull: false, comment: '设置项 value' },
    tag: { type: STRING(100), allowNull: false, defaultValue: 'default', comment: '设置项 tag' },
  };
};

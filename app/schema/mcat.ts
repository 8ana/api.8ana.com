export default app => {
  // 获取数据类型
  const { INTEGER, STRING, TINYINT } = app.Sequelize;

  return {
    id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
    cid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '父类id' },
    name: { type: STRING(30), allowNull: false, defaultValue: '', comment: '名字' },
    title: { type: STRING(30), allowNull: false, defaultValue: '', comment: '英文名' },
    rank: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '排序' },
  };
};

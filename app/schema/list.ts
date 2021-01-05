export default app => {
  // 获取数据类型
  const { TINYINT, INTEGER, STRING } = app.Sequelize;

  return {
    id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
    pid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '父类id' },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '模型id' },
    name: { type: STRING(30), allowNull: false, defaultValue: '', comment: '名字' },
    dir: { type: STRING(90), allowNull: false, defaultValue: '', comment: '目录' },
    icon: { type: STRING(50), allowNull: false, defaultValue: '', comment: '图标' },
    seo_title: { type: STRING(255), allowNull: false, defaultValue: '', comment: '标题' },
    seo_keywords: { type: STRING(255), allowNull: false, defaultValue: '', comment: '关键词' },
    seo_description: { type: STRING(255), allowNull: false, defaultValue: '', comment: '简介' },
    rank: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '排序' },
    status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略' },
  };
};

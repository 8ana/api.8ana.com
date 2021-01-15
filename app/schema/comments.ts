export default app => {
  // 获取数据类型
  const { INTEGER, DATE, TINYINT, NOW, TEXT } = app.Sequelize;

  return {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, comment: '自增id' },
    uid: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '用户id' },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '关联模型 id' },
    aid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '关联内容 id' },
    content: { type: TEXT, defaultValue: '', allowNull: false, comment: '内容' },
    up: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '顶' },
    down: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '踩' },
    is_sticky: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '是否置顶0:否1:是' },
    status: { type: TINYINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
    created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
    updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
    deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
  };
};

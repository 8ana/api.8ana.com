export default app => {
  // 获取数据类型
  const { INTEGER, TINYINT, STRING, BIGINT, DATE, NOW } = app.Sequelize;

  // 定义模型
  return {
    id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '模型ID' },
    cid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '分类ID' },
    uid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '用户ID' },
    aid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '关联内容的ID' },
    tags: { type: STRING(255), defaultValue: '', comment: '标签' },
    content: { type: STRING(255), defaultValue: '', comment: '短评' },
    ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'ip' },
    rating: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '评分1~5' },
    interest: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '想看1|看过2|在看3|搁置4|抛弃5' },
    created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
    updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
    deleted_at: { type: DATE, comment: '删除时间' },
  };
};

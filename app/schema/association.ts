export default app => {
  // 获取数据类型
  const { INTEGER, TINYINT } = app.Sequelize;

  return {
    id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true },
    cid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '分类id' },
    uid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '用户 id' },
    sid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '源关联模型 id' },
    tsid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '目标关联模型 id' },
    aid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '源关联 id' },
    taid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '目标关联 id' },
    rank: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '排序' },
    status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
  };
};

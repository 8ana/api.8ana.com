// 转发表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, BIGINT, NOW, TINYINT, STRING } = Sequelize;
    await queryInterface.createTable('forward', {
      id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true },
      cid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '分类id' },
      sid: { type: TINYINT.UNSIGNED, allowNull: false, comment: '模型ID' },
      uid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '用户ID' },
      aid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '关联内容ID' },
      content: { type: STRING, allowNull: false, comment: '转发评论' },
      ip: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'IP' },
      hits: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '总' },
      hits_day: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '日' },
      hits_week: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '周' },
      hits_month: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '月' },
      status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
      hits_lasttime: { type: DATE, allowNull: false, defaultValue: NOW, comment: '热度更新时间' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('forward');
  },
};

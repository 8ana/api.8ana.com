// 用户关注表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, BIGINT, DATE, NOW } = Sequelize;
    await queryInterface.createTable('follow', {
      id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
      uid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '被关联用户 id' },
      tuid: { type: INTEGER.UNSIGNED, allowNull: false, comment: '关联用户 id' },
      ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'ip' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('follow');
  },
};

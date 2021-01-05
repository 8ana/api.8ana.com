module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TINYINT, DATE, NOW } = Sequelize;
    await queryInterface.createTable('tag', {
      id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
      name: { type: STRING(255), allowNull: false, defaultValue: '', comment: '名字' },
      aid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联 id' },
      sid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '模型 id' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('tag');
  },
};

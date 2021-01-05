module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable('play', {
      id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
      title: { type: STRING(30), allowNull: false, defaultValue: '', comment: '中文名' },
      name: { type: STRING(30), allowNull: false, defaultValue: '', comment: '英文名' },
      rank: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '排序' },
      status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略' },
      display: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '0:不显示1:显示' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('play');
  },
};

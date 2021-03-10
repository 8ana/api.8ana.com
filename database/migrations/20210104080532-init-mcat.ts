// 小分类
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable('mcat', {
      id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '自增id' },
      cid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '父类id' },
      name: { type: STRING(30), allowNull: false, defaultValue: '', comment: '名字' },
      title: { type: STRING(30), allowNull: false, defaultValue: '', comment: '英文名' },
      rank: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '排序' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('mcat');
  },
};

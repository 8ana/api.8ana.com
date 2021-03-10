// 网站设置表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, TEXT } = Sequelize;
    await queryInterface.createTable('setting', {
      key: { type: STRING(100), allowNull: false, primaryKey: true, comment: '设置项 key' },
      value: { type: TEXT, allowNull: false, comment: '设置项 value' },
      tag: { type: STRING(100), allowNull: false, defaultValue: 'default', comment: '设置项 tag' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('setting');
  },
};

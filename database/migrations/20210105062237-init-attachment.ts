module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TINYINT, DATE, NOW } = Sequelize;
    await queryInterface.createTable('attachment', {
      id: { autoIncrement: true, type: INTEGER.UNSIGNED, allowNull: false, primaryKey: true, comment: '附件 id' },
      uid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户 id' },
      sid: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '模型 id' },
      aid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联 id' },
      attachment: { type: STRING(255), allowNull: false, defaultValue: '', comment: '文件系统生成的名称' },
      file_path: { type: STRING(255), allowNull: false, defaultValue: '', comment: '文件路径' },
      file_name: { type: STRING(255), allowNull: false, defaultValue: '', comment: '文件原名称' },
      file_type: { type: STRING(255), allowNull: false, defaultValue: '', comment: '文件类型' },
      file_size: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '文件大小' },
      ip: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'ip 地址' },
      is_remote: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '是否远程附件' },
      status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('attachment');
  },
};

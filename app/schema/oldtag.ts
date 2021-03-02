export default app => {
  // 获取数据类型
  const { MEDIUMINT, STRING, TINYINT } = app.Sequelize;

  return {
    tag_id: {
      primaryKey: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    tag_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    tag_name: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
  };
};

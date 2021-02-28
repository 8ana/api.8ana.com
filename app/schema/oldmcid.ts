export default app => {
  // 获取数据类型
  const { TINYINT, INTEGER, MEDIUMINT } = app.Sequelize;

  return {
    mcid_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
    },
    mcid_mid: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    mcid_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

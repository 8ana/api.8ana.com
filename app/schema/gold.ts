/* jshint indent: 2 */
export default app => {
  // 获取数据类型
  const { INTEGER, TINYINT, BIGINT } = app.Sequelize;

  return {
    gold_id: {
      autoIncrement: true,
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    gold_vid: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    gold_sid: {
      type: TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    F1: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    F2: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    F3: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    F4: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    F5: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    gold_ip: {
      type: BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    mark_uid: {
      type: INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    gold_addtime: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

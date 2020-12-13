'use strict';

module.exports = app => {
  // 获取数据类型
  const { SMALLINT, TINYINT, INTEGER, STRING, TEXT } = app.Sequelize;

  return {
    id: {
      autoIncrement: true,
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: '配置ID',
    },
    name: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
      comment: '配置名称',
    },
    type: {
      type: STRING(25),
      allowNull: false,
      defaultValue: 'text',
      comment: '配置类型',
    },
    title: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
      comment: '配置说明',
    },
    class: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    extra: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: '配置值',
    },
    remark: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
      comment: '配置说明',
    },
    icon: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
      comment: '小图标',
    },
    addtime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '创建时间',
    },
    uptime: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '更新时间',
    },
    status: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '状态',
    },
    value: {
      type: TEXT,
      allowNull: false,
      comment: '配置值',
    },
    other: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    style: {
      type: STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    sort: {
      type: SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '排序',
    },
  };
};

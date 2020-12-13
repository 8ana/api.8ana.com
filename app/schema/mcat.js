'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, STRING } = app.Sequelize;

  return {
    m_cid: {
      autoIncrement: true,
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    m_list_id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    m_name: {
      type: STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    m_ename: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    m_title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    m_keywords: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    m_description: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    m_order: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  };
};

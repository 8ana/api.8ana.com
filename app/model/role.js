'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const roleSchema = require('../schema/role')(app);
  const Role = model.define(`${app.config.prefix}role`, roleSchema);

  Role.associate = () => {
    Role.hasOne(model.Star, { foreignKey: 'star_name', sourceKey: 'role_star', as: 'star' });
  };
  return Role;
};

'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const userSchema = require('../schema/user')(app);
  const User = model.define(`${app.config.prefix}user`, userSchema);
  return User;
};

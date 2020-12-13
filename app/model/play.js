'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const playSchema = require('../schema/play')(app);
  const Play = model.define(`${app.config.prefix}play`, playSchema);
  return Play;
};

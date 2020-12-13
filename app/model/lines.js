'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const linesSchema = require('../schema/lines')(app);
  const Lines = model.define(`${app.config.prefix}lines`, linesSchema);
  return Lines;
};

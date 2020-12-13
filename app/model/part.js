'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const partSchema = require('../schema/part')(app);
  const Part = model.define(`${app.config.prefix}part`, partSchema);
  return Part;
};

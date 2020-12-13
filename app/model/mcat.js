'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const mcatSchema = require('../schema/mcat')(app);
  const Mcat = model.define(`${app.config.prefix}mcat`, mcatSchema);
  return Mcat;
};

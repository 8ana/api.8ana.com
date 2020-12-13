'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const starSchema = require('../schema/star')(app);
  const Star = model.define(`${app.config.prefix}star`, starSchema);
  return Star;
};

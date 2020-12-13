'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const musicSchema = require('../schema/music')(app);
  const Music = model.define(`${app.config.prefix}music`, musicSchema);
  return Music;
};

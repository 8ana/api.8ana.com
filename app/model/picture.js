'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const pictureSchema = require('../schema/picture')(app);
  const Picture = model.define(`${app.config.prefix}picture`, pictureSchema);
  return Picture;
};

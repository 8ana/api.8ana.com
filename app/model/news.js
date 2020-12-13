'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const newsSchema = require('../schema/news')(app);
  const News = model.define(`${app.config.prefix}news`, newsSchema);

  News.associate = () => {
    News.hasOne(model.User, { foreignKey: 'user_id', sourceKey: 'news_uid', as: 'user' });
    News.belongsToMany(model.Subject, { through: model.Topic, foreignKey: 'topic_did', otherKey: 'topic_tid', as: 'vod' });
  };

  return News;
};

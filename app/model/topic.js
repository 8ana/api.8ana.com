'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const topicSchema = require('../schema/topic')(app);
  const Topic = model.define(`${app.config.prefix}topic`, topicSchema);

  Topic.update = async params => {
    const { tid = '', tsid = 2, sid = '', keyword = '' } = params;
    await Topic.destroy({ where: { topic_sid: sid, topic_tid: tid, topic_tsid: tsid } });
    if (keyword) {
      const arr = keyword.split(',');
      const data = arr.map((item, index) => {
        return { topic_did: item, topic_sid: sid, topic_tid: tid, topic_tsid: tsid, topic_oid: index + 1 };
      });
      await Topic.bulkCreate(data);
    }
  };

  return Topic;
};

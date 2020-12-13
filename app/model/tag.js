'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const tagSchema = require('../schema/tag')(app);
  const Tag = model.define(`${app.config.prefix}tag`, tagSchema);

  Tag.update = async params => {
    const { id, sid, tag } = params;
    await Tag.destroy({
      where: {
        tag_id: id,
        tag_sid: sid,
      },
    });
    if (id && sid && tag) {
      const arr = tag.split(',');
      const data = arr.map(item => {
        return { tag_name: item, tag_sid: sid, tag_id: id };
      });
      await Tag.bulkCreate(data);
    }
  };

  return Tag;
};

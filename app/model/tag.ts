import tag from '../schema/tag';

export default app => {
  // 获取数据类型
  const { model } = app;

  const tagSchema = tag(app);
  const Tag = model.define('tag', tagSchema);

  Tag.update = async params => {
    const { aid, sid, tag } = params;
    await Tag.destroy({
      where: {
        aid,
        sid,
      },
    });
    if (aid && sid && tag) {
      const arr = tag.split(',');
      const data = arr.map(item => {
        return { name: item, sid, aid };
      });
      await Tag.bulkCreate(data);
    }
  };

  return Tag;
};

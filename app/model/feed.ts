import feed from '../schema/feed';

export default app => {
  // 获取数据类型
  const { model } = app;

  const feedSchema = feed(app);
  const Feed = model.define('feed', feedSchema);

  Feed.query = async ({ attributes, pageSize, pageNo, order = ['created_at', 'DESC'] }) => {
    const condition = {
      attributes,
      include: [
        { model: model.User, attributes: ['id', 'username', 'nickname', 'avatar'], as: 'user' },
        { model: model.Subject, attributes: ['id', 'name', 'pic', 'created_at'], as: 'subject' },
        // { model: model.Role, attributes: ['role_id'], as: 'role' },
        // { model: model.Story, attributes: ['story_id'], as: 'story' },
        // { model: model.Star, attributes: ['star_id'], as: 'star' },
        // { model: model.Music, attributes: ['music_id'], as: 'music' },
        // { model: model.Lines, attributes: ['lines_id'], as: 'lines' },
        // { model: model.Picture, attributes: ['picture_id'], as: 'pic' },
      ],
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: app.utils.Tool.toInt(pageSize),
      where: { status: 1 },
    };
    const { count, rows } = await Feed.findAndCountAll(condition);

    return {
      list: rows,
      pages: {
        pageNo,
        pageSize,
        total: count,
      },
    };
  };

  Feed.get = async ({ id, attributes }) => {
    const result = await Feed.findOne({
      attributes,
      include: [
        { model: model.User, attributes: ['id', 'name', 'nickname', 'avatar'], as: 'user' },
        { model: model.Subject, attributes: ['id', 'name', 'pic', 'created_at'], as: 'subject' },
        // { model: model.Role, attributes: ['role_id'], as: 'role' },
        // { model: model.Story, attributes: ['story_id'], as: 'story' },
        // { model: model.Star, attributes: ['star_id'], as: 'star' },
        // { model: model.Music, attributes: ['music_id'], as: 'music' },
        // { model: model.Lines, attributes: ['lines_id'], as: 'lines' },
        // { model: model.Picture, attributes: ['picture_id'], as: 'pic' },
      ],
      where: { id, status: 1 },
    });
    return result;
  };

  // 添加
  Feed.add = async params => {
    const result = await Feed.create(params);
    console.log(result);
    return result;
  };
  // 更新
  Feed.edit = async params => {
    const { id } = params;
    const result = await Feed.update(params, { where: { id } });
    console.log(result);
    return id;
  };

  // 删除
  Feed.delete = async params => {
    const result = await Feed.destroy({ where: params });
    return result;
  };

  Feed.associate = () => {
    Feed.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
    Feed.hasOne(model.Subject, { foreignKey: 'id', sourceKey: 'aid', as: 'subject' });
    // Feed.hasOne(model.Role, { foreignKey: 'role_id', sourceKey: 'role_id', as: 'role' });
    // Feed.hasOne(model.Story, { foreignKey: 'story_id', sourceKey: 'story_id', as: 'story' });
    // Feed.hasOne(model.Star, { foreignKey: 'star_id', sourceKey: 'star_id', as: 'star' });
    // Feed.hasOne(model.Music, { foreignKey: 'music_id', sourceKey: 'music_id', as: 'music' });
    // Feed.hasOne(model.Lines, { foreignKey: 'lines_id', sourceKey: 'lines_id', as: 'lines' });
    // Feed.hasOne(model.Picture, { foreignKey: 'picture_id', sourceKey: 'pic_id', as: 'pic' });
  };

  return Feed;
};

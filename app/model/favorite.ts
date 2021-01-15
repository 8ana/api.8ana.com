import favorite from '../schema/favorite';

export default app => {
  // 获取数据类型
  const { model } = app;

  const favoriteSchema = favorite(app);
  const Favorite = model.define('favorite', favoriteSchema);

  Favorite.get = async (params, attributes = ['id', 'uid', 'aid']) => {
    const condition = {
      attributes,
      where: {},
    };
    condition.where = params;
    const result = await Favorite.findOne(condition);
    return result;
  };

  return Favorite;
};

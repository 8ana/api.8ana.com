import favorite from '../schema/favorite';

export default app => {
  // 获取数据类型
  const { model } = app;

  const favoriteSchema = favorite(app);
  const Favorite = model.define('favorite', favoriteSchema);

  return Favorite;
};

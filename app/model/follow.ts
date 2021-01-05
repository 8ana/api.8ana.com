import follow from '../schema/follow';

export default app => {
  // 获取数据类型
  const { model } = app;

  const followSchema = follow(app);
  const Follow = model.define('follow', followSchema);

  return Follow;
};

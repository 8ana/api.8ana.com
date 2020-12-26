import play from '../schema/play';

export default app => {
  // 获取数据类型
  const { model } = app;

  const playSchema = play(app);
  const Play = model.define(`${app.config.prefix}play`, playSchema);
  return Play;
};

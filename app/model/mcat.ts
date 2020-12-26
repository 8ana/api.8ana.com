import mcat from '../schema/mcat';

export default app => {
  // 获取数据类型
  const { model } = app;

  const mcatSchema = mcat(app);
  const Mcat = model.define(`${app.config.prefix}mcat`, mcatSchema);
  return Mcat;
};

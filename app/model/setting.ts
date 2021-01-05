import setting from '../schema/setting';

export default app => {
  // 获取数据类型
  const { model } = app;

  const settingSchema = setting(app);
  const Setting = model.define('setting', settingSchema, { timestamps: false });
  return Setting;
};

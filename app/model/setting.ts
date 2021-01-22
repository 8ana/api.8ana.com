import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import setting from '../schema/setting';

export interface Setting extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const settingSchema = setting(app);
  const Setting = model.define('setting', settingSchema, { timestamps: false }) as BaseModelStatic<Setting>;

  return class extends Setting<Setting> {};
};

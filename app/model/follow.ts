import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import follow from '../schema/follow';

export interface Follow extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const followSchema = follow(app);
  const Follow = model.define('follow', followSchema) as BaseModelStatic<Follow>;

  return class extends Follow<Follow> {};
};

import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import gold from '../schema/gold';

export interface Gold extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const goldSchema = gold(app);
  const Gold = model.define('ff_gold', goldSchema, { timestamps: false, underscored: true }) as BaseModelStatic<Gold>;

  return class extends Gold<Gold> {
    static async query() {
      return await Gold.findAll({
        where: {
          gold_sid: 1,
        },
      });
    }
  };
};

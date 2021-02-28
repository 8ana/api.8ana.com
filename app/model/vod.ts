import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import vod from '../schema/vod';

export interface Vod extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const vodSchema = vod(app);
  const Vod = model.define('ff_vod', vodSchema, { timestamps: false, underscored: true }) as BaseModelStatic<Vod>;

  return class extends Vod<Vod> {
    static async query() {
      return await Vod.findAll({
        where: {
          vod_status: 1,
        },
      });
    }
  };
};

import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import oplay from '../schema/oldplay';

export interface Oplay extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const oplaySchema = oplay(app);
  const Oplay = model.define('ff_play', oplaySchema) as BaseModelStatic<Oplay>;

  return class extends Oplay<Oplay> {
    static async query() {
      return await Oplay.findAll({
        limit: 1000,
        order: [['play_oid', 'ASC']],
      });
    }
  };
};

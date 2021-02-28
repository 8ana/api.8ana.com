import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import oldmcat from '../schema/oldmcat';

export interface Omcat extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const oldmcatSchema = oldmcat(app);
  const Omcat = model.define('ff_mcat', oldmcatSchema, { timestamps: false }) as BaseModelStatic<Omcat>;

  return class extends Omcat<Omcat> {
    static async query() {
      return await Omcat.findAll({
        where: {
          m_list_id: 3,
        },
        order: [['m_order', 'ASC']],
      });
    }
  };
};

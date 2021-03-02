import { Context, Application } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import mcat from '../schema/mcat';

export interface Mcat extends BaseModel {}

export default (app: Context & Application) => {
  // 获取数据类型
  const { model } = app;
  const mcatSchema = mcat(app);
  const Mcat = model.define('mcat', mcatSchema, { timestamps: false }) as BaseModelStatic<Mcat>;

  return class extends Mcat<Mcat> {
    static async query(params) {
      const { orderBy = 'rank', order = 'ASC', cid = 1 } = params;
      const rows = await Mcat.findAll({
        attributes: ['id', 'name'],
        limit: 1000,
        where: {
          cid,
        },
        order: [[orderBy, order]],
      });

      return rows;
    }

    static async get(params) {
      return await Mcat.findOne(params);
    }
    // 添加
    static async add(params) {
      const result = await Mcat.create(params);
      return result;
    }

    static async addsMcat(params) {
      return await Mcat.bulkCreate(params);
    }

    // 更新
    static async edit(params) {
      const { id } = params;
      const result = await Mcat.update(params, { where: { id } });
      return result;
    }

    // 删除
    static async delete(params) {
      const { id } = params;
      const result = await Mcat.destroy({ where: { id } });
      return result;
    }
  };
};

import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import favorite from '../schema/favorite';

export interface Favorite extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const favoriteSchema = favorite(app);
  const Favorite = model.define('favorite', favoriteSchema) as BaseModelStatic<Favorite>;

  return class extends Favorite<Favorite> {
    static async get(params, attributes = ['id', 'uid', 'aid']) {
      const condition = {
        attributes,
        where: {},
      };
      condition.where = params;
      const result = await Favorite.findOne(condition);
      return result;
    }

    static async add(params) {
      return await Favorite.create(params);
    }

    static async adds(params) {
      return await Favorite.bulkCreate(params);
    }
  };
};

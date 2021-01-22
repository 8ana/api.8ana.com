import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import list from '../schema/list';

export interface List extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const listSchema = list(app);
  const List = model.define('list', listSchema, { timestamps: false }) as BaseModelStatic<List>;

  return class extends List<List> {
    static async query(params) {
      const { orderBy = 'rank', order = 'DESC' } = params;
      return await List.findAll({
        attributes: ['id', 'pid', 'name'],
        where: {
          status: 1,
        },
        order: [[orderBy, order]],
      });
    }
  };
};

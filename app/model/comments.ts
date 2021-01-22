import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import comments from '../schema/comments';
import repty from '../schema/repty';

export interface Comments extends BaseModel {}
export interface Repty extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const commentsSchema = comments(app);
  const reptySchema = repty(app);
  const Comments = model.define('comments', commentsSchema) as BaseModelStatic<Comments>;
  const Repty = model.define('repty', reptySchema) as BaseModelStatic<Repty>;

  return class extends Comments<Comments> {
    static associate() {
      Comments.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
      Comments.hasMany(Repty, { foreignKey: 'aid', as: 'repty' });
    }
    static async query({ attributes, pageSize = 10, pageNo = 1, order = ['created_at', 'DESC'] }) {
      const condition: any = {
        attributes,
        order: [order],
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: { status: 0 },
      };
      const { count, rows } = await Comments.findAndCountAll(condition);

      return {
        list: rows,
        pages: {
          pageNo,
          pageSize,
          total: count,
        },
      };
    }
    static async get(params, attributes = ['id', 'uid', 'content']) {
      const condition = {
        attributes,
        where: {},
      };
      condition.where = params;
      const result = await Comments.findOne(condition);
      return result;
    }
    static async add(params) {
      const result = await Comments.create(params);
      return result;
    }

    static async edit(params) {
      const { id } = params;
      const result = await Comments.update(params, { where: { id } });
      console.log(result);
      return id;
    }

    static async delete(params) {
      const result = await Comments.destroy({ where: params });
      return result;
    }
  };
};

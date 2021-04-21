import { Context, Application } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import comments from '../schema/comments';
import repty from '../schema/reply';

export interface Comments extends BaseModel {}
export interface Repty extends BaseModel {}

export default (app: Context & Application) => {
  // 获取数据类型
  const { model } = app;

  const commentsSchema = comments(app);
  const reptySchema = repty(app);
  const Comments = model.define('comments', commentsSchema) as BaseModelStatic<Comments>;
  const Repty = model.define('reply', reptySchema) as BaseModelStatic<Repty>;

  return class extends Comments<Comments> {
    static async query({ attributes, pageSize = 10, pageNo = 1, order = ['created_at', 'DESC'] }) {
      const condition: any = {
        attributes,
        order: [order],
        include: [
          { model: model.User, attributes: ['id', 'username', 'nickname', 'avatar'], as: 'user' },
          {
            model: Repty,
            attributes: ['id', 'content', 'device', 'is_sticky'],
            as: 'repty',
            include: [
              {
                model: model.User,
                as: 'user',
                attributes: ['id', 'username', 'nickname', 'avatar'],
              },
            ],
          },
        ],
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
      return await Comments.create(params);
    }

    static async addReply(params) {
      return await Repty.create(params);
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

    static associate() {
      Comments.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
      Comments.hasMany(Repty, { foreignKey: 'aid', as: 'repty' });
      Repty.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
    }
  };
};

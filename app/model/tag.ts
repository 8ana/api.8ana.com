import { Context, Application } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import tag from '../schema/tag';

export interface Tag extends BaseModel {}

export default (app: Context & Application) => {
  // 获取数据类型
  const { model } = app;

  const tagSchema = tag(app);
  const Tag = model.define('tag', tagSchema) as BaseModelStatic<Tag>;

  return class extends Tag<Tag> {
    static async query(params) {
      const { pageSize = 10, pageNo = 1, order = [['created_at', 'DESC']] } = params;
      const { count, rows } = await Tag.findAndCountAll({
        order,
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: {},
      });

      return {
        list: rows,
        pages: {
          pageNo,
          pageSize,
          total: count,
        },
      };
    }

    static async add(params) {
      const { aid, sid, tag } = params;
      await Tag.destroy({
        where: {
          aid,
          sid,
        },
      });
      if (aid && sid && tag) {
        const arr = tag.split(',');
        const data = arr.map(item => {
          return { name: item, sid, aid };
        });
        await Tag.bulkCreate(data);
      }
    }

    static async adds(params) {
      return await Tag.bulkCreate(params);
    }

    static async delete(params) {
      return await Tag.destroy({ where: { id: params.id } });
    }

    static async edit(params) {
      return await Tag.update(params, { where: { id: params.id } });
    }
  };
};

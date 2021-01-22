import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import tag from '../schema/tag';

export interface Tag extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const tagSchema = tag(app);
  const Tag = model.define('tag', tagSchema) as BaseModelStatic<Tag>;

  return class extends Tag<Tag> {
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
  };
};

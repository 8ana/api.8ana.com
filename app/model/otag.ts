import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import otag from '../schema/oldtag';

export interface Otag extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const otagSchema = otag(app);
  const Otag = model.define('ff_tag', otagSchema) as BaseModelStatic<Otag>;

  return class extends Otag<Otag> {
    static async query() {
      return await Otag.findAll({
        limit: 1000000,
        where: {
          tag_sid: 1,
        },
      });
    }
  };
};

import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import association from '../schema/association';

export interface Association extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const associationSchema = association(app);
  const Association = model.define('association', associationSchema) as BaseModelStatic<Association>;

  return class extends Association<Association> {
    static async add(params) {
      const { aid = '', tsid = 2, sid = '', keyword = '' } = params;
      await Association.destroy({ where: { sid, aid } });
      if (keyword) {
        const arr = keyword.split(',');
        const data = arr.map((item, index) => {
          return { aid, sid, taid: item, tsid, rank: index + 1 };
        });
        await Association.bulkCreate(data);
      }
    }
  };
};

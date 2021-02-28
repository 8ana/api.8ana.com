import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import mcid from '../schema/mcid';

export interface Mcid extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const mcidSchema = mcid(app);
  const Mcid = model.define('mcid', mcidSchema, { timestamps: false }) as BaseModelStatic<Mcid>;

  return class extends Mcid<Mcid> {
    static async add(params) {
      const { aid, sid, mcid } = params;
      await Mcid.destroy({
        where: {
          aid,
          sid,
        },
      });
      if (aid && sid && mcid) {
        const arr = mcid.split(',');
        const data = arr.map(item => {
          return { mid: item, sid, aid };
        });
        await Mcid.bulkCreate(data);
      }
    }

    static async adds(params) {
      return await Mcid.bulkCreate(params);
    }
  };
};

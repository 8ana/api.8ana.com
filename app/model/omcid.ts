import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import oldmcid from '../schema/oldmcid';

export interface Omcid extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;

  const OmcidSchema = oldmcid(app);
  const Omcid = model.define('ff_mcid', OmcidSchema, { timestamps: false }) as BaseModelStatic<Omcid>;

  return class extends Omcid<Omcid> {
    static async query() {
      return await Omcid.findAll({
        where: {
          mcid_sid: 1,
          mcid_mid: {
            [Op.gte]: 47,
          },
        },
      });
    }
  };
};

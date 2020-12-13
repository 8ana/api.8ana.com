'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const mcidSchema = require('../schema/mcid')(app);
  const Mcid = model.define(`${app.config.prefix}mcid`, mcidSchema);

  Mcid.update = async params => {
    const { id, sid, mcid } = params;
    await Mcid.destroy({
      where: {
        mcid_id: id,
        mcid_sid: sid,
      },
    });
    if (id && sid && mcid) {
      const arr = mcid.split(',');
      const data = arr.map(item => {
        return { mcid_mid: item, mcid_sid: sid, mcid_id: id };
      });
      await Mcid.bulkCreate(data);
    }
  };

  return Mcid;
};

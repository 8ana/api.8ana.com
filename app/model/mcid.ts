import mcid from '../schema/mcid';

export default app => {
  // 获取数据类型
  const { model } = app;

  const mcidSchema = mcid(app);
  const Mcid = model.define('mcid', mcidSchema, { timestamps: false });

  Mcid.update = async params => {
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
  };

  return Mcid;
};

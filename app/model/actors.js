'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const actorsSchema = require('../schema/actors')(app);
  const Actors = model.define(`${app.config.prefix}actors`, actorsSchema);

  Actors.update = async params => {
    const { id, type, actors } = params;
    await Actors.destroy({
      where: {
        actors_id: id,
        actors_type: type,
      },
    });
    if (id && type && actors) {
      const arr = actors.split(',');
      const data = arr.map(item => {
        return { actors_name: item, actors_type: type, actors_id: id };
      });
      await Actors.bulkCreate(data);
    }
  };

  return Actors;
};

'use strict';

const Service = require('egg').Service;

class Star extends Service {
  async list(starName, orderBy = 'star_addtime', order = 'DESC') {
    const rows = await this.ctx.model.Star.findAll({
      attributes: ['star_id', 'star_name'],
      where: {
        star_status: 1,
        star_name: starName,
      },
      order: [[orderBy, order]],
    });

    return rows;
  }
}

module.exports = Star;

'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class Actor extends Service {
  async get(id) {
    const actor = await this.ctx.model.Actor.findByPk(id);
    return actor;
  }

  async list(pageSize, pageNo, orderBy = 'actor_addtime', order = 'DESC') {
    const offset = pageSize * (pageNo - 1);

    const { count, rows } = await this.ctx.model.Actor.findAndCountAll({
      attributes: ['actor_id', 'actor_cid', 'actor_vid', 'actor_title'],
      where: {
        actor_status: 1,
      },
      order: [[orderBy, order]],
      limit: toInt(pageSize),
      offset,
    });

    return {
      data: rows,
      pages: {
        pageNo,
        pageSize,
        total: count,
      },
    };
  }
}

module.exports = Actor;

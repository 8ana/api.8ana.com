'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class Story extends Service {
  async get(id) {
    const remind = await this.ctx.model.Story.findByPk(id);
    return remind;
  }

  async list(pageSize, pageNo, orderBy = 'story_addtime', order = 'DESC') {
    const offset = pageSize * (pageNo - 1);

    const { count, rows } = await this.ctx.model.Story.findAndCountAll({
      attributes: ['story_id'],
      where: {
        story_status: 1,
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

module.exports = Story;

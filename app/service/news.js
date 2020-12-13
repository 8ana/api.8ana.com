'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class News extends Service {
  async get(id) {
    const news = await this.ctx.model.News.findByPk(id);
    return news;
  }

  async list(pageSize, pageNo, orderBy = 'news_addtime', order = 'DESC') {
    const offset = pageSize * (pageNo - 1);

    const { count, rows } = await this.ctx.model.News.findAndCountAll({
      attributes: ['news_id', 'news_name', 'news_pic', 'news_addtime'],
      where: {
        news_status: 1,
      },
      order: [[orderBy, order]],
      limit: toInt(pageSize),
      offset,
    });

    return {
      news: rows,
      pages: {
        pageNo,
        pageSize,
        total: count,
      },
    };
  }
}

module.exports = News;

import { Controller } from 'egg';

export default class News extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { ctx } = this;
    const { params } = ctx;

    const data = await this.service.news.get({ params });

    if (data) {
      ctx.helper.success(ctx, { data });
    } else {
      ctx.helper.fail(ctx, { message: '没有找到内容' });
    }
  }

  async list() {
    const { ctx, service } = this;
    const result = await service.news.list(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }
}

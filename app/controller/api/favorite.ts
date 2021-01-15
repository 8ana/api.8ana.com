import { Controller } from 'egg';

export default class Favorite extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { ctx } = this;
    const { params } = ctx;

    const data = await this.service.favorite.get(params);
    if (data) {
      ctx.helper.success(ctx, { data });
    } else {
      ctx.helper.fail(ctx, { message: '没有找到内容' });
    }
  }
}

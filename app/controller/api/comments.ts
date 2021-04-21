import { Controller } from 'egg';

export default class Comments extends Controller {
  public async get() {
    // 获取 url 中的 id 参数
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.comments.get(params);

    if (data) {
      ctx.helper.success(ctx, { data });
    } else {
      ctx.helper.fail(ctx, { message: '没有找到内容' });
    }
  }

  public async list() {
    const { ctx, service } = this;
    const result = await service.comments.list(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  public async add() {
    const { ctx, service } = this;
    const result = await service.comments.add(ctx.request.body);
    ctx.helper.success(ctx, { data: result });
  }

  public async addReply() {
    const { ctx, service } = this;
    const result = await service.comments.addReply(ctx.request.body);
    ctx.helper.success(ctx, { data: result });
  }

  public async edit() {
    const { ctx, service } = this;
    const result = await service.comments.edit(ctx.request.body);
    ctx.helper.success(ctx, { data: result });
  }

  public async delete() {
    const { ctx, service } = this;
    const result = await service.comments.delete(ctx.request.body);
    ctx.helper.success(ctx, { data: result });
  }
}

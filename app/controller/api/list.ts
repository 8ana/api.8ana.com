import { Controller } from 'egg';

export default class List extends Controller {
  async list() {
    const { ctx, service } = this;
    const result = await service.list.list(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  async add() {
    const { ctx, service } = this;
    const result = await service.list.add(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  async edit() {
    const { ctx, service } = this;
    const result = await service.list.edit(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  async delete() {
    const { ctx, service } = this;
    const result = await service.list.delete(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }
}

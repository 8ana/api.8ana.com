'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const { ctx } = this;
    const { id, name } = ctx.query;

    ctx.session.user = { id, name };
    ctx.body = {
      session: ctx.session,
    };
  }

  async push() {
    const { ctx, app } = this;
    const targetUserId = ctx.query.targetUserId;
    const msg = ctx.query.msg;

    const key = `${ctx.enums.prefix.socketId}${targetUserId}`;
    const socketId = await app.redis.get(key); // 获取socketId
    ctx.logger.info(key, socketId);
    if (socketId) {
      const namespace = app.io.of('/');
      namespace.sockets[socketId].emit('message', msg);
    }
    ctx.body = ctx.errCodes[200];
  }

  async test() {
    const { ctx } = this;
    ctx.body = 'test';
  }
}

module.exports = HomeController;

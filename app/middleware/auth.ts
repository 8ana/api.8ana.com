import { Context } from 'egg';

export default level => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const token = ctx.header.authorization;

    const level0 = {
      user_name: null,
      user_admin: 0,
    };

    if (token) {
      try {
        const { user_id }: any = await ctx.app.jwt.verify(token.replace('Bearer ', ''), ctx.app.config.jwt.secret);
        const userInfo = await ctx.service.user.get(user_id);

        console.log(user_id, 'user_id');

        if (userInfo) {
          ctx.state.user = userInfo;
        } else {
          ctx.state.user = level0;
        }
      } catch (error) {
        return ctx.helper.fail(ctx, { status: 401 });
      }
    } else {
      ctx.state.user = level0;
    }

    if (ctx.state.user.user_admin >= level) {
      await next();
    } else {
      return ctx.helper.fail(ctx, { status: 10003 });
    }
  };
};

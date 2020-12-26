import * as jwt from 'jsonwebtoken';

export default level => {
  return async (ctx, next) => {
    const token = ctx.header.authorization;

    const level0 = {
      user_name: null,
      user_admin: 0,
    };

    if (token) {
      try {
        const { user_id }: any = await jwt.verify(token, ctx.app.config.tokenSecret);
        const userInfo = await ctx.service.user.get(user_id);

        if (userInfo) {
          ctx.state.user = userInfo;
        } else {
          ctx.state.user = level0;
        }
      } catch (error) {
        return ctx.helper.status(401);
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

'use strict';
const koajwt = require('koa-jwt2');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io, jwt } = app;
  const isRevokedAsync = (req, payload) => {
    return new Promise(resolve => {
      try {
        const userId = payload.user_id;
        const tokenKey = `token_${userId}`;
        const token = app.redis.get(tokenKey);
        if (token) {
          app.redis.del(tokenKey);
        }
        resolve(false);
      } catch (e) {
        resolve(true);
      }
    });
  };
  router.post(
    '/api/user/logout',
    koajwt({
      secret: app.config.jwt.secret,
      credentialsRequired: false,
      isRevoked: isRevokedAsync,
    }),
    controller.api.user.logout
  );

  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.api.user.login);
  router.post('/api/user/add', controller.api.user.add);
  router.put('/api/user/edit', jwt, controller.api.user.edit);
  router.delete('/api/user/delete', jwt, controller.api.user.delete);
  router.get('/api/user/list', controller.api.user.list);
  router.get('/api/user/info', jwt, controller.api.user.userInfo);
  router.get('/api/user/:id', controller.api.user.get);
  router.get('/api/favorite/:id', controller.api.favorite.get);
  router.get('/api/subject/list', controller.api.subject.list);
  router.post('/api/subject/add', jwt, controller.api.subject.add);
  router.put('/api/subject/edit', jwt, controller.api.subject.edit);
  router.delete('/api/subject/delete', jwt, controller.api.subject.delete);
  router.get('/api/subject/:id', controller.api.subject.get);
  router.get('/api/news/list', controller.api.news.list);
  router.get('/api/news/:id', controller.api.news.get);
  router.get('/api/feed/list', controller.api.feed.list);
  router.post('/api/feed/add', jwt, controller.api.feed.add);
  router.post('/api/feed/edit', jwt, controller.api.feed.edit);
  router.delete('/api/feed/delete', jwt, controller.api.feed.delete);
  router.get('/api/feed/:id', controller.api.feed.get);
  router.get('/api/remind/list', controller.api.remind.list);
  router.get('/api/remind/:id', controller.api.remind.get);
  router.get('/api/actor/list', controller.api.actor.list);
  router.get('/api/actor/:id', controller.api.actor.get);
  router.get('/api/story/list', controller.api.story.list);
  router.get('/api/story/:id', controller.api.story.get);
  router.get('/api/captcha/get_captcha', controller.api.captcha.getcaptcha);
  router.get('/api/captcha/exp_captcha', controller.api.captcha.expCaptcha);

  router.get('/news', controller.news.list);

  router.get('/login', controller.home.login);
  router.get('/push', controller.home.push);
  router.get('/test', controller.home.test);

  // socket.io
  io.route('disconnect', io.controller.chat.disconnect);
};

'use strict';
const koajwt = require('koa-jwt2');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io, jwt } = app;

  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.api.user.login);
  router.get('/api/user/reg', controller.api.user.reg);
  router.get('/api/user/list', controller.api.user.list);
  router.get('/user-info', jwt, controller.api.user.userInfo);
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
    '/logout',
    koajwt({
      secret: app.config.jwt.secret,
      credentialsRequired: false,
      isRevoked: isRevokedAsync,
    }),
    controller.api.user.logout
  );

  router.get('/api/user/:id', jwt, controller.api.user.get);
  router.get('/api/favorite/:id', controller.api.favorite.get);
  router.get('/api/subject/list', controller.api.subject.list);
  router.post('/api/subject/saveNew', jwt, controller.api.subject.saveNew);
  router.put('/api/subject/saveModify', jwt, controller.api.subject.saveModify);
  router.delete('/api/subject/delete', jwt, controller.api.subject.delete);
  router.get('/api/subject/:id', controller.api.subject.get);
  router.get('/api/news/list', controller.api.news.list);
  router.get('/api/news/:id', controller.api.news.get);
  router.get('/api/feed/list', controller.api.feed.list);
  router.post('/api/feed/saveNew', jwt, controller.api.feed.saveNew);
  router.post('/api/feed/saveModify', jwt, controller.api.feed.saveModify);
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

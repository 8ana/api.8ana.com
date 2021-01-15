import { Application } from 'egg';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app: Application) => {
  const { router, controller, middleware, io } = app;

  const auth = middleware.auth;
  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.api.user.login);
  router.post('/api/user/add', controller.api.user.add);
  router.put('/api/user/edit', auth(0), controller.api.user.edit);
  router.delete('/api/user/delete', auth(0), controller.api.user.delete);
  router.get('/api/user/list', controller.api.user.list);
  router.get('/api/user/info', auth(0), controller.api.user.userInfo);
  router.post('/api/user/logout', controller.api.user.logout);
  router.get('/api/user/:id', controller.api.user.get);
  router.get('/api/favorite/:id', controller.api.favorite.get);
  router.get('/api/subject/list', controller.api.subject.list);
  router.post('/api/subject/add', auth(0), controller.api.subject.add);
  router.put('/api/subject/edit', auth(0), controller.api.subject.edit);
  router.delete('/api/subject/delete', auth(0), controller.api.subject.delete);
  router.get('/api/subject/:id', controller.api.subject.get);
  router.get('/api/news/list', controller.api.news.list);
  router.get('/api/news/:id', controller.api.news.get);
  router.get('/api/feed/list', controller.api.feed.list);
  router.post('/api/feed/add', auth(0), controller.api.feed.add);
  router.post('/api/feed/edit', auth(0), controller.api.feed.edit);
  router.delete('/api/feed/delete', auth(0), controller.api.feed.delete);
  router.get('/api/feed/:id', controller.api.feed.get);
  router.get('/api/remind/list', controller.api.remind.list);
  router.get('/api/remind/:id', controller.api.remind.get);
  router.get('/api/actor/list', controller.api.actor.list);
  router.get('/api/actor/:id', controller.api.actor.get);
  router.get('/api/story/list', controller.api.story.list);
  router.get('/api/story/:id', controller.api.story.get);
  router.get('/api/captcha/get', controller.api.captcha.get);
  router.get('/api/captcha/exp', controller.api.captcha.exp);

  router.get('/news', controller.news.list);

  // socket.io
  io.of('/io').route('exchange', io.controller.nsp.exchange);
};

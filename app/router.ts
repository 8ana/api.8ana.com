import { Application } from 'egg';
/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller, middleware, io } = app;

  const auth = middleware.auth;
  router.get('/', controller.home.index);
  // 用户
  router.post('/api/user/login', controller.api.user.login);
  router.post('/api/user/add', controller.api.user.add);
  router.put('/api/user/edit', auth(0), controller.api.user.edit);
  router.get('/api/user/list', controller.api.user.list);
  router.get('/api/user/info', auth(0), controller.api.user.userInfo);
  router.post('/api/user/logout', controller.api.user.logout);
  router.delete('/api/user/delete', auth(0), controller.api.user.delete);
  router.get('/api/user/init', controller.api.user.exist);
  router.get('/api/user/:id', controller.api.user.get);
  // 收藏
  router.get('/api/favorite/:id', controller.api.favorite.get);
  // 剧集
  router.get('/api/subject/list', controller.api.subject.list);
  router.post('/api/subject/add', auth(0), controller.api.subject.add);
  router.put('/api/subject/edit', auth(0), controller.api.subject.add);
  router.delete('/api/subject/delete', auth(0), controller.api.subject.delete);
  router.get('/api/subject/:id', controller.api.subject.get);
  // 新闻
  router.get('/api/news/list', controller.api.news.list);
  router.get('/api/news/:id', controller.api.news.get);
  // 动态
  router.get('/api/feed/list', controller.api.feed.list);
  router.post('/api/feed/add', auth(0), controller.api.feed.add);
  router.post('/api/feed/edit', auth(0), controller.api.feed.edit);
  router.delete('/api/feed/delete', auth(0), controller.api.feed.delete);
  router.get('/api/feed/:id', controller.api.feed.get);
  // 订阅
  // router.get('/api/remind/list', controller.api.remind.list);
  // router.get('/api/remind/:id', controller.api.remind.get);
  // // 演员
  // router.get('/api/actor/list', controller.api.actor.list);
  // router.get('/api/actor/:id', controller.api.actor.get);
  // // 剧情
  // router.get('/api/story/list', controller.api.story.list);
  // router.get('/api/story/:id', controller.api.story.get);
  // tag 标签
  router.get('/api/tag/list', controller.api.tag.list);
  router.put('/api/tag/edit', auth(0), controller.api.tag.edit);
  router.delete('/api/tag/delete', auth(0), controller.api.tag.delete);
  // 验证码
  router.get('/api/captcha/get', controller.api.captcha.get);
  router.get('/api/captcha/exp', controller.api.captcha.exp);
  // 大分类
  router.get('/api/list/list', controller.api.list.list);
  router.post('/api/list/add', auth(0), controller.api.list.add);
  router.put('/api/list/edit', auth(0), controller.api.list.edit);
  router.delete('/api/list/delete', auth(0), controller.api.list.delete);
  router.get('/api/list/:id', controller.api.list.get);
  // 小分类
  router.get('/api/mcat/list', controller.api.mcat.list);
  router.post('/api/mcat/add', auth(0), controller.api.mcat.add);
  router.post('/api/mcat/edit', auth(0), controller.api.mcat.edit);
  router.delete('/api/mcat/delete', auth(0), controller.api.mcat.delete);
  router.get('/api/mcat/:id', controller.api.mcat.get);
  // 服务端渲染
  router.get('/news', controller.news.list);

  // 重写数据
  router.get('/api/re/list', controller.api.re.list);
  router.get('/api/re/mcat', controller.api.re.mcat);
  router.get('/api/re/mcid', controller.api.re.mcid);
  router.get('/api/re/gold', controller.api.re.gold);
  router.get('/api/re/tag', controller.api.re.tag);

  // socket.io
  io.of('/io').route('exchange', io.controller.nsp.exchange);
};

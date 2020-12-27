export default app => {
  const ctx = app.createAnonymousContext();
  app.beforeStart(async () => {
    ctx.logger.info('beforeStart');
  });

  app.ready(async () => {
    ctx.logger.info('=====service start succeed=====');
  });

  app.beforeClose(async () => {
    ctx.logger.info('beforeClose');
  });
};

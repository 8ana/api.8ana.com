import { Context } from 'egg';
const PREFIX = 'room';

export default function AuthMiddleware() {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { app, socket, logger, helper } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/io');
    const query = socket.handshake.query;

    // 用户信息
    const { room, userId } = query;
    const rooms = [room];

    logger.debug('#user_info', id, room, userId);

    // 踢出连接者的函数
    const tick = (id: string, msg) => {
      logger.debug('#tick', id, msg);
      // 踢出用户前发送消息
      socket.emit(id, helper.parseMsg('deny', msg));

      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
      nsp.adapter.remoteDisconnect(id, true, err => {
        logger.error(err);
      });
    };

    // 检查房间是否存在，不存在则踢出用户
    // 备注：此处 app.redis 与egg-socket.io插件无关，用的是 egg-redis 插件，可用其他存储代替
    const hasRoom = await app.redis.get(`${PREFIX}:${room}`);

    logger.debug('#has_exist', hasRoom);

    if (!hasRoom) {
      // 没有房间，断开与用户连接
      tick(id, {
        type: 'deleted',
        message: 'deleted, room has been deleted.',
      });
      return;
    }

    // 用户加入
    logger.debug('#join', room);
    // room 存在于 nsp 中，通过 `join/leave` 方法来加入或者离开
    socket.join(room);

    // 在线列表
    nsp.adapter.clients(rooms, (_, clients) => {
      logger.debug('#online_join', clients);

      // 更新在线用户列表
      // 使用 to 指定房间， emit 往房间发送消息
      nsp.to(room).emit('online', {
        clients,
        action: 'join',
        target: 'participator',
        message: `User(${id}) joined.`,
      });
    });
    await next();
    // 用户离开
    logger.debug('#leave', room);

    // 在线列表
    nsp.adapter.clients(rooms, (_, clients) => {
      logger.debug('#online_leave', clients);

      // 更新在线用户列表
      // 使用 to 指定房间， emit 往房间发送消息
      nsp.to(room).emit('online', {
        clients,
        action: 'leave',
        target: 'participator',
        message: `User(${id}) leaved.`,
      });
    });
  };
}

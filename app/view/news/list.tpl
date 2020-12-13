<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <div id="demo"></div>
    <script src="https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js"></script>
    <script>
      // browser
      const log = console.log;

      window.onload = function() {
        // init
        const socket = io('/', {

          // 实际使用中可以在这里传递参数
          query: {
            room: 'demo',
            userId: `client_${Math.random()}`,
          },

          transports: ['websocket']
        });

        socket.on('connect', () => {
          const id = socket.id;

          log('#connect,', id, socket);

          // 监听自身 id 以实现 p2p 通讯
          socket.on(id, msg => {
            log('#receive,', msg);
          });
        });

        // 接收在线用户信息
        socket.on('online', msg => {
          log('#online,', msg);
        });

        // 系统事件
        socket.on('disconnect', msg => {
          log('#disconnect', msg);
        });

        socket.on('disconnecting', () => {
          log('#disconnecting');
        });

        socket.on('error', () => {
          log('#error');
        });

        socket.emit('exchange', {
          target: 'Dkn3UXSu8_jHvKBmAAHW',
          payload: {
            msg : 'test',
          },
        });

        window.socket = socket;
      };
    </script>
  </body>
</html>
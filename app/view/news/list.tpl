<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Demo</title>
  <style>
    body {
      overflow-x: hidden;
    }

    .console-wrapper {
      margin: auto;
      padding: 12px;
      width: 80%;
      background: #eee;
    }
  </style>
</head>

<body>
  <div class="console-wrapper">
    <pre id="console"></pre>
  </div>
  <ul class="news-view view">
    {% for item in list %}
    <li class="item">
      <a href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endfor %}
  </ul>
  <script src="https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js"></script>
  <script src="https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min.js"></script>
  <script>
    // 不重要的代码，仅展示使用 - start
    const con = document.querySelector('#console');
    const doc = document.documentElement;
    const wh = document.documentElement.clientHeight;

    const _scrollToBottom = (function () {
      return _.throttle(function () {
        doc.scrollTop = doc.scrollHeight;
      }, 100);
    })();

    const scrollToBottom = function () {
      if (doc.scrollHeight > wh) {
        _scrollToBottom();
      }
    };

    const log = function () {
      let msgList = [].slice.apply(arguments);
      msgList = msgList.map(function (msg) {
        if (typeof msg !== 'object') {
          return msg;
        }
        try {
          return JSON.stringify(msg, null, 2);
        } catch (error) {
          return _.toString(msg);
        }
      });
      con.innerText += new Date().toLocaleString() + ' ' + msgList.join('') + '\n';
      scrollToBottom();
      console.log.apply(null, arguments);
    };
    // 不重要的代码，仅展示使用 - end
    window.onload = function () {
      // init
      const socket = io('/io', {
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
      window.socket = socket;
    };
  </script>
</body>

</html>
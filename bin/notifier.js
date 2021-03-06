/* global process */
const net = require('net');
const nokit = require("../");
const console = nokit.console;
const utils = nokit.utils;
const exitCode = nokit.exitCode;

const LOCAL_HOST = "127.0.0.1";
const LOCAL_PORT = 20202;
const EXIT_DELAY = 1000;

function Notifier() {
  const self = this;
  self.readied = false;
};

/**
 * 发送 app ready 消息
 */
Notifier.prototype.ready = function(msgList, callback) {
  const self = this;
  if (self.readied || !msgList) return;
  const client = new net.Socket();
  client.connect(LOCAL_PORT, LOCAL_HOST, function() {
    //去掉其它信息只保留 type、text
    msgList = msgList.map(function(item) {
      return {
        type: item.type,
        text: item.text
      };
    });
    client.write(JSON.stringify(msgList));
    self.readied = true;
    if (callback) callback();
  });
};

/**
 * 等待 app ready 消息
 */
Notifier.prototype.waiting = function(total) {
  var readiedCount = 0;
  const server = net.createServer(function(socket) {
    socket.on('data', function(data) {
      if (data) {
        var list = JSON.parse(data);
        utils.each(list, function(i, item) {
          console[item.type || 'log'](item.text || item);
        });
      }
      readiedCount += 1;
      if (readiedCount >= total) {
        /*
        必须关闭连接停止监听，然后再退出 “CLI进程”，
        否则在 windows 上 “守护进程(master)” 和 “工作进程（worker）” 都将受影响退出
        */
        socket.destroy();
        server.close();
        //结束 “CLI进程” 自已
        setTimeout(function() {
          process.exit(exitCode.NORMAL);
        }, EXIT_DELAY);
      }
    });
  }).listen(LOCAL_PORT);
};

module.exports = Notifier;
//end
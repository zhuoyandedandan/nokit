/* global process */
const fs = require("fs");
const path = require("path");
const os = require("os");

/**
 * 定义日志写入类
 **/
const LogWriter = module.exports = function(server) {
  const self = this;
  self.utils = server.require('$./core/utils');
};

/**
 * 一般用于和 session 存储服务进行连接
 **/
LogWriter.prototype.init = function(server, callback) {
  const self = this;
  var logConfigs = server.configs.log;
  var logPath = self.path = server.resolvePath(logConfigs.path);
  var folderExists = fs.existsSync(logPath);
  if (!folderExists) {
    fs.mkdirSync(logPath);
  }
  if (callback) callback();
};

/**
 * 写入日志
 **/
LogWriter.prototype.write = function(type, text, options) {
  const self = this;
  options = options || {};
  var logTime = self.utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss").split(' ');
  var logFile = path.normalize(self.path + "/" + logTime[0] + '.log');
  var logText = "[" + type.toUpperCase() + "][" + logTime[1] + "] " + text + os.EOL;
  if (options.sync) {
    fs.appendFileSync(logFile, logText);
    if (options.callback) {
      options.callback();
    }
  } else {
    fs.appendFile(logFile, logText, options.callback);
  }
};
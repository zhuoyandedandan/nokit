const BufferHelper = require('bufferhelper');

const Parser = module.exports = function (server) {
  const self = this;
  self.server = server;
};

Parser.prototype.parse = function (context, callback) {
  const req = context.request;
  const bufferHelper = new BufferHelper();
  bufferHelper.load(req, function (err, buffer) {
    if (err) return callback(err);
    var rawBody = buffer.toString();
    try {
      req.body = JSON.parse(rawBody || '{}');
      callback();
    } catch (err) {
      callback(err);
    }
  });
};
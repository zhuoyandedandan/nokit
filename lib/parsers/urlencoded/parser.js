const qs = require("querystring");
const BufferHelper = require('bufferhelper');

const Parser = module.exports = function(server) {
  const self = this;
  self.server = server;
};

Parser.prototype.parse = function(context, callback) {
  var req = context.request;
  var bufferHelper = new BufferHelper();
  bufferHelper.load(req, function(err, buffer) {
    if (err) return callback(err);
    var rawBody = buffer.toString();
    req.form = req.body = qs.parse(rawBody) || {};
    callback();
  });
};
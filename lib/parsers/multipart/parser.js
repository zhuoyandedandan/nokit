var formidable = require('formidable');
var util = require('util');

var Parser = module.exports = function(server) {
    var self = this;
    self.server = server;
};

Parser.prototype.parse = function(context, callback) {
    var self = this;
    var req = context.request;
    var form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, function(err, fields, files) {
        if (err) {
            context.responseError(err);
        } else {
            req.formData = fields;
            req.files = files;
            if (callback) callback();
        }
    });
};
/**
 * ItemController
 **/
const ItemController = function() { };

/**
 * 初始化方法，每次请求都会先执行 init 方法
 **/
ItemController.prototype.init = function() {
  const self = this;
  self.ready();
}

/**
 * Create (POST)
 **/
ItemController.prototype.post = function() {
  const self = this;
  self.send({
    "name": "POST"
  });
}

/**
 * Read (GET)
 **/
ItemController.prototype.get = function() {
  const self = this;
  self.send({
    "name": "GET"
  });
}

/**
 * Update (PUT)
 **/
ItemController.prototype.put = function() {
  const self = this;
  self.send({
    "name": "PUT"
  });
}

/**
 * Delete (DELETE)
 **/
ItemController.prototype.delete = function() {
  const self = this;
  self.send({
    "name": "DELETE"
  });
}

module.exports = ItemController;
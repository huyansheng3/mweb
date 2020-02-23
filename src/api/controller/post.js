const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const result = await this.model('post').select()
    this.success(result)
  }
};

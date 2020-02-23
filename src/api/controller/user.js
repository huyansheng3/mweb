const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const result = await this.model('user').select()
    this.success(result)
  }
};

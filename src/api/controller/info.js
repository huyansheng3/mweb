const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const result = await this.model('info').select()
    console.log('info indexAction')
    this.success(result)
  }
};

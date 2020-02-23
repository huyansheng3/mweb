module.exports = class extends think.Model {
  get relation() {
    return {
      user: {
        type: think.Model.BELONG_TO,
        field: 'id,name'
      }
    };
  }

  async afterFind(...args) {
    const result = await super.afterFind(...args);
    return result
  }

  async afterSelect(...args) {
    const result = await super.afterSelect(...args);
    return result
  }
};

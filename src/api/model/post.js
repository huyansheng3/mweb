module.exports = class extends think.Model {
  get relation() {
    return {
      comment: {
        type: think.Model.HAS_MANY
      },
      cate: {
        type: think.Model.MANY_TO_MANY,
        rModel: 'post_cate',
        rfKey: 'cate_id'
      }
    };
  }

  afterFind(data) {
    console.log('afterFind', data)
  }

  afterSelect(data) {
    console.log('afterSelect', data)
  }
};

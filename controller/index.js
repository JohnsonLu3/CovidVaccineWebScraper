const Cvs = require('./cvs')
const Helper = require('../utils')

const helper = new Helper();

module.exports = {
  cvs: new Cvs(helper),
}

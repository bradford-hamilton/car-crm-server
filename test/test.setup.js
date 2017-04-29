'use strict';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

module.exports = function () {
  global.chai = chai;
  global.expect = chai.expect;
  global.assert = chai.assert;
  global.sinon = sinon;

  chai.use(sinonChai);
  chai.use(chaiAsPromised);
  chai.should();
}

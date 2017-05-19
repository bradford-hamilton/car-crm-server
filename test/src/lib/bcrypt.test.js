import Bcrypt from '../../../src/lib/bcrypt';

require('../../test.setup')();

describe('Bcrypt Class', () => {
  let bcrypt = new Bcrypt();
  it('bcrpyt class can be instantiated', () => {
    expect(bcrypt).to.be.ok;
  });
});

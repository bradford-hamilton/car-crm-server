import Jwt from '../../../src/lib/jwt';

require('../../test.setup')();

describe('Jwt Class', () => {
  let jwt = new Jwt();
  
  it('bcrpyt class can be instantiated', () => {
    expect(jwt).to.be.ok;
  });
});

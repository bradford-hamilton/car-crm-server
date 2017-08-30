import DB from '../../../src/lib/db';

require('../../test.setup')();

describe('DB Class', () => {
  it('DB class can be instantiated', () => {
    let db = new DB();

    expect(db).to.be.ok;
  });
});

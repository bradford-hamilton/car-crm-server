'use strict';

require('../test.setup')();

import DB from '../../src/lib/db';

describe('DB Class', () => {
  describe('#getAllUsers', () => {
    it('gets all users', () => {
      return DB.getAllUsers()
      .then(results => {
        expect(results).to.have.length.above(3);
      });
    });
  });
});

import Persons from '../../src/lib/persons';

require('../test.setup')();

describe('Persons Class', () => {
  describe('#getAllPersons', () => {
    it('gets all persons', () => Persons.getAllPersons()
      .then((results) => {
        expect(results).to.exist
      },
      function (err) {
        done(err);
      })
    );
  });
});

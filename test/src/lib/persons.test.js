import knex from '../../../db/knex';
import Persons from '../../../src/lib/persons';
import { mockPerson } from '../../fixtures/persons.fixture';

require('../../test.setup')();

describe('Persons Class', () => {
  before(() => {
    return Promise.resolve(knex('persons').insert(mockPerson));
  });

  after(() => {
    return Promise.resolve(knex.raw('TRUNCATE persons RESTART IDENTITY CASCADE'));
  });

  describe('#findPersonByUserName', () => {
    context('when there is no person with provided user_name', () => {
      it('returns an empty array', () => {
        const notFoundPerson = JSON.parse(JSON.stringify(mockPerson));
        notFoundPerson.user_name = 'bar';

        return Persons.findPersonByUserName(notFoundPerson).should.eventually.deep.equal([]);
      });
    });
    context('when there is no person with provided user_name', () => {
      it('returns an the person', () => {
        return Persons.findPersonByUserName(mockPerson)
          .then((person) => {
            expect(person[0].user_name).to.equal('foo');
          });
      });
    });
  });

  describe('#createPerson', () => {
    it('returns the inserted persons id', () => {
      const newPerson = JSON.parse(JSON.stringify(mockPerson));
      newPerson.email = 'bar@bar.com'
      newPerson.user_name = 'bar';

      return Persons.createPerson(newPerson).should.eventually.deep.equal([2]);
    });
  });

  describe('#getAllPersons', () => {
    it('returns an array with 2 people', () => {
      return Persons.getAllPersons().should.eventually.have.length(2);
    });
    it('returns people without password property', () => {
      return Persons.getAllPersons()
        .then((peopleArray) => {
          expect(peopleArray[0]).to.not.have.property('password')
        });
    });
  });

  describe('#getPerson', () => {
    it('returns one person', () => {
      return Persons.getPerson(1)
        .then((person) => {
          person = person[0];

          expect(person).to.have.property('id', 1);
          expect(person).to.have.property('user_name', 'foo');
        });
    });
  });

  describe('#updatePerson', () => {
    it('updates the person in the database', () => {
      const updatedPerson = JSON.parse(JSON.stringify(mockPerson));
      updatedPerson.id = 1;
      updatedPerson.address = '1 Infinite Loop'

      return Persons.updatePerson(updatedPerson)
        .then((person) => {
          person = person[0];

          expect(mockPerson).to.have.property('address', '123 myAdress');
          expect(person).to.have.property('address', '1 Infinite Loop');
        });
    });
  });

  describe('#deletePerson', () => {
    it('deletes the person from the database', () => {
      return Persons.deletePerson(2)
        .then((data) => {
          expect(data).to.equal(1);
          knex('persons').where('id', 2).should.eventually.deep.equal([]);
        });
    });
  });
});

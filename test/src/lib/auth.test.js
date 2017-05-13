import knex from '../../../db/knex';
import Auth from '../../../src/lib/auth';
import Jwt from '../../../src/lib/jwt';
import {
  authPerson,
  mockRequest,
  nextMock
 } from '../../fixtures/auth.fixture';

require('../../test.setup')();

describe('Persons Class', () => {
  before(() => {
    return Promise.resolve(knex.raw('TRUNCATE persons RESTART IDENTITY CASCADE'));
  });

  after(() => {
    return Promise.resolve(knex.raw('TRUNCATE persons RESTART IDENTITY CASCADE'));
  });

  describe('#hashPassword', () => {
    it('Should create person with hashed Password', () => {
      return Auth.hashPassword(authPerson)
        .then((data) => {
          expect(data[0]).to.equal(1);
          return knex('persons').where('id', 1)
        })
        .then((person) => {
          person = person[0]
          expect(person).to.have.property('password').and.not.equal('bar');
        });
    });
  });

  describe('#compareHash', () => {
    it('Should return true if password matches', () => {
      return knex('persons').where('id', 1)
        .then((person) => {
          return Auth.compareHash(authPerson.password, person[0].password)
        })
        .then((data) => {
          expect(data).to.equal(true)
        });
    });
  });

  describe('#signJwt', () => {
    it('Should return a token', () => {
      return Auth.signJwt(authPerson,'qwdaddneaodaod', { expiresIn: '1d' })
        .then((token) => {
          expect(token).to.exist;
        });
    });
  });

  describe('#verify', () => {
    context('when a request comes into /login', () => {
      it('it returns next() and exits #verify so route does not need to be verified', () => {
        expect(Auth.verify(mockRequest, null, nextMock)).to.equal('called next()');
      })
    });
  });
});

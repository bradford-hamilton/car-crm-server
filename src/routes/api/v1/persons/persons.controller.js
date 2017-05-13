import Auth from '../../../../lib/auth';
import Persons from '../../../../lib/persons';

function createPerson(req, res) {
  return Persons.findPersonByUserName(req.body)
    .then((person) => {
      if (person[0]) {
        throw new Error('user name taken try another name');
      }
      return Persons.createPerson(req.body);
    })
    .then((data) => {
      res.status(200).json({
        personId: data[0],
        msg: 'Person inserted succesfully!',
      });
    })
    .catch((err) => {
      res.status(400).json(err.toString());
    });
}

function login(req, res) {
  let currentPerson;

  return Persons.findPersonByUserName(req.body)
    .then((person) => {
      if (person.length === 0) {
        throw new Error('No user with that username.');
      }
      currentPerson = person[0];
      return Auth.compareHash(req.body.password, currentPerson.password);
    })
    .then((data) => {
      if (!data) {
        throw new Error('Passwords did not match.');
      }
      return Auth.signJwt(currentPerson, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    })
    .then(token => res.status(200).json({
      person: currentPerson.id,
      token,
    }))
    .catch((err) => {
      res.status(200).json(err.toString());
    });
}


function getPerson(req, res) {
  return Persons.getPerson(req.query.id)
    .then((person) => {
      res.status(200).json(person);
    })
    .catch((err) => {
      res.status(400).json(err.toString());
    });
}

function getAll(req, res) {
  return Persons.getAllPersons()
    .then((persons) => {
      res.status(200).json(persons);
    }).catch((err) => {
      res.status(400).json(err.toString());
    });
}

function updatePerson(req, res) {
  return Persons.updatePerson(req.body)
    .then((person) => {
      res.status(200).json(person);
    }).catch((err) => {
      res.status(400).json(err.toString());
    });
}

function deletePerson(req, res) {
  return Persons.deletePerson(req.query.id)
    .then((person) => {
      res.status(200).json(person);
    }).catch((err) => {
      res.status(400).json(err.toString());
    });
}

export default {
  createPerson,
  login,
  getAll,
  getPerson,
  updatePerson,
  deletePerson,
};

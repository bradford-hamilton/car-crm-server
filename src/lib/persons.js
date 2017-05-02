import DB from '../lib/db';
import Auth from '../lib/auth';

class Persons {
  static findPersonByUserName(person) {
    return DB.findPersonByUserName(person);
  }

  static createPerson(person) {
    return Auth.hashPassword(person);
  }

  static getAllPersons() {
    return DB.getAllPersons()
      .then(data => data)
      .catch(err => err);
  }

  static getPerson(person) {
    return DB.getPerson(person)
      .then(data => data)
      .catch(err => err);
  }

  static updatePerson(person) {
    return DB.updatePerson(person)
      .then(data => data)
      .catch(err => err);
  }

  static deletePerson(person) {
    return DB.deletePerson(person)
      .then(data => data)
      .catch(err => err);
  }
}

export default Persons;

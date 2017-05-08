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

  static getPerson(id) {
    return DB.getPerson(id)
      .then(data => data)
      .catch(err => err);
  }

  static updatePerson(person) {
    return DB.updatePerson(person)
      .then(data => data)
      .catch(err => err);
  }

  static deletePerson(id) {
    return DB.deletePerson(id)
      .then(data => data)
      .catch(err => err);
  }
}

export default Persons;

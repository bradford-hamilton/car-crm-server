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
    return DB.getAllPersons();
  }

  static getPerson(id) {
    return DB.getPerson(id);
  }

  static updatePerson(person) {
    return DB.updatePerson(person);
  }

  static deletePerson(id) {
    return DB.deletePerson(id);
  }
}

export default Persons;

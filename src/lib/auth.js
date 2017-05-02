import Bcrypt from '../lib/bcrypt';
import DB from '../lib/db';

class Auth {
  static hashPassword(person) {
    const newPerson = JSON.parse(JSON.stringify(person));

    return Bcrypt.genSalt()
      .then(salt => Bcrypt.hash(newPerson.password, salt))
      .then((hash) => {
        newPerson.password = hash;

        return DB.createPerson(newPerson);
      })
      .then(data => data)
      .catch(err => err);
  }

  static compareHash(plainTextPassword, hashedPassword) {
    return Bcrypt.compare(plainTextPassword, hashedPassword);
  }
}

export default Auth;

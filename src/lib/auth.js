import Bcrypt from '../lib/bcrypt';
import DB from '../lib/db';
import Jwt from '../lib/jwt';

class Auth {
  static hashPassword(person) {
    const newPerson = JSON.parse(JSON.stringify(person));

    return Bcrypt.genSalt()
      .then(salt => Bcrypt.hash(newPerson.password, salt))
      .then((hash) => {
        newPerson.password = hash;
        return DB.createPerson(newPerson);
      });
  }

  static compareHash(plainTextPassword, hashedPassword) {
    return Bcrypt.compare(plainTextPassword, hashedPassword);
  }

  static signJwt(person, tokenSecret, expiration) {
    return Jwt.sign(person, tokenSecret, expiration);
  }
}

export default Auth;

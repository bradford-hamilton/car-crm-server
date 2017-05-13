import _ from 'lodash';
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
    const signPerson = _.omit(person, 'password');
    return Jwt.sign(signPerson, tokenSecret, expiration);
  }

  // verify middleware used to check token on routes
  static verify(req, res, next) {
    // guard: if user is on login page, do not require a verification
    if (req.url === '/api/v1/persons/login') return next();

    const splitToken = req.headers.auth.substring(7);

    return Jwt.verify(splitToken)
      .then(() => next())
      .catch((err) => {
        res.status(400).json(err.toString());
      });
  }
}

export default Auth;

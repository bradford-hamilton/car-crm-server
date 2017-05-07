import jwt from 'jsonwebtoken';

class Jwt {
  static sign(person, tokenSecret, expiration) {
    return new Promise((resolve, reject) =>
      jwt.sign(person, tokenSecret, expiration, (err, token) => {
        if (token) resolve(token);
        reject(err);
      }));
  }
}

export default Jwt;

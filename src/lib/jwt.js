import jwt from 'jsonwebtoken';

class Jwt {
  static sign(person, tokenSecret, expiration) {
    return new Promise((resolve, reject) =>
      jwt.sign(person, tokenSecret, expiration, (err, token) => {
        if (token) resolve(token);
        reject(err);
      }));
  }

  static verify(token) {
    return new Promise((resolve, reject) =>
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (decoded) resolve(decoded);
        reject(err);
      }));
  }
}

export default Jwt;

import bcrypt from 'bcrypt';

class Bcrypt {
  static genSalt() {
    const saltRounds = 10;

    return bcrypt.genSalt(saltRounds);
  }

  static hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  static compare(plainTextPassword, hashedPassword) {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}

export default Bcrypt;

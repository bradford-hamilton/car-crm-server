// import axios from 'axios';
import DB from '../lib/db';

class Users {
  static getAllUsers() {
    return DB.getAllUsers()
      .then(data => data)
      .catch(err => err);
  }
}

export default Users;

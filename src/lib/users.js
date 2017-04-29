'use strict';

import axios from 'axios';
import DB from '../lib/db';

class Users {
  static getAllUsers() {
    return DB.getAllUsers()
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
  }
}

export default Users;

'use strict';

import knex from '../../db/knex';

class DB {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      resolve(['bradford', 'alex', 'josce', 'jace']);
    });
  }
}

export default DB;

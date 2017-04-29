'use strict';

import knex from '../../db/knex';

class DB {
  static getAllUsers() {
    return knex('users')
  }
}

export default DB;

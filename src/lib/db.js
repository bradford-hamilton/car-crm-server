// import knex from '../../db/knex';

class DB {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      resolve(['bradford', 'alex', 'josce', 'jace']);
      reject('Error: mock db response did not come through.');
    });
  }
}

export default DB;

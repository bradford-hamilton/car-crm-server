import knex from '../../db/knex';

class DB {
 /**
  * persons
  */
  static findPersonByUserName(person) {
    return knex('persons')
      .where('user_name', person.user_name);
  }

  static createPerson(person) {
    return knex('persons')
      .insert(person, 'id');
  }

  static getAllPersons() {
    return knex('persons')
      .select(
        'id',
        'created_at',
        'updated_at',
        'email',
        'phone_number',
        'user_name',
        'first_name',
        'last_name',
        'address',
        'city',
        'state',
        'zip',
        'role_id',
      );
  }

  static getPerson(id) {
    return knex('persons')
      .where('id', id)
      .select(
        'id',
        'created_at',
        'updated_at',
        'email',
        'phone_number',
        'user_name',
        'first_name',
        'last_name',
        'address',
        'city',
        'state',
        'zip',
        'role_id',
      );
  }

  static updatePerson(person) {
    return knex('persons')
      .where('id', person.id)
      .update(person, [
        'id',
        'created_at',
        'updated_at',
        'email',
        'phone_number',
        'user_name',
        'first_name',
        'last_name',
        'address',
        'city',
        'state',
        'zip',
        'role_id',
      ]);
  }

  static deletePerson(id) {
    return knex('persons')
      .where('id', id)
      .del();
  }
}

export default DB;

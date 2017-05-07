import knex from '../../db/knex';

class DB {
 /**
  * persons
  */
  static findPersonByUserName(person) {
    return knex('persons')
      .where({ user_name: person.user_name });
  }

  static createPerson(person) {
    return knex('persons').insert(person, 'id');
  }

  static getAllPersons() {
    return knex('persons').select('created_at', 'updated_at',
      'email', 'phone_number', 'user_name', 'first_name',
      'last_name', 'address', 'city', 'state', 'zip', 'role_id');
  }

  static getPerson(person) {
    return knex('persons').where({ id: person })
      .select('created_at', 'updated_at', 'email',
        'phone_number', 'user_name', 'first_name', 'last_name',
        'address', 'city', 'state', 'zip', 'role_id');
  }

  static updatePerson(person) {
    return knex('persons')
      .update(person.person)
      .where({ id: person.where.id });
  }

  static deletePerson(person) {
    return knex('persons').del().where({ id: person });
  }
}

export default DB;

exports.up = function (knex) {
  return knex.schema.createTable('persons', (table) => {
    table.increments();
    table.timestamps();
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table.string('user_name').notNullable();
    table.text('password').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.text('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.integer('role_id').references('roles.id').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('persons');
};

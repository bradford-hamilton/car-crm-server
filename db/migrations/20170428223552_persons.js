exports.up = function (knex) {
  return knex.schema.createTable('persons', (table) => {
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('email', 64).notNullable();
    table.unique('email');
    table.string('phone_number').notNullable();
    table.string('user_name', 64).notNullable();
    table.unique('user_name');
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

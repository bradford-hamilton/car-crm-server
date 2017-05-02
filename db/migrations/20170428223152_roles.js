exports.up = function (knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('role').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('roles');
};

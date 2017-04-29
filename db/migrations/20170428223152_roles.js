exports.up = function (knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments();
    table.timestamps();
    table.string('role').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('roles');
};

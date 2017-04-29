exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.timestamps();
    table.integer('hours').notNullable();
    table.integer('price').notNullable();
    table.text('miles').notNullable();
    table.text('description').notNullable();
    table.text('parts_fees_array').notNullable();
    table.text('parts_receipts_array').notNullable();
    table.boolean('completed').notNullable();
    table.integer('system_user_id').references('persons.id').notNullable();
    table.integer('tech_id').references('persons.id').notNullable();
    table.integer('car_id').references('persons.id').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('jobs');
};

exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('year').notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('miles').notNullable();
    table.string('trim').notNullable();
    table.string('eng').notNullable();
    table.text('vin').notNullable();
    table.integer('customerId').references('persons.id').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};

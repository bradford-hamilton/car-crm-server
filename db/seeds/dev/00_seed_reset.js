exports.seed = function (knex) {
  return knex.raw('TRUNCATE roles, persons, cars, jobs RESTART IDENTITY CASCADE')
    .then(() => knex('roles').del())
    .then(() => knex('persons').del())
    .then(() => knex('cars').del())
    .then(() => knex('jobs').del());
};

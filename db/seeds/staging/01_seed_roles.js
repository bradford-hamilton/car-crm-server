exports.seed = function (knex, Promise) {
  return knex('roles').del()
    .then(() => Promise.all([
      knex('roles').insert({ role: 'admin' }),
      knex('roles').insert({ role: 'system_user' }),
      knex('roles').insert({ role: 'tech' }),
      knex('roles').insert({ role: 'customer' }),
    ]));
};

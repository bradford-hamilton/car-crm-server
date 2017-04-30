exports.seed = function (knex, Promise) {
  return knex('cars').del()
    .then(() => Promise.all([
      knex('cars').insert({
        year: '2000',
        make: 'honda',
        model: 'civic',
        miles: '1010101',
        trim: 'ex',
        eng: 'd16z6',
        vin: 'ejkf89898989898',
        customerId: 4,
      }),
    ]));
};

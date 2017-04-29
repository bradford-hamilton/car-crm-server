'use strict';

exports.seed = function(knex, Promise) {
  return knex('jobs').del()
    .then(() => {
      return Promise.all([
        knex('jobs').insert({
          hours: 1,
          price: 100,
          description: 'breaks',
          miles: '100000',
          parts_fees_array: JSON.stringify([{breakPads: 50}, {rotors: 50}]),
          parts_receipts_array: JSON.stringify(['img.url', 'img.url']),
          completed: true,
          system_user_id: 2,
          tech_id: 3,
          car_id: 1
        })
      ]);
    });
};

'use strict';

exports.seed = function(knex, Promise) {
  return knex('persons').del()
    .then(() => {
      return Promise.all([
        knex('persons').insert({
          email: 'admin@wasd.com',
          phone_number: '3033033037',
          user_name: 'admin',
          password: 'password',
          first_name: 'admin',
          last_name: 'admin',
          address: '1234 wasd st',
          city: 'denver',
          state: 'CO',
          zip : '80029',
          role_id: 1,
        }),
        knex('persons').insert({
          email: 'system_user@wasd.com',
          phone_number: '3033033037',
          user_name: 'system_user',
          password: 'password',
          first_name: 'system_user',
          last_name: 'system_user',
          address: '1234 wasd st',
          city: 'denver',
          state: 'CO',
          zip : '80029',
          role_id: 2,
        }),
        knex('persons').insert({
          email: 'tech@wasd.com',
          phone_number: '3033033037',
          user_name: 'tech',
          password: 'password',
          first_name: 'tech',
          last_name: 'tech',
          address: '1234 wasd st',
          city: 'denver',
          state: 'CO',
          zip : '80029',
          role_id: 3,
        }),
        knex('persons').insert({
          email: 'customer@wasd.com',
          phone_number: '3033033037',
          user_name: 'customer',
          password: 'password',
          first_name: 'customer',
          last_name: 'customer',
          address: '1234 wasd st',
          city: 'denver',
          state: 'CO',
          zip : '80029',
          role_id: 4,
        })
      ]);
    });
};

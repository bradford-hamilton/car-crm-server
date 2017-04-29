'use strict';

var dotenv = require('dotenv');
var environment = process.env.NODE_ENV || 'development';
if (environment === 'development' || environment === 'testing') {
  dotenv.config();
}

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DEV_DB_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/dev'
    }
  },

  staging: {
    client: 'pg',
    connection: '',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/staging'
    }
  },

  test: {
    client: 'pg',
    connection: process.env.TEST_DB_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: '',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/prod'
    }
  }

};

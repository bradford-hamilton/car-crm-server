'use strict';

var dotenv = require('dotenv');
var environment = process.env.NODE_ENV || 'development';
if (environment === 'development' || environment === 'test') {
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
    connection: 'postgres://'+encodeURIComponent(process.env.RDS_USERNAME)+':'+encodeURIComponent(process.env.RDS_PASSWORD)+'@'+encodeURIComponent(process.env.RDS_HOSTNAME)+':'+process.env.RDS_PORT+'/'+process.env.RDS_DB_NAME,
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
    connection: 'postgres://'+encodeURIComponent(process.env.RDS_USERNAME)+':'+encodeURIComponent(process.env.RDS_PASSWORD)+'@'+encodeURIComponent(process.env.RDS_HOSTNAME)+':'+process.env.RDS_PORT+'/'+process.env.RDS_DB_NAME,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/prod'
    }
  }

};

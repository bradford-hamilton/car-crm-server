# Car CRM

[![build Status](https://travis-ci.org/bradford-hamilton/car-crm-server.svg?branch=master)](https://travis-ci.org/bradford-hamilton/car-crm-server)

### Development Environment
Install knex globally:
```
npm install -g knex
```

Install Dependencies:
```
npm install
```

Transpile JavaScripts and Build to `/dist` Directory:
```
npm run build
```

Start Server (port 3001):
```
npm start
```

- While developing, use `gulp watch` to start the server. Any change you make inside of `src/` (when saved) will trigger a rebuild (and babel transpile) into `dist/src`. Server will start back up automatically.

- If things get funky, just run an `npm run build` and it will remove `dist/` and rebuild the whole project back into `dist/` directory.

### DB Setup
- Make sure you have PostgreSQL set up

Create databases:
```
createdb car_crm_dev
createdb car_crm_test
```

Migrate databases:
```
knex migrate:latest --env development
knex migrate:latest --env test

```

Seed databases:
```
knex seed:run --env development
knex seed:run --env test

```

### Testing
Run: `npm test` to run the linter followed by the tests
 - Run `./node_modules/.bin/eslint . --fix` to auto-correct linting errors that have the ability to be corrected automatically

### Deployment
- TBD

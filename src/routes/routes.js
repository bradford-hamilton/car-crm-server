import v1Users from './api/v1/users/users.routes';
import v1Persons from './api/v1/persons/persons.routes';

export default {
  init: (app) => {
    app.use('/api/v1/users', v1Users);
    app.use('/api/v1/persons', v1Persons);
  },
};

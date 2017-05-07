import v1Persons from './api/v1/persons/persons.routes';

export default {
  init: (app) => {
    app.use('/api/v1/persons', v1Persons);
  },
};

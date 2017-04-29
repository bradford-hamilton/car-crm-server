import v1Users from './api/v1/users/users.routes';

export default {
  init: (app) => {
    app.use('/api/v1/users', v1Users);
  },
};

'use strict';

import v1Users from './api/v1/users/users.routes';

export default {
    init: function(app) {
      app.use('/api/v1/users', v1Users);
    }
}

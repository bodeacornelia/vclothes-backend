'use strict'

import add from './add';
import list from './list'

export default init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, add);
  app.use(BASE_URL, list);

  return app;
}
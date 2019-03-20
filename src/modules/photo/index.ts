'use strict'

import list from './list';
import add from './add';

export default init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, list);
  app.use(BASE_URL, add);

  return app;
}
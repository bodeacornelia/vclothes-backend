'use strict'

import list from './list';
import details from './details';

export default init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, list);
  app.use(BASE_URL, details);

  return app;
}
'use strict'
import auth from './login';
import register from './register';

export default init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, auth);
  app.use(BASE_URL, register);

  return app;
}
'use strict'
import AuthProvider from '../src/packages/core/auth/AuthProvider';
import auth from './modules/auth';

module.exports.init = init;

const envConfig = (env) => ({
  apiUrl: env.API_BASE
});

function initAuthSystem() {
  return AuthProvider();
}

function init(app) {
  const config = envConfig(process.env);
  const { apiUrl } = config;
  const authSystem = initAuthSystem();
  
  app.set('apiBase', apiUrl);
  app.set('auth', authSystem);

  auth(app);

  return app;
}
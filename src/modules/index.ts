'use strict'
import AuthProvider from '../packages/core/auth/AuthProvider';
import auth from './auth';

export default init;

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
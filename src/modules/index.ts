'use strict'
import AuthProvider from '../packages/core/auth/AuthProvider';
import auth from './auth';
import user from './user';
import photo from './photo';
import appointment from './appointment';

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
  user(app);
  photo(app);
  appointment(app);

  return app;
}
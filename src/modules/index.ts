import AuthProvider from '../packages/core/auth/AuthProvider';
import { userRouter } from './user/router';
import { authRouter } from './auth/router';
import { photoRouter } from './photo/router';
import { appointmentRouter } from './appointment/router';

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

  const BASE_URL = app.get('apiBase');

  app.use(BASE_URL, authRouter);
  app.use(BASE_URL, userRouter);
  app.use(BASE_URL, photoRouter);
  app.use(BASE_URL, appointmentRouter);

  return app;
}
import AuthProvider from '../packages/core/auth/AuthProvider';
import { userRouter } from './user/router';
import { authRouter } from './auth/router';
import { photoRouter } from './photo/router';
import { appointmentRouter } from './appointment/router';
import { config } from '../../config';

export default init;

function initAuthSystem() {
  return AuthProvider();
}

function init(app) {
  const authSystem = initAuthSystem();
  
  app.set('apiBase', config.API_BASE);
  app.set('auth', authSystem);

  const BASE_URL = app.get('apiBase');

  app.use(BASE_URL, authRouter);
  app.use(BASE_URL, userRouter);
  app.use(BASE_URL, photoRouter);
  app.use(BASE_URL, appointmentRouter);

  return app;
}
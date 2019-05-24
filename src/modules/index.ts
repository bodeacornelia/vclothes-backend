import { userRouter } from './user/router';
import { authRouter } from './auth/router';
import { photoRouter } from './photo/router';
import { appointmentRouter } from './appointment/router';
import { config } from '../config';

export default init;

function init(app) {
  
  app.set('apiBase', config.API_BASE);

  const BASE_URL = app.get('apiBase');

  app.use(BASE_URL, authRouter);
  app.use(BASE_URL, userRouter);
  app.use(BASE_URL, photoRouter);
  app.use(BASE_URL, appointmentRouter);

  return app;
}
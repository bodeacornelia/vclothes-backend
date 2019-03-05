'use strict'
import * as express from 'express';
const router = express.Router();

import RegisterController from './RegisterController';
const controller = new RegisterController();

router.post('/users.add',
  controller.createUser()
);

export default router;
'use strict'

import * as express from 'express';
var router = express.Router();

import UserDetailsController from './UserDetailsController';
const controller = new UserDetailsController();

router.get('/user/:userId',
  controller.authenticate(),
  controller.getUserDetails()
);

export default router;
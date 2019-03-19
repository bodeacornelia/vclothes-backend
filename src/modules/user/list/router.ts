'use strict'

import * as express from 'express';
const router = express.Router();

import UserListController from './UserListController';
const controller = new UserListController();

router.get('/users',
  controller.authenticate(),
  controller.listAllUsers(),
);

export default router;
'use strict'
import LoginController from './LoginController';
var express = require('express');
var router = express.Router();

var controller = new LoginController();

router.post(
  '/login',
  controller.localAuthenticate(),
  controller.login()
)

export default router;
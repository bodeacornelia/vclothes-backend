import { AuthController } from "./AuthController";

var express = require('express');
var router = express.Router();

var controller = new AuthController();

router.post(
  '/login',
  controller.localAuthenticate,
  controller.login,
  controller.reply
)

router.post('/users.add',
  controller.createUser,
  controller.reply
);

export const authRouter = router;
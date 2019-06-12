import { AuthController } from "./AuthController";

var express = require('express');
var router = express.Router();

var controller = new AuthController();

router.post(
  '/login',
  controller.localAuthenticate,
  controller.login,
)

router.get(
  '/facebook-login',
  controller.facebookAuthenticate,
)

router.get(
  '/facebook-callback',
  controller.facebookCallbackAuthenticate,
  controller.login,
)

router.post('/users.add',
  controller.createUser,
);

export const authRouter = router;
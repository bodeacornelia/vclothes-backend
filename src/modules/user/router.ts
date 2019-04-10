import * as express from 'express';
import { UserController } from './UserController';
const router = express.Router();

const controller = new UserController();

router.get('/users',
  controller.authenticate,
  controller.listAllUsers,
  controller.reply
);

router.get('/user/:userId',
  controller.authenticate,
  controller.getUserDetails,
  controller.reply
);

export const userRouter = router;
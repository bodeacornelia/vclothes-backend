import * as express from 'express';
import { PhotoController } from './PhotoController';
const router = express.Router();

const controller = new PhotoController();

router.get('/photos',
  controller.authenticate,
  controller.listAllPhotos,
  controller.reply
);

router.post('/photos.add',
  controller.authenticate,
  controller.addPhoto,
  controller.reply
);

export const photoRouter = router;
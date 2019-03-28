import * as express from 'express';
import { PhotoController } from './PhotoController';
const router = express.Router();

const controller = new PhotoController();

router.get('/photos',
  controller.authenticate,
  controller.listAllPhotos
);

router.post('/photos.add',
  controller.authenticate,
  controller.addPhoto
);

export const photoRouter = router;
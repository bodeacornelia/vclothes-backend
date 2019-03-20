'use strict'

import * as express from 'express';
const router = express.Router();

import PhotoAddController from './PhotoAddController';
const controller = new PhotoAddController();

router.post('/photos.add',
  controller.authenticate(),
  controller.addPhoto()
);

export default router;
'use strict'

import * as express from 'express';
const router = express.Router();

import PhotoListController from './PhotoListController';
const controller = new PhotoListController();

router.get('/photos',
  controller.authenticate(),
  controller.listAllPhotos()
);

export default router;
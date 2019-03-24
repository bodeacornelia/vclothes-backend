'use strict'

import Controller from '../../../system/Controller';
import PhotoService from '../service/PhotoService';

export default class PhotoListController extends Controller {

  constructor() {
    super();
  }

  listAllPhotos() {
    return async function (req, res) {
      const photoList = await PhotoService.getAllPhotos();
      res.send(photoList);
    }
  }
}
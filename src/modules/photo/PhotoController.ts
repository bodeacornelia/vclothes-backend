import Controller from "../../system/Controller";
import { PhotoService } from "./PhotoService";
import { XErrorMissingFields } from '../../system/xerrors/XErrorMissingFields';
import { isEmpty } from 'lodash';

export class PhotoController extends Controller {

  constructor() {
    super();
  }

  async listAllPhotos(req, res) {
    const photoList = await PhotoService.getAllPhotos();
    return res.json(photoList);
  }

  async addPhoto(req, res, next) {
    if (isEmpty(req.body)) {
      const error = new XErrorMissingFields('Photo details required');
      return next(error);
    }
    await PhotoService.createPhoto(req.body).catch(next);
    const photoList = await PhotoService.getAllPhotos();
    return res.json(photoList);
  }
}
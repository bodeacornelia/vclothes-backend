import Controller from "../../system/Controller";
import { PhotoService } from "./PhotoService";
import { runInNewContext } from "vm";

export class PhotoController extends Controller {

  constructor() {
    super();
  }

  async listAllPhotos(req, res, next) {
    const photoList = await PhotoService.getAllPhotos();
    res.response = photoList
    next();
  }

  async addPhoto(req, res, next) {
    await PhotoService.createPhoto(req.body).catch(next);
    const photoList = await PhotoService.getAllPhotos();
    res.response = photoList
    next();
  }
}
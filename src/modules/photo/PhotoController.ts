import Controller from "../../system/Controller";
import { PhotoService } from "./PhotoService";

export default class PhotoController extends Controller {

  constructor() {
    super();
  }

  async listAllPhotos(req, res) {
    const photoList = await PhotoService.getAllPhotos();
    res.send(photoList);
  }

  async addPhoto(req, res) {
    await PhotoService.createPhoto(req.body);
    const photoList = await PhotoService.getAllPhotos();
    res.send(photoList);
  }
}
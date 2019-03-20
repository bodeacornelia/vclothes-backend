import Controller from '../../../system/Controller';
import PhotoService from '../service/PhotoService';

export default class PhotoAddController  extends Controller {

  constructor() {
    super();
  }

  addPhoto() {
    return async function (req, res) {
      await PhotoService.createPhoto(req.body);
      const photoList = await PhotoService.getAllPhotos();
      res.send(photoList);
    }
  }
}
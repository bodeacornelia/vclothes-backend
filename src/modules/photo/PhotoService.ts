import { Gender, Category, Photo } from '../../entity';
import { XErrorMissingFields } from '../../system/xerrors/XErrorMissingFields';
import { isEmpty } from 'lodash';

class Service {
  async createPhoto(newPhoto) {
    if (isEmpty(newPhoto)) {
      const error = new XErrorMissingFields('Photo details required');
      throw error;
    }

    const category = await Category.findOne({ category: newPhoto.category });
    const gender = await Gender.findOne({ gender: newPhoto.gender });

    const photo = new Photo();
    Object.assign(photo, newPhoto);
    photo.category = category;
    photo.gender = gender

    await Photo.save(photo);
  }

  async getAllPhotos() {
    return Photo.find();
  }
}

const PhotoService = new Service();
Object.freeze(PhotoService);

export { PhotoService };
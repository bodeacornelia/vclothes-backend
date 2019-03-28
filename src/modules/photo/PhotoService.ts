import { Gender, Category, Photo } from '../../entity';

class Service {
  async createPhoto(newPhoto) {
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
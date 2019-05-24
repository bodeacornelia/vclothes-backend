import { Photo } from '../../entity';


class Service {
  async createPhoto(newPhoto) {
    const photo = new Photo();
    Object.assign(photo, newPhoto);

    photo.category = <any>{id: newPhoto.categoryId};
    photo.gender = <any>{id: newPhoto.genderId};

    await Photo.save(photo);
  }

  async getAllPhotos() {
    return Photo.find();
  }
}

const PhotoService = new Service();
Object.freeze(PhotoService);

export { PhotoService };